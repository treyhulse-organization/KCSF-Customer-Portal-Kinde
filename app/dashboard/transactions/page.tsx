import prisma from "@/utils/db";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ExpandableTransactionRow } from "@/components/dashboard/ExpandableTransactionRow";
import { TransactionFilters } from "@/components/dashboard/TransactionFilters";

interface PageProps {
  searchParams: {
    type?: string;
    item?: string;
    status?: string;
    dateFrom?: string;
    dateTo?: string;
    shipDateFrom?: string;
    shipDateTo?: string;
  }
}

export default async function TransactionsPage({ searchParams }: PageProps) {
  // Get unique values for filters
  const [types, items, statuses] = await Promise.all([
    prisma.transaction.findMany({
      distinct: ['type'],
      select: { type: true }
    }),
    prisma.transaction.findMany({
      distinct: ['item'],
      select: { item: true }
    }),
    prisma.transaction.findMany({
      distinct: ['status'],
      select: { status: true }
    })
  ]);

  // Build where clause based on filters
  const where = {
    AND: [
      searchParams.type ? { type: searchParams.type } : {},
      searchParams.item ? { item: searchParams.item } : {},
      searchParams.status ? { status: searchParams.status } : {},
      searchParams.dateFrom || searchParams.dateTo
        ? {
            date: {
              gte: searchParams.dateFrom ? new Date(searchParams.dateFrom) : undefined,
              lte: searchParams.dateTo ? new Date(searchParams.dateTo) : undefined,
            },
          }
        : {},
      searchParams.shipDateFrom || searchParams.shipDateTo
        ? {
            shipDate: {
              gte: searchParams.shipDateFrom ? new Date(searchParams.shipDateFrom) : undefined,
              lte: searchParams.shipDateTo ? new Date(searchParams.shipDateTo) : undefined,
            },
          }
        : {},
    ],
  };

  const transactions = await prisma.transaction.findMany({
    where,
    orderBy: {
      date: 'desc'
    }
  });

  // Group transactions by internalId
  const groupedTransactions = transactions.reduce((acc, transaction) => {
    if (!acc[transaction.internalId]) {
      acc[transaction.internalId] = [];
    }
    acc[transaction.internalId].push(transaction);
    return acc;
  }, {} as Record<string, typeof transactions>);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Transactions</h1>
      
      <TransactionFilters 
        types={types.map(t => t.type)}
        items={items.map(i => i.item)}
        statuses={statuses.map(s => s.status)}
        searchParams={searchParams}
      />

      <div className="rounded-md border mt-4">
        {Object.keys(groupedTransactions).length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            No transactions found.
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[50px]"></TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Document #</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Total Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Object.entries(groupedTransactions).map(([internalId, items]) => (
                <ExpandableTransactionRow 
                  key={internalId} 
                  mainTransaction={items[0]} 
                  lineItems={items}
                />
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </div>
  );
}

  
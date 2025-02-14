"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { Decimal } from "@prisma/client/runtime/library";

interface Transaction {
  id: string;
  date: Date | null;
  documentNumber: string;
  name: string;
  status: string;
  amount: Decimal;
  item: string;
  quantity: number;
}

interface ExpandableTransactionRowProps {
  mainTransaction: Transaction;
  lineItems: Transaction[];
}

export function ExpandableTransactionRow({ 
  mainTransaction, 
  lineItems 
}: ExpandableTransactionRowProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <TableRow 
        className="cursor-pointer" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <TableCell className="w-[50px]">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8 p-0"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(!isOpen);
            }}
          >
            <ChevronRight 
              className={`h-4 w-4 transition-transform duration-200 ${
                isOpen ? "rotate-90" : ""
              }`} 
            />
          </Button>
        </TableCell>
        <TableCell>{mainTransaction.date?.toLocaleDateString()}</TableCell>
        <TableCell>{mainTransaction.documentNumber}</TableCell>
        <TableCell>{mainTransaction.name}</TableCell>
        <TableCell>{mainTransaction.status}</TableCell>
        <TableCell className="text-right">
          ${lineItems.reduce((sum, item) => sum + Number(item.amount), 0).toFixed(2)}
        </TableCell>
      </TableRow>
      {isOpen && (
        <TableRow className="bg-muted/50">
          <TableCell colSpan={6} className="p-0">
            <div className="p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead>Quantity</TableHead>
                    <TableHead className="text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {lineItems.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell className="text-right">
                        ${Number(item.amount).toFixed(2)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TableCell>
        </TableRow>
      )}
    </>
  );
} 
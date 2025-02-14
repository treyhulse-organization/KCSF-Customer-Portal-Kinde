"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DatePicker } from "@/components/ui/date-picker";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface TransactionFiltersProps {
  types: string[];
  items: string[];
  statuses: string[];
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

export function TransactionFilters({ types, items, statuses, searchParams }: TransactionFiltersProps) {
  const router = useRouter();
  const currentSearchParams = useSearchParams();
  
  const [filters, setFilters] = useState({
    type: searchParams.type || "",
    item: searchParams.item || "",
    status: searchParams.status || "",
    dateFrom: searchParams.dateFrom ? new Date(searchParams.dateFrom) : null,
    dateTo: searchParams.dateTo ? new Date(searchParams.dateTo) : null,
    shipDateFrom: searchParams.shipDateFrom ? new Date(searchParams.shipDateFrom) : null,
    shipDateTo: searchParams.shipDateTo ? new Date(searchParams.shipDateTo) : null,
  });

  const applyFilters = () => {
    const params = new URLSearchParams(currentSearchParams);
    
    Object.entries(filters).forEach(([key, value]) => {
      if (value) {
        if (value instanceof Date) {
          params.set(key, value.toISOString().split('T')[0]);
        } else {
          params.set(key, value);
        }
      } else {
        params.delete(key);
      }
    });

    router.push(`?${params.toString()}`);
  };

  const clearFilters = () => {
    setFilters({
      type: "",
      item: "",
      status: "",
      dateFrom: null,
      dateTo: null,
      shipDateFrom: null,
      shipDateTo: null,
    });
    router.push("?");
  };

  return (
    <div className="rounded-lg border bg-card p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <div className="flex gap-2">
          <Button 
            variant="secondary" 
            onClick={clearFilters}
          >
            Clear
          </Button>
          <Button 
            onClick={applyFilters}
          >
            Apply Filters
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Select
          value={filters.type}
          onValueChange={(value) => setFilters({ ...filters, type: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Type" />
          </SelectTrigger>
          <SelectContent>
            {types.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.item}
          onValueChange={(value) => setFilters({ ...filters, item: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Item" />
          </SelectTrigger>
          <SelectContent>
            {items.map((item) => (
              <SelectItem key={item} value={item}>{item}</SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={filters.status}
          onValueChange={(value) => setFilters({ ...filters, status: value })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Filter by Status" />
          </SelectTrigger>
          <SelectContent>
            {statuses.map((status) => (
              <SelectItem key={status} value={status}>{status}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Date Range</label>
          <div className="flex gap-2">
            <DatePicker
              date={filters.dateFrom}
              setDate={(date) => setFilters({ ...filters, dateFrom: date })}
              placeholder="From"
            />
            <DatePicker
              date={filters.dateTo}
              setDate={(date) => setFilters({ ...filters, dateTo: date })}
              placeholder="To"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium">Ship Date Range</label>
          <div className="flex gap-2">
            <DatePicker
              date={filters.shipDateFrom}
              setDate={(date) => setFilters({ ...filters, shipDateFrom: date })}
              placeholder="From"
            />
            <DatePicker
              date={filters.shipDateTo}
              setDate={(date) => setFilters({ ...filters, shipDateTo: date })}
              placeholder="To"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 
'use client';

import React from 'react';
import Link from "next/link";
import { useState, useEffect } from "react";

import { PlusCircledIcon } from "@radix-ui/react-icons";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function ProductPage() {  
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    const response = await fetch("/api/product");
    const data = await response.json();


    const transformedProducts = data.map((product, index) => ({
      ...product,
      id: product._id.toString(),
      id: `cust-${index + 1}`, 
    }));

    setAllProducts(transformedProducts);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your Products for this month!
          </p>
        </div>
        <div className="ml-auto">
          <Link href='create-product' className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add Product
          </Link>           
        </div>
      </div>
      <DataTable data={allProducts} columns={columns} />
    </div>
  );
}

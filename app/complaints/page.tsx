'use client';

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import { columns } from "./components/columns";
import { DataTable } from "./components/data-table";

export default function CustomerPage() {  
  const [allComplaints, setAllComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComplaints = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/complaint");
      const data = await response.json();
      
      const transformedComplaints = data.map((complaint, index) => ({
        ...complaint,
        id: complaint._id.toString(),
      }));

      setAllComplaints(transformedComplaints);
    } catch (error) {
      console.error("Failed to fetch complaints:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, []);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your Complaints for this month!
          </p>
        </div>
        <div className="ml-auto">
          <Link href='create-complaint' className='inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'>
            <PlusCircledIcon className="mr-2 h-4 w-4" />
            Add Complaint
          </Link>           
        </div>
      </div>

      {loading ? (
        <div className="flex h-32 items-center justify-center">
          <svg
            className="h-8 w-8 animate-spin text-primary"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M12 2v0M12 22v0M22 12h0M2 12h0M4.2 4.2h0M19.8 19.8h0M4.2 19.8h0M19.8 4.2h0" />
          </svg>
        </div>
      ) : (
        <DataTable data={allComplaints} columns={columns} />
      )}
    </div>
  );
}

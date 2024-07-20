"use client";

import React from 'react';
import Link from 'next/link';

import { Button } from "@/registry/new-york/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/registry/new-york/ui/card"
import { Input } from "@/registry/new-york/ui/input"
import { Label } from "@/registry/new-york/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/registry/new-york/ui/select"
import { Textarea } from "@/registry/new-york/ui/textarea"
import { useRouter } from "next/navigation"
import toast from "react-hot-toast"

const ComplaintForm = ({ type, complaint, setComplaint, submitting, handleSubmit }) => {
  const router = useRouter();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/complaint/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: complaint.name,
          mobile: complaint.mobile,
          note: complaint.note,
        }),
      });

      if (response.ok) {
        toast.success("Complaint has been registered successfully! 🔥");
        router.push("/");        
        setComplaint({
          name: "",
          mobile: "",
          type :"",
          note: "",
         
        });

      } else {
        toast.error("Failed to register complaint.");
      
      }
    } catch (error) {
      console.error("An error occurred while submitting complaint:", error);
    }
  };

  return (
    <section className='mb-5 flex w-full max-w-full flex-col items-center justify-center px-4'>
      <h1 className='head_text py-2 text-center text-sm'>
        Sign Up and get 7 Days Free Trial
      </h1>
        
      <form
        onSubmit={handleFormSubmit} // Use handleFormSubmit to handle form submission
        className='glassmorphism mt-5 flex w-full max-w-2xl flex-col gap-5 rounded-lg border border-gray-200 p-4'
      >
        <div className="grid gap-2">
          <Label htmlFor="type">Complaint Type</Label>
          <Select
            value={complaint.type}
            onChange={(e) => setComplaint({ ...complaint, type: e.target.value })}
            className='input'
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Complaint Type" ></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="product">Product Issue</SelectItem>
              <SelectItem value="service">Service Issue</SelectItem>
              <SelectItem value="billing">Billing Issue</SelectItem>
            </SelectContent>
          </Select>
          
        </div>

       
        <div className="grid gap-2">
          <Label htmlFor="name">Name</Label>
          <Input
            value={complaint.name}
            onChange={(e) => setComplaint({ ...complaint, name: e.target.value })}
            placeholder='Enter customer Name'
            required
            className='input'
          />
        </div>

       
        <div className="grid gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input
            value={complaint.mobile}
            onChange={(e) => setComplaint({ ...complaint, mobile: e.target.value })}
            placeholder='Enter customer phone number'
            required
            className='input'
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="note">Description</Label>
          <Textarea
            value={complaint.note}
            onChange={(e) => setComplaint({ ...complaint, note: e.target.value })}
            placeholder='Enter complaint note'
            required
            className='form_textarea'
          />
        </div>


        <div className='mx-3 flex justify-center gap-4 py-1'>
       
          <Button
            type='submit'
            disabled={submitting}
            className='rounded bg-primary px-5 py-1.5 text-sm text-white'
          >
            Request A  Call Back{submitting}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ComplaintForm;

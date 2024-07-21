"use client";

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useAuth, useUser } from '@clerk/nextjs';
import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york/ui/select";
import { Textarea } from "@/registry/new-york/ui/textarea";

const ComplaintForm = ({ type, complaint, setComplaint, submitting, handleSubmit }) => {
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  const { isSignedIn } = useUser();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isLoaded || !isSignedIn) {
      // Redirect to sign-in page if not signed in
      router.push("/sign-in");
      return;
    }

    try {
      // Invoke the handleSubmit function passed as a prop
      handleSubmit(); 

      const response = await fetch("/api/complaint/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: complaint.name,
          mobile: complaint.mobile,
          note: complaint.note,
          complaintType: complaint.complaintType,
          model: complaint.model,
        }),
      });

      if (response.ok) {
        toast.success("Complaint has been registered successfully! 🔥");
        router.push("/");
        setComplaint({
          name: "",
          mobile: "",
          complaintType: "",
          note: "",
          model: "",
        });
      } else {
        toast.error("Failed to register complaint.");
      }
    } catch (error) {
      console.error("An error occurred while submitting complaint:", error);
      toast.error("An error occurred while submitting the complaint.");
    }
  };

  return (
    <section className='mb-5 flex w-full max-w-full flex-col items-center justify-center px-4'>
      <div className="grid items-center justify-center gap-2 p-2">
        <h1 className='head_text text-center text-sm'>
          Sign Up and get 7 Days Free Trial
        </h1>
        {/* <h1 className="py-1 text-center">  
          <span>Pay only for Perfectly Purified Water with Excellent Service</span>
          <span>Trusted by 1 Lakh+ happy customers </span>
        </h1> */}

        
      </div>
      <form
        onSubmit={handleFormSubmit}
        className='glassmorphism mt-4 flex w-full max-w-2xl flex-col gap-4 rounded-lg border border-gray-200 p-4'
      >
        <div className="grid gap-2">
          <Label htmlFor="type">Service Type</Label>
          <Select
            value={complaint.complaintType}
            onValueChange={(value) => setComplaint({ ...complaint, complaintType: value })}
            className='input'
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Installation">Installation</SelectItem>
              <SelectItem value="Service">Service Issue</SelectItem>
              <SelectItem value="Repair">Repair</SelectItem>
              <SelectItem value="Maintenance">Maintenance</SelectItem>
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
          <Label htmlFor="Model">Model Number</Label>
          <Input
            value={complaint.model}
            onChange={(e) => setComplaint({ ...complaint, model: e.target.value })}
            placeholder='Enter Model Number'
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
            {submitting ? 'Submitting...' : 'Request A Call Back'}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default ComplaintForm;

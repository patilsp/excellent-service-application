"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CalendarIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import { motion } from 'framer-motion';

import { Button } from "@/registry/new-york/ui/button";
import { Input } from "@/registry/new-york/ui/input";
import { Label } from "@/registry/new-york/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/registry/new-york/ui/select";
import { Textarea } from "@/registry/new-york/ui/textarea";
import { Popover, PopoverContent, PopoverTrigger } from "@/registry/new-york/ui/popover";
import { Calendar } from "@/registry/new-york/ui/calendar";
import { useAuth, useUser } from '@clerk/nextjs';

export function DatePickerDemo({ date, setDate }) {
  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className="w-full justify-start text-left font-normal"
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={handleDateChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}

const UserForm = ({ type, post, setPost, submitting, handleSubmit }) => {
  const [date, setDate] = useState(post.dateOfBirth ? new Date(post.dateOfBirth) : undefined);
  const { isLoaded, userId } = useAuth();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isLoaded && isSignedIn && userId) {
      setPost((prevPost) => ({ ...prevPost, userId }));
    }
  }, [isLoaded, isSignedIn, setPost, userId]);

  useEffect(() => {
    if (date) {
      setPost((prevPost) => ({
        ...prevPost,
        dateOfBirth: format(date, "yyyy-MM-dd"),
      }));
    }
  }, [date, setPost]);

  const handleRoleChange = (value) => {
    setPost({ ...post, role: value });
  };

  return (
    <section className='flex flex-col py-4 md:flex-row'>
      {/* Image Section */}
      <motion.div
        className="hidden h-full w-1/2 md:flex"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 100 }}
        transition={{ duration: 0.5 }}
      >
        <Image src="/images/user-welcome.png" 
        alt="User Image" 
        height={600}
        width={600}
        className="object-cover p-10" 
        />
      </motion.div>

      {/* Form Section */}
      <div className="w-full p-4 md:w-1/2">
        <div className="mt-10 p-4">         
          <motion.form
            onSubmit={handleSubmit}
            className='glassmorphism mt-2 flex w-full flex-col gap-4 rounded border p-8 shadow'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >

          <h1 className='head_text my-2  text-center text-xl'>
            Register User
          </h1>


            <div className="grid gap-2">
              <Label htmlFor="username">User Full Name</Label>
              <Input
                value={post.username}
                onChange={(e) => setPost({ ...post, username: e.target.value })}
                placeholder='Enter username'
                required
                className='input'
              />
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
              <div className="grid w-full gap-2">
                <Label htmlFor="email">Email ID</Label>
                <Input
                  value={post.email}
                  onChange={(e) => setPost({ ...post, email: e.target.value })}
                  placeholder='Enter email'
                  required
                  className='input'
                />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type='tel'
                  pattern='[0-9]*'
                  value={post.phone}
                  onChange={(e) => setPost({ ...post, phone: e.target.value })}
                  placeholder='Enter phone number'
                  required
                  className='input'
                />
              </div>
            </div>
            <div className="flex flex-col gap-4 md:flex-row md:gap-10">
              <div className="grid w-full gap-2">
                <Label htmlFor="dateOfBirth">Date Of Birth</Label>
                <DatePickerDemo date={date} setDate={setDate} />
              </div>
              <div className="grid w-full gap-2">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue={post.role || "User"} onValueChange={handleRoleChange}>
                  <SelectTrigger className="line-clamp-1 w-full truncate">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Engineer">Engineer</SelectItem>
                    <SelectItem value="Customer">Customer</SelectItem>
                    <SelectItem value="User">User</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className='my-4 flex justify-center gap-4'>
              <Link href='/users' className='flex items-center rounded bg-red-400 p-1 px-4 text-sm text-primary-foreground shadow hover:bg-red-600'>
                Cancel
              </Link>
              <Button
                type='submit'
                disabled={submitting}
                className='rounded bg-primary px-5 py-1.5 text-sm text-white'
              >
                {submitting ? `${type}ing...` : type}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

export default UserForm;

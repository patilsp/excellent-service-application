"use client";

import Image from "next/image";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ComplaintForm from "@/components/ComplaintForm";
import toast from "react-hot-toast";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/registry/new-york/ui/dialog";

import Lottie from "lottie-react";
import animationData from "/assets/call-center.json";

export default function Banner() {
  const [submitting, setIsSubmitting] = useState(false);
  const [complaint, setComplaint] = useState({
    name: "",
    mobile: "",
    note: "",
    complaintType: "",
    model: "",
  });
  const [open, setOpen] = useState(false);

  const createComplaint = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/complaint/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Complaint has been registered successfully! 🔥");
        setComplaint({
          name: "",
          mobile: "",
          note: "",
          model:"",
          complaintType:"",
        });
        setTimeout(() => setOpen(false), 2000); // Close modal after 2 seconds
      } else {
        console.log(error("Failed to register complaint."));
      }
    } catch (error) {
      console.log(error("An error occurred."));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_60%)] pb-0 pt-8 md:pt-5">
      <div className="container px-4">
        <div className="items-center md:flex">
          <div className="md:w-[478px]">
            <div className="inline-flex rounded border border-[#222]/10 px-3 py-1 text-sm tracking-tighter">
              - Your Trusted Water Purification Partner
            </div>
            <h1 className="mt-6 bg-gradient-to-b from-black to-[#001E80] bg-clip-text text-5xl font-bold tracking-tighter text-transparent">
              Clean and Safe <span className="text-primary1">Water</span> <br className="hidden sm:inline" />
              <span className="text-primary1">Purification</span> Solutions
            </h1>
            <motion.p
              variants={slideInFromLeft(0.8)}
              className="mt-4 max-w-[42rem] text-sm leading-normal text-gray-50 sm:text-xl sm:leading-8"
            >
              Experience pure and fresh water with our advanced purification services. Reliable solutions for your home and office.
            </motion.p>
            <div className="mt-7 flex gap-2">
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button className="btn btn-primary">Get for Free</Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <DialogTitle className="">Complaint Form</DialogTitle>
                  <div className="flex flex-col md:flex-row">
                    <div className="hidden items-center justify-center md:flex md:w-1/2">
                      <Lottie animationData={animationData} />
                    </div>
                    <div className="md:w-1/2">
                      <ComplaintForm
                        type="Create"
                        complaint={complaint}
                        setComplaint={setComplaint}
                        submitting={submitting}
                        handleSubmit={createComplaint}
                      />
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Button className="btn btn-text bg-transparent text-black hover:text-white flex items-center gap-1">
                <span>Know More</span>
                <Image src="/assets/arrow-right.svg" alt="arrow image" width={20} height={20} className="h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
            <div className="relative mt-10 md:mt-0 md:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="inset-0 flex items-center justify-end"
              >
                <div className="relative mt-20 md:mt-0 md:h-[648px] md:flex-1">
                  <Image
                    src="/assets/cog.png"
                    alt="cog"               
                    height={220}
                    width={220}
                    objectFit="contain"
                    className="md:absolute md:h-full md:w-auto md:max-w-none md:left-6"
                  />
                  <Image
                    src="/assets/cylinder.png"
                    alt="cylinder"
                    layout="fixed"
                    height={220}
                    width={220}
                    className="hidden md:block absolute top-[-6%] left-28 md:absolute"
                  />
                  <Image
                    src="/assets/noodle.png"
                    alt="noodle"
                    layout="fixed"
                    height={220}
                    width={220}
                    className="hidden md:block absolute top-[524px] left-[448px] rotate-[30deg]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="py-8 md:py-16 bg-white overflow-hidden">
          <div className="container">
            <div className="relative flex justify-center overflow-hidden [mask-image:linear-gradient(to_right, transparent, black, transparent)]">
              <div className="flex animate-marquee gap-14 flex-none">
                <Image
                  src="/assets/logo-acme.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 px-2 w-auto"
                />
                <Image
                  src="/assets/logo-apex.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 px-2 w-auto"
                />
                <Image
                  src="/assets/logo-pulse.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 px-2 w-auto"
                />
                <Image
                  src="/assets/logo-quantum.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 px-2 w-auto"
                />
                {/* Repeat images as needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

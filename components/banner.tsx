"use client";

import Image from "next/image";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import InquiryForm from "@/components/InquiryFrom";
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

import bannerImage from '../public/images/banner.webp';


export default function Banner() {
  const [submitting, setIsSubmitting] = useState(false);
  const [inquiry, setInquiry] = useState({
    name: "",
    mobile: "",
    note: "",
    complaintType: "",
    model: "",
  });
  const [open, setOpen] = useState(false);

  const createInquiry = async (data) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("Inquiry has been registered successfully! 🔥");
        setInquiry({
          name: "",
          mobile: "",
          note: "",
          model:"",
          inquiryType:"",
        });
        setTimeout(() => setOpen(false), 2000);
      } else {
        console.log(error("Failed to register inquiry."));
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
              <DialogContent className="max-w-5xl">
                <DialogTitle className="text-slate-700">Get the list of best <span className="text-xl text-indigo-500">Water Purifier Repair & Services </span></DialogTitle>

                <div className="flex flex-col md:flex-row">
                  <div className="hidden items-center justify-center md:flex md:w-1/2">
                  
                    <Image
                      src={bannerImage}
                      alt="Banner"
                      layout="responsive" 
                      width={460} 
                      height={460}
                      className="rounded-md object-cover"
                    />
                  </div>
                  <div className="md:w-1/2">
                    <InquiryForm
                      type="Create"
                      inquiry={inquiry}
                      setInquiry={setInquiry}
                      submitting={submitting}
                      handleSubmit={createInquiry}
                    />
                  </div>
                </div>
              </DialogContent>
            </Dialog>

              <Button className="btn btn-text flex items-center gap-1 bg-transparent text-black hover:text-white">
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
                <div className="relative sm:mt-0 md:mt-7 md:h-[648px] md:flex-1">
                  <Image
                    src="/images/developer-team.svg"
                    alt="cog"               
                    height={220}
                    width={220}
                    objectFit="contain"
                    className="md:absolute md:left-6 md:h-full md:w-auto md:max-w-none"
                  />
                  {/* <Image
                    src="/assets/cylinder.png"
                    alt="cylinder"
                    layout="fixed"
                    height={220}
                    width={220}
                    className="absolute left-28 top-[-6%] hidden md:absolute md:block"
                  />
                  <Image
                    src="/assets/noodle.png"
                    alt="noodle"
                    layout="fixed"
                    height={220}
                    width={220}
                    className="absolute left-[448px] top-[524px] hidden rotate-[30deg] md:block"
                  /> */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="overflow-hidden bg-white py-8 md:py-16">
          <div className="container">
            <div className="[mask-image:linear-gradient(to_right, transparent, black, transparent)] relative flex justify-center overflow-hidden">
              <div className="animate-marquee flex flex-none gap-14">
                <Image
                  src="/assets/logo-acme.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 w-auto px-2"
                />
                <Image
                  src="/assets/logo-apex.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 w-auto px-2"
                />
                <Image
                  src="/assets/logo-pulse.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 w-auto px-2"
                />
                <Image
                  src="/assets/logo-quantum.png"
                  width={40}
                  height={40}
                  alt="brand image"
                  className="h-6 w-auto px-2"
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

"use client";
import Image from "next/image";
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { slideInFromLeft } from "@/utils/motion";
import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import ComplaintForm from "@/components/ComplaintForm";
import toast from "react-hot-toast";

export default function Banner() {
  const [submitting, setIsSubmitting] = useState(false);
  const [complaint, setComplaint] = useState({
    name: "",
    mobile: "",
    note: "",
  });

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
        });
      } else {
        toast.error("Failed to register complaint.");
      }
    } catch (error) {
      toast.error("An error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className=" overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url('/images/banner1.jpg')` }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative  w-full items-center justify-center py-10 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative mt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mx-auto flex flex-col justify-center space-y-6 p-2 sm:w-[555px]">
              <div className="flex flex-col space-y-2 text-center">
                <div className="text-left">
                  <p className="bg-zing-400 mb-4 max-w-[700px] text-lg font-bold text-white">
                    - Your Trusted Water Purification Partner
                  </p>
                  <h1 className="mb-10 text-3xl font-extrabold  leading-tight text-white md:text-4xl">
                    Clean and Safe <span className="text-primary">Water</span> <br className="hidden sm:inline" />
                    <span className="text-primary">Purification</span> Solutions
                  </h1>
                  <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="max-w-[42rem] leading-normal text-gray-50 sm:text-xl sm:leading-8"
                  >
                    Experience pure and fresh water with our advanced purification services. Reliable solutions for your home and office.
                  </motion.p>
                  <div className="items-left justify-left mt-10 flex gap-x-6">
                    <div className="flex gap-4">
                      <Button
                        href={siteConfig.links.docs}
                        target="_blank"
                        rel="noreferrer"
                        className="h-9 items-start p-2 px-4"
                      >
                        Know More
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="relative z-10 grid max-w-[22rem] flex-col justify-end text-white md:ml-40  lg:flex">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="rounded-lg bg-white p-2 text-card-foreground shadow-md">
              <ComplaintForm
                type="Create"
                complaint={complaint}
                setComplaint={setComplaint}
                submitting={submitting}
                handleSubmit={createComplaint}
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        <div className="bg-white py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="mb-6 text-4xl font-bold">Were launching soon</h1>
              <p className="mb-12 text-gray-600">Enter your email to be the first to know when we launch.</p>
              <form className="mx-auto max-w-md">
                <div className="flex items-center">
                  <input type="email" className="mr-3 w-full rounded-md bg-gray-100 px-4 py-2 focus:bg-white focus:outline-none" placeholder="Enter your email" />
                 
                  <Button type="submit" className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">Subscribe</Button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-gray-200 py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-6 text-3xl font-bold">What to expect</h2>
              <p className="mb-12 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo. Sed eget orci feugiat, porttitor nibh vel, faucibus mauris.</p>
            </div>
            <div className="-mx-4 mt-12 flex flex-wrap">
              <div className="mb-8 w-full px-4 md:w-1/3">
                <div className="rounded-md bg-white p-8 shadow-md">
                  <div className="mb-4 text-4xl font-bold text-purple-600">01</div>
                  <h3 className="mb-4 text-2xl font-bold">Feature 1</h3>
                  <p className="mb-4 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-4">02</div>
                  <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.</p>
                </div>
              </div>
              <div className="w-full md:w-1/3 px-4 mb-8">
                <div className="rounded-md bg-white shadow-md p-8">
                  <div className="text-4xl font-bold text-purple-600 mb-4">03</div>
                  <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
                  <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec orci quis justo aliquam euismod eget a leo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

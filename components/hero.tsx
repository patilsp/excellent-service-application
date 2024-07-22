"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import Image from "next/image";

const cardVariants = {
  hover: {
    scale: 1.10,
  },
};

export default function Hero() {
  return (
    <div className="bg-gray-200 font-sans leading-normal tracking-normal">
      <div className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="mb-6 text-4xl font-bold">Were Launching Soon</h1>
            <p className="mb-12 text-gray-600">Enter your email to be the first to know when we launch.</p>
            <form className="mx-auto max-w-md">
              <div className="flex items-center">
                <input
                  type="email"
                  className="mr-3 w-full rounded-md bg-gray-100 px-4 py-2 focus:bg-white focus:outline-none"
                  placeholder="Enter your email"
                />
                <Button
                  type="submit"
                  className="rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 focus:outline-none focus:ring-2"
                >
                  Subscribe
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-2xl font-bold">What to Expect</h2>
            <p className="mb-12 text-xl text-slate-600">Our water purifier service offers you the best in clean and safe water solutions. Heres what you can look forward to:</p>
          </div>
          <div className="-mx-4 mt-12 flex flex-wrap">
            <motion.div
              className="mb-8 w-full px-4 md:w-1/3"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="rounded-md bg-white p-4 shadow-md transition duration-300">
                
                <Image
                  src="/assets/image1.png"
                  width={600}
                  height={400}
                  alt="Advanced Filtration"
                  className="mb-4 w-full rounded-lg"
                />
                <div className="flex w-full items-center gap-2">
                    <h3 className="mb-4 text-xl font-bold text-purple-600">Advanced Filtration</h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">Our water purifiers use cutting-edge technology to remove 99.9% of contaminants, ensuring your water is always pure and safe with our Advanced Filtration.</p>
              </div>
            </motion.div>
            <motion.div
              className="mb-8 w-full px-4 md:w-1/3"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="rounded-md bg-white p-4 shadow-md transition duration-300">
               
                <Image
                  src="/images/banner.jpg"
                  width={600}
                  height={350}
                  alt="Regular Maintenance"
                  className="mb-4 rounded-lg"
                />
                 <div className="flex w-full items-center gap-2">
                    <h3 className="mb-4 text-xl font-bold text-purple-600">Regular Maintenance</h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">We provide regular maintenance and check-ups to keep your water purifier in top condition, so you never have to worry about its performance.</p>
              </div>
            </motion.div>
            <motion.div
              className="mb-8 w-full px-4 md:w-1/3"
              whileHover="hover"
              variants={cardVariants}
            >
              <div className="rounded-md bg-white p-4 shadow-md transition duration-300">
                
                <Image
                  src="/assets/image1.png"
                  width={600}
                  height={400}
                  alt="Customer Support"
                  className="mb-4 w-full rounded-lg"
                />
                <div className="flex w-full items-center gap-2">
                    <h3 className="mb-4  text-xl font-bold text-purple-600">24/7 Customer Support</h3>
                </div>
                <p className="mb-4 text-sm text-gray-600">Our dedicated customer support team is available around the clock to assist you with any questions or issues you may have with our 24/7 Customer Support.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

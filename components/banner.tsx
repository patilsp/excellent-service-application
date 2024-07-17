"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    slideInFromLeft,
    slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";

import Lottie from "lottie-react";
import animationData from "../assets/banner1.json";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import { GiWaterBottle, GiWaterDrop } from "react-icons/gi";

export default function Banner() {
  return (
    <section className="space-y-2">
      <div className="relative h-full flex-col items-center justify-center py-10 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative mt-10">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 p-2 sm:w-[555px]">
              <div className="flex flex-col space-y-2 text-center">
                <div className="text-left">
                  <p className="mb-4 max-w-[700px] text-lg font-bold text-zinc-500">
                    - Your Trusted Water Purification Partner
                  </p>
                  <h1 className="mb-10 text-3xl font-extrabold leading-tight md:text-4xl">
                    Clean and Safe <span className="text_primary">Water</span> <br className="hidden sm:inline" />
                    <span className="text_primary">Purification</span> Solutions
                  </h1>

                  <motion.p
                    variants={slideInFromLeft(0.8)}
                    className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
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
                        Book Appointment
                      </Button>

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
        <div className="relative mt-4 flex-col text-white lg:flex">
          <div className="absolute inset-0" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="text-card-foreground">
              <div className="flex justify-center">
                <div style={{ width: '500px', height: '500px' }}>
                  <Lottie animationData={animationData} />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

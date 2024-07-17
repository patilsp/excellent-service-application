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

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";

  import {
    FcPrivacy,
    FcOnlineSupport,
    FcBriefcase,
  } from "react-icons/fc";

export default function Benefits() {
  return (
    

    <section className="bg1 space-y-6 py-8 md:py-12 lg:py-24">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className=" mx-auto mb-10  flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <p className="font-heading text-xl font-semibold leading-[1.1] text-primary">
          - Benefits of our Event Booking
        </p>
        <h1 className="font-heading text-3xl font-bold leading-[1.1] text-primary">
          Our <span className="text_primary">Event Booking App </span> Benefits
        </h1>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2 hover:border-orange-500">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FcPrivacy className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-700">Privacy</h3>
              <p className="text-sm text-muted-foreground">
                First you have to create an account here.
              </p>
            </div>
          </div>
        </div>

        <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2 hover:border-orange-500">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FcBriefcase className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-700">Secure Payment</h3>
              <p className="text-sm">
              First you have to create an account here.
              </p>
            </div>
          </div>
        </div>

        <div className="welcome-card relative overflow-hidden rounded-lg border bg-background p-2 hover:border-orange-500">
          <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
            <FcOnlineSupport className="h-12 w-12 fill-current" />
            <div className="space-y-2">
              <h3 className="font-bold text-zinc-700">24x7 Support</h3>
              <p className="text-sm text-muted-foreground">
                First you have to create an account here..
              </p>
            </div>
          </div>
        </div>
       
      </div>
     
    </motion.div>
  </section>

  )
}


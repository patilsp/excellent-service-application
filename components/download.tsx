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
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { DiApple,DiAndroid } from "react-icons/di";

export default function Download() {
  return (
    

       <section className="space-y-2">
          <div className="relative h-full flex-col items-center justify-center py-20 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 p-2 sm:w-[555px]">
                  <div className="flex flex-col space-y-2 text-center">
                    <div className="mt-10 py-10 text-left">
                   
                    <h1 className="mb-10 text-3xl font-extrabold leading-tight md:text-4xl">
                        Download our <span className="text_primary">Event</span> <br className="hidden sm:inline" />
                        <span className="text_primary">Booking</span> App Today!
                    </h1>


                      <motion.p
                        variants={slideInFromLeft(0.8)}
                        className="mb-10 max-w-[600px] text-lg text-slate-500"
                      >
                       Elevate Your Event Experience! Your all-in-one solution for stress-free event booking and management. Get started today! Download Now.
                      </motion.p>
                      <div className="items-left justify-left mt-10 flex gap-x-6">
                        <div className="flex flex-col gap-4 md:flex-row lg:flex-row">
                            <div className="gap-4 border-b pr-4 md:border-r">
                                <h1 className="text_primary text-xl font-extrabold"> 5 Million+</h1>
                                <p className=""> Worldwide Active Users</p>

                            </div>
                            <div className="gap-4 border-b pr-4 md:border-r">
                                <h1 className="text_primary text-xl font-extrabold"> 20+</h1>
                                <p className=""> Countries</p>

                            </div>
                            <div className="gap-4 border-b pr-4 md:border-r">
                                <h1 className="text_primary text-xl font-extrabold"> 100K</h1>
                                <p className=""> Organizers</p>

                            </div>
                        </div>
                      </div>
                    </div>
                  </div>

        

                </div>
              </motion.div>
            </div>
          <div className="relative mt-4 flex-col text-white lg:flex">
              <div className="inset-0 " />

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto mr-2 grid justify-center gap-6 sm:grid-cols-1 md:max-w-[64rem] md:grid-cols-2">

                <Card className="bg1 bg_card">
                    <CardHeader>
                        <CardTitle>For IOS</CardTitle>
                        <CardDescription>ios 15.6+</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Button className="btn-primary"> Download App </Button>
                        <div className="items-left justify-left mt-10 flex gap-x-6">
                        <div className="mt-3 flex gap-4 ">
                            <div className="pr-4">
                            <Image
                               src="/images/qr-code.png"
                               width={80}
                               height={80}
                               alt="Download"
                               />

                            </div>
                            
                            <div className="icons mt-[-5px] flex items-end justify-end rounded-full bg-white p-4">
                                <DiApple className="h-8 w-8 "/>

                            </div>
                        </div>
                      </div>

                    </CardContent>
                  
                </Card>

                <Card className="bg1 bg_card">
                    <CardHeader>
                        <CardTitle>For Android</CardTitle>
                        <CardDescription>Android 8.0+</CardDescription>
                    </CardHeader>
                    <CardContent>
                       <Button className="btn-primary"> Download App </Button>
                        <div className="mt-10 flex items-center justify-between gap-x-6">
                        <div className="mt-3 flex gap-4 ">
                            <div className="pr-4">
                            <Image
                               src="/images/qr-code.png"
                               width={80}
                               height={80}
                               alt="Download"
                               />

                            </div>
                            
                            <div className="icons mt-[-5px] flex items-end justify-end rounded-full bg-white p-4">
                                <DiAndroid className="h-8 w-8 "/>

                            </div>
                        </div>
                      </div>

                    </CardContent>
                    
                </Card>

                  
                 
                </div>
              </motion.div>
            </div>
          </div>
        </section>

  )
}


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
import { BiLogIn, BiUser,BiSolidLocationPlus, BiSolidBookmarkPlus } from "react-icons/bi";


export default function Guide() {
    return (
        <section className="space-y-6 py-8 md:py-12 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <p className="font-heading text-xl font-semibold leading-[1.1] text-primary">
                        - How it works
                    </p>
                    <h1 className="font-heading text-3xl font-bold leading-[1.1] text-primary">
                        How it works: <span className="text_primary">A Step-By-Step Guide </span>
                    </h1>
                </div>

              
            </motion.div>


        <div className="space-y-2">
          <div className="relative h-full flex-col items-center justify-center py-20 md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
          <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 p-2 sm:w-[555px]">
                  <div className="flex flex-col space-y-2 text-center">
                    <div className="py-2 text-left">
                    
                      <div className="items-left justify-left mt-10 flex gap-x-6">
                        <div className="flex flex-col gap-4">
                            <div className="mb-10 flex gap-4 pr-4">
                                <div className="flex items-end justify-end rounded-full bg-black p-4">
                                    <BiLogIn className="h-6 w-6 text-white"/>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-semibold text-primary"> Sign Up</h1>
                                    <p className="">First you have to sign up.</p>
                                </div>
                            </div>
                            <div className="mb-10 flex gap-4 pr-4">
                                <div className="bg1 flex items-end justify-end rounded-full p-4">
                                    <BiUser className="text_primary h-6 w-6"/>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-semibold text-primary"> Create Profile </h1>
                                    <p className="">First you have to sign up.</p>
                                </div>
                            </div>
                            <div className="mb-10 flex gap-4 pr-4">
                                <div className="bg1 flex items-end justify-end rounded-full p-4">
                                    <BiSolidLocationPlus className="text_primary h-6 w-6"/>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-semibold text-primary">Browse Nearby events</h1>
                                    <p className="">First you have to sign up.</p>
                                </div>
                            </div>
                            <div className="mb-10   flex gap-4 pr-4">
                                <div className="bg1 flex items-end justify-end rounded-full p-4">
                                    <BiSolidBookmarkPlus className="text_primary h-6 w-6"/>
                                </div>
                                <div className="">
                                    <h1 className="text-xl font-semibold text-primary">Book event tickets</h1>
                                    <p className="">First you have to sign up.</p>
                                </div>
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
                <div className="flex max-w-xl flex-row gap-10">

                    <Image
                        src="/images/map.png"
                        width={800}
                        height={800}
                        alt="map"
                    />   
                  
                 
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        </section>
    );
}

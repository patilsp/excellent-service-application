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

import { Button } from "@/components/ui/button";
import { DiApple, DiAndroid } from "react-icons/di";

export default function AppDemo() {
    return (
        <section className="space-y-6 py-8 md:py-12 lg:py-24">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
            >
                <div className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                    <p className="font-heading text-xl font-semibold leading-[1.1] text-primary">
                        - App Demo
                    </p>
                    <h1 className="font-heading text-3xl font-bold leading-[1.1] text-primary">
                        View <span className="text_primary">Our App Demo </span>
                    </h1>
                </div>

                <div className="grid w-full items-center justify-center">
                  <div className="download-card mx-4 mb-[-100px] flex flex-col items-center justify-center gap-6 rounded-lg p-4 sm:mx-20 sm:max-w-3xl sm:gap-10 sm:p-5 md:mb-[-200px] md:px-20">
                    <p className="mt-10 text-center text-xl text-gray-200">Your Destination for  affordable and exciting Event Experience.</p>
                    <h1 className="text-center text-3xl text-white">Download The App Now!</h1>
                    <div className="mb-10 flex grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
                        <Button
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="h-16 items-start p-2 md:px-4 lg:px-4"
                            >
                          <div className="flex items-start">
                            <DiApple className="h-10 w-10" />
                            <h1 className="flex flex-col items-start"> 
                              <p className="sm:text-xs md:text-sm">Download on</p>
                              <p className="sm:text-sm md:text-xl">App Store</p>
                            </h1>                        
                          </div>
                        </Button>

                        <Button
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="h-16 items-start p-2 md:px-4 lg:px-4"
                            >
                          <div className="flex items-start">
                            <DiAndroid className="h-10 w-10" />
                            <h1 className="flex flex-col items-start"> 
                              <p className="sm:text-xs md:text-sm">Get It On</p>
                              <p className="sm:text-sm md:text-xl">Google Pay</p>
                            </h1>                        
                          </div>
                        </Button>
                    </div>
                  </div>
                </div>

            </motion.div>
        </section>
    );
}

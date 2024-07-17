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

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

export default function FAQ() {
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

                <div className="flex w-full flex-col items-center justify-center gap-4">
               
                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1" >
                        <AccordionTrigger >Is it accessible?</AccordionTrigger>
                        <AccordionContent>
                        Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>




                    
                </div>
            </motion.div>
        </section>
    );
}

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

export default function Demo() {
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

                <div className="flex w-full items-center justify-center">
                    <Image
                        src="/images/app.png"
                        alt="demo"
                        height={2000}
                        width={1000}
                    />
                </div>
            </motion.div>
        </section>
    );
}

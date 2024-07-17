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

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { BiSolidCheckCircle } from "react-icons/bi";

  export default function Pricing() {
      return (
          <section className="bg1 bg1_dark space-y-6 py-8 md:py-12 lg:py-24">
              <div className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
                  <p className="font-heading text-xl font-semibold leading-[1.1] text-primary">
                      - Pricing & Plans
                  </p>
                  <h1 className="font-heading text-3xl font-bold leading-[1.1] text-primary">
                      Let&apos;s Know The Pricing <br />
                      <span className="text_primary">Plan For You</span>
                  </h1>
              </div>
  
              <div className="container grid grid-cols-1 gap-6 py-8 md:max-w-[64rem] md:grid-cols-3 md:py-12 lg:py-24">
                  {/* Pricing Card 1 */}
                  <div className="w-full md:col-span-1">
                      <div className="grid w-full items-start rounded-lg border p-10 hover:border-orange-500">
                          <div className="grid gap-6">
                              <h3 className="text-xl font-bold sm:text-2xl">
                                  $25 <span className="text-sm text-gray-500">/Monthly </span>
                              </h3>
                              <h3 className="text-xl font-bold sm:text-2xl">
                                  Basic
                              </h3>
                              <ul className="grid gap-3 text-sm text-muted-foreground">
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Posts
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Users
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Custom domain
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Dashboard Analytics
                                  </li>
                              </ul>
                          </div>
                          <div className="mt-10 flex flex-col gap-4 text-center">
                              <Link href="/login" className="btn_primary">
                                  Choose Plan
                              </Link>
                          </div>
                      </div>
                  </div>
  
                  {/* Pricing Card 2 */}
                  <div className="w-full md:col-span-1">
                      <div className="bg_primary grid w-full items-start rounded-lg border p-10 shadow hover:border-white">
                          <div className="grid gap-6">
                              <h3 className="text-xl font-bold text-white sm:text-2xl">
                                  $50 <span className="text-sm text-gray-200">/Monthly </span>
                              </h3>
                              <h3 className="text-xl font-bold text-white sm:text-2xl">
                                  Standard
                              </h3>
                              <ul className="grid gap-3 text-sm text-white">
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Posts
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Users
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Custom domain
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Dashboard Analytics
                                  </li>
                              </ul>
                          </div>
                          <div className="mt-10 flex flex-col gap-4 text-center">
                              <Link href="/login" className="btn-default">
                                  Choose Plan
                              </Link>
                          </div>
                      </div>
                  </div>
  
                  {/* Pricing Card 3 */}
                  <div className="w-full md:col-span-1">
                      <div className="grid w-full items-start rounded-lg border p-10 hover:border-orange-500">
                          <div className="grid gap-6">
                              <h3 className="text-xl font-bold sm:text-2xl">
                                  $75 <span className="text-sm text-gray-500">/Monthly </span>
                              </h3>
                              <h3 className="text-xl font-bold sm:text-2xl">
                                  Premium
                              </h3>
                              <ul className="grid gap-3 text-sm text-muted-foreground">
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Posts
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Unlimited Users
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Custom domain
                                  </li>
                                  <li className="flex items-center">
                                      <BiSolidCheckCircle className="mr-2 h-4 w-4" /> Dashboard Analytics
                                  </li>
                              </ul>
                          </div>
                          <div className="mt-10 flex flex-col gap-4 text-center">
                              <Link href="/login" className="btn_primary">
                                  Choose Plan
                              </Link>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      );
  }
  
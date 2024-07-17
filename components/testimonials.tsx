"use client";
import React from 'react';
import Image from "next/image";
import Link from "next/link";

export default function Testimonials() {
    return (
        <section className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 place-content-center overflow-hidden px-6 py-10 lg:grid-cols-12 lg:place-items-center lg:gap-16">
            <div className="relative z-10 col-span-6 mb-10 lg:mb-0">
                <h1 className="relative z-10 text-3xl font-bold sm:text-5xl sm:leading-snug 2xl:text-6xl 2xl:leading-tight">
                    Our Happy Event Organizers<span className="text_primary"> Testimonials</span>
                </h1>
                <p className="mb-7 mt-4 max-w-sm text-gray-500 2xl:mb-8 2xl:mt-4 2xl:text-lg">
                    Event organizers from all over the world share their experiences using <Link href="#">Event Booking App</Link>.
                </p>
                <Link href="#" className="btn_primary inline-block rounded-full px-10 py-2.5 font-bold 2xl:px-12 2xl:py-3">Read Success Stories</Link>
            </div>
            <div className="relative z-10 col-span-6 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-1">
                {/* Testimonial 1 */}
                <div className="relative z-10 flex flex-col justify-between gap-10 rounded-sm bg-white p-7 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] lg:flex-row lg:items-center">
                    <div>
                        <p className="my-3 2xl:text-lg">
                            Thanks to Event Booking App, managing events has never been easier. Our attendees love it!
                        </p>
                        <p className="text-gray-400">
                            <span className="name font-bold capitalize text-gray-900">Lisa Anderson</span> — Event Manager
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <Image
                            src="/images/person-1.png"
                            alt="Lisa Anderson"
                            className="h-24 w-24 rounded-full object-cover 2xl:h-28 2xl:w-28"
                            width={96}
                            height={96}
                        />
                        <div className="absolute inset-0 h-24 w-24 rounded-full  2xl:h-28 2xl:w-28" />
                    </div>
                </div>
                
                {/* Testimonial 2 */}
                <div className="relative z-10 flex flex-col justify-between gap-10 rounded-sm bg-white p-7 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] lg:flex-row lg:items-center">
                    <div>
                        <p className="my-3 2xl:text-lg">
                            Event Booking App has revolutionized the way we plan and execute events. Highly recommended!
                        </p>
                        <p className="text-gray-400">
                            <span className="name font-bold capitalize text-gray-900">John Smith</span> — Event Organizer
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <Image
                            src="/images/person-2.png"
                            alt="John Smith"
                            className="h-24 w-24 rounded-full object-cover 2xl:h-28 2xl:w-28"
                            width={96}
                            height={96}
                        />
                        <div className="absolute inset-0 h-24 w-24 rounded-full  2xl:h-28 2xl:w-28" />
                    </div>
                </div>
                
                {/* Testimonial 3 */}
                <div className="relative z-10 flex flex-col justify-between gap-10 rounded-sm bg-white p-7 shadow-[0_5px_30px_-15px_rgba(0,0,0,0.3)] lg:flex-row lg:items-center">
                    <div>
                        <p className="my-3 2xl:text-lg">
                            Event Booking App made event management a breeze. Its user-friendly and efficient.
                        </p>
                        <p className="text-gray-400">
                            <span className="name font-bold capitalize text-gray-900">Sarah Johnson</span> — Event Coordinator
                        </p>
                    </div>
                    <div className="relative shrink-0">
                        <Image
                            src="/images/person-3.png"
                            alt="Sarah Johnson"
                            className="h-24 w-24 rounded-full object-cover 2xl:h-28 2xl:w-28"
                            width={96}
                            height={96}
                        />
                        <div className="absolute inset-0 h-24 w-24 rounded-full  2xl:h-28 2xl:w-28" />
                    </div>
                </div>
                
                <div className="absolute bottom-[-6rem] right-[25rem] hidden h-72 w-72 rounded-full bg-red-50 xl:block"></div>
            </div>
        </section>
    );
}

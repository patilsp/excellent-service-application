"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { DiApple, DiAndroid } from 'react-icons/di';
import Link from 'next/link';

// Define motion properties for animations
const animationProps = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 1, delay: 1 },
};

export default function Blog() {
  return (
    <section className="bg1 space-y-6 py-8 md:py-12 lg:py-24">
      <motion.div {...animationProps}>
        <div className="mx-auto mb-10 flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <p className="font-heading text-xl font-semibold leading-[1.1] text-primary">
            - Latest Blog
          </p>
          <h1 className="font-heading text-3xl font-bold leading-[1.1] text-primary">
            View <span className="text_primary">See Below Our Latest Blog...</span>
          </h1>
        </div>

        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <Image
                src="/your-image-path-1.jpg"
                alt="Blog Image"
                width={500}
                height={300}
              />
              <h2 className="mb-2 text-xl font-semibold">Blog Title 1</h2>
              <p className="mb-2 text-gray-700">By <span className="font-medium">Author Name</span></p>
              <div className="mb-4 flex items-center text-gray-500">
                <span className="mr-2"><i className="fas fa-calendar-alt"></i> June 24, 2023</span>
                <span className="mr-2"><i className="fas fa-user"></i> 1000+</span>
                <span><i className="fas fa-eye"></i> 5000+</span>
              </div>
              <p className="mb-4 text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod augue vitae urna commodo eleifend.
              </p>
              
                <a className="font-medium text-blue-500 hover:text-blue-700">Read More</a>
             
            </div>

            <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white transition duration-300 hover:shadow-lg">
              <Image
                src="/#"
                alt="Blog Image"
                width={500}
                height={300}
              />
              <div className="p-4">
                <h2 className="my-1 text-2xl font-bold leading-tight text-gray-800">Blog Title</h2>
                <div className="mt-2 flex items-center">
                  <Image
                    src="/author-avatar.jpg"
                    alt="Author Avatar"
                    width={40}
                    height={40}
                    className="h-8 w-8 rounded-full"
                  />
                  <p className="ml-2 text-sm font-medium text-gray-600">By Author Name</p>
                </div>
                <time dateTime="2023-03-13" className="mt-1 text-sm font-semibold uppercase text-gray-400">13th Mar 2023</time>
                <p className="mt-4 text-sm text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores...
                </p>
              
                  <a className="mt-4 inline-block rounded-full border border-gray-800 px-4 py-2 font-medium text-gray-800 transition duration-300 hover:bg-gray-800 hover:text-white">
                    Read more <i className="fas fa-arrow-right ml-1"></i>
                  </a>
               
                <div className="mt-4 flex justify-between">
                  <div>
                    <span className="rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-800">Tag 1</span>
                    <span className="ml-2 rounded-full bg-gray-200 px-2 py-1 text-sm text-gray-800">Tag 2</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <i className="fas fa-eye mr-1"></i>
                    500
                    <i className="fas fa-comment ml-3 mr-1"></i>
                    20
                  </div>
                </div>
              </div>
            </div>

            <div className="max-w-md rounded shadow-lg">
              <div className="px-6 py-4">
                <div className="mb-2 flex items-center">
                  <Image
                    src="/#"
                    alt="Author Avatar"
                    width={40}
                    height={40}
                    className="mr-3 h-10 w-10 rounded-full"
                  />
                  <div>
                   
                      <a className="text-gray-800">
                        <h4 className="text-lg font-semibold leading-tight">How to be effective at working remotely?</h4>
                      </a>
                  
                    <p className="text-sm text-gray-600">By John Doe</p>
                  </div>
                </div>
                <p className="mb-4 text-gray-700">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.
                </p>
                <Image
                  src="/#"
                  alt="Blog Image"
                  width={500}
                  height={300}
                  className="mb-4 w-full rounded-md"
                />
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div>
                    <span className="rounded-full bg-blue-500 px-2 py-1 text-white">Tech</span>
                    <span className="ml-2 rounded-full bg-blue-500 px-2 py-1 text-white">Tips</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">
                      <i className="fas fa-eye text-gray-500"></i>
                      500
                    </span>
                    <span>
                      <i className="fas fa-comment text-gray-500"></i>
                      20
                    </span>
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                 
                    <a className="text-blue-500 hover:underline">
                      <i className="fas fa-heart mr-1"></i>
                      Like
                    </a>
                 
                    <a className="ml-4 text-blue-500 hover:underline">
                      <i className="fas fa-share-alt mr-1"></i>
                      Share
                    </a>
                 
                  <div className="ml-auto">
                   
                      <a className="text-blue-500 hover:underline">
                        Read more <i className="fas fa-arrow-right ml-1"></i>
                      </a>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

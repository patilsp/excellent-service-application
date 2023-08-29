"use client"
import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';
import Lottie from"lottie-react";
import animationData from "@/assets/animation1.json";

const SignInPage = () => {
  return (
    <div className="flex justify-between"> 
        <div className='flex w-full justify-center'>
          <div className="rounded-xl border bg-card py-4 text-card-foreground shadow">
            <div className="flex justify-between"> 
              <Lottie animationData={animationData} />  
              <SignIn />              
            </div>            
          </div>
        </div>
      
    </div>
  )
}

export default SignInPage

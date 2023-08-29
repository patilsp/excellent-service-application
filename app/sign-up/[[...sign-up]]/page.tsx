"use client"
import React from 'react'
import { SignUp } from '@clerk/nextjs'
import Lottie from"lottie-react";
import animationData from "@/assets/animation1.json";

const SignUpPage = () => {
  return (
    <div className="flex justify-between"> 
      <div className='flex w-full justify-center'>
        <div className="mt-4 p-4 text-card-foreground">
          <div className="flex justify-between"> 
            <Lottie animationData={animationData} />  
            <SignUp />           
          </div>            
        </div>
      </div>
    
  </div>
  )
}

export default SignUpPage
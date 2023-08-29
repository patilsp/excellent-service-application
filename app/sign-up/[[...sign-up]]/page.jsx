import React from 'react'
import { SignUp } from '@clerk/nextjs'
import Lottie from"lottie-react";
import animationData from "@/assets/animation1.json";

const SignUpPage = () => {
  return (
    <div className="flex justify-between"> 
      <div className='flex w-full justify-center'>
        <div className="rounded-xl border bg-card py-4 text-card-foreground shadow">
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
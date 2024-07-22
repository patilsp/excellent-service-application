"use client";
import React from 'react';
import { SignIn } from '@clerk/nextjs';
import Image from 'next/image';

const SignInPage = () => {
  return (
    <div className="relative h-screen w-full bg-cover bg-center py-5" style={{ backgroundImage: 'url(/images/banner1.jpg)' }}>
      <div className="absolute inset-0  opacity-50"></div>
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <div className="login-block container flex justify-center text-center">
          <SignIn />
        </div>
      </div>
    </div>
  );
}

export default SignInPage;

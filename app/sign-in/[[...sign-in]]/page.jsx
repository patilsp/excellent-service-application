import React from 'react'
import { SignIn } from '@clerk/nextjs'
import Image from 'next/image';

const SignInPage = () => {
  return (
    <div className="flex justify-between"> 
        <div className='flex w-full justify-center'>
          <Image
            src='/images/coming-soon.png'
            width={500}
            height={560}
            alt='/website-maintenance'
            className='hidden object-contain md:block'
          />
          <SignIn />
        </div>
      
    </div>
  )
}

export default SignInPage

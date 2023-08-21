import React from 'react'
import Image from 'next/image'

function page() {
  return (
    <div>
      <div className='mb-2 flex justify-center'>
           <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-5xl">Coming Soon!
               Stay tuned for our launch !
           </h1>
       </div>
       <div className='flex justify-center'>
           <p className="mx-auto mt-6 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400"> Exciting Changes Ahead! Our website is currently under construction, and working hard to bring you a brand new experience. Stay tuned for our upcoming launch and get ready for something amazing!  </p>
       </div>

       <div className='flex w-full justify-center'>
          <Image
            src='/images/website-maintenance.svg'
            width={500}
            height={560}
            alt='/website-maintenance'
            className='object-contain'
          />
        </div>
    </div>
  )
}

export default page

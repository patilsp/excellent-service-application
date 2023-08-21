import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center">
       
      <h1 className="mx-auto text-center ">Not Found</h1>     
      <p className="mx-auto my-4 max-w-3xl text-center text-lg text-slate-600 dark:text-slate-400"> Could not find requested resource </p>


       <div className='flex w-full justify-center'>
          <Image
            src='/images/error.png'
            width={400}
            height={460}
            alt='error loading'
            className='object-contain'
          />
        </div>
        <div className='mt-4 flex w-full justify-center'>
          <Link href="/" className="dark:highlight-white/20 flex h-12 w-full items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400 sm:w-auto" >Return Home</Link>
        </div>
    </div>
  )
}
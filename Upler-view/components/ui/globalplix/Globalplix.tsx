import Image from 'next/image'
import React from 'react'

export const Globalplix = () => {
  return (
    <div className='flex h-[660px] flex-row lg:h-[700px] xl:h-[750px] pt-20 justify-center bg-zinc-100 text-center'>
      <div className='flex flex-col md:flex-row lg:w-[75%] xl:ml-[85px]'>
        <div className='relative md:absolute flex flex-col'>
          <h2 className='md:ml-12 lg:ml-0 lg:px-0 text-[32px] md:text:5xl lg:text-6xl md:pb-4 lg:pb-10 font-semibold text-neutral-700 md:text-left'>
            What is Upler?
          </h2>
          <p className='px-6 md:ml-8 md:w-[50%] lg:w-[500px] lg:px-0 lg:ml-0 text-neutral-700 text-xl md:text-left'>
            Tired of hunting for essential career tools? UPLER simplifies 
            software management. Access diverse packages, unify 
            licenses, and save time while staying compliant. Your 
            streamlined solution for software success.
          </p>
        </div>
        <div className='relative pt-[40px] md:w-[90%] 2xl:w-[1200px]'>
          <Image
            height={950}
            width={950}
            src='/boxes.png'
            alt=''
            className='lg:ml-[75px] w-full 2xl:[90px]'
          />
        </div>
      </div>
    </div>
  )
}

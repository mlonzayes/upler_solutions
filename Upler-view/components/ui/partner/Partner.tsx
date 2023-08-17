import Image from "next/image"

export const Partner = () => {
  return (
    <section className='flex items-center justify-center flex-col pb-6 pt-8  text-neutral-600 font-semibold '>
      <div className='flex flex-col text-left lg:w-[100%]'>
        <div className='text-center flex items-center lg:text-left pb-10 w-full'>
          <div className='flex flex-col'>
            <h3 className='pb-4 text-xs md:text-base lg:text-lg'>
            GET TO KNOW WHO TRUSTS US
            </h3>
            <h2 className='text-2xl lg:text-4xl'>
            Our Official
              <span className='text-primary-color'> Partnerships</span>
            </h2>
          </div>
          <div className=' hidden lg:invisible'>
            <h3 className=''>CONOCE QUIEN CONFIA EN NOSOTROS</h3>
            <h2 className='text-4xl'>
              Nuestros
              <span className='text-primary-color0'> partnerships oficiales</span>
            </h2>
          </div>
        </div>
      </div>

      <div className='flex flex-wrap justify-center sm:flex-row '>
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
        <Image
          height={120}
          width={120}
          src='/isotipo.png'
          alt='partner-logo'
          className='p-8 flew-wrap w-28 md:w-[180px] md:flex-wrap lg:w-[230px]'
        />
      </div>
    </section>
  )
}

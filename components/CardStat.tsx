import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type InformationType = {
  id: string,
  flag: string;
  country: string;
  csirt: string;
  country_code: string
}

const CardStat = ({id, flag, country, csirt, country_code}: InformationType) => {
  return (
    <Link href={`/home/${id}`} className='w-full flex justify-between p-3 bg-[#F1F6FB] rounded cursor-pointer transition-[0.3s] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]'>
        <Image src={flag} alt='flag' height={30} width={30} />
        <div className='flex-col gap-2'>
            <h4 className='text-sm font-bold'>{country}</h4>
            <p className='text-xs lg:text-[10px'>{csirt}</p>
            <p className='bg-[#4BD1B9] p-[1px] text-white flex justify-center items-center rounded-xl font-bold'>{country_code}</p>
        </div>
    </Link>  
  )
}

export default CardStat
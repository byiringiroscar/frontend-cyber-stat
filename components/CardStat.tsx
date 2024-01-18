import React from 'react'
import Image from 'next/image'

type InformationType = {
  flag: string;
  country: string;
  csirt: string;
  country_code: string
}

const CardStat = ({flag, country, csirt, country_code}: InformationType) => {
  return (
    <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
        <Image src={flag} alt='flag' height={30} width={30} />
        <div className='flex-col gap-2'>
            <h4 className='text-sm font-bold'>{country}</h4>
            <p className='text-xs lg:text-[10px'>{csirt}</p>
            <p className='bg-[#4BD1B9] p-[1px] text-white flex justify-center items-center rounded-xl font-bold'>{country_code}</p>
        </div>
    </div>  
  )
}

export default CardStat
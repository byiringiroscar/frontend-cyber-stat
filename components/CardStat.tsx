import React from 'react'
import Image from 'next/image'

type InformationType = {
  flag: string;
  country: string;
  csirt: string;
}

const CardStat = ({flag, country, csirt}: InformationType) => {
  return (
    <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
        <Image src={flag} alt='flag' height={30} width={30} />
        <div className='flex-col'>
            <h4 className='text-sm font-bold'>{country}</h4>
            <p className='text-xs lg:text-[10px'>{csirt}</p>
        </div>
    </div>  
  )
}

export default CardStat
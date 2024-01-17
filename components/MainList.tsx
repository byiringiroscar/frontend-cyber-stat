import React from 'react'
import Image from 'next/image'

const MainList = () => {
  return (
    <section className='max-container padding-container'>
        <div className='w-full flex-col pt-4 lg:pt-8'>
            <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
                <Image src='https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg' alt='flag' height={30} width={30} />
                <div className='flex-col'>
                    <h4 className='text-sm font-bold'>Rwanda</h4>
                    <p className='text-xs'>bjCSIRT</p>
                </div>
            
            </div>
            <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
                <Image src='https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg' alt='flag' height={30} width={30} />
                <div className='flex-col'>
                    <h4 className='text-sm font-bold'>Rwanda</h4>
                    <p className='text-xs'>bjCSIRT</p>
                </div>
            
            </div>
            <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
                <Image src='https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg' alt='flag' height={30} width={30} />
                <div className='flex-col'>
                    <h4 className='text-sm font-bold'>Rwanda</h4>
                    <p className='text-xs'>bjCSIRT</p>
                </div>
            
            </div>
            <div className='w-full flex justify-between p-3 bg-[#F1F6FB]'>
                <Image src='https://twemoji.maxcdn.com/2/svg/1f1f7-1f1fc.svg' alt='flag' height={30} width={30} />
                <div className='flex-col'>
                    <h4 className='text-sm font-bold'>Rwanda</h4>
                    <p className='text-xs'>bjCSIRT</p>
                </div>
            
            </div>
        </div>
    </section>
  )
}

export default MainList
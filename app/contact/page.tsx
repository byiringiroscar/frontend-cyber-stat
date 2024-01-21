import React from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import center_call from '../../public/contact.png'

const Contact = () => {
  return (
    <>
        <PageHeader title='Contact' />
        <div className='max-container padding-container py-8 flex gap-5'>
            <form className='flex-1 flex flex-col items-center gap-3'>
                <h4 className='font-bold text-2xl text-[#090337]'>Contact Us</h4>

                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='name' className='font-bold'>Name</label>
                    <input required type='text' name='name' id='name' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Name' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='email' className='font-bold'>Email</label>
                    <input required type='email' name='email' id='email' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Email' />
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='message' className='font-bold'>Message</label>
                    <textarea required name='message' id='message' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Message' />
                </div>
                <button type='submit' className='bg-[#090337] text-white py-2 rounded-md flex items-center justify-center px-5'>Send Message</button>

            </form>
            <Image src={center_call} alt='contact'   className='hidden lg:block lg:flex-1 h-[400px] cursor-pointer' />

        </div>
    </>
  )
}

export default Contact
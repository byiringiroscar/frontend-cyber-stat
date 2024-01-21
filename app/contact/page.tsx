'use client'
import React from 'react'
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'
import PageHeader from '@/components/PageHeader'
import ContactCard from '@/components/ContactCard'
import Image from 'next/image'
import center_call from '../../public/contact.png'

const Contact = () => {
    const [ loading, setLoading ] = useState(false)
    const [updateError, setupdateError] = useState({
        name: '',
        email: '',
        message: '',
      
    })
    // Function to clear error messages after a delay
    const clearErrorsAfterDelay = () => {
        setTimeout(() => {
            setupdateError({
                name: '',
                email: '',
                message: '',
            });
        }, 5000); // 5000 milliseconds = 5 seconds
    };
    const handleAdd = async(e: any) => {
        e.preventDefault();
        setLoading(true)
        const newData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value,
          };
        
          try{
            const res = await fetch(`http://127.0.0.1:8000/contact`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
              });
              const updatedData = await res.json();
              if(updatedData.id){
                setLoading(false)
                toast('Thanks for contacting us', {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: 'success'
                
                })
                e.target.reset()
              } else {
                setLoading(false)
                const error = updatedData
                setupdateError({
                    name: error.name ? error.name[0] : '',
                    email: error.email ? error.email[0] : '',
                    message: error.message ? error.message[0] : '',
                })
                toast('Try again', {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: 'error'
                });
                clearErrorsAfterDelay();
              }
              

          }
          catch (err){
            toast('Try again', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            });
          }

    }
  return (
    <>
        <PageHeader title='Contact' />
        <ContactCard />
        <div className='max-container padding-container py-8 flex gap-5'>
            <form onSubmit={handleAdd} className='flex-1 flex flex-col items-center gap-3'>
                <h4 className='font-bold text-2xl text-[#090337]'>Contact Us</h4>

                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='name' className='font-bold'>Name</label>
                    <input required type='text' name='name' id='name' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Name' />
                    <span className='text-red-500 text-sm'>{updateError.name}</span>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='email' className='font-bold'>Email</label>
                    <input required type='email' name='email' id='email' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Email' />
                    <span className='text-red-500 text-sm'>{updateError.email}</span>
                </div>
                <div className='flex flex-col gap-2 w-full'>
                    <label htmlFor='message' className='font-bold'>Message</label>
                    <textarea required name='message' id='message' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Message' />
                    <span className='text-red-500 text-sm'>{updateError.message}</span>
                </div>
                <button type='submit' className='bg-[#090337] text-white py-2 rounded-md flex items-center justify-center px-5'>{loading ? (<ThreeDots
  visible={true}
  height="40"
  width="40"
  color="#FFFFFF"
  radius="4"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />): 'Send message'}</button>

            </form>
            <Image src={center_call} alt='contact'   className='hidden lg:block lg:flex-1 h-[400px] cursor-pointer' />

        </div>
        <div className='w-screen'>
        <iframe
            className='w-full h-screen'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46660.669043361966!2d-76.17429939609431!3d43.03529129888566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d9f3b8019f2991%3A0x58d5929e21a62e5!2sDinosaur%20Bar-B-Que!5e0!3m2!1sen!2sbd!4v1593527523138!5m2!1sen!2sbd"
            
            loading="lazy"
        ></iframe>
        </div>

    </>
  )
}

export default Contact
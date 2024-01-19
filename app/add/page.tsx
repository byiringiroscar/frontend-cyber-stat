'use client'
import React from 'react'
import { useState } from 'react';
import useSWR from 'swr'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThreeDots } from 'react-loader-spinner'



const AddData = () => {	
    const [ loading, setLoading ] = useState(false)
    const [updateError, setupdateError] = useState({
        country: '',
        csirt: '',
        web: '',
      
    })
    // Function to clear error messages after a delay
    const clearErrorsAfterDelay = () => {
        setTimeout(() => {
            setupdateError({
                country: '',
                csirt: '',
                web: '',
            });
        }, 5000); // 5000 milliseconds = 5 seconds
    };

    const handleAdd = async(e: any) => {
        e.preventDefault();
        setLoading(true)
        const newData = {
            country: e.target.country.value,
            csirt: e.target.csirt.value,
            web: e.target.web.value,
          };
        
          try{
            const res = await fetch(`http://127.0.0.1:8000/information/`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(newData),
              });
              const updatedData = await res.json();
              if(updatedData.id){
                setLoading(false)
                toast('Data Added Successfully', {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: 'success'
                
                })
                e.target.reset()
              } else {
                setLoading(false)
                const error = updatedData
                setupdateError({
                    country: error.country ? error.country[0] : '',
                    csirt: error.csirt ? error.csirt[0] : '',
                    web: error.web ? error.web[0] : '',
                })
                toast('Failed to Add data', {
                    hideProgressBar: true,
                    autoClose: 2000,
                    type: 'error'
                });
                clearErrorsAfterDelay();
              }
              

          }
          catch (err){
            toast('Failed to Add data', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            });
          }

    }
  return (
    <>
        <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">Add Data</h4>
            </div>

        <div className='max-container padding-container py-8 flex flex-col gap-5'>
            <form className='flex flex-col gap-4' onSubmit={handleAdd}>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='country' className='font-bold'>Country</label>
                    <input required type='text' name='country' id='country' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Country' />
                    <span className='text-red-500 text-sm'>{updateError.country}</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='csirt' className='font-bold'>CSIRT</label>
                    <input type='text' name='csirt' id='csirt' className='border border-[#E5E5E5] rounded-md p-2' placeholder='csirt' />
                    <span className='text-red-500 text-sm'>{updateError.csirt}</span>
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='web' className='font-bold'>Web</label>
                    <input type='url' name='web' id='web' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Web' />
                    <span className='text-red-500 text-sm'>{updateError.web}</span>
                </div>

                <button type='submit' className='bg-[#090337] text-white py-2 rounded-md flex items-center justify-center'>{loading ? (<ThreeDots
  visible={true}
  height="40"
  width="40"
  color="#FFFFFF"
  radius="4"
  ariaLabel="three-dots-loading"
  wrapperStyle={{}}
  wrapperClass=""
  />): 'Add Data'}</button>

                </form>
        </div>
        
    </>
  )
}

export default AddData
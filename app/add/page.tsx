import React from 'react'

const AddData = () => {
  return (
    <>
        <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">Add Data</h4>
            </div>

        <div className='max-container padding-container py-8 flex flex-col gap-5'>
            {/* add form */}
            <form className='flex flex-col gap-4'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='country' className='font-bold'>Country</label>
                    <input type='text' name='country' id='country' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Country' />
                    {/* <span className='text-red-500 text-sm'>{updateError.country}</span> */}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='csirt' className='font-bold'>CSIRT</label>
                    <input type='text' name='csirt' id='csirt' className='border border-[#E5E5E5] rounded-md p-2' placeholder='CSIRT' />
                    {/* <span className='text-red-500 text-sm'>{updateError.csirt}</span> */}
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='web' className='font-bold'>Web</label>
                    <input type='url' name='web' id='web' className='border border-[#E5E5E5] rounded-md p-2' placeholder='Web' />
                    {/* <span className='text-red-500 text-sm'>{updateError.web}</span> */}
                </div>

                <button type='submit' className='bg-[#090337] text-white py-2 rounded-md'>Add Data</button>

                </form>
        </div>
        
    </>
  )
}

export default AddData
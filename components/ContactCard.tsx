import React from 'react'

const ContactCard = () => {
  return (
    <div className='max-container padding-container py-8 flex justify-center gap-5'>
            <div className='border border-solid border-[#090337] rounded-xl p-5 cursor-pointer transition-[0.3s] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]'>
                <h4 className='font-bold text-[18px] text-[#090337]'>Phone</h4>
                <p className='text-[#090337]'>+91 1234567890</p>
            </div>
    </div>
  )
}

export default ContactCard
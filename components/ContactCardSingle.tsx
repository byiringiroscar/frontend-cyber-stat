import React from 'react'

type ContactCardSingleType = {
    title: string
    content: string
    
}

const ContactCardSingle = ({title, content}: ContactCardSingleType) => {
  return (
    <div className='border border-solid border-[#090337] rounded-xl p-5 cursor-pointer transition-[0.3s] hover:shadow-[rgba(0,0,0,0.35)_0px_5px_15px]'>
                <h4 className='font-bold text-[18px] text-[#090337]'>{title}</h4>
                <p className='text-gray'>{content}</p>
            </div>
  )
}

export default ContactCardSingle
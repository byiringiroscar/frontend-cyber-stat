import React from 'react'


type PageHeaderType = {
    title: string
    
}


const PageHeader = ({ title }: PageHeaderType) => {
  return (
    <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">{title}</h4>
            </div>
  )
}

export default PageHeader
import React from 'react'
import PageHeader from '@/components/PageHeader'
import Image from 'next/image'
import center_call from '../../public/contact.png'
import styles from './page.module.css'
import Link from 'next/link'

const About = () => {
  return (
    <>
        <PageHeader title="About" />
        <div className='max-container padding-container py-8 flex gap-5'>
            <div className='flex flex-col gap-3'>
                <h1 className='text-2xl font-bold mb-3'>About Us</h1>
                <p className='text-base mb-3'>Cyberspector is a cyber security firm that provides a wide range of cyber security services to organizations of all sizes. We are a team of highly skilled cyber security professionals with a passion for helping organizations secure their digital assets and data.</p>
                <p className='text-base mb-3'>Our mission is to help organizations secure their digital assets and data by providing them with the best cyber security services available.</p>
                <p className='text-base mb-3'>We offer a wide range of cyber security services including penetration testing, vulnerability assessments, web application security assessments, network security assessments, and more.</p>
                <p className='text-base mb-3'>We have helped many organizations secure their digital assets and data by providing them with the best cyber security services available.</p>
                <Link href='/contact' className='bg-[#090337] text-white py-2 rounded-md flex items-center justify-center px-5 w-6/12'>Learn more</Link>
            
            </div>
            <Image src={center_call} alt='contact'   className={`hidden lg:block lg:flex-1 h-[400px] cursor-pointer ${styles.image}`} />

        </div>
    
    </>
  )
}

export default About
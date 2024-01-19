import React from 'react'
import styles from './mobilebody.module.css'
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import logo from '../public/logo_color.png'
import Link from 'next/link';
import { NAV_LINKS } from '@/constants' 
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";


type ToggleType = {
    isMobileNavOpen: boolean;
    onToggleNav: any;
}


const MobileBody = ({ isMobileNavOpen, onToggleNav }: ToggleType) => {
  return (
    <div className={`fixed ${styles.container} w-[65vw] h-screen bg-[#09033A] z-[99] transition-all duration-[1s] ${isMobileNavOpen ? 'right-0' : '-right-full'} right-0 top-0`}>
        <div className={styles.close} onClick={onToggleNav}>
            <IoIosClose className='text-white text-[50px]' />
        </div>
        <div className={styles.wrapper}>
            <Image alt='logo' src={logo} height={200} width={120} />
            <ul className='gap-4 flex flex-col'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-white transition-all px-2 py-0.5 cursor-pointer rounded font-bold text-[22px]'>{link.label}</Link>
            ))}
        </ul>

        <div className='flex gap-5'>
        <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaFacebook className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaInstagramSquare className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaTwitter className='text-[25px]' />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaYoutube className='text-[25px]' />
            </div>
        </div>

        </div>
    </div>
  )
}

export default MobileBody
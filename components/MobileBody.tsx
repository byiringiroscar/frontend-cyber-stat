import React from 'react'
import styles from './mobilebody.module.css'
import { IoIosClose } from "react-icons/io";
import Image from 'next/image';
import logo from '../public/logo_color.png'
import Link from 'next/link';
import { NAV_LINKS } from '@/constants' 

const MobileBody = () => {
  return (
    <div className={styles.container}>
        <div className={styles.close}>
            <IoIosClose className='text-white text-[50px]' />
        </div>
        <div className={styles.wrapper}>
            <Image alt='logo' src={logo} height={100} width={120} />
            <ul className='gap-4 flex flex-col'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-white transition-all px-2 py-0.5 cursor-pointer rounded font-bold text-[22px]'>{link.label}</Link>
            ))}
        </ul>

        </div>
    </div>
  )
}

export default MobileBody
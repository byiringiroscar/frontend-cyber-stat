import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import menu from '../public/menu.svg'
import { NAV_LINKS } from '@/constants' 

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <Image alt="logo" src={logo} width={180} height={60} />
        </Link>

        <ul className='hidden h-full gap-10 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-[#090337] font-medium'>{link.label}</Link>
            ))}
        </ul>
        <Image alt="menu" height={32} width={32} src='menu.svg' className="inline-block cursor-pointer lg:hidden" />

    </nav>
  )
}

export default Navbar
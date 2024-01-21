'use client'
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.jpg'
import menu from '../public/menu.svg'
import { NAV_LINKS } from '@/constants' 
import MobileBody from './MobileBody'


const Navbar = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const handleToggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };
  
  return (
    <nav className='flex justify-between padding-container relative bg-white shadow py-5'>
        <Link href='/'>
            <Image alt="logo" src={logo} width={180} height={60} />
        </Link>

        <ul className='hidden h-full gap-12 lg:flex'>
            {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.key} className='text-[#090337] transition-all px-2 py-0.5 cursor-pointer rounded font-medium hover:text-white hover:bg-[#090337]'>{link.label}</Link>
            ))}
        </ul>
        <Image onClick={handleToggleMobileNav} src={menu} alt="menu" height={32} width={32} className="inline-block cursor-pointer lg:hidden" />
        {/* Pass props to MobileBody */}
        <MobileBody isMobileNavOpen={isMobileNavOpen} onToggleNav={handleToggleMobileNav} />
    </nav>
  )
}

export default Navbar
import React from 'react'
import Image from 'next/image'
import logo from '../public/logo_color.png'
import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";


const Footer = () => {
  return (
    <div className={`w-full padding-container bg-[url('../public/footer-bg.jpg')] bg-[#1B1825] bg-[center_center] bg-no-repeat bg-cover py-[30px] flex flex-col gap-10 lg:flex-row lg:justify-between`}>
        <div className='flex flex-col gap-[10px]'>
            <Image src={logo} alt='logo' height={200} width={200} />
            <p className='w-[300px] text-white'>Votre partenaire digital pour la conception d’application et votre CyberSécurité</p>
            <ul className="regular-14 flex gap-4 text-gray-30">
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaFacebook />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaInstagramSquare />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaTwitter />
            </div>
            <div className='cursor-pointer' style={{ color: 'white' }}>
                <FaYoutube />
            </div>
            </ul>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <h2 className='font-bold text-white text-2xl'>Contact</h2>
            <p className='text-white font-bold'>Email: <span className='text-[#4BD1B9]'>contact@cyberspector.com</span></p>
            <p className='w-[300px] text-white flex gap-2'><FaLocationPin /><span>France</span></p>
            <p className='text-white font-bold'>Email: <span className='text-[#4BD1B9]'>contact@cyberspector.com</span></p>
            <p className='w-[300px] text-white flex gap-2'><FaLocationPin /><span>Rwanda</span></p>
            <p className='text-white font-bold'>Email: <span className='text-[#4BD1B9]'>contact@cyberspector.com</span></p>
            <p className='w-[300px] text-white flex gap-2'><FaLocationPin /><span>Benin</span></p>
        </div>
        <div className='flex flex-col gap-[10px]'>
            <h2 className='font-bold text-white text-2xl'>Newsletter</h2>

            <p className='text-white font-bold'>Inscrivez-vous à notre newsletter</p>
            <form>
                <input type='email' placeholder='Votre email' className='bg-[#1B1825] border-[1px] border-[#4BD1B9] text-white outline-none py-1 px-2' />
                <button className='bg-[#4BD1B9] text-white py-1 px-2'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Footer
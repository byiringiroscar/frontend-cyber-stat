'use client'
import type { Metadata } from 'next'
import Providers from '@/redux/provider'
import { Inter } from 'next/font/google'
import SplashScreen from '../components/SplashScreen'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [isLoading, setIsLoading] = useState(isHome)

  useEffect(() => {
    if (isLoading) return

  }, [isLoading])


  return (
    <Providers>
    <html lang="en">
      <body className='flex flex-col min-h-screen'>
        {isLoading && isHome ? (
          <SplashScreen finishLoading={() => setIsLoading(false)} />
        ): (
          <>
          <Navbar />
          <main className='relative overflow-hidden flex-grow'>
              
            {children}
            <ToastContainer />
          </main>
          <Footer />
          </>
        )}
        </body>
    </html>
    </Providers>
  )
} 

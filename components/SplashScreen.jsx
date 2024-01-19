'use client'
import React, { useEffect, useState } from 'react'
import anime from "animejs";
import Image from 'next/image';
import logo from '../public/logo.jpg'

// type finishLoadingType {
//   finishLoading: () => void
// }
// }

const SplashScreen = ({ finishLoading }) => {
  const [isMounted, setIsMounted] = useState(false)

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    })
    loader
    .add({
      targets: "#logo",
      duration: 500,
      // easing: "easeInOutSine",
      easing: "easeInOutExpo",
      // opacity: [0, 1],
      delay: 0,
      scale: 1,
    })
    .add({
      targets: "#logo",
      duration: 500,
      // easing: "easeInOutSine",
      easing: "easeInOutExpo",
      // opacity: [0, 1],
      delay: 0,
      scale: 1.25,
    })
    .add({
      targets: "#logo",
      duration: 500,
      // easing: "easeInOutSine",
      easing: "easeInOutExpo",
      // opacity: [0, 1],
      delay: 0,
      scale: 1,
    })
    .add({
      targets: "#logo",
      duration: 500,
      // easing: "easeInOutSine",
      easing: "easeInOutExpo",
      // opacity: [0, 1],
      delay: 0,
      scale: 1.25,
    })
  }

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10)
    animate()
    return ()=> clearTimeout(timeout)
  })
  return (
    <div className='flex h-screen bg-black items-center justify-center'>
      <Image id='logo' src={logo} alt='logo' width={250} height={200} />

    </div>
  )
}

export default SplashScreen
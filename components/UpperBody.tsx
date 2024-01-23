import React from 'react'
import styles from './upperbody.module.css'
import Button from '@/components/Button/Button'
import globe from '../public/globeee.jpg'
import Image from 'next/image'

const UpperBody = () => {
  return (
    <div className='max-container padding-container flex justify-between pb-8 pt-8'>
        <div className={styles.item}>
        <h1 className={`${styles.title} text-4xl lg:text-7xl`}>Better Feautures for your security. </h1>
        <p className={`${styles.desc} text-[16px] lg:[24px] font-normal`}>Turning your Idea into reality. we bring together the teams from the global tech industry</p>
        <Button text='Visual CISRT STAT' url='/' />
        </div>



        <div className='hidden flex-1 flex-col lg:flex '>
        <Image src={globe} alt='globe' />
        </div>

    </div>
  )
}

export default UpperBody
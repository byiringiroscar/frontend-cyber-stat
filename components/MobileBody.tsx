import React from 'react'
import styles from './mobilebody.module.css'
import { IoIosClose } from "react-icons/io";

const MobileBody = () => {
  return (
    <div className={styles.container}>
        <div className={styles.close}>
            <IoIosClose className='text-white text-[50px]' />
        </div>
    </div>
  )
}

export default MobileBody
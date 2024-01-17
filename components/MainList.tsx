import React from 'react'
import Image from 'next/image'
import CardStat from './CardStat'


const MainList = () => {
  return (
    <section className='max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat /> 
                <CardStat />   
                <CardStat />   
                <CardStat />   
                <CardStat /> 
        </div>
    </section>
  )
}

export default MainList
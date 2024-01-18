"use client"
import useSWR from 'swr'
import Image from 'next/image'
import CardStat from './CardStat'
import { ThreeCircles } from 'react-loader-spinner'

const fetcher = async() => {
  const response = await fetch('http://127.0.0.1:8000/information')
  const data = await response.json()
  return data
}


const MainList = () => {
  const { data, error, isLoading } = useSWR('information', fetcher)
  if (isLoading) {
    return <div className='flex justify-center items-center pt-8'><ThreeCircles
    visible={true}
    height="50"
    width="50"
    color="#4fa94d"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>;
  }

  if (error) {
    return <div className='flex justify-center items-center pt-8'>Error loading data</div>;
  }
  return (
    <section className='max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
        {data.map((item: any) => (
          <CardStat key={item.id} flag={item.flag} country={item.country} csirt={item.csirt} />
        ))} 
        </div>
    </section>
  )
}

export default MainList
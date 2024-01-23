'use client'
import React from 'react'
import CardStat from '@/components/CardStat'
import { notFound } from 'next/navigation'
import useSWR from 'swr'
import PageHeader from '@/components/PageHeader'
import Image from "next/image"
import { ThreeCircles } from 'react-loader-spinner'
import { usePathname, useRouter } from "next/navigation";

const fetcher = async(country_name: any) => {
  const res = await fetch(`http://127.0.0.1:8000/information/country/${country_name}`)
  const data = await res.json()
  return data
}

const Page = () => {
  const pathname = usePathname();
    const country_name = pathname.split('/').slice(-1)[0];
    const { data, error, mutate, isLoading }  = useSWR(country_name, fetcher)	
  return (
    <>
      <PageHeader title='CSIRT DETAIL' />
      <div className='max-container padding-container py-8 flex flex-col gap-5'>
      <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
        {isLoading ? (
          <div className='flex justify-center items-center pt-8 pb-8'><ThreeCircles
          visible={true}
          height="50"
          width="50"
          color="#4fa94d"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></div>
        ):  error ? (
          notFound()
      ): (
        data.map((item: any) => (
          <CardStat key={item.id} id={item.id} flag={item.flag} country={item.country} csirt={item.csirt} country_code={item.country_code} />
        )) 
          
      )}

        </div>
      </div>
    
    </>
  )
}

export default Page
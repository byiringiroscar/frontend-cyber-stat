'use client'
import dynamic from 'next/dynamic';
import { africaMill } from '@react-jvectormap/africa';
import { notFound } from 'next/navigation'
import { ThreeCircles } from 'react-loader-spinner'
import useSWR from 'swr'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";
import UpperBody from './UpperBody';

const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false, }
);

const fetcher = async(id: any) => {
    const res = await fetch(`https://cyberspectorapi.onrender.com/information`)
    const data = await res.json()
    return data
}

const MainHome = () => {
    const router = useRouter()
    const { data, error, mutate, isLoading }  = useSWR('home', fetcher)	
  return (
    <>
        <UpperBody />
        <div style={{width: '100%', height: 500}}>
        {isLoading ? (
          <div className='flex justify-center items-center pt-8 pb-8'><ThreeCircles
          visible={true}
          height="50"
          width="50"
          color="#3AA7E2"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
          /></div>
        ):  error ? (
          notFound()
      ): (
        <VectorMap map={africaMill}
        backgroundColor="#3AA7E2"
        onRegionClick={(e, countryCode) => {
            const filteredData = data.filter((code: any) => code.country_code.toLowerCase().includes(countryCode.toLowerCase()))
            const firstData = filteredData[0]
            console.log(firstData)
            if(!firstData){
                return
            }
            // country_name
            const country_name = firstData.country
            router.push(`/home/${country_name}`)
        }}
      />  
          
      )}
    </div>
    </>
  )
}

export default MainHome
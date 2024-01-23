'use client'
import dynamic from 'next/dynamic';
import { africaMill } from '@react-jvectormap/africa';
import { notFound } from 'next/navigation'
import { ThreeCircles } from 'react-loader-spinner'
import useSWR from 'swr'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";

const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false, }
);

const fetcher = async(id: any) => {
    const res = await fetch(`http://127.0.0.1:8000/information`)
    const data = await res.json()
    return data
}

const MainHome = () => {
    const router = useRouter()
    const { data, error, mutate, isLoading }  = useSWR('home', fetcher)	
    if(isLoading){
        return (
            <div className="flex justify-center items-center">
                <ThreeCircles color="#3b96ce" />
            </div>
        )
    }
    if(error){
        return (
            <div className="flex justify-center items-center">
                <h1>Something went wrong</h1>
            </div>
        )
    }
    // console.log('data', data)
  return (
    <div style={{width: '100%', height: 500}}>
      <VectorMap map={africaMill}
        backgroundColor="#3b96ce"
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
    </div>
  )
}

export default MainHome
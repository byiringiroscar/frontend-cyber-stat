"use client"
import { notFound } from 'next/navigation'
import { ThreeCircles } from 'react-loader-spinner'
import useSWR from 'swr'
import Image from "next/image"
import { usePathname } from "next/navigation";

const fetcher = async(id: any) => {
    const res = await fetch(`http://127.0.0.1:8000/information/${id}`)
    const data = await res.json()
    return data
}


const InformationDetail = () => {
    const pathname = usePathname();
    const id = pathname.split('/').slice(-1)[0];
    const { data, error, isLoading }  = useSWR(id, fetcher)

    return (
        <>
            <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">Information Detail</h4>
            </div>
            {isLoading ? (
                <div className='flex justify-center items-center pt-8'><ThreeCircles
                visible={true}
                height="50"
                width="50"
                color="#4fa94d"
                ariaLabel="three-circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                /></div>
            ): error ? (
                <div className='flex justify-center items-center pt-8'>Page not found</div>
            ): (
                <div className="max-container padding-container py-8 flex flex-col gap-5">
                <h2 className="font-bold text-4xl text-[#090337]">{data.country.toUpperCase()}</h2>
                <p>Aliquam hendrerit sollicitudin purus, quis rutrum mi accumsan nec. 
                    Quisque bibendum orci ac nibh facilisis, at malesuada orci congue. 
                    Nullam tempus sollicitudin cursus. Ut et adipiscing erat. Curabitur this is a text link libero tempus congue.
Duis mattis laoreet neque, et ornare neque sollicitudin at. Proin sagittis dolor sed mi elementum pretium. 
Donec et justo ante. Vivamus egestas sodales est, eu rhoncus urna semper eu. Cum sociis natoque penatibus et
 magnis dis parturient montes, nascetur ridiculus mus. Integer tristique elit lobortis purus bibendum, quis
  dictum metus mattis. Phasellus posuere felis sed eros porttitor mattis. Curabitur massa magna, tempor in blandit
   id, porta in ligula. Aliquam laoreet nisl massa, at interdum mauris sollicitudin et.</p>

                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">CSIRT</h4>
                    <p>{data.csirt.toUpperCase()}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country Code</h4>
                    <p>{data.country_code}</p>
                    </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country</h4>
                    <p>{data.country.toUpperCase()}</p>
                    </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Flag</h4>
                    <Image src={data.flag} alt="flag" height={60} width={60} />
                    </div>
            </div>
            )}
        </>
    )
}


export default InformationDetail
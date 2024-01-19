"use client"
import { notFound } from 'next/navigation'
import { ThreeCircles } from 'react-loader-spinner'
import useSWR from 'swr'
import Image from "next/image"
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'




const fetcher = async(id: any) => {
    const res = await fetch(`http://127.0.0.1:8000/information/${id}`)
    const data = await res.json()
    return data
}


const updateInformation = async (id: any, newData: any) => {
    const res = await fetch(`http://127.0.0.1:8000/information/${id}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newData),
    });
    const updatedData = await res.json();
    return updatedData;
  };


const InformationDetail = () => {
    const [updateError, setupdateError] = useState({
        country: '',
        csirt: '',
        web: '',
      
    })
    const pathname = usePathname();
    const router = useRouter();
    const id = pathname.split('/').slice(-1)[0];
    const { data, error, mutate, isLoading }  = useSWR(id, fetcher)	
    
    // Function to clear error messages after a delay
    const clearErrorsAfterDelay = () => {
        setTimeout(() => {
            setupdateError({
                country: '',
                csirt: '',
                web: '',
            });
        }, 5000); // 5000 milliseconds = 5 seconds
    };


    const handleDelete = async (id: any) => {
        try {
          await fetch(`http://127.0.0.1:8000/information/${id}/`, {
            method: "DELETE",
          });
        router.push("/");

        } catch (err) {
        router.push("/");
        }
      };

    
      const handleUpdate = async (e: any) => {
        e.preventDefault();
        const newData = {
            country: e.target.country.value || data.country,
            csirt: e.target.csirt.value || data.csirt,
            web: e.target.web.value || '',
          };
        try {
          const updatedData = await updateInformation(id, newData);
          if(updatedData.id){
            toast('Data Updated', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'success'
              });
              mutate();
              e.target.reset()

          }
          else{
            const error = updatedData
            setupdateError({
                country: error.country ? error.country[0] : '',
                csirt: error.csirt ? error.csirt[0] : '',
                web: error.web ? error.web[0] : '',
            })
            toast('Data Failed to Update', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            });
            clearErrorsAfterDelay();
          }
        

        } catch (err) {
            toast('Data Failed to Update', {
                hideProgressBar: true,
                autoClose: 2000,
                type: 'error'
            });
        }
      }

    return (
        <>
            <div className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
               <h4 className="font-bold text-xl text-[#090337]">Information Detail</h4>
            </div>
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
            ): error ? (
                notFound()
            ): (
                <div className="max-container padding-container py-8 flex flex-col gap-5">
                    <div className="flex justify-end gap-2">
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button variant="outline">Update</Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-80">
                            <div className="grid gap-4">
                            <div className="space-y-2">
                                <h4 className="font-medium leading-none">Update the data</h4>
                                <p className="text-sm text-muted-foreground">
                                please note that flag and country code generate based on country.
                                </p>
                            </div>
                            <form className="grid gap-2" onSubmit={handleUpdate}>
                                <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="width">Country</Label>
                                <input type="text" name='country' placeholder={data.country} className="col-span-2 h-8 border border-solid border-[gray] rounded px-[3px]" />
                                </div>
                                    <div className='w-full'>
                                    {updateError.country ? (<span className='text-red-500 transition-all'>{updateError.country}</span>): ''}

                                    </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="maxWidth">Cisrt</Label>
                                <input type="text" name='csirt' placeholder={data.csirt} className="col-span-2 h-8 border border-solid border-[gray] rounded px-[3px]" />
                        
                                </div>
                                <div className='w-full'>
                                    {updateError.csirt ? (<span className='text-red-500 transition-all'>{updateError.csirt}</span>): ''}
                                    </div>
                                <div className="grid grid-cols-3 items-center gap-4">
                                <Label htmlFor="height">Web </Label>
                                
                                <input type="text" name='web' placeholder={data.web} className="col-span-2 h-8 border border-solid border-[gray] rounded px-[3px]" />
                    
                                </div>
                                <div className='w-full'>
                                    {updateError.web ? (<span className='text-red-500 transition-all'>{updateError.web}</span>): ''}
                                    </div>


                                <div>
                                <button 
                                className="
                                w-full flex justify-center bg-[#090337] text-white px-4 py-2 rounded-md">
                                    Update
                                </button>
                                </div>



                        
                            </form>
                            </div>
                        </PopoverContent>
                        </Popover>

                    <button className="bg-[#090337] text-white px-4 py-2 rounded-md"
                    onClick={() => handleDelete(data.id)}
                    
                    >Delete</button>
                    </div>
                <h2 className="font-bold text-4xl text-[#090337]">{data.country}</h2>
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
                    <p>{data.csirt}</p>
                </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country Code</h4>
                    <p>{data.country_code}</p>
                    </div>
                <div className="flex flex-col gap-2">
                    <h4 className="font-bold">Country</h4>
                    <p>{data.country}</p>
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
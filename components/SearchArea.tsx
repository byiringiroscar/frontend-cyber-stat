import React from 'react'
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"


const SearchArea = () => {
  return (
    <section className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
        <div className="bg-background/95 p-4 backdrop-blur w-full supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative focus:border-none active:border-none">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Search" className="pl-8 focus:border-none active:border-none" />
                </div>
              </form>
            </div>
      </section>
  )
}

export default SearchArea
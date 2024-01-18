"use client"
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { addSearched } from '../redux/informationSlice'


const SearchArea = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  useEffect(() => {
    dispatch(addSearched(search));
  });
  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };
  return (
    <section className='flexCenter bg-[#F1F6FB] h-[180px] lg:px-40'>
        <div className="bg-background/95 p-4 backdrop-blur w-full supports-[backdrop-filter]:bg-background/60">
              <form>
                <div className="relative focus:border-none active:border-none">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input 
                  value={search} onChange={handleSearch}
                  placeholder="Search with country" 
                  className="pl-8 focus:border-none active:border-none" />
                </div>
              </form>
            </div>
      </section>
  )
}

export default SearchArea
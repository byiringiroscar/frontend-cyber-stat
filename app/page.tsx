"use client"
import { useState } from 'react';
import SearchArea from '@/components/SearchArea'
import MainList from '@/components/MainList'

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const handleSearch = (query: any) => {
    setSearchQuery(query);
  };
  return (
    <>
      <SearchArea onSearch={handleSearch} />
      <MainList searchQuery={searchQuery} />
    </>
  )
}

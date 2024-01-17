import Image from 'next/image'
import SearchArea from '@/components/SearchArea'
import MainList from '@/components/MainList'

export default function Home() {
  return (
    <>
      <SearchArea />
      <MainList />
    </>
  )
}

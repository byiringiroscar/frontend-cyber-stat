'use client'
import { useSelector } from 'react-redux';
import CardStat from './CardStat'
import { ThreeCircles } from 'react-loader-spinner'
import { RootState } from '@/redux/store';


const MainList = () => {
  const { informations, isLoading, searched, hasError, } = useSelector((state: RootState) => state.informations);

  if (isLoading) {
    return (
      <div className='flex justify-center items-center pt-8'><ThreeCircles
    visible={true}
    height="50"
    width="50"
    color="#4fa94d"
    ariaLabel="three-circles-loading"
    wrapperStyle={{}}
    wrapperClass=""
    /></div>
    );
  }
  if (hasError) {
    return (
      <div className='flex justify-center items-center pt-8'>Error loading data</div>
    );
  }
  const filteredData = informations.filter((information: any) => information.country.toLowerCase().includes(searched.toLowerCase()))
  return (
    <section className='max-container padding-container'>
        <div className='grid grid-cols-1 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-4 lg:pt-8'>
        {filteredData.map((item: any) => (
          <CardStat key={item.id} id={item.id} flag={item.flag} country={item.country} csirt={item.csirt} country_code={item.country_code} />
        ))} 
        </div>
    </section>
  )
}

export default MainList
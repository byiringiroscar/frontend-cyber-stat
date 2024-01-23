'use client'
import dynamic from 'next/dynamic';
import { africaMill } from '@react-jvectormap/africa';

const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false, }
);

const MainHome = () => {
  return (
    <div style={{width: '100%', height: 500}}>
      <VectorMap map={africaMill}
        backgroundColor="#3b96ce"
        onRegionClick={(e, countryCode) => {
          console.log(countryCode);
        }}
      />
    </div>
  )
}

export default MainHome
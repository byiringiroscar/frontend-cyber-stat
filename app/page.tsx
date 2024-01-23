"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchInformations } from '../redux/informationSlice'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';
import MobileBody from '@/components/MobileBody';
import MainHome from '@/components/MainHome';

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchInformations());
  }, [dispatch]);
  return (
    <>
      <MobileBody />
      <MainHome />
    </>
  )
}

"use client"
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchInformations } from '../redux/informationSlice'
import { useDispatch } from 'react-redux';
import SearchArea from '@/components/SearchArea'
import MainList from '@/components/MainList'
import { AppDispatch } from '@/redux/store';

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInformations());
  }, [dispatch]);
  return (
    <>
      <SearchArea  />
      <MainList  />
    </>
  )
}

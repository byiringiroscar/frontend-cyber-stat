'use client'
import React from 'react'
import SearchArea from '@/components/SearchArea'
import MainList from '@/components/MainList'
import { useState } from 'react';
import { useEffect } from 'react';
import { fetchInformations } from '../../redux/informationSlice'
import { useDispatch } from 'react-redux';
import { AppDispatch } from '@/redux/store';

const Page = () => {
    const dispatch = useDispatch<AppDispatch>();
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

export default Page
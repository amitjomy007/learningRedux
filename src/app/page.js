
"use client";
import React from 'react';
import { Provider } from 'react-redux';
import PandikarimbaraStore from '@/store';
import AppComp from './app';

const Page = () => (
  <Provider store={PandikarimbaraStore}>
    <AppComp />
  </Provider>
);

export default Page;

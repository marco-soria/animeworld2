import React from 'react';
import { BannerStore } from './BannerStore';
import { StoreProducts } from './StoreProducts';
import { StoreHeader } from '../../components/storeheader';
import { GiftCard } from './GiftCard';
import { StoreAnimation } from './StoreAnimation';



const StorePage = () => {
  return (
    <>
        {/* <StoreHeader /> */}
        <BannerStore />
        <StoreProducts />
        <GiftCard />
        <StoreAnimation />
    </>
  );
};

export default StorePage;
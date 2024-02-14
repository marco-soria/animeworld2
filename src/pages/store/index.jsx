import React from 'react';
import { BannerStore } from './BannerStore';
import { StoreProducts } from './StoreProducts';
import { StoreHeader } from '../../components/storeheader';
import { GiftCard } from './GiftCard';



const StorePage = () => {
  return (
    <>
        {/* <StoreHeader /> */}
        <BannerStore />
        <StoreProducts />
        <GiftCard />
    </>
  );
};

export default StorePage;
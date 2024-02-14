import React from 'react';
import { BannerStore } from './BannerStore';
import { StoreProducts } from './StoreProducts';
import { StoreHeader } from '../../components/storeheader';



const StorePage = () => {
  return (
    <>
        {/* <StoreHeader /> */}
        <BannerStore />
        <StoreProducts />
    </>
  );
};

export default StorePage;
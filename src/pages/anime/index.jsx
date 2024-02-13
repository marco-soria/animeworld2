import React from 'react';
/* import AnimeImage from './AnimeImage';*/
import { RankingAnime } from './RankingAnime';
import { SearchAnime } from './SearchAnime';
import { CategoriesCarousel } from './CategoriesCarousel';

const AnimePage = () => {
  return (
    <>
        <SearchAnime />
        <RankingAnime />
        <CategoriesCarousel />
    </>
  );
};

export default AnimePage;

import React from "react";

// INTERNAL IMPORT
import Style from "../styles/searchPage.module.css";
import { Slider, Brand } from "../components/components-index";
import { SearchBar } from "../SearchPage/searchPage-index";
import Filter from "../components/Filter/Filter";
import { NFTCardTwo, Banner } from "../CollectionPage/collection-index";
import images from "../img";

const searchPage = () => {
  const CollectionArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
  ];

  return (
    <div className={Style.searchPage}>
      <Banner bannerImage={images.creatorbackground2} />
      <SearchBar />
      <Filter />
      <NFTCardTwo NFTData={CollectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default searchPage;

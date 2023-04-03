import React from "react";
import Image from "next/image";

// INTERNAL IMPORT
import Style from "../styles/collection.module.css";
import images from "../img";
import {
  Banner,
  CollectionProfile,
  NFTCardTwo,
} from "../CollectionPage/collection-index";
import { Slider, Brand } from "../components/components-index";
import Filter from "../components/Filter/Filter";

const collection = () => {
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
    <div className={Style.collection}>
      <Banner bannerImage={images.creatorbackground1} />
      <CollectionProfile />
      <Filter />
      <NFTCardTwo NFTData={CollectionArray} />
      <Slider />
      <Brand />
    </div>
  );
};

export default collection;

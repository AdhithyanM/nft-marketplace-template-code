import React, { useState } from "react";

// INTERNAL IMPORT
import Style from "./AuthorNFTCardBox.module.css";
import images from "../../img";
import { NFTCardTwo } from "../../CollectionPage/collection-index";
import FollowerTabCard from "../../components/FollowerTab/FollowerTabCard/FollowerTabCard";

const AuthorNFTCardBox = ({
  collectibles,
  created,
  like,
  follower,
  following,
}) => {
  const CollectiblesArray = [
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

  const CreatedArray = [
    images.nft_image_2,
    ,
    images.nft_image_1,
    images.nft_image_1,
    images.nft_image_3,
    images.nft_image_2,
  ];

  const LikeArray = [
    images.nft_image_1,
    images.nft_image_2,
    images.nft_image_3,
    images.nft_image_1,
    images.nft_image_2,
  ];

  const FollowerArray = [
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground6,
      user: images.user6,
    },
  ];

  const FollowingArray = [
    {
      background: images.creatorbackground2,
      user: images.user2,
    },
    {
      background: images.creatorbackground1,
      user: images.user1,
    },
    {
      background: images.creatorbackground3,
      user: images.user3,
    },
    {
      background: images.creatorbackground5,
      user: images.user5,
    },
    {
      background: images.creatorbackground4,
      user: images.user4,
    },
  ];

  return (
    <div className={Style.authorNFTCardBox}>
      {collectibles && <NFTCardTwo NFTData={CollectiblesArray} />}
      {created && <NFTCardTwo NFTData={CreatedArray} />}
      {like && <NFTCardTwo NFTData={LikeArray} />}
      {follower && (
        <div className={Style.authorNFTCardBox_box}>
          {FollowerArray.map((el, i) => (
            <FollowerTabCard key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
      {following && (
        <div className={Style.authorNFTCardBox_box}>
          {FollowingArray.map((el, i) => (
            <FollowerTabCard key={i + 1} el={el} i={i} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AuthorNFTCardBox;

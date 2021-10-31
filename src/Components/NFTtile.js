import React from "react";

function NFTtile({ image, title, price }) {
  return (
    <div className='nft-tile'>
      <img className='nft-image' src={image} alt='' />
      <h5 className='nft-title'>{title}</h5>
      <div className='bottom-row'>
        <h6 className='price'>{price} FUSD</h6>
        <img className='creator-avatar' src={image} alt='' srcset='' />
      </div>
    </div>
  );
}

export default NFTtile;

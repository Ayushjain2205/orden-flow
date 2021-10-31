import React from 'react'
import HomepageGraphic from '../Assets/homepageGraphic.png'
import BlueBlur from '../Assets/blueBlur.png'
import SectionHead from '../Components/SectionHead'
import NFTtile from '../Components/NFTtile'
import Fractional from '../Assets/Fractional.png'

function Home() {
  return (
    <>
      <section>
        <div
          className="welcome-section"
          style={{
            backgroundImage: `url(${BlueBlur})`,
            backgroundSize: '120% 128%',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        >
          <div className="welcome-text">
            <span className="welcome-bold-text">Create.</span>
            <span className="welcome-bold-text">Sell.</span>
            <span className="welcome-bold-text">Earn.</span>
            <span className="welcome-normal-text">
              Join a global NFT Planet
            </span>
          </div>
          <img src={HomepageGraphic} alt="" srcset="" />
        </div>
        <div className="extension">
          <span className="extension-text">
            Use Chrome Extension to explore NFTs!
          </span>
          <button className="btn btn-black">Use Extension</button>
        </div>
      </section>
      <SectionHead name="Explore" />
      <div className="nftTile-holder">
        <NFTtile />
        <NFTtile />
        <NFTtile />
        <NFTtile />
        <NFTtile />
      </div>
      <SectionHead name="Gaming NFTs" />
      <div className="nftTile-holder">
        <NFTtile />
        <NFTtile />
        <NFTtile />
        <NFTtile />
        <NFTtile />
      </div>
      <SectionHead name="Fractional NFTs" />
      <img className="fractional" src={Fractional} alt="" srcset="" />
    </>
  )
}

export default Home

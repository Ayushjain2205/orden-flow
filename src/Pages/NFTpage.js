import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import Lottie from "react-lottie";
import * as loader from "../Assets/loader1.json";
import * as fcl from "@onflow/fcl";

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: loader.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

function NFTpage() {
  const [done, setDone] = useState(undefined);
  const [data, setData] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 12000);
  }, []);

  return (
    <>
      {!done ? (
        <Lottie options={defaultOptions2} height={700} width={700} />
      ) : (
        <div>
          <div className='nft-page'>
            <div className='nft-page-image'>
              <img
                src='https://i.postimg.cc/RVXydK0w/image-7.png'
                alt=''
                srcset=''
              />
            </div>
            <div className='nft-page-details'>
              <h5 className='nft-page-title'>Minecraft crib</h5>
              <span>On sale for 150 FUSD </span>
              <div className='nft-page-creator'>
                <span>Creator</span>
                <div className='creator-name'>
                  <img
                    src='https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecebee7938ec500060ab34f%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1064%26cropX2%3D3400%26cropY1%3D702%26cropY2%3D3039'
                    alt=''
                    className='creator-avatar'
                  />
                  <span>freka3456</span>
                </div>
              </div>
              <div className='details-tabs'>
                <span>
                  <b>Details</b>
                </span>
                <span>Bids</span>
                <span>History</span>
              </div>
              <p className='description'>Description</p>
              <button
                className='btn-categories'
                style={{ background: "#ED63C2" }}
              >
                Art
              </button>
              <p className='nft-description-text'>
                I made this out of my love for minecraft, I build and rendered
                this as my island, the island I want to own.
              </p>
              <div className='buttons-holder'>
                <button
                  className='btn'
                  style={{ background: "#2cf29f" }}
                  onClick={fcl.logIn}
                >
                  Buy 150 FUSD
                </button>
                <button className='btn' style={{ background: "#9CC3DA" }}>
                  Place a bid
                </button>
                <button className='btn' style={{ background: "#fff" }}>
                  Buy Fraction
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default NFTpage;

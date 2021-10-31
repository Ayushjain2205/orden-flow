import React, { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";

const client = ipfsHttpClient("https://ipfs.infura.io:5001/api/v0");

function Create() {
  const [fileUrl, setFileUrl] = useState(null);

  async function onChange(e) {
    // init NFTstorage Client
    const file = e.target.files[0];
    console.log("here");
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
    console.log(file);
  }

  return (
    <div>
      <h2 className='create-heading'>Create</h2>
      <div className='create-box'>
        <div className='create-left'>
          <p className='what'>What is it?</p>
          <div className='categories-holder'>
            <button
              className='btn-categories active'
              style={{ background: "#2CF29F" }}
            >
              Art
            </button>
            <button
              className='btn-categories'
              style={{ background: "#B170FF" }}
            >
              Video game
            </button>
            <button
              className='btn-categories'
              style={{ background: "#ED63C2" }}
            >
              Music
            </button>
            <button
              className='btn-categories'
              style={{ background: "#83ECFF" }}
            >
              Idea
            </button>
          </div>
          <label htmlFor='' className='create-label'>
            Name
          </label>
          <input type='text' className='create-input' />
          <label htmlFor='' className='create-label'>
            Type
          </label>
          <div className='type-buttons'>
            <button className='type-btn selected-type'>
              <i class='type-icon fas fa-tag'></i> Fixed Price
            </button>
            <button className='type-btn'>
              <i class='type-icon far fa-clock'></i> Timed auction
            </button>
            <button className='type-btn'>
              <i class='type-icon fas fa-infinity'></i> Open for bids
            </button>
          </div>
          <label htmlFor='' className='create-label'>
            Price in FUSD
          </label>
          <input type='text' className='create-input' />
          <label htmlFor='' className='create-label'>
            No. of copies
          </label>
          <input type='text' className='create-input' />
          <label htmlFor='' className='create-label'>
            Fractionalise NFT <i class='fas fa-angle-right'></i>
          </label>
          <button className='btn' style={{ background: "#ed63c2" }}>
            Create
          </button>
        </div>
        <div className='image-holder'>
          {fileUrl && <img className='loaded-image' alt='nft' src={fileUrl} />}
          <div className='nft-image-btn'>
            <label for='nft-image' class='btn '>
              <i class='type-icon fas fa-upload'></i> Upload
            </label>
            <input
              type='file'
              id='nft-image'
              style={{ display: "none" }}
              name='Asset'
              className='my-4 upload-btn'
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;

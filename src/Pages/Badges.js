import React from "react";
import badgesImage from "../Assets/badges1.png";

function Badges() {
  console.log(process.env.REACT_APP_ACCESS_NODE);
  return (
    <div className='badges-page'>
      <img className='badges-page-header' src={badgesImage} alt='' srcset='' />
    </div>
  );
}

export default Badges;

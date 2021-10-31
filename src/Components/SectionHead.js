import React from "react";

function SectionHead({ name }) {
  return (
    <div className='section-heading'>
      <h4 className='section-name'>{name}</h4>
      <button className='btn section-btn'>See all</button>
    </div>
  );
}

export default SectionHead;

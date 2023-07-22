import React from 'react';
import './TvShows.css'

function PopularTvShows({imgList, title}) {

  return (
    <>
      <h2 className='title'>{title}</h2>
     <div className='popularContainer'>{imgList.map((x) => (
        <img key={x} src={x} className='imgs'/>
    ))}</div>
    </>
  )
}

export default PopularTvShows
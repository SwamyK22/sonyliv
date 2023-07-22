import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import previewAction from '../../Redux/Action/preview/previewAction';

function Preview() {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const [flag, setFlag] = useState(false)
    const pre = useSelector(state => state?.preview);

    useEffect(() => {
      dispatch(previewAction());
    }, []);
  return (
    <div className='previewPageContainer'>
      <div className='left'>
          <p>{pre?.title}</p>
          <p>{pre?.overView}</p>
          <div className='subBtn'>
            <button onClick={() => nav('/subscribe', {replace: true})}><img src={require('../../assets/crown.png')} alt='crownImage' className='crown' />Subscribe Now</button>
            <h5>Stream Live Now</h5>
          </div>
          <div className='secBtn'>
            <button onClick={() => setFlag(true)}>
                Play Now
            </button>
          </div>
      </div>
      <div className='right'>
        <div className='right_cont'/>
        {flag ? (<video src={require('../../assets/virat.mp4')} className='video_poster' controls autoPlay />) : (<img src={pre?.imgUrl} alt='previewImage' className='poster' />)}
      </div>
    </div>
  )
}

export default Preview
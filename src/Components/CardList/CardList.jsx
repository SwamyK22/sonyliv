import React, { useRef } from 'react'
import '../Card/Card.css'
import axiosInstanceDb from '../../util/axiosDb/axiosInstanceDb';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function CardList({imgList, title}) {
    const {  movies, tvShows, sports } = useSelector((state) => ({
      movies: state.movies,
      tvShows: state.news,
      sports: state.sports,
    }));
    
    const nav = useNavigate();
    const ref = useRef();

    const preCards = () => {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft - width
    }
    const nextCards = () => {
        let width = ref.current.clientWidth;
        ref.current.scrollLeft = ref.current.scrollLeft + width
    };

    const addPreviewItem = async (id) => {
      let item = null;
      if(title === 'Movies ') item = movies.find((x) => x.id === id)
      if(title === 'Tv Shows ') item = tvShows.find((x) => x.id === id)
      if(title === 'Sports ') item = sports.find((x) => x.id === id)
      await axiosInstanceDb.post('preview', item);
      nav('/preview');
    }
  return (
    <div className='imgSlidContainer'>
        <h3 className='titleCard1'>{title}&gt;</h3>
        <div className='card-list'>
            <button className='pre-btn-arrow' onClick={preCards}><p className='arrow'>&lt;</p></button>
            <button className='next-btn-arrow' onClick={nextCards}><p className='arrow'>&gt;</p></button>
            <div ref={ref} className="imgCardContainer">
            {imgList.map((x) => <img key={x.id} src={x.url} 
                                  onClick={() => addPreviewItem(x.id)}
                                  className='cardImg' alt="Movie Poster"/>)}
            </div>
    </div>
    </div>
  )
}

export default CardList
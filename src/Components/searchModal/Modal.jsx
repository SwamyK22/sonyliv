import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CardList from '../CardList/CardList';

const Modal = (props) => {
    const { closeModal } = props;
    const {  moviesPoster, tvPoster, sportsPoster } = useSelector((state) => ({
        moviesPoster:state.movies.map((x) => ({id:x.id, url:x.imgUrl})),
        tvPoster: state.news.map((x) => ({id:x.id, url:x.imgUrl})),
        sportsPoster: state.sports.map((x) => ({id:x.id, url:x.imgUrl})),
      }));
    const [search, setSearch] = useState('Movies');

    return (
        <>
        <div className='searchModalWarpper' onClick={closeModal}/>
        <div className='searchModalContainer' >
            <div className='imgC'>
                <input className='seachInp' placeholder='Search'/>
                <img onClick={closeModal} src={require('../../assets/close.png')} alt='cross logo' />
            </div>
            <div className='categoryContainer'>
                <h3 className='titleCard1'>Papular Categories</h3>
                <div className='categories'>
                    <input onClick={() => setSearch('Movies')} type='button' value='Movies'/>
                    <input onClick={() => setSearch('Tv Shows')} type='button' value='Tv Shows'/>
                    <input onClick={() => setSearch('Sports')} type='button' value='Sports'/>
                </div>
                <CardList imgList={search === 'Tv Shows' ? tvPoster : search === 'Sports' ? sportsPoster : moviesPoster } title={search} />
            </div>
        </div>
        </>
    )
}

export default Modal;
import React,{ useEffect } from 'react';
import CardList from '../../Components/CardList/CardList';
import ImgSlider from '../../Components/ImgSlider/ImgSlider';
import './style.css'
import PopularTvShows from '../../Components/PopularTvShows/PopularTvShows';
import { useDispatch, useSelector } from 'react-redux';
import laodStateAction from '../../Redux/Action/thunkMiddleware/laodStateAction';
import laodNewsAction from '../../Redux/Action/thunkMiddleware/loadNewsAction';
import laodSportsAction from '../../Redux/Action/thunkMiddleware/laodSportsAction';

function TVShows() {
  const start = 'https://image.tmdb.org/t/p/original'
  const {  moviesPoster, newsPoster, sportsPoster } = useSelector((state) => ({
    moviesPoster:state.movies.map((x) => ({id:x.id, url:x.imgUrl})),
    newsPoster: state.news.map((x) => ({id:x.id, url:x.imgUrl})),
    sportsPoster: state.sports.map((x) => ({id:x.id, url:x.imgUrl})),
  }));

  const dispatch = useDispatch();


  const imgList = [
    'https://images.slivcdn.com/videoasset_images/PTS_SET_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/PTS_SAB_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/PTS_SonyMarathi_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/PTS_BBC_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/PTS_AATH_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/PTS_YAY_logo_23oct_circular_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp'
  ]
  const languages = [
    'https://images.slivcdn.com/videoasset_images/kannada_rev22_squre_thumbnail.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Eng_lang_1x1.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Hindi_lang_1x1.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Telugu_lang_1x1.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Tamil_lang_1x1.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/malayalam_lang_square_imageNEW.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/UI_icons/Multipurposecards/Carousel_Landscape_Card/Marathi_lang_1x1.jpg?h=344&w=344&t=c_fill&q=low&fr=webp'
  ]
  const images = [
    "https://images.slivcdn.com/videoasset_images/barsatein_2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/crs4_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/kafas_set5_24june_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/kbc23_2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/0/hum_rahein_merged_image_web_1700001207.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/cp2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
     "https://images.slivcdn.com/videoasset_images/kathaankhahee_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
  ];

 
  useEffect(() => {
    dispatch(laodStateAction())
    dispatch(laodNewsAction())
    dispatch(laodSportsAction())
  }, [])
  return (
    <div className='tvShowContainer'>
      <ImgSlider images={images} />
      <CardList imgList={moviesPoster} title='Movies '/>
      <img src='https://images.slivcdn.com/videoasset_images/coc_barsatein_dated_trailer_3july_web.jpg?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs'/>
      <CardList imgList={newsPoster} title='Tv Shows '/>
      <CardList imgList={sportsPoster} title='Sports '/>
      <PopularTvShows imgList={imgList} title='Popular Tv Shows '/>
      <img src='https://images.slivcdn.com/videoasset_images/cp2_web_1259x170_wt.png?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs' />
      <PopularTvShows imgList={languages} title='Watch In Your Language'/>
      <img src='https://images.slivcdn.com/videoasset_images/vanshaj_web_1259x170_wn.png?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs'/>
    </div>
  );
}

export default TVShows;

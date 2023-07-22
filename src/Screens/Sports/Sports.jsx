import React from 'react'
import { useSelector } from 'react-redux'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import CardList from '../../Components/CardList/CardList'
import PopularTvShows from '../../Components/PopularTvShows/PopularTvShows'

function Sports() {

  const sportsPoster = useSelector((state) => state.sports.map((x) => ({id:x.id, url:x.imgUrl})))

  const imgList = [
    'https://images.slivcdn.com/videoasset_images/cricket_11july_square_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/football_11july_square_thumb.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/wwe_11july_square_thumb_rev.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/ufc_11july_square_thumb_rev.jpg?h=344&w=344&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/tennis_11july_square_thumb_rev.jpg?h=344&w=344&t=c_fill&q=low&fr=webp'
  ]
  const images = [
    'https://images.slivcdn.com/0/slvspak1_match_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/wwe_raw_lesnar_vs_codys_15july_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/womenashes_t20_match_match_merged_image_web_v1_2.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/wwe_smackdown_womenschampionship_13july_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/ashes23_4thtest_match_merged_image_web_v1_sp.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/bestofashes2023_3rdtest_10july_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp'
  ]
  return (
    <div className='tvShowContainer'>
      <ImgSlider images={images} />
      <CardList imgList={sportsPoster} title='Sports '/>
      <PopularTvShows imgList={imgList} title='Popular Sports '/>
      <img src='https://images.slivcdn.com/0/coc_vitalityblast2023_sf_essexeagles_vs_hampshirehawks_and_somerset_vs_surreycricket_14july_today_web.jpg?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs' />
    </div>
  )
}

export default Sports
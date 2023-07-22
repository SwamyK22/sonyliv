import React from 'react'
import { useSelector } from 'react-redux'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import CardList from '../../Components/CardList/CardList'

function Movies() {
  const moviesPoster = useSelector((state) => state.movies.map((x) => ({id:x.id, url:x.imgUrl})));

  const imgages = [
    'https://images.slivcdn.com/videoasset_images/hawa11_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/uncharted_masthead_web_v1.png?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/fan_28june_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/mubarakan_2july_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/spidermannwh_foreground.png?h=auto&w=1366&t=c_fill&q=low&fr=webp',
    'https://images.slivcdn.com/videoasset_images/saala_khadoos_hindi_29june_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp',
  ]
  return (
    <div className='tvShowContainer'>
      <ImgSlider images={imgages}/>
      <CardList imgList={moviesPoster} title='Movies '/>
      <img src='https://images.slivcdn.com/videoasset_images/2018_kannada_6jun_web.jpg?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs'/>
      </div>
  )
}

export default Movies
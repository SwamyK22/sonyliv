import React from 'react'
import { useSelector } from 'react-redux'
import ImgSlider from '../../Components/ImgSlider/ImgSlider'
import CardList from '../../Components/CardList/CardList'

function News() {

  const newsPoster = useSelector((state) => state.news.map((x) => ({id:x.id, url: x.imgUrl})));
  const images = [
    "https://images.slivcdn.com/videoasset_images/barsatein_2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/crs4_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/kafas_set5_24june_masthead_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/videoasset_images/kbc23_2_merged_image_web_v1.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
    "https://images.slivcdn.com/0/hum_rahein_merged_image_web_1700001207.jpg?h=auto&w=1366&t=c_fill&q=low&fr=webp" ,
  ];
  return (
    <div className='tvShowContainer'>
      <ImgSlider images={images}/>
      <CardList imgList={newsPoster} title='Tv Shows '/>
      <img src='https://images.slivcdn.com/videoasset_images/kafas_multilnag_22june_web.jpg?h=159&w=1180&t=c_fill&q=low&fr=webp' className='adv' alt='imgs'/>
      </div>
  )
}

export default News
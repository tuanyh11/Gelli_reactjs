import React from 'react'
import Slider from 'react-slick'
import { Banner } from '../Components'
import { banners } from '../Fakedata/uiData' 

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false
  };
  return (
    <div>
      <section>
      <Slider {...settings} >
        {banners.map((item, i) => (
          <Banner key={i} image={item.image} title={item.title} subtitle={item.subtitle}/>
        )) }
      </Slider>
      </section>
    </div>
  )
}

export default Home
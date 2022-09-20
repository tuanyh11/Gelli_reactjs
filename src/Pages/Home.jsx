import React from 'react'
import Slider from 'react-slick'
import { Banner, DiamondButton } from '../Components'
import { banners } from '../Fakedata/uiData' 

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots",
    customPaging(i) {
      return (
        <div>
          <DiamondButton containerButton='p-[2px] border-transparent hover:!border-white group' button='!bg-gray-bold '/>
        </div>
      )
    }
  };
  return (
    <div>
      <section>
      <Slider {...settings}  >
        {banners.map((item, i) => (
          <Banner key={i} image={item.image} title={item.title} subtitle={item.subtitle} />
        )) }
      </Slider>
      </section>
    </div>
  )
}

export default Home
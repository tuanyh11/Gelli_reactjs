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
    arrows: false,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots",
    customPaging() {
      return (
        <div class="border-boder-white !w-4 !h-4 !p-[2px] ">
            <button class="button">
                <div class="child"></div>
            </button>
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
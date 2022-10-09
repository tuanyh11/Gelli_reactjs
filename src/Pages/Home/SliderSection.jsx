import React from 'react'
import { connect } from 'react-redux';
import Slider from 'react-slick'
import { Banner, DiamondButton } from '../../Components';
import { banners } from '../../Fakedata/uiData';

const SliderSection = ({slider}) => {
  const sliderSettings = {
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
        <div className='w-4 h-4'  >
          <DiamondButton containerButton=' border-transparent hover:!border-white group w-full h-full' button='!bg-gray-bold p-[4px] group-hover:!bg-white scale-[1.1]'/>
        </div>
      )
    }
  };

  return (
    <div>
        <Slider {...sliderSettings}  >
        {slider.map((item) => (
            <Banner key={item.id} image={`http://127.0.0.1:8000/${item.media.url}`} title={item.title}  />
        )) }
        </Slider>
  </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return ({
    slider: state.ui.data.slider ? state.ui.data.slider : []
  })
}

export default connect(mapStateToProps)(SliderSection)
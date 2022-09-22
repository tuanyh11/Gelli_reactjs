import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'reactstrap'
import { Banner, DefaultCard, DiamondButton, SecondaryBanner, Title } from '../Components'
import { banners, cateBanners } from '../Fakedata/uiData' 
import home_title_image_1 from '../Fakedata/images/home-title-img-1.png'
import { products } from '../Fakedata/products'
import Arrow from './../Components/UI/Arrow/index';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const arrival = {
  tile: 'new arrival',
  image: home_title_image_1
}

const Home = () => {
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
        <div>
          <DiamondButton containerButton='p-[2px] border-transparent hover:!border-white group' button='!bg-gray-bold '/>
        </div>
      )
    }
  };

  const productsArrival = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
  }
    

  return (
    <div>
      <div>
        <Slider {...sliderSettings}  >
          {banners.map((item, i) => (
            <Banner key={i} image={item.image} title={item.title} subtitle={item.subtitle} />
          )) }
        </Slider>
      </div>

      <div className="mt-12">
        <section>
          <Container >
            <Row > 
              {cateBanners.map((item, i) => (<Col key={i}><SecondaryBanner  image={item.image} title={item.title} description={item.description} /></Col>))}
            </Row>
          </Container>
        </section>

        <section className="mt-[100px]">
          <Container>
            <div className='mb-12'>
              <Title text={arrival.tile} image={arrival.image} />
            </div>
            <div>
            <Slider {...productsArrival} adaptiveHeight="true" >
              {products.map((product, i) => (
                <DefaultCard key={i} data={product} />
              )) }
            </Slider>
                  
            </div>
          </Container>
        </section>
    
      </div>

    </div>
  )
}

export default Home
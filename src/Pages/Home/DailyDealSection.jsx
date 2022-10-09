import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import Slider from 'react-slick'
import { Col, Container, Row } from 'reactstrap'
import { Arrow, DiamondButton, ProductDealCard, Title } from '../../Components'
import daily_title_image_1 from '../../Fakedata/images/VectorSmartObject13.png'
import { products } from '../../Fakedata/products'

const dailyDealSetting = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots ",
    nextArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999]  bg-transparent absolute top-1/2 p-2 left-[10px] lg:left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 p-2 right-[10px]  lg:right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    customPaging(i) {
      return (
        <div className='translate-y-[20px]'>
          <DiamondButton containerButton='w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[2px] ' button='!bg-gray-bold p-[4px] group-hover:!bg-primary'/>
        </div>
      )
    }
  }


const DailyDealSection = () => {
  return (
    
    <div className='mt-[100px]'>
        <Container>
        <Row>
            <Col>
            <div className="flex items-center ">
                <Title text={'daily deals'}/>
                <div className="ml-5 flex-1 flex items-center">
                <img src={daily_title_image_1} alt="" />
                <div className="w-full h-[2px] bg-c-1"></div>
                </div>
            </div>
            </Col>
            <Col>
                <div>
                <Slider {...dailyDealSetting} className="-mx-1.5" >
                    {products.map((product, i) => (
                    <div  key={i} className=" md:px-15 ">
                        <ProductDealCard  data={product} />
                    </div>

                    )) }
                </Slider>
                </div>
            </Col>
        </Row>
        </Container>
  </div>
  )
}

export default DailyDealSection
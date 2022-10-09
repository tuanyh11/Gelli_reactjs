import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import { Container } from 'reactstrap'
import { Arrow, DefaultProCard, Title } from '../../Components'
import home_title_image_1 from '../../Fakedata/images/home-title-img-1.png'
import { products } from '../../Fakedata/products'

const productsArrival = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 left-[10px] p-2 lg:left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 right-[10px] p-2 lg:right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true
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
    ]
}

const arrival = {
    tile: 'new arrival',
    image: home_title_image_1
}

const ArrivalSection = () => {
  return (
    
    <div className="mt-[100px]">
        <Container>
        <div className='mb-12'>
            <Title text={arrival.tile} image={arrival.image} />
        </div>
        <div>
        <Slider {...productsArrival} adaptiveHeight="true" className='-mx-1.5' >
            {products.map((product, i) => (
            <Link to={`product/${i}`} key={i} className="md:px-15">
                <DefaultProCard  data={product} />
            </Link>
            )) }
        </Slider>
        </div>
        </Container>
  </div>
  )
}



export default ArrivalSection
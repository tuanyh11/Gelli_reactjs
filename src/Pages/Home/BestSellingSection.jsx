import React from 'react'
import { Col, Row } from 'reactstrap'
import collection_image from '../../Fakedata/images/Layer47.png'
import home_title_image_1 from '../../Fakedata/images/home-title-img-1.png'
import Slider from 'react-slick'
import { Arrow, DefaultProCard, DiamondButton, Title } from '../../Components'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import { products } from '../../Fakedata/products'

const collection = {
    tile: 'new collection ',
    image: collection_image,
    description: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
    such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`
}

const bestSelling = {
    tile: 'best selling',
    image: home_title_image_1
}
  
const bestSellingProducts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots ",
    nextArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999]  bg-transparent absolute top-1/2 p-2 left-[10px] lg:left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 p-2 right-[10px]  lg:right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
    responsive: [
      {
        breakpoint: 	1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
    customPaging() {
      return (
        <div className='translate-y-[20px]'>
          <DiamondButton containerButton='w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[2px] ' button='!bg-gray-bold p-[4px] group-hover:!bg-primary'/>
        </div>
      )
    }
  }
  

const BestSellingSection = () => {
  return (
    <section className='!mt-5'>
    <Row>
      <Col sm={12} md={12} lg={12} xl={12}  xxl={6} >
          <div className=' pt-[680px] md:pt-[680px] bg-[#f7f7f7]  bg-no-repeat relative [background-position:35%_10%]  md:[background-position:0%_10%]' style={{backgroundImage: `url(${collection.image})`}}>
            <div className=" absolute top-1/2 lg:left-[100px] -translate-y-1/2 md:left-0  " >
             <div className="relative hidden lg:flex justify-center flex-col md:text-center lg:text-start">
                <h1 className="text-6xl md:text-[120px] uppercase font-bold ">special</h1>
                <div className="ml-0  lg:m-0  relative  lg:px-[140px] ">
                  <div >
                    <h2 className=" font-dry-brush text-4xl mb-4 capitalize  !text-primary leading-[1.6] -mt-16 tracking-widest md:static md:translate-x-0 md:text-[90px] md:translate-y-0 md:-mt-10 md:mb-3 md:leading-1">Collections</h2>
                  </div>
                  <p className='font-lato text-[15px] md:px-10'>{collection.description}</p>
                </div>
             </div>

             <div className="relative  lg:hidden flex justify-center flex-col text-center px-4">
                <h1 className="text-6xl md:text-[120px] uppercase font-bold ">special</h1>
                <div className="ml-0  lg:m-0  relative  lg:px-[140px] ">
                  <div className="mt-12 mb-2">
                    <h2 className=" font-dry-brush text-4xl md:text-6xl  capitalize  !text-primary leading-[1.6] -mt-16 tracking-widest  ">Collections</h2>
                  </div>
                  <p className='font-lato text-[15px] md:px-10'>{collection.description}</p>
                </div>
             </div>
            </div>
          </div>
      </Col>
      <Col sm={12} md={12} lg={12} xl={12} xxl={6} >
        <div className="px-[12px] lg:pr-10 lg:pl-6 mt-[70px] md:!px-[35px] xl:mt-0">
          <div className="">
            <Title text={bestSelling.tile} image={bestSelling.image} />
          </div>
          <div className="flex items-center justify-center text-15 mt-10 mb-3">
            <div className="uppercase text-gray-1 line-through">best selling</div>

            <div className="!mx-6">
              <div className="w-5 h-[1px] bg-gray-1 block rotate-[110deg]">
                <div className="pt-[2px] pb-[2px] bg-white flex justify-center -rotate-[110deg]">
                  <span className='w-2 h-[1px] bg-gray-1 block ml-1'></span>
                </div>
              </div>
            </div>
            
            <div className="uppercase ">featured product</div>

            <div className="!mx-6">
              <div className="w-5 h-[1px] bg-gray-1 block rotate-[110deg]">
                <div className="pt-[2px] pb-[2px] bg-white flex justify-center -rotate-[110deg]">
                  <span className='w-2 h-[1px] bg-gray-1 block ml-1'></span>
                </div>
              </div>
            </div>

            <div className="uppercase ">recent product</div>
          </div>
          <Slider {...bestSellingProducts} className="-mx-1.5" >
            {products.map((product, i) => (
            <div  key={i} className=" md:px-15 ">
              <DefaultProCard data={product} />
            </div>
            )) }
          </Slider>
        </div>
      </Col>
    </Row>
</section>

  )
}

export default BestSellingSection
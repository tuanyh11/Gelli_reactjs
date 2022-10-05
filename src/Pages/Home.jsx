import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'reactstrap'
import { Banner, DefaultProCard, DiamondButton, CateBanner, Title, ProductDealCard, CardTestimon, CardNews } from '../Components'
import { banners, cateBanners } from '../Fakedata/uiData' 
import home_title_image_1 from '../Fakedata/images/home-title-img-1.png'
import { products } from '../Fakedata/products'
import Arrow from './../Components/UI/Arrow/index';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'
import collection_image from '../Fakedata/images/Layer47.png'
import daily_title_image_1 from '../Fakedata/images/VectorSmartObject13.png'
import couple_image from '../Fakedata/images/Layer48.png'
import user_image from '../Fakedata/images/Layer35.png'
import { Link } from 'react-router-dom'

const arrival = {
  tile: 'new arrival',
  image: home_title_image_1
}

const bestSelling = {
  tile: 'best selling',
  image: home_title_image_1
}

const testimonialTitle = {
  tile: 'testimonials',
  image: home_title_image_1
}

const testimonials = [
  {
    avatar: user_image,
    name: 'John Smith',
    rule: 'Customer',
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
    such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`
  },
  {
    avatar: user_image,
    name: 'John Smith',
    rule: 'Customer',
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
    such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`
  },
  {
    avatar: user_image,
    name: 'John Smith',
    rule: 'Customer',
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
    such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`
  }
]

const collection = {
  tile: 'new collection ',
  image: collection_image,
  description: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
  such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`
}




const coupleCollectionBanner  = {
  heading: 'couple',
  tileContent: 'collection',
  image: couple_image
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
          <DiamondButton containerButton=' border-transparent hover:!border-white group w-full h-full' button='!bg-gray-bold p-[4px] group-hover:!bg-white scale-[1.1]'/>
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


  const bestSellingProducts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
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

  const collectionProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots ",
    nextArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999]  bg-transparent absolute top-1/2 p-2 left-[10px] lg:left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 p-2 right-[10px]  lg:right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
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

  const testimonialSettings = {
    dots: true,
    slidesToScroll: 1,
    speed: 500,
    slidesToShow: 1,
    arrows: false,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots container-dots-testimonial",

    customPaging(i) {
      return (
        <div className=''>
          <DiamondButton containerButton='w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[2px] ' button='!bg-gray-bold p-[4px] group-hover:!bg-primary'/>
        </div>
      )
    }
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
              {cateBanners.map((item, i) => (<Col lg={4} md={6} sm={12} key={i}><CateBanner  image={item.image} title={item.title} description={item.description} /></Col>))}
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
                <div key={i} className="md:px-15">
                  <DefaultProCard  data={product} />
                </div>
              )) }
            </Slider>
            </div>
          </Container>
        </section>
        
        <section>
            <Row>
              <Col sm={12} md={12} lg={6}>
                <Banner >
                  <div className=' p-[80px_60px_140px_30px] md:p-[240px_100px_140px_100px] bg-[#f7f7f7] bg-no-repeat relative [background-position:30%_10%] md:[background-position:0%_10%]' style={{backgroundImage: `url(${collection.image})`}}>
                    <div className=" text-start">
                      <h1 className="text-6xl md:text-[120px] uppercase font-bold ">special</h1>
                    </div>
                    <div className="ml-0 md:mt-10 relative md:ml-[150px] ">
                      <h2 className="font-dry-brush text-4xl capitalize absolute right-0 top-0 -translate-x-1/2 translate-y-full  !text-primary -mt-16 tracking-widest md:static md:translate-x-0 md:text-[100px] md:translate-y-0">Collections</h2>
                      <p className='font-lato text-[15px] pt-[20px] '>{collection.description}</p>
                    </div>
                  </div>
                </Banner>
              </Col>
              <Col sm={12} md={12} lg={6}>
                <div className="px-[12px] lg:pr-10 lg:pl-6 mt-[70px] md:!px-[35px] lg:mt-0">
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
                  <Slider {...bestSellingProducts} >
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

        <section className='mt-[90px]'>
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
                    <Slider {...collectionProducts}  >
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
        </section>

        <section className='mt-[90px] lg:mt-[160px]'>
          <Row >
            <Col lg={6}>
              <div className="px-[50px] lg:px-16 flex flex-col py-10">
                <div>
                  <div className="mb-[50px] ">
                    <Title text={arrival.tile} image={arrival.image} />
                  </div>
                  <Row>
                      <Col sm={12} md={6} lg={6}>
                        <CardNews />
                      </Col>
                      <Col sm={12} md={6} lg={6}>
                        <CardNews />
                      </Col>
                  </Row>
                </div>

                <div>
                  <div className="mt-[100px] mb-10">
                    <Title text={testimonialTitle.tile} image={testimonialTitle.image} />
                  </div>
                  <Slider {...testimonialSettings}>
                    {testimonials.map((item, i) => (
                       <CardTestimon data={item} key={i}/>
                    ))}
                  </Slider>
                </div>
              </div>

            </Col>

            <Col lg={6} className="mt-28 md:mt-40 lg:mt-0">
                <div className="h-full ">
                  <Banner containerStyle='h-full'>
                      <div className='p-[140px_100px_140px_100px] md:p-[240px_100px_140px_100px] bg-[#f7f7f7] bg-no-repeat relative h-full' >
                        <div className='absolute top-[-13%] bottom-0 right-0 z-0 bg-no-repeat inline-block' >
                          <img src={coupleCollectionBanner.image} alt=""  className='h-full'/>
                        </div>
                        <div className="text-center h-full flex flex-col justify-center relative">
                          <h1 className="text-6xl md:text-[120px] uppercase font-bold text-white relative z-10">{coupleCollectionBanner.heading}</h1>
                          <h1 className="font-dry-brush hidden md:block  capitalize  !text-primary -mt-16 tracking-widest ml-[150px] text-[100px] relative z-10">{coupleCollectionBanner.tileContent}</h1>
                          <h1 className="font-dry-brush block md:hidden absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 lg:hidden text-4xl capitalize  !text-primary -mt-16 tracking-widest ml-[150px] md:text-[100px]  z-10">{coupleCollectionBanner.tileContent}</h1>
                          {/* font-dry-brush text-4xl capitalize absolute right-0 top-0 -translate-x-1/2 translate-y-full  !text-primary -mt-16 tracking-widest md:static md:translate-x-0  md:translate-y-0 */}
                        </div>
                      </div>
                  </Banner>
                </div>
            </Col>
          </Row>
        </section>
         
        {/*policy  */}


      </div>

    </div>
  )
}

export default Home
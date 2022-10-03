import React from 'react'
import Slider from 'react-slick'
import { Col, Container, Row } from 'reactstrap'
import { Banner, DefaultProCard, DiamondButton, CateBanner, Title, ProductDealCard, CardTestimon, CardNews, Policy, Brand } from '../Components'
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
    nextArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
  }

  const collectionProducts = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    appendDots: dots => <ul >{dots}</ul>,
    dotsClass:"container-dots ",
    nextArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
    prevArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,

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
        <div className='translate-y-[30px] '>
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
              {cateBanners.map((item, i) => (<Col key={i}><CateBanner  image={item.image} title={item.title} description={item.description} /></Col>))}
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
                <div key={i} className="px-15">
                  <DefaultProCard  data={product} />
                </div>
              )) }
            </Slider>
            </div>
          </Container>
        </section>
        
        <section>
            <Row>
              <Col lg={6}>
                <Banner >
                  <div className='p-[240px_100px_140px_100px] bg-[#f7f7f7] bg-no-repeat relative [background-position:0%_10%]' style={{backgroundImage: `url(${collection.image})`}}>
                    <div className=" text-start">
                      <h1 className="text-[120px] uppercase font-bold ">special</h1>
                      
                    </div>
                    <div className="ml-[150px] ">
                      <h2 className="font-dry-brush text-[100px] capitalize  !text-primary -mt-16 tracking-widest">Collections</h2>
                      <p className='font-lato text-[15px] pt-[20px] '>{collection.description}</p>
                    </div>
                  </div>
                </Banner>
              </Col>
              <Col lg={6}>
                <div className="pr-10 pl-6">
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
                  <Slider {...collectionProducts} >
                    {products.map((product, i) => (
                    <div  key={i} className="px-15">
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
                        <ProductDealCard key={i} data={product} />
                      )) }
                    </Slider>
                  </div>
              </Col>
            </Row>
          </Container>
        </section>

        <section className='mt-[160px]'>
          <Row >
            <Col lg={6}>
              <div className="px-16 flex flex-col py-10">
                <div>
                  <div className="mb-[50px] ">
                    <Title text={arrival.tile} image={arrival.image} />
                  </div>
                  <Row>
                      <Col lg={6}>
                        <CardNews />
                      </Col>
                      <Col lg={6}>
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

            <Col lg={6}>
                <div className="h-full">
                  <Banner containerStyle='h-full'>
                      <div className='p-[240px_100px_140px_100px] bg-[#f7f7f7] bg-no-repeat relative h-full' >
                        <div className='absolute top-[-13%] bottom-0 right-0 z-0 bg-no-repeat inline-block' >
                          <img src={coupleCollectionBanner.image} alt=""  className='h-full'/>
                        </div>
                        <div className="text-center h-full flex flex-col justify-center">
                          <h1 className="text-[120px] uppercase font-bold text-white relative z-10">{coupleCollectionBanner.heading}</h1>
                          <h1 className="font-dry-brush text-[100px] capitalize  !text-primary -mt-16 tracking-widest ml-[150px] relative z-10">{coupleCollectionBanner.tileContent}</h1>
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
import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Slider from 'react-slick'
import Policy from '../../UI/Policy'
import Brand from '../../UI/Brand'
import Arrow from '../../UI/Arrow'
import DiamondButton from '../../Common/Button/DiamondButton'
import { FaAngleLeft, FaAngleRight, FaGlobe } from 'react-icons/fa'
import brand_1 from '../../../Fakedata/images/VectorSmartObject4.png'


const policy = [
    {
      image: <FaGlobe/>,
      heading: 'free shipping',
      content: `We and our partners`
    },
    {
      image: <FaGlobe/>,
      heading: 'free shipping',
      content: `We and our partners`
    },
    {
      image: <FaGlobe/>,
      heading: 'free shipping',
      content: `We and our partners`
    },
    {
      image: <FaGlobe/>,
      heading: 'free shipping',
      content: `We and our partners`
    }
  ]

  const brands = [
    {
      image: brand_1
    },
    {
      image: brand_1
    },
    {
      image: brand_1
    },
    {
      image: brand_1
    },
    {
      image: brand_1
    },
    {
      image: brand_1
    }
    
  ]

const PolicyAndBrand = ({offPolicy, offBrand}) => {

    const brandSettings = {
        slidesToScroll: 1,
        speed: 500,
        slidesToShow: 4,
        arrows: true,
        nextArrow: 
          <Arrow classContainer="absolute !translate-y-[-50%] bg-transparent absolute top-1/2 left-[-10px] cursor-pointer z-[999999]">
            <DiamondButton containerButton='!p-[1px]  border-transparent hover:!border-primary container-button-second !rounded-md ' button='!bg-white border-gray-4 group-hover:!border-primary  border-1 group-hover:!bg-primary p-1 !rounded-md'>
              <FaAngleLeft className="w-3 h-3 text-gray-4 group-hover:text-white default-transition " />
            </DiamondButton>
          </Arrow>,
        prevArrow: 
          <Arrow classContainer="absolute !translate-y-[-50%] bg-transparent absolute top-1/2 right-[-10px] cursor-pointer z-[999999]">
            <DiamondButton containerButton='!p-[1px] border-transparent hover:!border-primary container-button-second  !rounded-md' button='!bg-white border-gray-4 group-hover:!border-primary border-1 group-hover:!bg-primary  p-1 !rounded-md'>
              <FaAngleRight className="w-3 h-3 text-gray-4 group-hover:text-white default-transition " />
            </DiamondButton>
          </Arrow>,
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
              breakpoint: 600,
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

  return (
    <>
       { !offPolicy && <section className="mt-[70px]">
          <Container>
            <Row>
              {policy.map((item, i) => (
                <Col  md={6} key={i} lg={3}>
                    <Policy key={i} data={item} />
                </Col>
              ))}
            </Row>
          </Container>
        </section>
        }
        
        { !offBrand &&  <section className='mt-[126px]'>
          <Row className="">
            <Col md={12} lg={3} className="bg-black-1 mt-0">
                <div className="flex flex-col justify-center items-center py-16 h-full text-white ">
                  <h1 className="uppercase text-lg mb-1 ">shop by</h1>
                  <h1 className="font-greatVibes text-4xl font-medium">popular brand</h1>
                </div>
            </Col>
            <Col md={12} lg={9} className="bg-[#ececec] mt-0 lg:mt-[30px]">
                <div className="px-6 py-16 ">
                  <Slider {...brandSettings}>
                    {brands.map((item, i) => (
                      <Brand data={item} key={i}/>
                    ))}
                  </Slider>
                </div>
            </Col>
          </Row>
        </section>
      }
    </>
  )
}

export default PolicyAndBrand
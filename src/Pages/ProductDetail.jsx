import React, { useState } from 'react'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaFacebookF, FaGoogle, FaStar, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { Arrow, CardProDetail, CardProductAct, DefaultProCard, DiamondButton, RectangleButton, Review, TitleWithArrow } from '../Components';
import ArrowButton from '../Components/Common/Button/ArrowButton';
import Dropdown from '../Components/UI/Dropdown';
import { products } from './../Fakedata/products';

const subPage = [
    {
        text: 'description',
    },
    {
        text: 'additional information',
    },
    {
        text: 'review',
    }
]


const ProductDetail = () => {

    const [product] = useState(products[0])



    const [page, setPage] = useState('description')

    const productsRelatedSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
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
      }

    return (
        <div>
            <section className="mb-[100px]">
                <CardProDetail product={product}/>
            </section>

            <section className="mb-[100px]">
                <div className='flex items-center md:justify-start justify-center !mb-5'>
                    <div className='mr-3 text-sm font-semibold max-w-[33.3%] md:w-auto'>
                        <RectangleButton className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${page === 'description' ? '!bg-primary text-white': ''}`} text={'description'}  onClick={(value) => setPage(value)}/>
                    </div>
                    <div className='mr-3 text-sm font-semibold max-w-[33.3%] md:w-auto'>
                        <RectangleButton className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${page === 'additional inffomation' ? '!bg-primary text-white': ''}`} text={'additional inffomation'}  onClick={(value) => setPage(value)}/>
                    </div>
                    <div className=' text-sm font-semibold max-w-[33.3%] md:w-auto'>
                        <RectangleButton className={`uppercase border  limit max-w-full md:w-auto  border-c-1 px-3 py-2 rounded-md ${page === 'review' ? '!bg-primary text-white': ''}`} text={'review'} onClick={(value) => setPage(value)}/>
                    </div>
                </div>
                {/* description */}
                {page.toLowerCase() === 'description' && 
                    <div className='px-10 py-8 border rounded-md text-13 leading-6 relative pseudo-diamond after:top-0 after:rotate-45 after:-translate-y-1/2 after:left-16 after:bg-gray-300'>
                        <p >
                            {product.description}
                        </p>
                    </div>               
                }
                {/* review */}
                {page.toLowerCase() === 'review' &&
                    <div className="">
                        <TitleWithArrow text={'1 Review'} />
                        <div className="mt-10">
                            <Review />
                        </div>
                        <div className="mt-8">
                            <div className="mb-3">
                                <TitleWithArrow arrowStyle={'diamond relative flex-1 ml-3 h-[1px] bg-gray-300'} text={'lave your review'} />
                            </div>

                            <div className="">
                                <p className="text-13 text-gray-3 font-normal normal-case mb-[30px]">Your email address with not be published. Required field are marked</p>
                                <Row action="" className="flex " tag={'form'}>
                                   <Col lg={5}>
                                        <div className="flex flex-col ">
                                            <span  className='text-sm font-medium mb-1'>Your name</span>
                                            <input type="text"  className='outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full' />
                                        </div>

                                        <div className="flex flex-col mt-[30px]">
                                            <span  className='text-sm font-medium mb-1'>Address</span>
                                            <input type="email" className='outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full' />
                                        </div>

                                        <div className="flex flex-col mt-[30px]">
                                            <span  className='text-sm font-medium mb-1'>Website</span>
                                            <input type="text" className='outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full'/>
                                        </div>
                                   </Col>

                                   {/* input review */}

                                    <Col className="flex flex-col " lg={5}>
                                        <span  className='text-sm font-medium mb-1'>Review</span>
                                        <textarea name="" id="" cols={50}  className='resize-none outline-none border rounded-lg p-2 h-full text-xs font-medium' placeholder='your review...'></textarea>
                                    </Col>

                                    <Col lg={6} >
                                        <RectangleButton text={"submit"} />
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </div>
                }
            </section>

            <section className="">
                <div className="flex justify-center">
                    <TitleWithArrow 
                        text={'related products'} 
                        containerStyle="block " 
                        customArrow={() => 
                            <div className='!mt-6 relative after:bg-black-1 after:rotate-45 after:left-1/2  pseudo-diamond top-0 after:-translate-y-1/2 after:-translate-x-1/2'>
                                <div className='after:top-0 after:h-[1px] after:bg-gradient-to-r after:w-1/2 after:right-0 after:content-[""] after:absolute after:from-black-1 after:to-gray-100 before:top-0 before:h-[1px] before:bg-gradient-to-l before:w-1/2 before:left-0 before:content-[""] before:absolute before:from-black-1 before:to-gray-100'></div>
                            </div>
                        }
                    />
                </div>
                <div className="mt-10">
                    <Slider {...productsRelatedSetting} adaptiveHeight="true" >
                        {products.map((product, i) => (
                            <div key={i} className="px-15">
                                <DefaultProCard  data={product} />
                            </div>
                        )) }
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
import React, { useState } from 'react'
import { FaAngleDown, FaAngleLeft, FaAngleRight, FaFacebookF, FaGoogle, FaStar, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { Arrow, CardProductAct, DefaultProCard, DiamondButton, RectangleButton, Review, TitleWithArrow } from '../Components';
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

const renderHeaderSelectSize = (value) => {
    return (
      <div className='flex items-center text-center font-medium capitalize cursor-pointer' >
        <div className="flex-1"></div>
        <div className=' text-base !text-primary'>{value}</div>
        <div className='flex items-center flex-1 justify-end px-2 '>
          <FaAngleDown className='ml-2 '/>
        </div>
      </div>
    )
}

const renderBodySelectSize = (items,  handleOnClick, active) => {
    return (
      <ul className='text-start'>
        {items.map((item, index) => (
          <li
            className={`px-4 py-2 text-sm leading-[1] hover:!text-primary capitalize  ${active === item.value && 'bg-gray-100 !text-primary'}`}
            key={index}
            onClick={(e) => handleOnClick(item)}
          >
            {item.value}
            
          </li>
        ))}
      </ul>
    )
  }

const ProductDetail = () => {

    const [product, setProduct] = useState(products[0])

    const [imageProduct,setImageProduct] = useState(products[0].gallecy[0].url)

    const [selectSize, setSelectSize] = useState(products[0]?.size[0]?.value)

    const [page, setPage] = useState('description')

    const settings = {
        dots: false,
        dotsClass: "slick-dots !flex product-detail-dots-custom",
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: 
        <Arrow classContainer="absolute !translate-y-[-50%] -translate-x-[-57%]  bg-transparent absolute top-1/2 left-[0] cursor-pointer z-[999999]">
          <DiamondButton containerButton='!p-[0px]  border-transparent hover:!border-transparent container-button-second !rounded-md ' button='!bg-white border-gray-4 group-hover:!border-primary  border-1 group-hover:!bg-white p-1 !rounded-md'>
            <FaAngleLeft className="w-3 h-3 text-gray-4 group-hover:text-primary default-transition !rounded-md" />
          </DiamondButton>
        </Arrow>,
      prevArrow: 
        <Arrow classContainer="absolute !translate-y-[-50%] translate-x-[-60%]  bg-transparent absolute top-1/2 right-[0] cursor-pointer z-[999999]">
          <DiamondButton containerButton='!p-[0px] border-transparent hover:!border-transparent container-button-second  !rounded-md' button='!bg-white border-gray-4 group-hover:!border-primary border-1 group-hover:!bg-white  p-1 !rounded-md'>
            <FaAngleRight className="w-3 h-3 text-gray-4 group-hover:text-primary default-transition " />
          </DiamondButton>
        </Arrow>,
    };

    const productsRelatedSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 left-[-10px] z-[999999999] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
        prevArrow: <Arrow classContainer="absolute !translate-y-[-200%] bg-transparent absolute top-1/2 right-[-8px] z-[999999999] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
      }

    return (
        <div>
            <section className="mb-[100px]">
                <Row>
                    <Col lg={6}>
                        <div >
                            <img src={imageProduct} alt="" className='w-[410px] h-[370px] border' />
                        </div>
                        <Slider {...settings} className="mt-[30px] pl-[21px] pr-6" >
                            {products[0].gallecy.map((item, i) =>
                                <div key={i} onClick={() => setImageProduct(item.url)} className="cursor-pointer ">
                                    <img src={item.url} alt="" className='w-[110px] h-[100px] ml-auto mr-auto p-2 border' />
                                </div>
                            )}
                        </Slider>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1 className="text-base font-semibold mb-2 capitalize ">{product.name}</h1>

                            {/* review  */}
                            <div className="flex items-center text-13 font-medium  mb-2">
                                <ul className="flex">
                                    <li className="">
                                        <FaStar />
                                    </li>
                                    <li className="">
                                        <FaStar />
                                    </li>
                                    <li className="">
                                        <FaStar />
                                    </li>
                                    <li className="">
                                        <FaStar />
                                    </li>
                                    <li className="">
                                        <FaStar />
                                    </li>
                                </ul>
                                <p className='leading-1 -mb-[1px] ml-3 '>1 review</p>
                                <div className="w-[1px] h-3 mx-2 bg-gray-3"></div>
                                <p className="font-semibold">add your review</p>
                            </div>

                            <div className="text-3xl !text-primary font-medium mb-6">
                                {product.price}
                            </div>
                            {/* descriptiom */}
                            <div className="!mb-6">
                                <p className='text-xs normal-case leading-5 text-gray-5 font-normal '>{product.description}</p>
                            </div>

                            <div className="py-7 border-t-1 border-c-1">
                                <div className='flex items-center mb-3'>
                                    <h1 className='uppercase text-13'>qty</h1>
                                    <div className='ml-[45px] flex items-center w-[150px] px-2 rounded-xl py-[10px] border justify-between'>
                                        <button className='px-2 h-full'>-</button>
                                        <input value="01 " type="text" className='text-center w-full outline-none text-base !text-primary'/>
                                        <button className='px-2 h-full '>+</button>
                                    </div>
                                </div>

                                <div className='flex items-center'>
                                    <h1 className='uppercase text-13' >size</h1>
                                    <div className='ml-[45px] w-[150px] px-2 rounded-xl py-[10px] border relative  '>
                                        <Dropdown
                                            renderHeader={() => renderHeaderSelectSize(selectSize)}
                                            renderBody={() => renderBodySelectSize(product.size, (item) => setSelectSize(item.value), selectSize)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between ">
                                <ArrowButton />
                                <div className="left-auto">
                                    <CardProductAct />
                                </div>
                            </div>
                                
                            <div className='flex items-center mt-4'>
                                <h1 className='uppercase text-13'>share via</h1>
                                <ul className="flex items-center ml-4">
                                    <li className="">
                                        <FaFacebookF className='w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3' />
                                    </li>
                                    <li className="">
                                        <FaGoogle className='w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3' />
                                    </li>
                                    <li className="">
                                        <FaTwitter className='w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3' />
                                    </li>
                                    <li className="">
                                        <FaTwitter className='w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3' />
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </Col>
                </Row>
            </section>

            <section className="mb-[100px]">
                <div className='flex items-center !mb-5'>
                    <div className='mr-3 text-sm font-semibold'>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md'} text={'description'} onClick={(value) => setPage(value)}/>
                    </div>
                    <div className='mr-3 text-sm font-semibold'>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md'} text={'additional inffomation'} onClick={(value) => setPage(value)}/>
                    </div>
                    <div className='mr-3 text-sm font-semibold'>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md '} text={'review'} onClick={(value) => setPage(value)}/>
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
                            </div>}
                    />
                </div>
                <div className="mt-10">
                    <Slider {...productsRelatedSetting} adaptiveHeight="true" >
                        {products.map((product, i) => (
                            <div className="px-15">
                                <DefaultProCard key={i} data={product} />
                            </div>
                        )) }
                    </Slider>
                </div>
            </section>
        </div>
    )
}

export default ProductDetail
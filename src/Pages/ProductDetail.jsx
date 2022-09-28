import React, { useState } from 'react'
import { FaFacebookF, FaGoogle, FaStar, FaTwitter } from 'react-icons/fa';
import Slider from 'react-slick';
import { Col, Row } from 'reactstrap';
import { CardProductAct, RectangleButton } from '../Components';
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

    const [product, setProduct] = useState(products[0])

    const settings = {
        customPaging: function (i) {
            return (
                <div key={i}>
                    <img src={products[0].gallecy[i].url} alt="" />
                </div>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div>
            <section className="">
                <Row>
                    <Col lg={6}>
                        <Slider {...settings}>
                            {products[0].gallecy.map((item, i) =>
                                <div key={i}>
                                    <img src={item.url} alt="" />
                                </div>
                            )}
                        </Slider>
                    </Col>
                    <Col lg={6}>
                        <div>
                            <h1 className="text-base font-medium mb-2">{product.name}</h1>

                            {/* review  */}
                            <div className="flex items-center text-sm  mb-2">
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
                                <p className='leading-1 -mb-[1px] ml-3'>1 review</p>
                            </div>

                            <div className="text-2xl !text-primary mb-6">
                                {product.price}
                            </div>
                            {/* descriptiom */}
                            <div className="">
                                <p className='text-sm text-gray-5 '>{product.description}</p>
                            </div>

                            <div className="">
                                <div>
                                    <h1>qty</h1>
                                    <div className=''>
                                        <button className=''>-</button>
                                        <input value="01" type="text"/>
                                        <button className=''>+</button>
                                    </div>
                                </div>

                                <div>
                                    <h1>qty</h1>
                                    <div className=''>
                                        <Dropdown/>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <ArrowButton />
                                <div className="left-auto">
                                    <CardProductAct />
                                </div>
                            </div>
                                
                            <div className=''>
                                <h1>qty</h1>
                                <ul className="">
                                    <li className="">
                                        <FaFacebookF/>
                                    </li>
                                    <li className="">
                                        <FaGoogle/>
                                    </li>
                                    <li className="">
                                        <FaTwitter/>
                                    </li>
                                </ul>
                            </div>

                        </div>

                    </Col>
                </Row>
            </section>

            <section className="">
                <div>
                    <div className=''>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md'} text={'descrition'}/>
                    </div>
                    <div className=''>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md'} text={'descrition'}/>
                    </div>
                    <div className=''>
                        <RectangleButton className={'uppercase border border-c-1 px-3 py-2 rounded-md '} text={'descrition'}/>
                    </div>
                </div>
                {/* descrition */}
                <div className=''>
                    <p>
                        {product.description}
                    </p>
                </div>               
            </section>
        </div>
    )
}

export default ProductDetail
import React from 'react'
import { Row, Col } from 'reactstrap';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import DiamondButton from '../../Common/Button/DiamondButton';
import CardProductAct from './CardProductAct';
import ArrowButton from './../../Common/Button/ArrowButton';

const CardProductList = ({ data }) => {
    return (
        <div>
            <Row className="flex">
                <Col lg={4} >
                    <div className="border !border-primary h-full flex items-center justify-center">
                        <img src={data.image} alt="" className='w-[160px] h-[160px]' />
                    </div>
                </Col>
                <Col lg={8} className="">
                    <h1 className="text-base font-medium mb-2">{data.name}</h1>

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
                        {data.price}
                    </div>
                    {/* descriptiom */}
                    <div className="">
                        <p className='text-sm text-gray-5 '>{data.description}</p>
                    </div>

                    <div className="flex items-center justify-between">
                        <ArrowButton/>
                        <div className="left-auto">
                            <CardProductAct />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CardProductList
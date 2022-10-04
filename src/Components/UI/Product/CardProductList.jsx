import React from 'react'
import { Row, Col } from 'reactstrap';
import { FaStar, FaShoppingCart } from 'react-icons/fa';
import CardProductAct from './CardProductAct';
import ArrowButton from './../../Common/Button/ArrowButton';

const CardProductList = ({ data }) => {
    return (
        <div className=' px-2 py-10 md:border-none md:px-0 md:py-0 md:border-transparent'>
            <Row className="flex">
                <Col md={5} lg={5} >
                    <div className="border  !border-primary h-full !px-5 py-6 md:flex items-center justify-center">
                            <img src={data.image} alt="" className='w-[160px] h-[160px] ml-auto mr-auto' />
                    </div>
                    {/* <div className=" h-full !px-5 py-6 flex items-center justify-center">
                        <img src={data.image} alt="" className='w-[160px] h-[160px]' />
                    </div> */}
                </Col>
                <Col md={7} lg={7} className="">
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

                    <div className="text-2xl !text-primary md:mb-6 mb-2">
                        {data.price}
                    </div>
                    <div className=" flex md:hidden items-center justify-between !mb-2">
                        <div className="md:left-auto">
                            <CardProductAct />
                        </div>
                    </div>
                    {/* descriptiom */}
                    <div className="mb-7">
                        <p className='text-xs normal-case leading-5 text-gray-5 font-normal  '>{data.description}</p>
                    </div>

                    <div className="md:flex items-center justify-between ">
                        <ArrowButton />
                        <div className="hidden  md:left-auto">
                            <CardProductAct />
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default CardProductList
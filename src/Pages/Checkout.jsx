import React, { useState } from 'react'
import { FaEdit, FaRegCalendarCheck } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
import { RectangleButton } from '../Components'

const Checkout = () => {
    const [checkoutStep, setCheckoutStet] = useState('1 checkout method');
    console.log(checkoutStep)
  return (
    <div className='mt-20 mb-14'>
        <Container>
            <Row>
                <Col sm={12}  lg={8}>
                    <div className="mb-[10px]">
                        <div className={`!p-5 border rounded-lg  ${checkoutStep.toLocaleLowerCase() === '1 checkout method' ? 'text-white !bg-primary': ''}`} >
                            <div className={`uppercase  block w-full`} onClick={(e) => setCheckoutStet(e.target.innerText)}>1 checkout method</div>
                        </div>
                        {
                            checkoutStep.toLocaleLowerCase() === '1 checkout method' && 
                            <Row className='mt-10 mb-[30px]'>
                                <Col lg={6} className="lg:mt-0">
                                    <h1 className="uppercase ">check out as guest or register</h1>
                                    <div className="mt-6 pt-7 border-t-2 border-c-1 mb-8">
                                            <h1 className="normal-case text-[15px] font-semibold  mb-1">Register with us for future convineience</h1>
                                            <div className="">
                                                <input type="radio" name="" id="" className="mr-2"/>
                                                <span className="font-medium normal-case text-sm text-gray-700">Checkout as Guest</span>
                                            </div>
                                            <div className="">
                                                <input type="radio" name="" id="" className="mr-2" />
                                                <span className="font-medium normal-case text-sm text-gray-700">Register</span>
                                            </div>
                                        </div>
                                    <div className="mb-7">
                                        <h1 className="normal-case text-[15px] font-semibold  mb-1">register and save time!</h1>
                                        <div className="">
                                            <p className="font-medium normal-case text-sm text-gray-700">register with us for future convineience:</p>
                                            <p className="font-medium normal-case text-sm text-gray-700">- checkout as guest</p>
                                            <p className="font-medium normal-case text-sm text-gray-700">- checkout as guest</p>
                                        </div>
                                    </div>
                                    <div className="">
                                        <RectangleButton text="continue"/>
                                    </div>
                                </Col>
                                <Col lg={6} className="lg:mt-0">
                                    <h1 className="uppercase">login</h1>
                                    <form action="" className="mt-6 pt-7 border-t-2 border-c-1">
                                        <h1 className="normal-case text-[15px] font-semibold mb-7">Already registered? <span className='text-gray-700'>Please login below</span></h1>
                                        <div className="!mb-5">
                                            <span className="font-medium text-[15px]">User Name:</span>
                                            <input type="text" className="border rounded-md outline-none h-10 !px-5 w-full font-normal" />
                                        </div>
                                        <div className="!mb-5">
                                            <span className="font-medium text-[15px]">Password:</span>
                                            <input type="text" className="border rounded-md outline-none h-10 !px-5 w-full font-normal" />
                                        </div>
                                        <div className="">
                                            <RectangleButton text="login" color={'!bg-primary'}/>
                                        </div>
                                    </form>
                                    <p className="mt-4 !text-primary font-medium">Forgot password</p>
                                </Col>
                            </Row>
                        }
                    </div>

                    <div className="mb-[10px]">
                        <div className={`!p-5 border rounded-lg  ${checkoutStep.toLocaleLowerCase() === '2 checkout method' ? 'text-white !bg-primary': ''}`}>
                            <h1 className="uppercase " onClick={(e) => setCheckoutStet(e.target.innerText)}>2 checkout method</h1>
                        </div>
                    </div>

                    <div className="mb-[10px]">
                        <div className={`!p-5 border rounded-lg  ${checkoutStep.toLocaleLowerCase() === '3 checkout method' ? 'text-white !bg-primary': ''}`}>
                            <h1 className="uppercase " onClick={(e) => setCheckoutStet(e.target.innerText)}>3 checkout method</h1>
                        </div>
                    </div>

                    <div className="mb-[10px]">
                        <div className={`!p-5 border rounded-lg  ${checkoutStep.toLocaleLowerCase() === '5 checkout method' ? 'text-white !bg-primary': ''}`}>
                            <h1 className="uppercase " onClick={(e) => setCheckoutStet(e.target.innerText)}>4 checkout method</h1>
                        </div>
                    </div>
                    
                </Col>
                <Col sm={12}  lg={4}>
                    <h1 className="uppercase  text-[#000] font-bold">checkout progress</h1>
                    <ul className="mt-6 pt-7 border-t-2 border-c-1">
                        <li className="flex items-center justify-between text-gray-3 mb-7">
                            <p className="text-sm">billing address</p>
                            <div className="flex items-center">
                                <div className="">
                                    <FaRegCalendarCheck/>
                                </div>
                                <div className="ml-4">
                                    <FaEdit/>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center justify-between text-gray-3 mb-7">
                            <p className="text-sm">billing address</p>
                            <div className="flex items-center">
                                <div className="">
                                    <FaRegCalendarCheck/>
                                </div>
                                <div className="ml-4">
                                    <FaEdit/>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center justify-between text-gray-3 mb-7">
                            <p className="text-sm">billing address</p>
                            <div className="flex items-center">
                                <div className="">
                                    <FaRegCalendarCheck/>
                                </div>
                                <div className="ml-4">
                                    <FaEdit/>
                                </div>
                            </div>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Checkout
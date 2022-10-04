import React from 'react'
import { FaMinus, FaPlus, FaSortDown, FaTimes, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { CartItem, RectangleButton, TitleWithArrow } from '../Components'
import { products } from '../Fakedata/products'

const Cart = () => {

  return (
    <div>
        <div>
           <Container>
                <Row >
                    <Col lg={12}>
                        {/* tablet pc */}
                        <div className="hidden lg:block overflow-auto max-h-[600px] w-full">
                            <table className='w-full tableCart border-separate border-spacing-y-4  '>
                                <thead className='!bg-primary text-white uppercase text-xs '>
                                    <tr className='bg-transparent'>
                                        <th className='p-[20px_15px] min-w-[600px]'> Product</th>
                                        <th className='p-[20px_15px] text-center min-w-[140px]'> Price</th>
                                        <th className='p-[20px_15px] text-center min-w-[80px]'> Quantity</th>
                                        <th className='p-[20px_15px] text-center min-w-[160px]'> Total</th>
                                        <th className='p-[20px_15px] min-w-14 '></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map((product, index) => (
                                        <tr key={index} className="!border-2 border-solid h-[160px]  border-c-4 table-body-item ">
                                            <td >
                                                <div className="flex items-center">
                                                    <div className="p-8">
                                                        <img src={product.image} alt="" className='w-12 h-12' />
                                                    </div>
                                                    <div className='whitespace-nowrap flex items-center'>
                                                        <h3 className="text-base mb-[2px] ">{product.name}</h3>
                                                        <p className="text-sm font-medium">Size: 150ml</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td ><div className="text-base font-semibold text-center">${product.price}</div></td>
                                            <td className='w-[130px]'>
                                                <div className="flex  border p-1 rounded-xl ">
                                                    <button className='px-2 py-2' ><FaPlus className='w-3 h-3 text-gray-800'/></button>
                                                    <input type="text" value="01" onChange={(e) => {}} className='outline-none w-full text-center text-lg !text-primary'  />
                                                    <button className='px-2 py-2' ><FaMinus className='w-3 h-3 text-gray-800' /></button>
                                                </div>
                                            </td>
                                            <td >
                                                <div className="text-center">$7.9</div>
                                            </td>
                                            <td >
                                                <div className=" p-2 cursor-pointer">
                                                    <FaTrashAlt className='w-auto h-auto mr-auto ml-auto' />
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        {/* end mobile */}

                        {/* mobile */}
                        <div className="mt-10 md:hidden">
                            <Row className=''>
                                {products.map((product, index) => ( 
                                <Col lg={12} key={index}>
                                    <CartItem product={product}/>
                                </Col>
                                ))}
                            </Row>
                        </div>
                        {/* end mobile */}


                        <div className=" mt-[45px] hidden md:flex">
                            <Link to={"/shop"}> 
                                <RectangleButton  text="continue shopping"/>
                            </Link>
                            <div className="flex ml-auto">
                                 <div className="">
                                    <RectangleButton  text="update cart" color={'!bg-primary'}/>
                                </div>
                                <div className="ml-3">
                                    <RectangleButton  text="proceed to checkout"/>
                                </div>            
                            </div>
                        </div>

                        <Row className="mt-[45px] md:hidden">
                            <Col  lg={12}>
                                <Link to={"/shop"}> 
                                    <RectangleButton className={'text-center bg-gray-darkest uppercase text-base px-3 font-normal leading-10 text-white rounded-md  block w-full'}  text="continue shopping"/>
                                </Link>
                            </Col>

                            <Col lg={12}>
                                <RectangleButton  className={'text-center !bg-primary uppercase text-base px-3 font-normal leading-10 text-white rounded-md  block w-full'} text="update cart" color={'!bg-primary'}/>
                            </Col>

                            <Col lg={12}>
                                <RectangleButton className={'text-center bg-gray-darkest uppercase text-base px-3 font-normal leading-10 text-white rounded-md  block w-full'}  text="proceed to checkout"/>
                            </Col>

                        </Row>

                    </Col>
                    <Col lg={12} className="mt-20">
                        <Row>
                           <Col xs={12} lg={4}>
                               <div className="mb-10">
                                    <TitleWithArrow text={'discount code'} textStyle={{fontSize: '30px'}}/>     
                               </div>
                               <div className="mb-7">
                                    <span className="!mb-3 block normal-case">Enter discount code if you have one</span>
                                    <input type="text" className="border rounded-lg outline-none h-10 !px-5 w-full font-normal" placeholder='Your code...' />
                               </div>
                               <div className="">
                                    <RectangleButton  text="apply your code" />
                                </div>
                           </Col> 
                           <Col xs={12} lg={4}>
                                <div className="mb-10">
                                    <TitleWithArrow text={'estimate shipping & tax'} textStyle={{fontSize: '30px'}}/>     
                               </div>
                               <span className="!mb-5 block normal-case">Enter discount code if you have one</span>
                               <div className="mb-7">
                                    <span className="!mb-3 block ">Country *</span>
                                    <div className="relative cursor-pointer">
                                        <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400" >Choose an option</div>

                                        <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
                                            <FaSortDown/>
                                        </div>
                                    </div>
                               </div>
                                    
                               <div className="mb-7">
                                    <span className="!mb-3 block ">State / Province</span>
                                    <div className="relative cursor-pointer">
                                        <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400" >Choose an option</div>
                                        <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
                                            <FaSortDown/>
                                        </div>
                                    </div>
                               </div>

                               <div className="mb-7">
                                    <span className="!mb-3 block ">Zip /Postal code</span>
                                    <div className="relative cursor-pointer">
                                        <div className="border rounded-lg outline-none leading-10 !px-5 w-full font-normal text-gray-400 " >Choose an option</div>
                                        <div className="absolute top-1/2 right-0 -translate-y-1/2 p-2 text-gray-3">
                                            <FaSortDown/>
                                        </div>
                                    </div>
                               </div>

                               <div>
                                    <RectangleButton  text="Get a quote" />
                                </div>
                           </Col>     
                                    
                           <Col xs={12} md={6} lg={4}>
                                <div className="mb-10">
                                    <TitleWithArrow text={'total'} textStyle={{fontSize: '30px'}}/>     
                               </div>
                               <div className="!mb-5 flex items-center justify-between">
                                    <span >Subtotal</span>
                                    <span className=" font-bold">$599.99</span>
                               </div>
                               <div className="!mb-5 flex items-center justify-between">
                                    <span className="text-lg ">Grand total</span>
                                    <span className="text-lg">$599.99</span>
                               </div>
                               <div  className="!mb-5 block">
                                    <Link to={'/checkout'}>
                                        <RectangleButton   text="check out" color={'!bg-primary'} />
                                    </Link>
                                </div>
                                <div className="!text-primary font-medium normal-case">Checkout with multiple address</div>
                           </Col>             
                        </Row>           
                    </Col>
                </Row>
           </Container>
        </div>
    </div>
  )
}

export default Cart
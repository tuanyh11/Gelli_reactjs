import React from 'react'
import { FaMinus, FaPlus, FaSortDown, FaTrash, FaTrashAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { RectangleButton, TitleWithArrow } from '../Components'
import { products } from '../Fakedata/products'

const Cart = () => {

  return (
    <div>
        <div>
           <Container>
                <Row >
                    <Col lg={12}>
                        <table className='w-full tableCart border-separate border-spacing-y-4'>
                            <thead className='!bg-primary text-white uppercase text-xs '>
                                <tr className='bg-transparent'>
                                    <th className='p-[20px_15px] flex-1 '> Product</th>
                                    <th className='p-[20px_15px] text-center'> Price</th>
                                    <th className='p-[20px_15px] text-center'> Quantity</th>
                                    <th className='p-[20px_15px] text-center'> Total</th>
                                    <th className='p-[20px_15px] '></th>
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
                                                <div >
                                                    <h3 className="text-base mb-[2px]">{product.name}</h3>
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
                        <div className="flex mt-[45px]">
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
                    </Col>
                    <Col lg={12} className="mt-20">
                        <Row>
                           <Col>
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
                           <Col>
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
                                    
                           <Col>
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
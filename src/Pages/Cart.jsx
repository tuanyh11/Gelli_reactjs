import React from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa'
import { Col, Container, Row } from 'reactstrap'
import { products } from '../Fakedata/products'

const Cart = () => {

  return (
    <div>
        <div>
           <Container>
                <Row >
                    <Col>
                        <table className='w-full tableCart border-separate border-spacing-y-4'>
                            <thead className='!bg-primary text-white uppercase text-xs '>
                                <tr className='bg-transparent'>
                                    <th className='p-[20px_15px] flex-1 '> Product</th>
                                    <th className='p-[20px_15px] '> Price</th>
                                    <th className='p-[20px_15px] '> Quantity</th>
                                    <th className='p-[20px_15px] '> Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {products.map((product, index) => (
                                    <tr key={index} className="!border-2 border-solid  border-c-4 table-body-item ">
                                        <td >
                                            <div className="p-[30px_25px] flex  ">
                                                <img src={product.image} alt="" className='w-12 h-12' />
                                                <div className="">
                                                    <h3 className="">{product.name}</h3>
                                                    <p className="">Size: 150ml</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td ><div className="p-[30px_25px]">${product.price}</div></td>
                                        <td >
                                            <div className="p-[30px_25px]">
                                                <button><FaPlus/></button>
                                                <input type="text" />
                                                <button><FaMinus/></button>
                                            </div>
                                        </td>
                                        <td >
                                            <div className="p-[30px_25px]">$7.9</div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>
           </Container>
        </div>
    </div>
  )
}

export default Cart
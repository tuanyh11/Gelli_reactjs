import currency from 'currency.js'
import React from 'react'
import { FaMinus, FaPlus,  FaTrashAlt } from 'react-icons/fa'
import { connect } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import { URL } from '../../api'
import { CartItem, RectangleButton } from '../../Components'
import { handleDelCartItem, handleSetQuantity } from '../../Redux/Slice/cartSlice'
import DiscoutCode from './DiscoutCode'
import EstimateShipping from './EstimateShipping'
import Total from './Total'

const Cart = ({cartItems, handleSetQuantity, handleDelCartItem}) => {
    const handleNumberQuantity = (e, product, indexCart) => {
        const maxiumQuantity = Number(product.product_meta.find((meta) => meta?.meta_field === 'quantity')?.meta_value)
        const currentQuantity = Number(e.target.value)
        if(/^[0-9]*$/.test(e.target.value) && currentQuantity <= maxiumQuantity &&  currentQuantity !== 0) {
            handleSetQuantity({quantity: Number(e.target.value), index: indexCart})
        }
        if( currentQuantity === 0) {
            if(window.confirm('The quantity is less than 1 do you want to delete this item?')) {
                handleDelCartItem(product.id)
            }
        }

        if(currentQuantity + 1 > maxiumQuantity) {
            alert(' Quantity is more than maximum quantity of product!')
        }
    }

    const handleIncrAndDecQuantity = (product, index, type) => {
        const maxiumQuantity = Number(product.product_meta.find((meta) => meta?.meta_field === 'quantity')?.meta_value)
        let currentQuantity = Number(product?.quantity)
        if(type === 'incr') {
            if(currentQuantity < maxiumQuantity) {
                handleSetQuantity({quantity: currentQuantity + 1, index}) 
            } else {
                alert(' Quantity is more than maximum quantity of product!')
            }
        } else {
            if( product.quantity > 1) {
                handleSetQuantity({quantity: currentQuantity - 1, index}) 
            }else {
                if(window.confirm('The quantity is less than 1 do you want to delete this item?')) {
                    handleDelCartItem(product.id)
                }
            }
        }
    }

    const handleDelItem = (product) => {
        if(window.confirm('are you sure you want to delete this item?')) {
            handleDelCartItem(product.id)
        }
    }

    const location = useLocation().pathname.split("/")[1]

  return (
    <div className='mt-[68px] mb-[60px]'>
        <div>
           <Container>
                    {cartItems.length === 0 ? 
                        <div className='text-center py-20'>
                            Your cart is empty :(
                        </div> :
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
                                        {cartItems.map((product, index) => (
                                            <tr key={product.id} className="!border-2 border-solid h-[160px]  border-c-4 table-body-item ">
                                                <td >
                                                    <div className="flex items-center">
                                                        <div className="p-8">
                                                            <img src={`${URL}/${product.media.url}`} alt="" className='w-12 h-12' />
                                                        </div>
                                                        <div className='whitespace-nowrap flex flex-col  '>
                                                            <h3 className="text-base mb-[2px] ">{product.name}</h3>
                                                            <p className="text-sm font-medium">Size: 150ml</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td ><div className="text-base font-semibold text-center">{product.price}</div></td>
                                                <td className='w-[130px]'>
                                                    <div className="flex  border p-1 rounded-xl ">
                                                        <button className='px-2 py-2' onClick={() => handleIncrAndDecQuantity(product, index, 'decs')} ><FaMinus className='w-3 h-3 text-gray-800' /></button>
                                                        <input type="text" value={product.quantity < 10 && product.quantity !== 0  ?  '0' + product.quantity : product.quantity } onChange={(e) => handleNumberQuantity(e, product, index)} className='outline-none w-full text-center text-lg !text-primary'  />
                                                        <button className='px-2 py-2' onClick={() => handleIncrAndDecQuantity(product, index, 'incr')}  ><FaPlus className='w-3 h-3 text-gray-800'/></button>
                                                    </div>
                                                </td>
                                                <td >
                                                    <div className="text-center">{currency(Number(product.price) * Number(product.quantity)).format()}</div>
                                                </td>
                                                <td >
                                                    <div className=" p-2 cursor-pointer" onClick={() => handleDelItem(product)}>
                                                        <FaTrashAlt className='w-auto h-auto mr-auto ml-auto' />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {/* end tablet pc */}

                            {/* mobile */}
                            <div className="mt-10 lg:hidden">
                                <Row className=''>
                                    {cartItems.map((product, index) => ( 
                                    <Col lg={12} key={index}>
                                        <CartItem product={product}/>
                                    </Col>
                                    ))}
                                </Row>
                            </div>
                            {/* end mobile */}


                            <div className=" mt-[45px] hidden md:flex">
                                <Link to={"/shop"} state={{oldPath: location === "" ? "home" : location}}> 
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
                                    <DiscoutCode/>
                            </Col> 
                            <Col xs={12} lg={4}>
                                    <EstimateShipping/>
                            </Col>     
                                        
                            <Col xs={12} md={6} lg={4}>
                                    <Total/>
                            </Col>             
                            </Row>           
                        </Col>
                    </Row>
                    }

           </Container>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    cartItems: state.cart.cart
})

const mapDispatchToProps = (dispatch) => ({
    handleSetQuantity: (data) => dispatch(handleSetQuantity(data)),
    handleDelCartItem: (id) => dispatch(handleDelCartItem({id}))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart) 
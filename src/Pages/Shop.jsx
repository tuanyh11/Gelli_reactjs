import React, { useState } from 'react'
import { FaAngleDown, FaBars, FaBuromobelexperte, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import { CardProductAct, DefaultProCard, DiamondButton } from '../Components'
import Dropdown from '../Components/UI/Dropdown'
import { products } from '../Fakedata/products'

const sortType = [
  {
    name: 'default',
  },
  {
    name: 'alphabetical A-Z',
  },
  {
    name: 'alphabetical Z-A',
  }
]

const showOptions = [
  3,
  18,
  24,
  30,
  36,
  42
]

const views = [
  {
    id:1,
    icon: <FaBuromobelexperte className=' w-4 h-4'/>
  },
  {
    id:2,
    icon: <FaBars className=' w-4 h-4'></FaBars>
  }
]

const renderHeaderSort = (value) => {
  return (
    <div className='flex items-center font-medium capitalize text-sm border border-b-c-1 cursor-pointer py-2 px-3 rounded-md' >
      <div className=''>sort by</div>
      <div className='h-6 w-[1px] bg-gray-400 mx-3'></div>
      <div className='flex items-center '>
        <span className="!text-primary font-bold limit w-20">{value}</span>
        <FaAngleDown className='ml-2'/>
      </div>
    </div>
  )
}

const renderHeaderShow = (value) => {
  return (
    <div className='flex items-center font-medium capitalize text-sm border border-b-c-1 cursor-pointer py-2 px-3 rounded-md' >
      <div className=''>show</div>
      <div className='h-6 w-[1px] bg-gray-400 mx-3'></div>
      <div className='flex items-center '>
        <span className="!text-primary font-bold limit w-5">{value}</span>
        <FaAngleDown className='ml-2'/>
      </div>
    </div>
  )
}

const renderHeaderView = (items,  handleOnClick, active) => {
  return (
    <div className='flex items-center font-medium capitalize text-sm border border-b-c-1 cursor-pointer py-2 px-3 rounded-md' >
      <div className=''>View as</div>
      <div className='h-6 w-[1px] bg-gray-400 mx-3'></div>
      <div className='flex items-center '>
        {items.map((view, index) => <div onClick={() => handleOnClick('viewAs', view)} className={`${active === index ? '!text-primary': ''} first:pr-2 last:pl-2`} key={index}>
          {view.icon}
        </div>)}
        
      </div>
    </div>
  )
}


const renderBodySort = (items,  handleOnClick, active) => {
  return (
    <ul className='text-start '>
      {items.map((item, index) => (
        <li
          className={`px-4 py-2 text-sm leading-[1] hover:!text-primary capitalize ${active === index && 'bg-gray-100'}`}
          key={index}
          onClick={(e) => handleOnClick('sort', item)}
        >
          {item.name}
          
        </li>
      ))}
    </ul>
  )
}

const renderBodyShow = (items,  handleOnClick, active) => {
  return (
    <ul className='text-start '>
      {items.map((item, index) => (
        <li
          className={`px-4 py-2 text-sm leading-[1] hover:!text-primary capitalize ${active === index && 'bg-gray-100'}`}
          key={index}
          onClick={(e) => handleOnClick('show', item)}
        >
          {item}
          
        </li>
      ))}
    </ul>
  )
}


const Shop = () => {

  const [action, setActions] =useState({
    sort: sortType[0].name,
    show: showOptions[0],
    viewAs: null
  })

  const handleSetActions = (type, value) => {
    if(type === 'sort') {
      setActions(pre => ({...pre, [type]: value.name}))
    }
    if(type === 'show') {
      setActions(pre => ({...pre, [type]: value}))
      if(Math.ceil(products.length / action.show) > currentPage) {
        setCurrentPage(1)
      }
    }

    if(type === 'viewAs') {
      setActions(pre => ({...pre, [type]: value.id}))
    
    }
  }

  var [currentPage, setCurrentPage] = useState(1)

  const range = Math.ceil(products.length / action.show)

  const pages = [...new Array(range).keys()]
  
  const handleSetPages = (page) => {
    setCurrentPage(Number(page) + 1) 
  }


  return (
    <div className='relative'>
       <div className='flex'>
          <button className='relative'>
            <Dropdown
            renderHeader={() => renderHeaderSort(action.sort)}
            renderBody={() => renderBodySort(sortType, handleSetActions, sortType.findIndex(item => item.name === action.sort))}
            />
          </button>
          <button className='relative ml-10'>
            <Dropdown
            renderHeader={() => renderHeaderShow(action.show)}
            renderBody={() => renderBodyShow(showOptions, handleSetActions, showOptions.findIndex(item => item === action.show))}
            />
          </button>
          <button className='relative ml-auto'>
            <Dropdown
            renderHeader={() => renderHeaderView(views, handleSetActions, views.findIndex(item => item.id === action.viewAs))}
            />
          </button>
       </div>

       <div className="mt-[50px] font-medium">
        <Row className=''>
          {products.map((product, index) => 
            action.viewAs === 1 ?
            <Col
              key={index}
              lg={4}>
              <DefaultProCard data={product} adapteHeightTop={false} adapteHeightBottom={false} /> 
            </Col>
             : 
            <Col key={index} lg={12} >
              <Row className="flex">
                <Col lg={4} >
                  <div className="border !border-primary h-full flex items-center justify-center">
                    <img src={product.image} alt="" className='w-[160px] h-[160px]' />
                  </div>
                </Col>
                <Col lg={8} className="">
                  <h1 className="text-base font-medium mb-2">{product.name}</h1>

                  {/* review  */}
                  <div className="flex items-center text-sm  mb-2">
                    <ul className="flex">
                      <li className="">
                        <FaStar/>
                      </li>
                      <li className="">
                        <FaStar/>
                      </li>
                      <li className="">
                        <FaStar/>
                      </li>
                      <li className="">
                        <FaStar/>
                      </li>
                      <li className="">
                        <FaStar/>
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

                  <div className="flex items-center justify-between">
                    <div className="flex  relative cursor-pointer">
                      <div className='absolute top-1 bottom-0 left-0'>
                        <DiamondButton
                        containerButton=" group !border-none"
                        button="!border-primary border p-2 bg-white  group-hover:!scale-[1.0] group-hover:!bg-white  origin-center"
                        >
                          {<FaShoppingCart className="!text-primary " />}
                        </DiamondButton>
                      </div>
                      <div className="flex items-center justify-center ml-4  py-[11px] uppercase !bg-primary rounded-md pl-9 pr-3 text-white">Add to cart</div>
                    </div>

                    <div className="left-auto">
                      <CardProductAct/>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          )}
        </Row>
       </div> 

      <div className="flex border-t-1 border-c-1 mt-10 pt-[10px] items-center">
        <div><p className="text-sm">{`showing ${products.length > 0 ? '1' : '0'}-${action.show} of ${products.length}`}</p></div>
        <ul className="flex items-center ml-auto ">
            {pages.map((page, index) => 
              <li onClick={() => handleSetPages(page)} className={`w-8 h-8 flex items-center justify-center text-sm  rounded-md transition mr-2 cursor-pointer ${currentPage === index + 1 ? '!bg-primary text-white' : 'bg-white'} border-1 border-c-1 leading-4 last:mr-0`} key={index}>
                {Number(page) + 1}
              </li>)
            }
        </ul>
      </div>

    </div>
  )
}

export default Shop
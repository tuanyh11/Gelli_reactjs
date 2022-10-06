import React, { useState } from 'react'
import { FaAngleDown, FaBars, FaBuromobelexperte, FaShoppingCart, FaStar } from 'react-icons/fa'
import { Col, Row } from 'reactstrap'
import { CardProductAct, CardProductList, DefaultProCard, DiamondButton } from '../Components'
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
      {/* tablet pc */}
       <div className='md:flex hidden'>
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
       {/* end tablet pc */}

      {/* mobile */}
       <Row className='md:hidden'>
          <Col sm={12} className='relative'>
            <Dropdown
            renderHeader={() => renderHeaderSort(action.sort)}
            renderBody={() => renderBodySort(sortType, handleSetActions, sortType.findIndex(item => item.name === action.sort))}
            />
          </Col>
          <Col sm={12} className='relative'>
            <Dropdown
            renderHeader={() => renderHeaderShow(action.show)}
            renderBody={() => renderBodyShow(showOptions, handleSetActions, showOptions.findIndex(item => item === action.show))}
            />
          </Col>
          <Col md={12} className='relative ml-auto'>
            <Dropdown
            renderHeader={() => renderHeaderView(views, handleSetActions, views.findIndex(item => item.id === action.viewAs))}
            />
          </Col>
       </Row>
       {/* end mobile */}

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
            <Col key={index} lg={12} className="mt-14 first:mt-0 md:first:mt-14" >
              <CardProductList data={product}/>
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
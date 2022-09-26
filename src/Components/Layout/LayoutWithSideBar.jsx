import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import PolicyAndBrand from '../Common/PolicyAndBrand'

const sidebarShopLabel = {
  label_sidebar_category: 'shop by categories',
  label_sidebar_manufacturers: 'manufacturers',
  label_sidebar_filter: 'filter by price',
  label_sidebar_compare: 'compare',
  label_sidebar_product_tag: 'product tag'
}

const categories = [
  {
    name: 'perfume',
  },
  {
    name: 'rollerballs & travel size', 
  },
  {
    name: 'lotions & oils',
  },
  {
    name: 'body mist & hair mist',
  }
]

const manufacturers = [
  {
    name: 'aerin',
  },
  {
    name: 'ateller', 
  },
  {
    name: 'calvin klein', 
  },
  {
    name: 'carven', 
  },
]

const LayoutWithSideBar = ({children}) => {
  const [left, setLeft] = useState(60)
  const [right, setRight] = useState(100)

  const leftRef = useRef()
  const rightRef = useRef()

  const handleFilterByPrice = (e) => {

    if(e.target.id === 'left') {
      leftRef.current.value = (e.target.value)
    } else {
      setRight(e.target.value)
    }
  }

  useEffect(() => {
    if(right - left <= 0) setLeft(right) 
    if(right - left <= 0) setRight(left) 
  }, [left, right])


  return (
    <div>
        <div></div>
        <Header/>
            <div className="mt-[70px]">
                {/* side bar */}
                <Container>
                  <Row>
                    <Col lg={3}>
                      <div className="">

                          <div className="">
                            <div className="">
                              <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_category}</h1>
                            </div>

                            <ul className="px-4 pt-6 pb-[70px]">
                              {categories.map((item, i) => (
                                <li className='uppercase font-medium text-13 mb-2 last:!mb-0' key={i}>
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="">
                            <div className="">
                              <h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_manufacturers}</h1>
                            </div>

                            <ul className="px-4 pt-6 pb-[70px]">
                              {manufacturers.map((item, i) => (
                                <li className='capitalize  font-medium text-13 mb-2 last:!mb-0 flex items-center' key={i}>
                                  <input type="checkbox" className='mr-2'/>
                                  {item.name}
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="">
                            <div className="relative flex h-4 p-4">
                              <span className=""></span>
                              <span className="block w-full h-2 bg-slate-600 absolute top-1/2 -translate-y-1/2 left-0"></span>
                              <span className="h-4 w-4 bg-blue-700 rounded-full block absolute top-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer" onMouseDown={(e) => console.log(e.clientX)} style={{left: left}}></span>
                              <span className="h-4 w-4 bg-blue-700 rounded-full block absolute top-1/2 -translate-x-1/2 -translate-y-1/2"  style={{right: right}} ></span>
                            </div>
                          </div>
                      </div>
                    </Col>
                    <Col lg={7}>
                      <div className="">
                          {children} 
                      </div> 
                    </Col>
                  </Row>
                </Container>
            </div>
        <PolicyAndBrand />
        <Footer/>
    </div>
  )
}

export default LayoutWithSideBar
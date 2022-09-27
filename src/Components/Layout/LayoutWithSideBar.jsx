import Slider,{Range} from 'rc-slider'
import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import PolicyAndBrand from '../Common/PolicyAndBrand'
import "rc-slider/assets/index.css";
// import Slider from '@mui/material/Slider';

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
  const [filterPrice, setFilterPrice] = useState({min: 0, max: 30})


  const handleFilterByPrice = (values) => {
    setFilterPrice({min: values[0], max: values[1]})
  }


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
                            <div><h1 className="text-start font-greatVibes text-2xl font-medium">{sidebarShopLabel.label_sidebar_manufacturers}</h1></div>
                            <div className="relative flex h-4 p-4">
                              <Slider 
                                 range
                                 min={0}
                                 max={100}
                                 step={0.01}
                                 value={[filterPrice.min, filterPrice.max]}
                                 allowCross={false}
                                 railStyle={{ background: "#e6e6e6", height: "5px" }}
                                 trackStyle={{ background: "#1BAFBF", height: "5px" }}
                                 onChange={handleFilterByPrice}
                              />
                              {/* <Range /> */}
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
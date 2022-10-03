import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Footer from '../Common/Footer'
import Header from '../Common/Header'
import PolicyAndBrand from '../Common/PolicyAndBrand'


const LayoutWithSideBar = ({children, positionSideBar = "left", SideBarElement, offPolicyAndBrand}) => {



  return (
    <div>
        <div></div>
        <Header/>
            <div className="mt-[70px]">
                {/* side bar */}
                <Container>
                  <Row>
                    {
                      positionSideBar === 'left' &&
                      <Col lg={3}>
                        <SideBarElement/>
                      </Col>
                    }
                    <Col lg={9}>
                      <div className="">
                          {children} 
                      </div> 
                    </Col>
                    {
                      positionSideBar === 'right' &&
                      <Col lg={3}>
                        <SideBarElement/>
                      </Col>
                    }
                  </Row>
                </Container>
            </div>
        {!offPolicyAndBrand && <PolicyAndBrand />}
        <Footer/>
    </div>
  )
}

export default LayoutWithSideBar
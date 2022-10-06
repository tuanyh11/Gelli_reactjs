import React from 'react'
import { Col, Row } from 'reactstrap'

const CardTestimon = ({data, vertical = true}) => {
  return (
    <div >
        <Row className='flex items-center'>
            <Col lg={vertical ? 5 : 12}>
                <div className="flex items-center">
                    <div className=" p-1 shrink-0">
                        <img src={data.avatar} alt="" className='w-[120px] h-[120px] mx-auto object-cover  rounded-full border-4 border-solid !border-primary' />
                    </div> 
                        <div className="ml-4 ">
                            <h2 className="text-sm !text-primary font-bold">{data.name}</h2>
                            <h2 className="text-sm font-medium text-gray-3">{data.rule}</h2>
                        </div>
                </div>
            </Col>

            <Col lg={vertical ? 7 : 12}>
                <div >
                    <p className='text-sm font-lato text-gray-2'>{data.content}</p>
                </div>
            </Col>
        </Row>
  </div>
  )
}

export default CardTestimon
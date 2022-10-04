import React from 'react'
import { Col, Row } from 'reactstrap'

const CardTestimon = ({data}) => {
  return (
    <div >
        <Row className='flex items-center'>
            <Col lg={4}>
                <div className="flex items-center">
                <div className=" p-1">
                    <img src={data.avatar} alt="" className='w-[120px] h-[120px] mx-auto object-cover  rounded-full border-4 border-solid !border-primary' />
                </div>
                <div className="ml-4 ">
                    <h2 className="text-sm !text-primary font-bold">{data.name}</h2>
                    <h2 className="text-sm font-medium text-gray-3">{data.rule}</h2>
                </div>
                </div>
            </Col>

            <Col lg={8}>
                <p className='text-sm font-lato text-gray-2'>{data.content}</p>
            </Col>
        </Row>
  </div>
  )
}

export default CardTestimon
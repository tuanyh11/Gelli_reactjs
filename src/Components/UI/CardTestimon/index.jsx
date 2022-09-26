import React from 'react'
import { Col, Row } from 'reactstrap'

const CardTestimon = ({data}) => {
  return (
    <div >
        <Row className='flex'>
            <Col lg={4}>
                <div className="flex items-center">
                <img src={data.avatar} alt="" className='w-[120px] h-[120px] object-cover rounded-full border-[3px] border-solid !border-primary' />
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
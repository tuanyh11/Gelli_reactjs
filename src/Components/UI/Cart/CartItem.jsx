import React from "react";
import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { Col, Row } from "reactstrap";

const CartItem = ({product}) => {
  return (
    <div className="shadow-lg p-4 py-5 bg-white relative rounded-md">
      <Row className="items-center">
        <Col xs={4}>
          <div className="">
            <img src={product.image} alt="" className="w-16 h-16" />
          </div>
        </Col>
        <Col xs={8}>
          <div className="">
            <h1 className="text-base normal-case mb-2">{product.name}</h1>
            <div className="text-sm mb-3">
              <div className="mb-1">
                price:
                <span className="text-xl ml-2">{product.price}</span>
              </div>
              <div>
                total:
                <span className="text-xl ml-2">{product.price}</span>
              </div>
            </div>
          </div>
          <div className="flex  border p-1 rounded-xl ">
            <button className="px-2 py-2">
              <FaPlus className="w-3 h-3 text-gray-800" />
            </button>
            <input
              type="text"
              value="01"
              onChange={(e) => {}}
              className="outline-none w-full text-center text-lg !text-primary"
            />
            <button className="px-2 py-2">
              <FaMinus className="w-3 h-3 text-gray-800" />
            </button>
          </div>
          <button className="absolute top-0 right-0 text-lg -translate-x-1/2 p-2 translate-y-1/2 ">
            <FaTimes />
          </button>
        </Col>
      </Row>
    </div>
  );
};

export default CartItem;

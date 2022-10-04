import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleLeft,
  FaAngleRight,
  FaFacebookF,
  FaGoogle,
  FaStar,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";
import ArrowButton from "../../Common/Button/ArrowButton";
import DiamondButton from "../../Common/Button/DiamondButton";
import Arrow from "../Arrow";
import Dropdown from "../Dropdown";
import CardProductAct from "./CardProductAct";

const renderHeaderSelectSize = (value) => {
  return (
    <div className="flex items-center text-center font-medium capitalize cursor-pointer">
      <div className="flex-1"></div>
      <div className=" text-base !text-primary">{value}</div>
      <div className="flex items-center flex-1 justify-end px-2 ">
        <FaAngleDown className="ml-2 " />
      </div>
    </div>
  );
};

const renderBodySelectSize = (items, handleOnClick, active) => {
  return (
    <ul className="text-start">
      {items.map((item, index) => (
        <li
          className={`px-4 py-2 text-sm leading-[1] hover:!text-primary capitalize  ${
            active === item.value && "bg-gray-100 !text-primary"
          }`}
          key={index}
          onClick={(e) => handleOnClick(item)}
        >
          {item.value}
        </li>
      ))}
    </ul>
  );
};

const settings = {
  dots: false,
  dotsClass: "slick-dots !flex product-detail-dots-custom",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: (
    <Arrow classContainer="absolute !translate-y-[-50%] -translate-x-[-57%]  bg-transparent absolute top-1/2 left-[0] cursor-pointer z-[999999]">
      <DiamondButton
        containerButton="!p-[0px]  border-transparent hover:!border-transparent container-button-second !rounded-md "
        button="!bg-white border-gray-4 group-hover:!border-primary  border-1 group-hover:!bg-white p-1 !rounded-md"
      >
        <FaAngleLeft className="w-3 h-3 text-gray-4 group-hover:text-primary default-transition !rounded-md" />
      </DiamondButton>
    </Arrow>
  ),
  prevArrow: (
    <Arrow classContainer="absolute !translate-y-[-50%] translate-x-[-60%]  bg-transparent absolute top-1/2 right-[0] cursor-pointer z-[999999]">
      <DiamondButton
        containerButton="!p-[0px] border-transparent hover:!border-transparent container-button-second  !rounded-md"
        button="!bg-white border-gray-4 group-hover:!border-primary border-1 group-hover:!bg-white  p-1 !rounded-md"
      >
        <FaAngleRight className="w-3 h-3 text-gray-4 group-hover:text-primary default-transition " />
      </DiamondButton>
    </Arrow>
  ),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

const CardProDetail = ({product}) => {
  const [imageProduct, setImageProduct] = useState(product.gallecy[0].url);
  const [selectSize, setSelectSize] = useState(product?.size[0]?.value);

  return (
    <div>
      <Row>
        <Col md={12} lg={6}>
          <div className="p-2 border-2">
            <img
              src={imageProduct}
              alt=""
              className=" w-full h-full lg:w-[410px] lg:h-[370px] "
            />
          </div>
          <Slider {...settings} className="mt-[30px] pl-[21px] pr-6">
            {product.gallecy.map((item, i) => (
              <div
                key={i}
                onClick={() => setImageProduct(item.url)}
                className="cursor-pointer "
              >
                <img
                  src={item.url}
                  alt=""
                  className="w-[110px] h-[100px] ml-auto mr-auto p-2 border"
                />
              </div>
            ))}
          </Slider>
        </Col>
        <Col lg={6}>
          <div>
            <h1 className="text-base font-semibold mb-2 capitalize ">
              {product.name}
            </h1>

            {/* review  */}
            <div className="flex items-center text-13 font-medium  mb-2">
              <ul className="flex">
                <li className="">
                  <FaStar />
                </li>
                <li className="">
                  <FaStar />
                </li>
                <li className="">
                  <FaStar />
                </li>
                <li className="">
                  <FaStar />
                </li>
                <li className="">
                  <FaStar />
                </li>
              </ul>
              <p className="leading-1 -mb-[1px] ml-3 ">1 review</p>
              <div className="w-[1px] h-3 mx-2 bg-gray-3"></div>
              <p className="font-semibold">add your review</p>
            </div>

            <div className="text-3xl !text-primary font-medium mb-6">
              {product.price}
            </div>
            {/* descriptiom */}
            <div className="!mb-6">
              <p className="text-xs normal-case leading-5 text-gray-5 font-normal ">
                {product.description}
              </p>
            </div>

            <div className="py-7 border-t-1 border-c-1">
              <div className="flex items-center mb-3">
                <h1 className="uppercase text-13">qty</h1>
                <div className="ml-[45px] flex items-center w-[150px] px-2 rounded-xl py-[10px] border justify-between">
                  <button className="px-2 h-full">-</button>
                  <input
                    value="01"
                    onChange={() => {}}
                    type="text"
                    className="text-center w-full outline-none text-base !text-primary"
                  />
                  <button className="px-2 h-full ">+</button>
                </div>
              </div>

              <div className="flex items-center">
                <h1 className="uppercase text-13">size</h1>
                <div className="ml-[45px] w-[150px] px-2 rounded-xl py-[10px] border relative  ">
                  <Dropdown
                    renderHeader={() => renderHeaderSelectSize(selectSize)}
                    renderBody={() =>
                      renderBodySelectSize(
                        product.size,
                        (item) => setSelectSize(item.value),
                        selectSize
                      )
                    }
                  />
                </div>
              </div>
            </div>

          {/* pc  */}
            <div className="hidden lg:flex items-center justify-between ">
              <ArrowButton />
              <div className="left-auto">
                <CardProductAct />
              </div>
            </div>
            {/* end pc */}

            {/* tablet mobile */}

            <Row className="flex lg:hidden items-center justify-between ">
              <Col lg={12} className="left-auto">
                <CardProductAct boxButtonStyle={"flex items-center justify-start"}/>
              </Col>
              <Col lg={12}>
                <ArrowButton textStyle={"w-full"} />
              </Col >
            </Row>
            {/* end tablet mobile */}


            <div className="flex items-center lg:mt-4 mt-8">
              <h1 className="uppercase text-13">share via</h1>
              <ul className="flex items-center ml-4">
                <li className="">
                  <FaFacebookF className="w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3" />
                </li>
                <li className="">
                  <FaGoogle className="w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3" />
                </li>
                <li className="">
                  <FaTwitter className="w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3" />
                </li>
                <li className="">
                  <FaTwitter className="w-3 h-3 mr-2 cursor-pointer hover:!text-primary text-gray-3" />
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CardProDetail;

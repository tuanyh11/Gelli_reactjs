import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import Slider from "react-slick";
import { Arrow, DefaultProCard, TitleWithArrow } from "../../Components";
import { products } from "../../Fakedata/products";

const RelatedProduct = () => {
  
    const productsRelatedSetting = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999]  bg-transparent absolute top-1/2 p-2 left-[10px] lg:left-[-30px] cursor-pointer"><FaAngleLeft className=' w-6 h-6'/></Arrow>,
        prevArrow: <Arrow classContainer="absolute !translate-y-[-140%] z-[99999999999] bg-transparent absolute top-1/2 p-2 right-[10px]  lg:right-[-30px] cursor-pointer"><FaAngleRight className="w-6 h-6" /></Arrow>,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
      }

  return (
    <div>
      <div className="flex justify-center">
        <TitleWithArrow
          text={"related products"}
          containerStyle="block "
          customArrow={() => (
            <div className="!mt-6 relative after:bg-black-1 after:rotate-45 after:left-1/2  pseudo-diamond top-0 after:-translate-y-1/2 after:-translate-x-1/2">
              <div className='after:top-0 after:h-[1px] after:bg-gradient-to-r after:w-1/2 after:right-0 after:content-[""] after:absolute after:from-black-1 after:to-gray-100 before:top-0 before:h-[1px] before:bg-gradient-to-l before:w-1/2 before:left-0 before:content-[""] before:absolute before:from-black-1 before:to-gray-100'></div>
            </div>
          )}
        />
      </div>
      <div className="mt-10">
        <Slider {...productsRelatedSetting} adaptiveHeight="true">
          {products.map((product, i) => (
            <div key={i} className="px-15">
              <DefaultProCard data={product} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedProduct;

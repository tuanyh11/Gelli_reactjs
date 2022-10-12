import React from "react";
import { Col, Row } from "reactstrap";
import { CardNews, CardTestimon, DiamondButton, Title } from "../../Components";
import home_title_image_1 from "../../Fakedata/images/home-title-img-1.png";
import Slider from "react-slick";
import couple_image from '../../Fakedata/images/Layer48.png'
import user_image from "../../Fakedata/images/Layer35.png";

const testimonialSettings = {
  dots: true,
  slidesToScroll: 1,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  appendDots: (dots) => <ul>{dots}</ul>,
  dotsClass: "container-dots container-dots-testimonial",

  customPaging(i) {
    return (
      <div className="w-4 h-4">
        <DiamondButton
          containerButton="w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[1px] "
          button="!bg-gray-bold p-[4px] group-hover:!bg-primary"
        />
      </div>
    );
  },
};

const testimonialTitle = {
  tile: "testimonials",
  image: home_title_image_1,
};

const testimonials = [
  {
    avatar: user_image,
    name: "John Smith",
    rule: "Customer",
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
      such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`,
  },
  {
    avatar: user_image,
    name: "John Smith",
    rule: "Customer",
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
      such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`,
  },
  {
    avatar: user_image,
    name: "John Smith",
    rule: "Customer",
    content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
      such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`,
  },
];


const coupleCollectionBanner  = {
  heading: 'couple',
  tileContent: 'collection',
  image: couple_image
}

const latestNewTitle = {
  tile: 'latest news',
  image: home_title_image_1
}


const NewAndTestimonialSection = () => {
  return (
    <div className="mt-[120px] mb-[100px]">
      <Row>
        <Col lg={12} xl={6} className="mt-28 md:mt-40 xl:hidden">
          <div className="h-full ">
            <div className="h-full">
              <div className="p-[140px_100px_140px_100px] md:p-[240px_100px_140px_100px] bg-[#f7f7f7] bg-no-repeat relative h-full">
                <div className="absolute top-[-13%] bottom-0 right-0 z-0 bg-no-repeat w-full inline-block">
                  <img
                    src={coupleCollectionBanner.image}
                    alt=""
                    className="h-full w-full bg-contain"
                  />
                </div>
                <div className="text-center h-full flex flex-col justify-center relative">
                  <h1 className="text-6xl md:text-[120px] uppercase font-bold text-white relative z-10">
                    {coupleCollectionBanner.heading}
                  </h1>
                  <h1 className="font-dry-brush hidden md:block  capitalize  !text-primary -mt-16 tracking-widest ml-[150px] text-[120px] relative z-10">
                    {coupleCollectionBanner.tileContent}
                  </h1>
                  <h1 className="font-dry-brush block md:hidden absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 lg:hidden text-4xl capitalize  !text-primary -mt-16 tracking-widest ml-[150px] md:text-[100px]  z-10">
                    {coupleCollectionBanner.tileContent}
                  </h1>
                  {/* font-dry-brush text-4xl capitalize absolute right-0 top-0 -translate-x-1/2 translate-y-full  !text-primary -mt-16 tracking-widest md:static md:translate-x-0  md:translate-y-0 */}
                </div>
              </div>
            </div>
          </div>
        </Col>

        <Col lg={12} xl={6}>
          <div className="px-[50px] lg:px-16 flex flex-col py-10">
            <div>
              <div className="mb-[50px] ">
                <Title text={latestNewTitle.tile} image={latestNewTitle.image} />
              </div>
              <Row>
                <Col sm={12} md={6} lg={6}>
                  <CardNews />
                </Col>
                <Col sm={12} md={6} lg={6}>
                  <CardNews />
                </Col>
              </Row>
            </div>
            <div>
              <div className="mt-[100px] mb-10">
                <Title
                  text={testimonialTitle.tile}
                  image={testimonialTitle.image}
                />
              </div>
              <Slider {...testimonialSettings}>
                {testimonials.map((item, i) => (
                  <CardTestimon data={item} key={i} />
                ))}
              </Slider>
            </div>
          </div>
        </Col>

        <Col lg={12} xl={6} className="hidden xl:block">
          <div className="h-full ">
            <div className="h-full">
              <div className="  bg-[#f7f7f7] bg-no-repeat relative h-full">
                <div className="absolute top-[-13%] bottom-0 right-0 translate-x-14 z-0 bg-no-repeat inline-block">
                  <img
                    src={coupleCollectionBanner.image}
                    alt=""
                    className="h-full"
                  />
                </div>
                <div className="text-center h-full flex flex-col justify-center relative">
                  <h1 className="text-6xl md:text-[120px] uppercase font-bold text-white relative z-10 tracking-widest ">
                    {coupleCollectionBanner.heading}
                  </h1>
                  <h1 className="font-dry-brush hidden md:block  capitalize  !text-primary -mt-8 tracking-widest translate absolute [transform:translate(-130px,50px)] left-1/2 text-[100px] top-1/2 z-10">
                    {coupleCollectionBanner.tileContent}
                  </h1>
                  <h1 className="font-dry-brush block md:hidden absolute right-0 bottom-0 translate-x-1/2 translate-y-1/2 lg:hidden text-4xl capitalize  !text-primary -mt-16 tracking-widest ml-[150px] md:text-[100px]  z-10">
                    {coupleCollectionBanner.tileContent}
                  </h1>
                  {/* font-dry-brush text-4xl capitalize absolute right-0 top-0 -translate-x-1/2 translate-y-full  !text-primary -mt-16 tracking-widest md:static md:translate-x-0  md:translate-y-0 */}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewAndTestimonialSection;

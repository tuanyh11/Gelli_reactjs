import React from "react";
import { Col, Container, Row } from "reactstrap";
import { Arrow, Banner, CardTestimon, DiamondButton, Title } from "../Components";
import slider_aboutus from "../Fakedata/images/silder-aboutus-1.png";
import home_title_image_1 from "../Fakedata/images/home-title-img-1.png";
import member_1 from "../Fakedata/images/ourteam-1.png";
import daily_title_image_1 from "../Fakedata/images/VectorSmartObject13.png";
import Slider from "react-slick";
import user_image from "../Fakedata/images/Layer35.png";
import { FaAngleLeft, FaAngleRight, FaFacebookF, FaGlobe, FaGoogle, FaTwitter } from "react-icons/fa";

const testimonialSettings = {
  dots: true,
  slidesToScroll: 1,
  speed: 500,
  slidesToShow: 1,
  arrows: false,
  appendDots: (dots) => <ul>{dots}</ul>,
  dotsClass: "container-dots dots-testimonial-aboutus",

  customPaging(i) {
    return (
      <div className="w-5 h-5">
        <DiamondButton
          containerButton="w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[2px] "
          button="!bg-gray-bold p-[4px] group-hover:!bg-primary"
        />
      </div>
    );
  },
};

const ourteamSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  appendDots: (dots) => <ul>{dots}</ul>,
  dotsClass: "container-dots dots-testimonial-aboutus",
  autoplaySpeed: 2000,
  customPaging(i) { 
    return (
      <div className="w-5 h-5">
        <DiamondButton
          containerButton="w-full h-full transition border-transparent hover:!border-primary container-button-second !p-[2px] "
          button="!bg-gray-bold p-[4px] group-hover:!bg-primary"
        />
      </div>
    );
  },
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

const AboutUs = () => {
  return (
    <div>
      <section>
        <div
          className="pt-[970px] bg-[#f7f7f7] bg-no-repeat lg:[background-position:100%_0] md:[background-position:100%_0]  relative bg-center bg-cover "
          style={{ backgroundImage: `url(${slider_aboutus})` }}
        >
          <Container className="absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2">
            <div className="relative ">
              <h1 className="text-5xl text-center font-bold leading-loose uppercase relative inline-block z-10">
                remember this! <br /> we are{" "}
                <span className="font-dragon text-9xl leading-[0.3] md:text-[300px] z-[-1]  !text-primary normal-case font-thin md:absolute top-0 md:-translate-y-[37%] -right-[16%]">
                  Gelli
                </span>
              </h1>
              <div className=" lg:translate-x-28 lg:w-[650px] ">
                <p className="mt-16 text-start  text-base xl:text-gray-700    font-semibold">
                  WSL2 changed the file sharing protocol, from using their own
                  custom developed protocol using the 9P protocol, which does
                  not support file changes event for Create React App.WSL2
                  changed the file sharing protocol, from using their own custom
                  developed protocol using the 9P protocol, which does not
                  support file changes event for Create React App.WSL2 changed
                  the file sharing protocol, from using their own custom
                  developed protocol using
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      <Container fluid={""} className="my-28">
        <div lg={12} className="mb-12">
          <Title text={"Our team"} image={home_title_image_1} />
        </div>
        <Slider {...ourteamSetting} className="mx-[-15px]">
          {[...new Array(10).keys()].map((item, i) => (
              <div key={i} className="px-[15px] ">
                <div className="relative group">
                  <div className="relative z-10">
                    <img
                      src={member_1} 
                      alt="" 
                      className="w-full h-[355px] border-1 border-c-1 object-cover  group-hover:border-[3px] group-hover:!border-primary"
                    />
                  </div>
                  <div className="after:content-['']  after:absolute after:top-0 after:bottom-0 after:left-0 after:right-0 after:!bg-primary after:flex after:justify-center after:opacity-[0.325] after:z-0 group-hover:after:z-[99999] after:transition-all">
                      <div className="absolute bottom-0 left-0 right-0 top-0 z-1 group-hover:z-[999999999] flex-col flex items-center justify-center">
                        <h2 className="text-xl font-normal normal-case !mb-5  !text-white opacity-100">Let's connect guys</h2>
                        <ul className="flex items-center w-full justify-center">
                          <li className="text-2xl mr-8 text-white relative after:content-[''] after:absolute after:-bottom-1/2 after:left-0 after:w-0 after:transition-[width] after:duration-500 hover:after:w-full after:h-[3px] after:bg-white ">
                            <FaFacebookF className="  cursor-pointer  " />
                          </li>
                          <li className="text-2xl mr-8 text-white relative after:content-[''] after:absolute after:-bottom-1/2 after:left-0 after:w-0 after:transition-[width] after:duration-500 hover:after:w-full after:h-[3px] after:bg-white ">
                            <FaGoogle className="  cursor-pointer  " />
                          </li>
                          <li className="text-2xl mr-8 text-white relative after:content-[''] after:absolute after:-bottom-1/2 after:left-0 after:w-0 after:transition-[width] after:duration-500 hover:after:w-full after:h-[3px] after:bg-white ">
                            <FaTwitter className="  cursor-pointer  " />
                          </li>
                          <li className="text-2xl  text-white relative after:content-[''] after:absolute after:-bottom-1/2 after:left-0 after:w-0 after:transition-[width] after:duration-500 hover:after:w-full after:h-[3px] after:bg-white ">
                            <FaTwitter className=" cursor-pointer  " />
                          </li>
                        </ul>
                      </div>
                  </div>
                </div>

                <div className="text-center py-6">
                  <h1 className="!text-primary text-xl ">Tuan Leo</h1>
                  <p className="text-sm text-gray-600 uppercase">Leader</p>
                </div>
              </div>
          ))}
        </Slider>

        <Row className="item-center mt-24">
          <Col lg={6}>
            <div className="">
              <div className="flex items-center mb-9">
                <Title text={"daily deals"} />
                <div className="ml-5 flex-1 flex items-center">
                  <img src={daily_title_image_1} alt="" />
                  <div className="w-full h-[2px] bg-c-1"></div>
                </div>
              </div>
              <Slider {...testimonialSettings}>
                {testimonials.map((item, i) => (
                  <CardTestimon vertical={false} data={item} key={i} />
                ))}
              </Slider>
            </div>
          </Col>
          <Col lg={6} className="mt-28 lg:mt-[30px]">
            <div className="">

              <div className="flex items-center mb-9">
                <Title text={"daily deals"} />
                <div className="ml-5 flex-1 flex items-center">
                  <img src={daily_title_image_1} alt="" />
                  <div className="w-full h-[2px] bg-c-1"></div>
                </div>
              </div>

              <div className="">
               <Row>
                 {[...new Array(4).keys()].map((item, i) =>
                  <Col sm={12} md={6}  lg={6} key={i} className="!mb-5">
                    <div className="">
                      <div className="flex  items-center">
                          <div className="w-[70px] h-[70px] flex-shrink-0 ml-3">
                            <DiamondButton
                              containerButton=" w-full h-full !border-0 !text-primary  !rounded-md"
                              button="border-[#e1e1e1] border !border-primary p-2 bg-white  transition !rounded-md  "
                            >
                              <FaGlobe className="w-8 h-8 !text-primary" />
                            </DiamondButton>
                          </div>

                          <div className="text-start ml-6">
                            <h1 className="leading-7 !text-primary">
                              {'free shipping'}
                            </h1>
                            <p className=" text-sm">{'free ship over the world'}</p>
                          </div>
                        </div>
                    </div>
                    </Col>
                )}
               </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutUs;

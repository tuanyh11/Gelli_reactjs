import React from "react";
import {
  FaComment,
  FaUser,
  FaFacebookF,
  FaGoogle,
  FaTwitch,
  FaWeibo,
} from "react-icons/fa";
import { Col, Row } from "reactstrap";
import {
  CardBlog,
  DiamondButton,
  RectangleButton,
  Review,
  TitleWithArrow,
} from "../Components";
import blog_img_1 from "../Fakedata/images/blog-1.png";
import user_image from "../Fakedata/images/Layer35.png";

const blog = {
  title: "Tac hai cua ruou bia",
  tags: [
    {
      name: "Collections",
    },
    {
      name: "jewelry",
    },
    {
      name: "premium",
    },
    {
      name: "rings",
    },
    {
      name: "perfume",
    },
  ],
  author: "Tuan Leo",
  image: blog_img_1,
  content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged`,
};

const testimonial = {
  avatar: user_image,
  name: "John Smith",
  rule: "Customer",
  content: `We and our partners store and/or access information on a device, such as cookies and process personal data, 
  such as unique identifiers and standard information sent by a device for personalised ads and content, ad and content measurement,`,
};

const BlogDetail = () => {
  return (
    <div className="mb-[90px]">
      {/* blog */}
      <div className="">
        <CardBlog blog={blog} />
      </div>

      <div className="py-[60px] mt-[30px] border-t-1 border-c-1">
        <Row className="flex items-center">
          <Col lg={3}>
            <div className="flex items-center">
              <div className=" p-1">
                <img
                  src={testimonial.avatar}
                  alt=""
                  className="w-[160px] h-[160px] mx-auto object-cover  rounded-full border-[5px] border-solid !border-primary"
                />
              </div>
            </div>
          </Col>

          <Col lg={8}>
            <div className="ml-3">
              <div className="text-start !mb-5">
                <h2 className="text-sm !text-primary font-bold">
                  {testimonial.name}
                </h2>
                <h2 className="text-sm font-medium text-gray-3">
                  {testimonial.rule}
                </h2>
              </div>
              <p className="text-sm font-lato text-gray-2">
                {testimonial.content}
              </p>
              <ul className="flex -ml-4 mt-3">
                <li className="w-10 h-10 mr-2">
                  <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                  >
                    {
                      <FaFacebookF className="text-gray-500 group-hover:text-white" />
                    }
                  </DiamondButton>
                </li>
                <li className="w-10 h-10 mr-2">
                  <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                  >
                    {
                      <FaGoogle className="text-gray-500 group-hover:text-white" />
                    }
                  </DiamondButton>
                </li>
                <li className="w-10 h-10 mr-2">
                  <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                  >
                    {
                      <FaTwitch className="text-gray-500 group-hover:text-white" />
                    }
                  </DiamondButton>
                </li>

                <li className="w-10 h-10 mr-0">
                  <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                  >
                    {
                      <FaWeibo className="text-gray-500 group-hover:text-white" />
                    }
                  </DiamondButton>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </div>

      {/* comment */}
      <div>
        <div className="">
          <TitleWithArrow text={"1 Comment"} />
          <div className="mt-10">
            <Review />
          </div>
          <div className="mt-8">
            <div className="mb-3">
              <TitleWithArrow
                arrowStyle={"diamond relative flex-1 ml-3 h-[1px] bg-gray-300"}
                text={"lave your review"}
              />
            </div>

            <div className="">
              <p className="text-13 text-gray-3 font-normal normal-case mb-[30px]">
                Your email address with not be published. Required field are
                marked
              </p>
              <Row action="" className="flex " tag={"form"}>
                <Col lg={5}>
                  <div className="flex flex-col ">
                    <span className="text-sm font-medium mb-1">Your name</span>
                    <input
                      type="text"
                      className="outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full"
                    />
                  </div>

                  <div className="flex flex-col mt-[30px]">
                    <span className="text-sm font-medium mb-1">Address</span>
                    <input
                      type="email"
                      className="outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full"
                    />
                  </div>

                  <div className="flex flex-col mt-[30px]">
                    <span className="text-sm font-medium mb-1">Website</span>
                    <input
                      type="text"
                      className="outline-none border !py-3 px-2 rounded-lg text-xs font-semibold w-full"
                    />
                  </div>
                </Col>

                {/* input review */}

                <Col className="flex flex-col " lg={5}>
                  <span className="text-sm font-medium mb-1">Review</span>
                  <textarea
                    name=""
                    id=""
                    cols={50}
                    className="resize-none outline-none border rounded-lg p-2 h-full text-xs font-medium"
                    placeholder="your review..."
                  ></textarea>
                </Col>

                <Col lg={6}>
                  <RectangleButton text={"submit"} />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

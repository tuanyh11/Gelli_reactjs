import React from "react";
import { Col, Row } from "reactstrap";
import { RectangleButton, Review, TitleWithArrow } from "../../Components";

const ReviewSection = () => {
  return (
    <div className="">
      <TitleWithArrow text={"1 Review"} />
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
            Your email address with not be published. Required field are marked
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
  );
};

export default ReviewSection;

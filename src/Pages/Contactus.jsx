import React from "react";
import { Col, Container, Row } from "reactstrap";
import { RectangleButton } from "../Components";

const Contactus = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={6}>
            <form action="" className="mt-6 pt-7">
              <div className="!mb-5">
                <span className="font-medium text-[15px]">User Name:</span>
                <input
                  type="text"
                  className="border rounded-md outline-none h-10 !px-5 w-full font-normal"
                />
              </div>
              <div className="!mb-5">
                <span className="font-medium text-[15px]">Email address*:</span>
                <input
                  type="text"
                  className="border rounded-md outline-none h-10 !px-5 w-full font-normal"
                />
              </div>

              <div className="!mb-5">
                <span className="font-medium text-[15px]">Website:</span>
                <input
                  type="text"
                  className="border rounded-md outline-none h-10 !px-5 w-full font-normal"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-medium mb-1">Message</span>
                <textarea
                  name=""
                  id=""
                  cols={50}
                  rows={8}
                  className="resize-none outline-none border rounded-lg p-2 h-full text-xs font-medium"
                ></textarea>
              </div>
              <div className="mt-8">
                <RectangleButton text="submit" color={"!bg-primary"} />
              </div>
            </form>
          </Col>
          <Col lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;

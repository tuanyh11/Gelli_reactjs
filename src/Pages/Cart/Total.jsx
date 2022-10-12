import React from "react";
import { Link } from "react-router-dom";
import { RectangleButton, TitleWithArrow } from "../../Components";

const Total = () => {
  return (
    <div>
      <div className="mb-10">
        <TitleWithArrow text={"total"} textStyle={{ fontSize: "30px" }} />
      </div>
      <div className="!mb-5 flex items-center justify-between">
        <span>Subtotal</span>
        <span className=" font-bold">$599.99</span>
      </div>
      <div className="!mb-5 flex items-center justify-between">
        <span className="text-lg ">Grand total</span>
        <span className="text-lg">$599.99</span>
      </div>
      <div className="!mb-5 block">
        <Link to={"/checkout"}>
          <RectangleButton text="check out" color={"!bg-primary"} />
        </Link>
      </div>
      <div className="!text-primary font-medium normal-case">
        Checkout with multiple address
      </div>
    </div>
  );
};

export default Total;

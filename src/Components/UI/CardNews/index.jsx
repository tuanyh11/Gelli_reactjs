import React from "react";
import { Link } from "react-router-dom";

const CardNews = () => {
  return (
    <div className="border-2 border-solid border-c-2 hover:!border-primary p-2 group default-transition">
      <div className="border-[1px] border-solid border-transparent group-hover:!border-primary !px-5 !py-5 default-transition">
        <h2 className="text-13 font-bold mb-2">16 jun 2015</h2>
        <h2 className="!text-primary mb-7 text-base">
          We and our partners store and/or access
        </h2>
        <div className="">
          <p className="text-gray-2 text-13">
            We and our partners store and/or access information on a device,
            such as cookies and process personal data, such as unique
            identifiers and standard information sent by a device for
            personalised ads and content, ad and content measurement,
          </p>
        </div>
        <div className="flex ">
          <Link className="ml-auto uppercase" to={"/"}>
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardNews;

import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to={'/'} className="flex items-center">
      <div className="">
        <h1 className="-translate-y-1/2 font-medium leading-[0.4] text-[110px] font-dragon  !text-primary ">
            Gelli
          </h1>
      </div>
      <p className="ml-3 text-c-2 text-[13px] uppercase font-medium hidden lg:block">
        premium template
      </p>
    </Link>
  );
};

export default Logo;

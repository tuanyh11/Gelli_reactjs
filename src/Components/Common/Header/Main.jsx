import React, { useState } from "react";
import { FaBars, FaSearch, FaShoppingBasket } from "react-icons/fa";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { Container } from "reactstrap";
import Dropdown from "../../UI/Dropdown";
import Bars from "./Bars";
import Logo from "./Logo";
import SearchBox from "./SearchBox";



const Main = ({cartLength}) => {

  const location = useLocation().pathname.split("/")[1]

  return (
    <div className="py-9 border-b border-c-2 h-[120px] text-13">
      <Container>
        <div className="flex items-center justify-between">
          <Bars className={" block lg:hidden"} />
          <Logo />
          <SearchBox responsive={'md:hidden lg:flex'}/>

          <Link to="/cart" className="flex items-center" state={{oldPath: location === "" ? "home" : location}}>
            <div className="cursor-pointer relative p-2">
              <FaShoppingBasket className="text-[33px] text-dark " />
              <div className="absolute top-1 -right-2 text-white min-w-[18px] text-xs font-medium flex justify-center h-[18px] leading-[18px] text-center  !bg-primary rounded-[50%]">
                {cartLength}
              </div>
            </div>

            {/* tablet display */}

            <div className="w-[2px] h-[40px] mx-4 bg-b-1 ml-2 hidden lg:block"></div>
            <div className="text-13 hidden lg:block">
              <p className="normal-case text-xs">{cartLength > 1 ? `${cartLength} Item` : `${cartLength} Item(s)`} </p>
              <span className="!text-primary text-[15px] font-bold">$12500</span>
            </div>
          </Link>
        </div>
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartLength: state.persistData.cart.length
})

export default connect(mapStateToProps)(Main) ;

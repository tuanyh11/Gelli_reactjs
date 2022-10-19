import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Logo = ({logo}) => {
  return (
    <Link to={logo?.url} className="flex items-center">
      <div className="">
        <h1 className="-translate-y-1/2 font-medium leading-[0.4] text-[110px] font-dragon  !text-primary ">
            {logo?.title}
          </h1>
      </div>
      {/* <div className="ml-3 text-c-2 text-[13px] uppercase font-medium hidden lg:block" dangerouslySetInnerHTML={{__html: logo?.description}}/> */}
    </Link>
  );
};


const mapStateToProps = (state) => ({
  logo: state.ui.data?.setting?.info?.logo ? state.ui.data?.setting?.info?.logo : {}
})

export default connect(mapStateToProps)(Logo);

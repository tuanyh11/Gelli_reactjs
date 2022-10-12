import React, { useState } from "react";
import { useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import Dropdown from "../../UI/Dropdown";

const renderBody = (items, handleOnClick) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          onClick={() => handleOnClick(item)}
          className="hover:!text-primary default-transition px-4 cursor-pointer text-sm py-2 hover:"
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

const categories = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "categories",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "perfume",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "rollerballs & travel size",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "lotions & oils",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "body mist & hair mist",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "bath & shower",
  },
];


const SearchBox = ({responsive, categories}) => {
  const [category, setCategory] = useState('Categories');

  const handleOnClick = (item) => {
    setCategory(item.name);
  };


  return (
    <form className={`items-center relative h-[45px] leading-[2.692] !px-4 border border-b-1 rounded-xl w-[414px]  hidden ${responsive ? responsive : ''}`}>
      <div className="">
        <Dropdown
          renderBody={() => renderBody(categories, handleOnClick)}
          value={category}
          style={{ text: "w-[80px] limit !text-primary" }}
          
        />
      </div>
      <div className="w-[1px] h-[12px] block bg-b-1 ml-2 bg-slate-300 "></div>

      <div className="">
        <div className="flex items-center flex-1">
          <input
            type="text"
            className="outline-0 px-3 w-full text-13 font-medium placeholder-c-3"
            placeholder="Enter your keywords"
          />
          <FaSearch className="" />
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state, ownProps) => {
  return ({
    categories: state.ui.data?.categories ? state.ui.data?.categories : [],
    ...ownProps
  })
}

export default connect(mapStateToProps)(SearchBox);

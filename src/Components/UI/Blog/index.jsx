import React from "react";
import { FaComment, FaFacebookF, FaGoogle, FaTwitch, FaUser, FaWeibo } from "react-icons/fa";
import { Link } from "react-router-dom";
import DiamondButton from "../../Common/Button/DiamondButton";
import RectangleButton from "../../Common/Button/RectangleButton";

const Blog = ({ blog, offTag, showReadMore, limitText, limit = 200 }) => {
  const text = limitText ? blog.content.substring(0, limit) + '...' : blog.content
  return (
    <div>
      <div
        className="relative pt-[500px] w-full bg-[center_center] bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${blog.image})` }}
      >
        <div className="absolute bottom-0 left-0 translate-y-1/2 w-[60px] h-[60px]  translate-x-5">
          <DiamondButton
            containerButton="!w-full !h-full !border-none "
            button="!bg-primary p-2 bg-white default-transition origin-center !rounded-md"
          >
            {
              <div className=" !text-white text-center flex flex-col text-13">
                <span className="text-xl leading-1">20</span>
                Mar
              </div>
            }
          </DiamondButton>
        </div>
      </div>
      <div className="flex ml-24 mt-3 text-gray-700">
        <div className="flex items-center mr-12">
          <FaUser />
          <span className="normal-case text-sm ml-2">By {blog.author}</span>
        </div>
        <div className="flex items-center">
          <FaComment />
          <span className="normal-case text-sm ml-2">{1} Comnent</span>
        </div>
      </div>

      {/* blog */}
      <div className="">
        <h1 className="py-7 text-2xl normal-case">{blog.title}</h1>
        <div className="text-sm mb-7">
          <p className="">
            {text}
          </p>
        </div>
        {showReadMore && 
          <Link to={"/blog/1"}>
            <RectangleButton text={"read more"} />
          </Link>
        }
      </div>

      {!offTag && 
        <div className="mt-[50px] flex justify-between">
            <ul className="flex items-center flex-wrap mr-4">
            <li className="mr-5 text-teal-900 ">TAG</li>
            {blog.tags.map((item, i) => (
                <li
                key={i}
                className="p-2 border mr-3 text-sm  border-b-c-1 rounded-md mb-2 "
                >
                {item.name}
                </li>
            ))}
            </ul>
            <ul className="flex ">
            <li className="mr-5 text-teal-900  h-10 flex items-center">SHARE</li>
                <li className="w-10 h-10 mr-2">
                    <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                    >
                    {<FaFacebookF className="text-gray-500 group-hover:text-white" />}
                    </DiamondButton>
                </li>
                <li className="w-10 h-10 mr-2">
                    <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                    >
                    {<FaGoogle className="text-gray-500 group-hover:text-white" />}
                    </DiamondButton>
                </li>
                <li className="w-10 h-10 mr-2">
                    <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                    >
                    {<FaTwitch className="text-gray-500 group-hover:text-white" />}
                    </DiamondButton>
                </li>

                <li className="w-10 h-10 mr-0">
                    <DiamondButton
                    containerButton="!w-full !h-full  group !border-none"
                    button="!border-primary  group-hover:!bg-primary  bg-white default-transition  origin-center"
                    >
                    {<FaWeibo className="text-gray-500 group-hover:text-white" />}
                    </DiamondButton>
                </li>
            </ul>
        </div>
      } 


    </div>
  );
};

export default Blog;

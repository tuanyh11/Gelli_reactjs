import React, { useState } from "react";
import { FaComment, FaUser } from "react-icons/fa";
import { Col, Row } from "reactstrap";
import { DiamondButton, RectangleButton, Review, TitleWithArrow, CardBlog } from "../Components";
import blog_img_1 from "../Fakedata/images/blog-1.png";

const blog = {
    title: "Tac hai cua ruou bia",
    tags: [
        {
            name: 'Collections'
        },
        {
            name: 'jewelry'
        },
        {
            name: 'premium'
        },
        {
            name: 'rings'
        },
        {
            name: 'perfume'
        }
    ],
    author: 'Tuan Leo', 
    image: blog_img_1,
    content: `Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book. It has survived not
    only five centuries, but also the leap into electronic typesetting,
    remaining essentially unchanged`
}

const Blog = () => {
  const [currentPage, setCurrentPage] = useState();
  const blogs = [...new Array(8)]
  const pages = [...new Array(Math.ceil(blogs.length / 3)).keys()]
  const handleSetPages = (page) => {
    setCurrentPage(Number(page) + 1) 
  }

  return (
    <div className="mb-[90px]">
      <div className="">
        {blogs.slice(0, 3).map((i, index) => 
          <div key={index} className="mb-[60px]">
            <CardBlog blog={blog} offTag={true}/>
          </div>
        )}
      </div>
      <div className="flex border-t-1 border-t-c-1 ">
        <ul className="flex items-center ml-auto  pt-3">
              {pages.map((page, index) => 
                <li onClick={() => handleSetPages(page)} className={`w-8 h-8 flex items-center justify-center text-sm  rounded-md transition mr-2 cursor-pointer ${currentPage === index + 1 ? '!bg-primary text-white' : 'bg-white'} border-1 border-c-1 leading-4 last:mr-0`} key={index}>
                  {Number(page) + 1}
                </li>)
              }
        </ul>
      </div>
    </div>
  );
};

export default Blog;

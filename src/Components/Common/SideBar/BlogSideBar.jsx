import React from "react";
import { FaSearch } from "react-icons/fa";
import blog_img_1 from '../../../Fakedata/images/blog-2.png'
import TitleWithArrow from "../../UI/Title/TitleWithArrow";

const sidebarBlogLabel = {
  label_sidebar_blog_search: "Search",
  label_sidebar_blog_cate: "Categories",
  label_sidebar_blog_recent: "recent posts",
  label_sidebar_blog_archives: "archives",
  label_sidebar_blog_tag: "tag",
};

const categories = ["Travel", "About Men", "About Men womens", "others"];

const blog = 
    {
        image: blog_img_1,
        createdAt: new Date().toLocaleDateString('en-GB', {month:'short',  day: '2-digit', year: 'numeric'}),
        title: 'Tac hai cua ruoi bia'
    }
    const blogTags = [
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
    ]

const BlogSideBar = () => {
  return (
    <div>
      <div className="">
        <TitleWithArrow text={sidebarBlogLabel.label_sidebar_blog_search} />
        <ul className="pt-[30px] pb-[70px] !pl-5">
          <div className="flex items-center flex-1 border  px-3  !py-3 rounded-lg">
            <input
              type="text"
              className="outline-0 w-full text-13 font-medium placeholder-c-3"
              placeholder="Enter your keywords"
            />
            <FaSearch className="" />
          </div>
        </ul>
      </div>

      <div className="">
        <TitleWithArrow text={sidebarBlogLabel.label_sidebar_blog_cate} />

          <ul className="pl-5 pt-6 pb-[70px] ">
            {categories.map((item, i) => (
              <li
                className="capitalize font-medium text-base mb-2 last:!mb-0"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
      </div>

      <div className="">
        <TitleWithArrow text={sidebarBlogLabel.label_sidebar_blog_recent} />
        <div className=" pt-6 pl-5 pb-[70px] flex flex-wrap">
            {[...new Array(4).keys()].map((item, i) => 
                <div  key={i} className="!mb-5 last:mb:-0" >
                    <div className='flex group' >
                        <div className="mr-[10px]">
                            <img src={blog.image} alt="" className="w-[100px] h-[90px] object-cover !border-1 border-c-1 group-hover:!border-primary" />
                        </div>
                        <div className="">
                            <span className="text-sm !text-primary" >{blog.createdAt}</span>
                            <p className="text-base normal-case">{blog.title}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
      </div>

      <div className="">
        <TitleWithArrow text={sidebarBlogLabel.label_sidebar_blog_archives} />

        <ul className="pl-5 pt-6 pb-[70px] ">
            {categories.map((item, i) => (
              <li
                className="capitalize font-medium text-base mb-2 last:!mb-0"
                key={i}
              >
                {item}
              </li>
            ))}
          </ul>
      </div>

      <div className="">
        <TitleWithArrow text={sidebarBlogLabel.label_sidebar_blog_tag} />

        <ul className=" pt-6 pb-[70px] flex flex-wrap">
                {blogTags.map((item, i) => <li key={i} className='p-2 border mr-3 mb-2 text-sm  border-b-c-1 rounded-md' >{item.name}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default BlogSideBar;

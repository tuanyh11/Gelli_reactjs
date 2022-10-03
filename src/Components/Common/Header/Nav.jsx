import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Dropdown from "../../UI/Dropdown";
import OffLayer from "../OffLayer";
import { useHeaderContext } from "./Context";
import Logo from "./Logo";
import SearchBox from "./SearchBox";

const pages = [
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "home",
    path: "home",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "categories",
    path: "shop",
    items: [
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
    ],
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "our blog",
    path: "blog",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "faq",
    path: "faq",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    name: "contact us",
    path: "contact_us",
  },
];

const social = [
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaFacebookF className="w-[14px] h-[14px]" />,
    url: "https://www.facebook.com",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaGooglePlusG className="w-[20px] h-[20px]" />,
    url: "https://www.facebook.com",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaTwitter className="w-[14px] h-[14px]" />,
    url: "https://www.facebook.com",
  },
  {
    id: Math.random().toString(36).substr(2, 9),
    icon: <FaLinkedinIn className="w-[14px] h-[14px]" />,
    url: "https://www.facebook.com",
  },
];

const renderHeader = (value, page, location) => (
  <div
    className={`flex items-center cursor-pointer w-auto `}
  >
  <NavLink 
    to={'/shop'}
    className={({ isActive }) =>
    `${
      isActive || page.path === location.state?.path
        ? "!text-primary"
        : ""
    }  text-2xl font-semibold  py-1 block`
  }
  >
    {value}
  </NavLink>
  <div className="p-2 s">
    <FaAngleDown className="ml-2" />
  </div>
</div>
)

const renderBody = (items, handleOnClick) => {
  return (
    <ul>
      {items.map((item) => (
        <li
          onClick={() => handleOnClick(item)}
          className="capitalize font-medium default-transition px-4 text-[#444444] hover:!text-primary cursor-pointer text-sm py-2 "
          key={item.id}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};



const Nav = () => {
  const [category, setCategory] = useState("Categories");
  const [isOffLayer, setIsOffLayer] = useState(true);
  const [activeNav, setActiveNav] = useHeaderContext();
  const handleOnClick = (item) => {
    setCategory(item.name);
  };

  const navRef = useRef();
  const timeRef = useRef();

  const location = useLocation();

  useEffect(() => {
    const handleDectection = (e) => {
        if(!navRef.current.contains(e.target)) {
          
          navRef.current.classList.remove('active')
          handleHiddenSidebar()
        }
    }

    if(navRef.current ) {
      var timeId = setTimeout(() => {
        navRef.current.classList.toggle('active')
      })
      window.addEventListener('mousedown',  handleDectection)
    }

   return () => {
    clearTimeout(timeId)
    window.removeEventListener('mousedown',  handleDectection)
   }
  }, [activeNav, navRef, setActiveNav])

  const handleHiddenSidebar = () => {
      timeRef.current = setTimeout(() => setActiveNav(pre => !pre), 300);
      navRef.current.classList.remove('active')
  }

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current)
    }
  }, [timeRef.current])


  return (
    <>
    {/* pc lg */}
      <div className="border-b hidden  lg:block border-c-1 ">
        <Container>
          <div className="flex items-center justify-between md:flex-col md:py-2 lg:flex-row leading-[78px]">
            {/* nav */}
            <ul className="flex relative">
              {pages.map((item) => {
                if (item.items) {
                  return (
                    <li
                      className="uppercase px-[14px] text-13 font-bold  "
                      key={item.id}
                    >
                      <Dropdown
                        value={item.name}
                        renderBody={() => renderBody(item.items, handleOnClick)}
                      />
                    </li>
                  );
                }
                return (
                  <li
                    className="uppercase px-[14px] text-13 font-bold "
                    key={item.id}
                  >
                    <NavLink to={"/"}>{item.name}</NavLink>
                  </li>
                );
              })}
            </ul>

            {/* social  */}
            <ul className="flex items-center  lg:!pt-0">
              {social.map((item) => (
                <li key={item.id} className="px-[14px]">
                  <a href={item.url}>{item.icon}</a>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
  
    {/* pc tablet md */}
      {activeNav && isOffLayer && (
        <OffLayer>
          <div
            ref={navRef}
            className="absolute top-0 w-[80%] bottom-0 left-0 right-0 bg-[#ffffff]   ease-linear transition-all duration-300 sidebar "
          >
            <div className="">
              <div className="flex justify-center py-6 pl-5 pr-12">
                <Logo />
              </div>

              <div className="flex mt-10 justify-center">
                <SearchBox/>
              </div>

              <ul className="pt-10 !px-5">
                {pages.map((page) => {
                  if (page.items) {
                    return (
                      <li
                        className="relative  text-2xl font-semibold my-4"
                        key={page.id}
                      >
                          <Dropdown
                            value={page.name}
                            style={{header: 'text-2xl'}}
                            renderHeader={() => renderHeader(page.name, page, location)}
                            renderBody={() =>
                              renderBody(page.items, handleOnClick)
                            }
                          />
                      </li>
                    );
                  }
                  return (
                    <li key={page.id}>
                      <NavLink
                        to={`/${page.path}`}
                        className={({ isActive }) =>
                          `${
                            isActive || page.path === location.state?.path
                              ? "!text-primary"
                              : ""
                          }  text-2xl font-semibold my-4 py-1 block`
                        }
                      >
                        {page.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </div>
            <button
              className="absolute top-0 right-0 -translate-x-6 text-lg translate-y-1/2 !p-4"
              onClick={() => handleHiddenSidebar()}
            >
              <FaTimes />
            </button>
          </div>
        </OffLayer>
      )}
    </>
  );
};

export default Nav;

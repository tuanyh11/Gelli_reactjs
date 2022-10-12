import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  FaAngleDown,
  FaFacebookF,
  FaGooglePlusG,
  FaLinkedinIn,
  FaTimes,
  FaTwitter,
} from "react-icons/fa";
import { connect } from "react-redux";
import { Link, NavLink, useLocation, useParams } from "react-router-dom";
import { Container } from "reactstrap";
import Dropdown from "../../UI/Dropdown";
import OffLayer from "../OffLayer";
import { useHeaderContext } from "./Context";
import Logo from "./Logo";
import SearchBox from "./SearchBox";


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
  <div className="p-2 " id="angle-down" >
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
          <NavLink
            to={`/shop/${item.name}`}
          >
            {item.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};



const Nav = ({listMenu, listCategories, listSocial}) => {
  const [category, setCategory] = useState("Categories")
  const [isOffLayer, setIsOffLayer] = useState(false)
  const [activeNav, setActiveNav] = useHeaderContext()
  const handleOnClick = (item) => {
    setCategory(item.name);
  };

  const navRef = useRef()
  const timeRef = useRef()

  const location = useLocation()

  const handleHiddenSidebar = () => {
    timeRef.current = setTimeout(() => {
      setActiveNav(pre => !pre)
    }, 300);
    navRef.current.classList.remove('active')
  }


  useEffect(() => {
    const handleDectection = (e) => {
        if(!navRef.current.contains(e.target)) {
          navRef.current.classList.remove('active')
          handleHiddenSidebar()
        }
    }

    if(navRef.current) {
      var timeId = setTimeout(() => {
        navRef.current.classList.toggle('active')
      })
      window.addEventListener('mousedown',  handleDectection)
    }

   return () => {
    clearTimeout(timeId)
    window.removeEventListener('mousedown',  handleDectection)
   }

  }, [activeNav, navRef])
  
  useEffect(() => {
    if(activeNav) {
      handleHiddenSidebar()
    }
  }, [location.pathname])

  useEffect(() => {
    return () => {
      clearTimeout(timeRef.current)
    }
  }, [timeRef.current])


  return (
    <>
    {/* pc lg */}
      <div className="border-b-2 hidden  lg:block border-c-1 ">
        <Container>
          <div className="flex items-center justify-between md:flex-col  lg:flex-row ">
            {/* nav */}
            <ul className="flex relative">
              {listMenu.map((page, i) => {
                if (page.name === 'categories') {
                  return (
                    <li
                      className="uppercase px-[14px] text-13 font-bold relative  after:w-0 hover:after:!w-5 after:default-transition after:content-['']  after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[3px] after:!bg-primary"
                      key={i}
                    >
                      <Dropdown
                        value={page.name}
                        renderBody={() => renderBody(listCategories, handleOnClick)}
                        style={{container: 'hover:!text-primary', text: 'leading-[60px]'}}
                      />
                    </li>
                  );
                }
                return (
                  <li
                    className="uppercase px-[14px]  text-13 font-bold relative  after:w-0 hover:after:w-5 after:default-transition  after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2  after:h-[3px] after:!bg-primary "
                    key={i}
                  >
                    <NavLink to={page.url} className="leading-[60px]">{page.name}</NavLink>
                  </li>
                );
              })}
            </ul>

            {/* social  */}
            <ul className="flex items-center  lg:!pt-0">
              {listSocial.map((item, i) => (
                <li key={i} className="px-[14px]">
                  <a href={item.url} dangerouslySetInnerHTML={{__html: item.icon}}/>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </div>
  
    {/* pc tablet md mobile*/}
      {activeNav && (
        <OffLayer>
          <div
            ref={navRef}
            className="absolute top-0 w-[80%] bottom-0 left-0 right-0 bg-[#ffffff]   ease-linear transition-all duration-300 sidebar "
          >
            <div className="">
              <div className="flex justify-center py-6 pl-5 pr-12 lg:flex'">
                <Logo />
              </div>

              <div className="flex mt-10 justify-center ">
                <SearchBox responsive={' md:flex lg:flex'}/>
              </div>

              <ul className="pt-10 !px-5">
                {listMenu.map((page, i) => {
                  if (page.items) {
                    return (
                      <li
                        className="relative  text-2xl font-semibold my-4"
                        key={i}
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
                    <li key={i}>
                      <NavLink
                        onClick={() => setIsOffLayer(!isOffLayer)}
                        to={`/${page.url}`}
                        className={({ isActive }) =>
                          `${
                            isActive || page.url === location.state?.path
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

                          {/* social  */}
              <ul className="flex items-center justify-center mt-10 lg:!pt-0">
                {social.map((item) => (
                  <li key={item.id} className="px-[14px]">
                    <a href={item.url}>{item.icon}</a>
                  </li>
                ))}
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

const mapStateToProps = (state) => {
  
 return ({
    listMenu: state.ui.data.setting?.list_menu ? JSON.parse(`[${state.ui.data.setting.list_menu}]`) : [],
    listSocial: state.ui.data.setting?.list_social ? JSON.parse(`[${state.ui.data.setting.list_social}]`) : [],
    listCategories: state.ui.data?.categories ? state.ui.data?.categories : []
  })
} 

export default connect(mapStateToProps)(Nav);

import React, { useState } from "react";
import { FaEllipsisH, FaEllipsisV, FaFilter, FaTimes } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import DiamondButton from "../Common/Button/DiamondButton";
import Footer from "../Common/Footer";
import Header from "../Common/Header";
import OffLayer from "../Common/OffLayer";
import PolicyAndBrand from "../Common/PolicyAndBrand";

const LayoutWithSideBar = ({
  children,
  positionSideBar = "left",
  SideBarElement,
  offPolicyAndBrand,
}) => {
  const [showSideBar, setShowSideBar] = useState(false);
  const location = useLocation()
  const path = location.pathname.split("/")[1]
  
  return (
    <div>

      {showSideBar && (
        <OffLayer>
          <div className="absolute top-0 w-[90%] right-0 bg-white overflow-y-scroll h-full">
            <div className="p-4 ">
              {path === 'shop' &&
                <div className="text-center text-xl mb-3 font-semibold">
                  <h1>Filter by</h1>
                </div>
              }
              {path === 'blog' &&
                <div className="text-center text-xl mb-3 font-semibold">
                  <h1>Blog Sidebar</h1>
                </div>
              }

              {path === 'product' &&
                <div className="text-center text-xl mb-3 font-semibold">
                  <h1>product Sidebar</h1>
                </div>
              }
              <SideBarElement />
              <button
                onClick={() => setShowSideBar((pre) => !pre)}
                className="absolute top-0 right-0 text-lg -translate-x-1/2 p-2 translate-y-1/2 "
              >
                <FaTimes />
              </button>
            </div>
          </div>
        </OffLayer>
      )}


      <Header />
      <div className="mt-[70px]">
        {/* side bar */}
        <Container>
          <Row>
            {positionSideBar === "left" && (
              <Col lg={3} className="hidden lg:block">
                <SideBarElement />
              </Col>
            )}
            {
              <Col lg={12} className="lg:hidden">
                <div className="flex ">
                  <div
                    className="ml-auto flex items-center"
                    onClick={() => setShowSideBar((pre) => !pre)}
                  >
                    {path === 'shop' &&
                      <div className="flex items-center">
                        <DiamondButton
                          containerButton="!w-full !h-full group "
                          button="!border-primary border p-2 !bg-primary default-transition group-hover:!bg-primary origin-center"
                        >
                          {<FaFilter className=" !text-white" />}
                        </DiamondButton>
                      </div>
                    }
                    {path === 'blog' &&
                      <div className="flex items-center">
                        <DiamondButton
                          containerButton="!w-full !h-full group "
                          button="!border-primary border p-2 !bg-primary default-transition group-hover:!bg-primary origin-center"
                        >
                          {<FaEllipsisV className=" !text-white" />}
                        </DiamondButton>
                      </div>
                    }
                    {path === 'product' &&
                      <div className="flex items-center">
                        <DiamondButton
                          containerButton="!w-full !h-full group "
                          button="!border-primary border p-2 !bg-primary default-transition group-hover:!bg-primary origin-center"
                        >
                          {<FaEllipsisV className=" !text-white" />}
                        </DiamondButton>
                      </div>
                    }
                  </div>
                </div>
              </Col>
            }

            <Col md={12} lg={9}>
              <div className="">{children}</div>
            </Col>
            {positionSideBar === "right" && (
              <Col lg={3} className="hidden lg:block">
                <SideBarElement />
              </Col>
            )}
          </Row>
        </Container>
      </div>
      {!offPolicyAndBrand && <PolicyAndBrand />}
      <Footer />
    </div>
  );
};

export default LayoutWithSideBar;

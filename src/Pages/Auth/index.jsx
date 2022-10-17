import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Auth = () => {
  const pathName = useLocation().pathname.split("/")[1].toLowerCase();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [showPassword, setShowPassword] = useState(false)

  const isRegister = pathName === "register";

  return (
    <div>
      <div className="relative  h-[100vh]">
        <div className="absolute left-1/2  py-[80px] w-[660px] px-[75px] border rounded-md bg-white top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <form className="">
            <div className="flex items-center justify-center ">
              <Link
                to={"/login"}
                className={`mr-12 text-3xl uppercase ${
                  pathName === "login" ? "!text-primary" : "text-gray-600"
                }`}
              >
                Login
              </Link>
              <Link
                to={"/register"}
                className={`mr-12 text-3xl uppercase ${
                  isRegister ? "!text-primary" : "text-gray-600"
                }`}
              >
                Register
              </Link>
            </div>
            <div className="mt-[70px]">
              {isRegister && (
                <div className="flex flex-col !mb-5">
                  <span className="text-sm font-medium mb-1">name</span>
                  <input
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="name"
                    value={dataForm.name}
                    type="text"
                    className="outline-none  border !py-3 px-3 rounded-md text-sm"
                  />
                </div>
              )}
              <div className="flex flex-col !mb-5">
                <span className="text-sm font-medium mb-1">Email</span>
                <input
                  onChange={(e) =>
                    setDataForm({
                      ...dataForm,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="email"
                  value={dataForm.email}
                  type="text"
                  className="outline-none  border !py-3 px-3 rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col !mb-5">
                <span className="text-sm font-medium mb-1">password</span>
                <input
                  onChange={(e) =>
                    setDataForm({
                      ...dataForm,
                      [e.target.name]: e.target.value,
                    })
                  }
                  name="password"
                  value={dataForm.password}
                  
                  type={showPassword ? "text" : "password" }
                  className="outline-none  border !py-3 px-3 rounded-md text-sm"
                />
              </div>

              {isRegister && (
                <div className="flex flex-col ">
                  <span className="text-sm font-medium mb-1">
                    confirm password
                  </span>
                  <input
                    onChange={(e) =>
                      setDataForm({
                        ...dataForm,
                        [e.target.name]: e.target.value,
                      })
                    }
                    name="password_confirmation"
                    value={dataForm.password_confirmation}
                    type={showPassword ? "text" : "password" }
                    className="outline-none  border !py-3 px-3 rounded-md text-sm"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center !mt-5">
                  <input type="checkbox" name="" id="" onChange={() => setShowPassword(pre => !pre)} />
                  <span className="text-sm font-medium ml-3">
                    Show password
                  </span>
                </div>
                <div className="flex items-center !mt-5">
                  <input type="checkbox" name="" id="" />
                  <span className="text-sm font-medium ml-3">Remember Me</span>
                </div>
              </div>
            </div>
            <div className="">
              <button className="block w-full text-white transition rounded-md mt-6 h-[55px] !bg-primary opacity-80 hover:opacity-100 capitalize">
                {isRegister ? "register" : "login"}
              </button>
            </div>

            {!isRegister && (
              <div className="mt-6 text-base">Lost your password ?</div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

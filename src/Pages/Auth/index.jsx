
import { text } from "@fortawesome/fontawesome-svg-core";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { login, register, startCompleteRegister, startLogin, startRegister } from "../../Redux/Slice/authSlice";
import VerifyError from "./VeryfyError";

const Auth = ({loginAct, registerAct, completeRegister, userIf}) => {
  const pathName = useLocation().pathname.split("/")[1].toLowerCase();

  const nav = useNavigate()

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "" 
  });

  const [error, setError] = useState({})

  const [showPassword, setShowPassword] = useState(false)

  const [isSubmit, setIsSubmit] = useState(false)

  const isRegister = pathName === "register";

  const isLogin = pathName === 'login'

  useEffect(() => {
    if(Object.values(error ? error: {}).length === 0 && isSubmit) {
        if(isRegister) 
          registerAct(dataForm)
        
        if(isLogin) 
          loginAct(dataForm)
        
    }
    setIsSubmit(false)  
  }, [isSubmit])

  useEffect(() => {
   setError(null)
  }, [pathName])

  useEffect(() => {
    if(userIf.user && isRegister) nav('/login')

    if(isLogin && userIf.user?.register_code) {
      nav('/complete_register')
    }
    if(userIf.user?.email_verified_at && isLogin)
      nav('/')
  }, [userIf.user])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(isLogin) {
      for (const key in {email: dataForm.email, password: dataForm.password}) {
        VerifyError(key, setError, dataForm)
      }
    }

    if(isRegister) {
      for (const key in dataForm) {
        VerifyError(key, setError, dataForm)
      }
    }

    setIsSubmit(true)
  }


  const handleOnChange = (e) => {
    if(error?.[e.target.name]) {
        delete error[e.target.name]
    }
    setDataForm({
      ...dataForm,
      [e.target.name]: e.target.value,
    })
  }
  


  return (
    <div>
      <div className="relative  h-[100vh]">
        <div className="absolute left-1/2  py-[80px] w-[660px] px-[75px] border rounded-md bg-white top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <form className="" onSubmit={(e) => handleOnSubmit(e)}>
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
                  {error?.name && <p className="text-xs mb-1 text-red-500">{error.name}</p>} 
                  <input
                    onChange={handleOnChange}
                    name="name"
                    value={dataForm.name}
                    type="text"
                    className="outline-none  border !py-3 px-3 rounded-md text-sm"
                  />
                </div>
              )}
              <div className="flex flex-col !mb-5">
                <span className="text-sm font-medium mb-1">Email</span>
                {error?.email && <p className="text-xs mb-1 text-red-500">{error.email}</p>} 
                <input
                  onChange={handleOnChange}
                  name="email"
                  value={dataForm.email}
                  type="text"
                  className="outline-none  border !py-3 px-3 rounded-md text-sm"
                />
              </div>

              <div className="flex flex-col !mb-5">
                <span className="text-sm font-medium mb-1">password</span>
                {error?.password && <p className="text-xs mb-1 text-red-500">{error.password}</p>} 
                <input
                  onChange={handleOnChange}
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
                {error?.password_confirmation && <p className="text-xs mb-1 text-red-500">{error.password_confirmation}</p>} 
                  <input
                    onChange={handleOnChange}
                    name="password_confirmation"
                    value={dataForm.password_confirmation}
                    type={showPassword ? "text" : "password" }
                    className="outline-none  border !py-3 px-3 rounded-md text-sm"
                  />
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center !mt-5">
                  <input type="checkbox" name=""  onChange={() => setShowPassword(pre => !pre)} />
                  <span className="text-sm font-medium ml-3">
                    Show password
                  </span>
                </div>
                <div className="flex items-center !mt-5">
                  <input type="checkbox" name=""  />
                  <span className="text-sm font-medium ml-3">Remember Me</span>
                </div>
              </div>
            </div>
            <div className="">
              
                <button className="block w-full text-white transition rounded-md mt-6 h-[55px] !bg-primary opacity-80 hover:opacity-100 capitalize">
                    {`${isRegister ? 'register' : 'login'}`}
                </button>
            </div>

            {isLogin && (
              <div className="mt-6 text-base">Lost your password ?</div>
            )}

            {isRegister && (
              <Link to="/complete_register" className=" block mt-6 text-base">Already register Complete rigister ?</Link>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginAct: (data) => dispatch(startLogin(data)),
    registerAct: (data) => dispatch(startRegister(data)),
    completeRegister: (data) => dispatch(startCompleteRegister(data))
  }
}

const mapStateToProps = (state) => {
  return {
    userIf: state.persistData.user
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);

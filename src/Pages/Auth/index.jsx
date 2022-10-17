
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { login, register } from "../../Redux/Slice/authSlice";

const Auth = ({loginAct, registerAct}) => {
  const pathName = useLocation().pathname.split("/")[1].toLowerCase();

  const [dataForm, setDataForm] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState({})

  const [showPassword, setShowPassword] = useState(false)

  const [isSubmit, setIsSubmit] = useState(false)

  const isRegister = pathName === "register";

  useEffect(() => {
    if(Object.values(error ? error: {}).length === 0 && isSubmit) {
        if(isRegister) {
          registerAct(dataForm)
        }
    }
    setIsSubmit(false)  
  }, [isSubmit])

  useEffect(() => {
   setError(null)
  }, [pathName])

  const handleOnSubmit = (e) => {
    e.preventDefault()
    if(!dataForm.email && !dataForm.name && !dataForm.password && !dataForm.password_confirmation  && isRegister) {
        setError({...error, 
            name: "name is required ",
            email: "email is required",
            password: "password is required",
            password_confirmation: "password confirm is required",
        })
    }

    if(!dataForm.email  && !dataForm.password) {
        setError(pre => ({...pre, 
            email: "email is required",
            password: "password is required"
        }))
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/).test(dataForm.email)) {
        setError( 
            pre => ({
            ...pre,
            email: "incorrect email"
        }))
    }

    if(dataForm.password !== dataForm.password_confirmation && isRegister) {
        setError(pre => ({...pre, password_confirmation: "password and confirm password not match"}))
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

const mapDispatchToProps = (dispatch) => {
  return {
    loginAct: (data) => dispatch(login()),
    registerAct: (data) => dispatch(register({payload: data})),
  }
}

export default connect(null, mapDispatchToProps)(Auth);

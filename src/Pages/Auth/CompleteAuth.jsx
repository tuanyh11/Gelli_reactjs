import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { startCompleteRegister } from "../../Redux/Slice/authSlice";

const CompleteAuth = ({ completeRegister, userIf }) => {
  const [code, setCode] = useState();
  const [error, setError] = useState();

  const nav = useNavigate()
  useEffect(() => {
    if(userIf.user.email_verified_at) 
        nav('/')
  }, [userIf.user])
 
  return (
    <div>
      <div className="flex flex-col !mb-5">
        <span className="text-sm font-medium mb-1">code</span>
        {error?.name && (
          <p className="text-xs mb-1 text-red-500">{error.name}</p>
        )}
        <input
          onChange={(e) => setCode(e.target.value)}
          name="name"
          value={code}
          type="text"
          className="outline-none  border !py-3 px-3 rounded-md text-sm"
        />
      </div>
      <button onClick={() => completeRegister({code, user_id: userIf.user.id, email: userIf.user.email})} className="block w-full text-white transition rounded-md mt-6 h-[55px] !bg-primary opacity-80 hover:opacity-100 capitalize">
        {"complete register"}
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    completeRegister: (data) => dispatch(startCompleteRegister(data)),
  };
};

const mapStateToProps = (state) => {
    return {
      userIf: state.persistData.user
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(CompleteAuth);

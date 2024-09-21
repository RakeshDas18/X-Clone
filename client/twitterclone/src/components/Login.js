import React, { useState } from "react";
import axios from "axios";
import {USER_API_END_POINT} from "./../utils/constant.js"
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if(isLogin){
      try {
        const res = await axios.post(`${USER_API_END_POINT}/login`, {email, password}, {
          headers:{
            'Content-type':"application/json"
          },
          withCredentials:true
        })
        if(res.data.success){
          setIsLogin(true)
          navigate("/")
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.success(error.response.data.message)
      }

    } else {
      try {
        const res = await axios.post(`${USER_API_END_POINT}/register`, {name, username, email, password}, {
          headers : {
            'Content-type':"application/json"
          },
          withCredentials:true
        })
        if(res.data.success){
          toast.success(res.data.message)
        }
      } catch (error) {
        toast.success(error.response.data.message)
      }
    }
  }

  const loginSignupHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center p-4 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-4xl mx-auto">
        <div className="flex-1 flex justify-center">
          <img
            src="X-logo.png"
            alt="X-logo"
            width={"200px"}
            className="w-[50%] sm:w-1/2 max-w-xs lg:w-[100%]"
          />
        </div>
        <div className="flex-1 p-4">
          <div className="my-5">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl text-center">
              Happening Now
            </h1>
          </div>
          <h1 className="mt-4 mb-2 text-xl sm:text-2xl font-bold text-center">
            {isLogin ? "Login" : "Register"}
          </h1>
          <form onSubmit={submitHandler} className="flex flex-col w-full max-w-md mx-auto">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold"
                />
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Username"
                  className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold"
                />
              </>
            )}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-blue-500 border border-gray-800 px-3 py-2 rounded-full my-2 font-semibold"
            />
            <button className="bg-[#1D9BF0] border-none py-2 my-4 rounded-full text-lg text-white">
              {isLogin ? "Login" : "Create account"}
            </button>
            <h1 className="text-center">
              {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
              <span
                className="font-bold text-blue-600 cursor-pointer"
                onClick={loginSignupHandler}
              >
                {isLogin ? "Register" : "Login"}
              </span>
            </h1>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

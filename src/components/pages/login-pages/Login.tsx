import React, { useState } from "react";
import Input from "../../shared/Input";
import PrimaryBtn from "../../shared/PrimaryBtn";
import CheckBox from "../../shared/CheckBox";

const Login = () => {
  const [fields, setFields] = useState({ email: "", password: "" });
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    
  };
  return (
    <div className="flex h-screen">
      <div className="w-[75%] bg-slate-200 flex items-center justify-center">
        <img src="/icons/logo.svg" className="w-48 h-24" alt="logo" />
      </div>
      <div className="w-[25%] bg-white flex flex-col items-center justify-center px-8 gap-4">
        <h1 className="text-lg font-times font-bold">Login</h1>
        <Input
          name="email"
          value={fields?.email}
          handleChange={handleChange}
          label="Email"
          type="email"
        />
        <div className="w-full relative">
          <Input
            name="password"
            value={fields?.password}
            handleChange={handleChange}
            label="Password"
            type={showPassword ? "text" : "password"}
          />

          <img
            src={
              showPassword
                ? "/icons/password/open.svg"
                : "/icons/password/close.svg"
            }
            alt="show-pd"
            className="absolute right-2 top-2 w-6 h-5 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>

        <div className="flex justify-between w-full">
          <CheckBox
            name="rememberMe"
            value={rememberMe}
            onChange={() => {}}
            label="Remember Me"
          />

          <div className="font-times">Forgot Password ?</div>
        </div>
        <PrimaryBtn label="Login" onClick={handleSubmit} width="w-full" />
      </div>
    </div>
  );
};

export default Login;

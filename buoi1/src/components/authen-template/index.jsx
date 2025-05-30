import React from "react";
import "./index.css";
import RegisterForm from "./../authen-form/RegisterForm";
import LoginForm from "./../authen-form/LoginForm";

function AuthenTemplate({ isLogin }) {
  // check authn-template có phải là trang Login hay Register
  return (
    //chia layout thành 2 cái
    <div className="authen-template">
      <div className="authen-template__form">
        {isLogin ? <LoginForm /> : <RegisterForm />}
      </div>
      <div className="authen-template__image"></div>
    </div>
  );
}

export default AuthenTemplate;

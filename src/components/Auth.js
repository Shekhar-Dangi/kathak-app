import React, { useState } from "react";
import "./Modal.css";
import "./Button.css";

const Auth = () => {
  const [isSignUp, setIsSignUP]=  useState(false);
  const close = () => {
    document.querySelector(`.modal-container`).style.display = "none";
  };
  const toggle = () => {
    setIsSignUP((prev) => !prev)
  }
  return (
    <div className="modal-container">
      <div className="modal">
        <i
          class="fa-solid fa-xmark cross"
          onClick={() => {
            close();
          }}
        ></i>
        <div className="form">
          <h2 className="heading">{isSignUp ? "SIGN UP" : "Sign In"}</h2>
          <form action="">
            <label className="normal" htmlFor="email">
              email
            </label>
            <input className="inputForm" type="email" name="email" id="email" />
            <label className="normal" htmlFor="password">
              password
            </label>
            <input
              className="inputForm"
              type="password"
              name="password"
              id="password"
            />
            <button className="btn-login" type="submit">
              {isSignUp ? "SIGN UP" : "LOG IN"}
            </button>
            <div className="split normal">
              <span className="small">OR</span>
            </div>
          </form>
          <button className="btn-login google-login" type="submit">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/800px-Google_%22G%22_Logo.svg.png"
            />{" "}
            Continue with Google
          </button>
          <p className="small login_footer" onClick={toggle}>
            {isSignUp
              ? "Already have an account? Login"
              : "Need an account? Signup"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

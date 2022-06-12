import React, { useState } from "react";
import "./Modal.css";
import "./Button.css";
import { signIn, signUp, authGoogle } from "../firebase/auth";
import RedirectAuth from "./RedirectAuth";
import Auth_Add from "./Auth_Add";

const Auth = () => {
  const [isSignUp, setIsSignUP] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roomName, setRoomName] = useState("Tarana Dance Academy");
  const [role, setRole] = useState("Student");
  const [level, setLevel] = useState("Level 1");
  const close = () => {
    document.querySelector(`.modal-container`).style.display = "none";
  };

  const toggle = () => {
    setIsSignUP((prev) => !prev);
  };
  return (
    <>
      <RedirectAuth
        email={email}
        role={role}
        level={level}
        setLevel={setLevel}
        roomName={roomName}
        setRoomName={setRoomName}
      />
      <div className="modal-container">
        <div className="modal">
          <i
            class="fa-solid fa-xmark cross"
            onClick={() => {
              close();
            }}
          ></i>
          <div className="form">
            <h2 className="heading">{isSignUp ? "LOGIN" : "Login"}</h2>
            <form action="">
              <label className="normal" htmlFor="email">
                email
              </label>
              <input
                className="inputForm"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                name="email"
                id="email"
                required
              />
              <label className="normal" htmlFor="password">
                password
              </label>
              <input
                className="inputForm"
                type="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                required
              />
              {isSignUp ? (
                <>
                  <Auth_Add
                    role={role}
                    setRole={setRole}
                    roomName={roomName}
                    setRoomName={setRoomName}
                    level={level}
                    setLevel={setLevel}
                  />
                </>
              ) : (
                ""
              )}
              <button
                onClick={(e) => {
                  e.preventDefault();

                  if (isSignUp) {
                    signUp(email, password, roomName, level, role);
                  } else signIn(email, password);
                  setEmail("");
                  setPassword("");
                }}
                className="btn-login"
              >
                {isSignUp ? "SIGN UP" : "LOG IN"}
              </button>
              <div className="split normal">
                <span className="small">OR</span>
              </div>
            </form>
            <button className="btn-login google-login" onClick={authGoogle}>
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
    </>
  );
};

export default Auth;

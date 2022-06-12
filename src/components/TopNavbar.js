import React, { useState } from "react";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { query, collection, where, doc } from "firebase/firestore";
import { db } from "../firebase";
import Auth from "./Auth";
const TopNavbar = () => {
  const [user] = useAuthState(auth);
  const [room, loading] = useDocument(
    user && query(doc(db, user.email, "info"))
  );
  const [isSignUp, setIsSignUp] = useState(false);
  let dropped = false;
  const show = (compClass) => {
    const elem = document.querySelector(`.${compClass}`);
    const prop =
      compClass === "dropdown" ? (dropped ? "none" : "flex") : "flex";
    dropped = !dropped;
    console.log(prop);
    elem.style.display = prop;
  };

  return (
    <>
      <Auth isSignUp={isSignUp} setIsSignUP={setIsSignUp} />
      <nav className="navbar">
        {user ? (
          <div className="dropdown">
            <ul>
              <li>{user.email}</li>
              <li>{room?.data()?.school}</li>
              <li>{room?.data()?.level}</li>
              <li>{room?.data()?.role}</li>
              <li
                onClick={() => {
                  signOut(auth);
                }}
              >
                Log Out
              </li>
            </ul>
          </div>
        ) : (
          ""
        )}

        <ul>
          {user ? (
            <div
              onClick={() => {
                show("dropdown");
              }}
              className="userDetails"
            >
              <i className="fa-solid fa-bars userDetails_icon"></i>
            </div>
          ) : (
            <>
              <li>
                <a
                  className="resetLink"
                  onClick={() => {
                    setIsSignUp(true);
                    show("modal-container");
                  }}
                  href="#"
                >
                  SIGN UP
                </a>
              </li>
              <li>
                <a
                  className="resetLink"
                  onClick={() => {
                    setIsSignUp(false);
                    show("modal-container");
                  }}
                  href="#"
                >
                  SIGN IN
                </a>
              </li>
            </>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TopNavbar;

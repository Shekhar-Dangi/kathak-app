import React from "react";
import "./Navbar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
const TopNavbar = () => {
  const [user] = useAuthState(auth);
  const showForm = () => {
    const form = document.querySelector(".modal-container");
    form.style.display = "flex";
  };

  return (
    <>
      <nav className="navbar">
        <ul>
          {user ? (
            <div className="userDetails">
              <p>{user.email}</p>
              <i
                onClick={() => {
                  signOut(auth);
                }}
                class="fa-solid fa-user-tie"
              ></i>
            </div>
          ) : (
            <li>
              <a className="resetLink" onClick={showForm} href="#">
                SIGN UP
              </a>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
};

export default TopNavbar;

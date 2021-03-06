import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";

const MainNavbar = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="mainNavbar">
      <ul>
        <li>
          <Link className="resetLink" to="/">
            HOME
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link className="resetLink" to="/overview">
            OVERVIEW OF KATHAK
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link className="resetLink" to="/practical">
            PRACTICAL
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link className="resetLink" to="/theory">
            THEORY
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link className="resetLink" to="/taals">
            TAALS
          </Link>
        </li>
        <li>|</li>
        <li>
          <Link className="resetLink" to="/exam-prep">
            EXAM PREPARATION
          </Link>
        </li>
        {user ? (
          <>
            <li>|</li>
            <li>
              <Link className="resetLink" to="/util">
                INFO
              </Link>
            </li>
            <li>|</li>
            <li>
              <Link className="resetLink" to="/notice">
                NOTICE
              </Link>
            </li>
          </>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};

export default MainNavbar;

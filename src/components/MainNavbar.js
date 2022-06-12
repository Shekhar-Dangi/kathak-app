import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const MainNavbar = () => {
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
        <li>|</li>
        <li>
          <Link className="resetLink" to="/util">
             INFO
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MainNavbar;

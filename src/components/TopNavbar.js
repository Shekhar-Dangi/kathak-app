import React from 'react'
import "./Navbar.css";


const TopNavbar = () => {
  const showForm = () => {
    const form = document.querySelector(".modal-container");
    form.style.display = "flex";
  }

  return (
    <><nav className="navbar">
      <ul>
        <li><a className="resetLink" onClick={showForm} href="#">SIGN UP</a></li>
      </ul>
    </nav></>
  )
}

export default TopNavbar
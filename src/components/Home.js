import React from 'react'
import "./Header.css";
import MainNavbar from './MainNavbar';
import { Link } from "react-router-dom"
import "./Container.css";
import "./Button.css";

const Home = () => {
  const showForm = () => {
    const form = document.querySelector(".modal-container");
    form.style.display = "flex";
  }
  return (
    <div className='home'>
      <div className="header">
        <h1>KATHAK ACADEMY</h1>
        <p className="description">Making dance accessible to everyone</p>
      </div>
      <MainNavbar />
      <div class="container">
        <div class="container_content">
          <h1>UTILIZE OUR RESOURCES! <br />this website works for all, students or teachers! </h1>
          
        </div>
      </div>
    </div>
  )
}

export default Home
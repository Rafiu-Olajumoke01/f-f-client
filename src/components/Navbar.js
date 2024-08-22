import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import { GiFoodTruck } from "react-icons/gi";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand me-auto mt-3" href="#"><h3><GiFoodTruck className='m-auto truck' size={50} />FOOD & FARAWAY<span className='dot'>.</span></h3></a>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">FoodAndFaraway</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body fw-bold">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3 fw-bold">
                <li className="nav-item">
                  <Link className="nav-link active mx-lg-2 fw-bold" aria-current="page" to="/">HOME</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 fw-bold" to="/food">FOOD</Link>
                </li>
                
                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 fw-bold" to="/travel">TRAVEL</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 fw-bold" to="/news">DESTINATIONS</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 fw-bold" to="/about">ABOUT</Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link mx-lg-2 fw-bold" to="/contact">CONTACT</Link>
                </li>
              </ul>

            </div>
          </div>

          <Link to='/login' className='btn'>REGISTER</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
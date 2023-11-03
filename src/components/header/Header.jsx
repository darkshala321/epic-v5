import React from 'react'
import { Link } from 'react-router-dom';
import './header.css'

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Epic_Games_logo.svg/1764px-Epic_Games_logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="res-menu">
        <img src="src/assets/icons8-menu-30.png" alt="menu" />
      </div>
      <div className="primary-menu">
        <Link to="/" className="primary-menu-item active">STORE</Link>
        <Link to="/new" className="primary-menu-item">NEWS</Link>
        <Link to="#" className="primary-menu-item">FAQ</Link>
        <Link to="#" className="primary-menu-item">HELP</Link>
        <Link to="/singleproduct" className="primary-menu-item">SINGLE</Link>
        <Link to="/checkout" className="primary-menu-item">CHECKOUT</Link>
      </div>
      <div className="header-options">
        <i className="fa fa-globe" aria-hidden="true"></i>
        <div className="auth">
          <i className="fa fa-user" aria-hidden="true"></i>
          <span>SIGN IN</span>
        </div>
        <button className="download-btn">
          GET EPIC GAMES
        </button>
      </div>
    </header>
  )
}

export default Header
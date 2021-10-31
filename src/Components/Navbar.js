import React from "react";
import { Link, Redirect } from "react-router-dom";
import Logo from "../Assets/logo.png";
import "../config";
import * as fcl from "@onflow/fcl";

function Navbar() {
  return (
    <div>
      <nav className='navbar'>
        <div class='nav-items'>
          <a href='/' className='logo-holder'>
            <img src={Logo} alt='' />
            <span className='logo-text'>Orden</span>
          </a>
          <div className='menu'>
            <span className='menu-items'>Discover</span>
            <span className='menu-items'>Badges</span>
            <span className='menu-items'>My Profile</span>
          </div>
          <div className='buttons-holder'>
            <button className='btn' style={{ background: "#2cf29f" }}>
              Create
            </button>
            <button
              className='btn'
              style={{ background: "#9CC3DA" }}
              onClick={fcl.logIn}
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

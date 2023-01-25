import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
const Nav = () => {
  return (
    <div className="nav">
      <div className="hearder_content">
      
        <div className="nav-left">
          <div className="logo">
            <img
              src="https://preview.colorlib.com/theme/course/images/logo.png.webp"
              alt="logo"
            />
            <p>course</p>
          </div>
        </div>
        <div className="nav-center">
          <div className="nav-center-main">
          <div className="nav-center-content">
              <ul className="nav-center-list">
                <li>
                  <Link className="link" to="/add">
                    Add
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/wishlist">
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/">
                    Home
                  </Link>
                </li>
                <li>elements</li>
                <li>News</li>
                <li>contact</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-right">
          <img
            src="https://preview.colorlib.com/theme/course/images/phone-call.svg"
            alt=""
          />
          <p>+43 4566 7788 2457</p>
        </div>
      </div>
    </div>
  );
};

export default Nav;

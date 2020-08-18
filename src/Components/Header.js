import React from 'react';

const Header = () => {
  return(
    <header id="header" className="header-scrolled">
      <div className="container main-menu">
        <div className="row align-items-center justify-content-between d-flex">
          <div id="logo">
            <a href="/"><h2 >DogHome</h2></a>
          </div>
          <nav id="nav-menu-container">
            <ul className="nav-menu sf-js-enabled sf-arrows">
              <li className="menu-active"><a href="/">Home</a></li>
              <li><a href="./#end">About Us</a></li>

                <li><a href="/locate">Locate</a></li>
              <li><a href="/volunteer">Volunteer</a></li>

              <li><a href="./#end">Contact</a></li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

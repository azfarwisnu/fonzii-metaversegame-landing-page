import React from 'react';

import logo from '../assets/collection/gog-logo.webp';
import NavItem from './NavItem';

class NavBar extends React.Component {
  constructor() {
    super();
    this.state = { isShow: false };
  }

  showNav = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-md">
          <div class="container">
            <a class="navbar-brand" href="/">
              <img src={logo} alt="logo" />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="bi bi-list fs-1 text-white"></i>
            </button>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navbarNavAltMarkup"
            >
              <div class="navbar-nav">
                <NavItem name="Home" href="/" />
                <NavItem name="About" href="/#about" />
                <NavItem name="Guide" href="/how-to-play" />
                <NavItem name="Heroes" href="/heroes" />
                <NavItem name="Avatar" href="/avatar" />
                <a
                  className="nav-link btn btn-primary col-2 col-md-auto ms-3"
                  href="/developer"
                >
                  Developer
                </a>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

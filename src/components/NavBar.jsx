import React from 'react';

import logo from '../assets/collection/gog-logo.webp';

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
                <a className="nav-link link-light active" href="/">
                  Home
                </a>
                <a className="nav-link link-light" href="/#about">
                  About
                </a>
                <a className="nav-link link-light" href="/heroes">
                  Heroes
                </a>
                <a className="nav-link link-light" href="/avatar">
                  Avatar
                </a>
                <a className="nav-link btn btn-primary col-2 col-md-auto" href="/how-to-play">
                  Guide
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

import React from "react";

import logo from "../assets/collection/gog-logo.webp";

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
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" />
            </a>
            <div style={{ position: 'relative' }}>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <i className="bi bi-list fs-1 text-white"></i>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav text-end">
                  <a className="nav-link link-light" href="/">
                    Home
                  </a>
                  <a className="nav-link link-light" href="#about">
                    About
                  </a>
                  <a className="nav-link link-light" href="/how-to-play">
                    Guide
                  </a>
                  <div style={{ position: 'relative' }}>
                    <button
                      className='btn btn-primary'
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#navbarNavMarket"
                      aria-controls="navbarNavMarket"
                      aria-expanded="false"
                      aria-label="Toggle navigation"
                    >
                      Market
                    </button>
                    <div
                      className="collapse-market navbar-collapse collapse"
                      id="navbarNavMarket"
                    >
                      <div className="navbar-nav">
                        <a className="nav-link link-light" href="/heroes">
                          Heroes
                        </a>
                        <a className="nav-link link-light" href="/avatar">
                          Avatar
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default NavBar;

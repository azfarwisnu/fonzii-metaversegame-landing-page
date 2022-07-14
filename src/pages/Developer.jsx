import React from 'react';

import ondel from '../assets/collection/ondel.jpg';

class Developer extends React.Component {
  componentDidMount() {
    document.title = 'GoG x Sandbox | Developer Info';
  }

  render() {
    return (
      <div className="container developer-section">
        <div className="top-section row bg-dark p-5 mx-4 mb-4 pb-4">
          <div className="col-12 col-md-4 left">
            <img src={ondel} alt="ondel" className="mb-4 img-fluid" />
          </div>
          <div className="col-12 col-md-8 right">
            <div className="content">
              <h3>
                <b>Create by Duo Kemayoran</b>
              </h3>
              <p>This website is made for ITechno Cup PNJ 2022</p>
              <div className="box-message">
                <div className="row pt-4">
                  <div className="col-12 col-md-6 mb-4">
                    <h4>Farhan Alba Saputra</h4>
                    <p>Universitas Gunadarma Teknik Informatika 2020</p>
                    <a href="https://github.com/falbas" class="link-light">
                      <i class="bi bi-github fs-3"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/farhanalbas/"
                      class="link-light ms-3"
                    >
                      <i class="bi bi-linkedin fs-3"></i>
                    </a>
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                    <h4>M. Azfar Wisnu</h4>
                    <p>Universitas Gunadarma Teknik Informatika 2020</p>
                    <a href="https://github.com/azfarwisnu" class="link-light">
                      <i class="bi bi-github fs-3"></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/azfarwisnu/"
                      class="link-light ms-3"
                    >
                      <i class="bi bi-linkedin fs-3"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Developer;

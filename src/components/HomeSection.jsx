import React from "react";

import gogdark from "../assets/collection/gog-dark.mp4";

class HomeSection extends React.Component {
  render() {
    return (
      <>
        <div className="home-section">
          <div className="section-one">
            <div className="layer-one">
              <video width="100%" height="100%" loop muted autoPlay>
                <source src={gogdark} type="video/mp4" />
              </video>
            </div>
            <div className="layer-two bg-primary col-12">
              <p>alfkalfka</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HomeSection;

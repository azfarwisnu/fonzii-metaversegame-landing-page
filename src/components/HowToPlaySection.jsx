import React from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

class HowToPlaySection extends React.Component {
  render() {
    return (
      <>
        <div className="how-to-play-section container mt-4 pt-4 pb-4 mb-4">
          <div className="top-section row bg-dark p-0 p-md-5 mx-4 mb-4">
            <div className="col-12 col-md-5 col-lg-3 left">
              <img
                src="https://www.sandbox.game/img/13_Create/GameMaker/SwordCharacter.png"
                alt="nft-testing"
                className="mb-4 img-fluid"
              />
            </div>
            <div className="col-12 col-md-12 col-lg-9 right">
              <div className="content">
                <h3>
                  <b>System requitmens</b>
                </h3>
                <div className="box-message">
                  <div className="row pt-4">
                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="fw-bold">Minimum</h4>
                      <span>
                        Requires 64 bit processor and operating System
                      </span>
                      <br />
                      <span>Os Windows 7</span>
                      <br />
                      <span>Processor: Dual Core 2GHZ</span>
                      <br />
                      <span>Memory: 4GB Ram</span>
                      <br />
                      <span>Graphics: 512MB VRAM</span>
                      <br />
                      <span>DirectX: version 11</span>
                      <br />
                      <span>Storage: 2GB avaible space</span>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                      <h4 className="fw-bold">Recommended</h4>
                      <span>
                        Requires 64 bit processor and operating System
                      </span>
                      <br />
                      <span>Os Windows 10</span>
                      <br />
                      <span>Processor: Dual Core 3GHZ</span>
                      <br />
                      <span>Memory: 8GB Ram</span>
                      <br />
                      <span>Graphics: 2GB VRAM</span>
                      <br />
                      <span>DirectX: version 11</span>
                      <br />
                      <span>Storage: 2GB avaible space</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-section mt-4 pt-4 mx-4">
            <h2 className="mt-4 pt-4 text-center mb-4 pb-4">
              <b>How To Play</b>
            </h2>
            <div
              className="bg-dark top-section"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="1"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="mx-3 mx-md-4 mb-4 pb-4">
                <div className="pb-4 border-bottom">
                  <h3 className="mt-4 pt-3 pt-md-5 text-center fw-bold">
                    Create Meta Mask Wallet
                  </h3>
                  <iframe
                    src="https://www.youtube.com/embed/YVgfHZMFFFQ"
                    title="Metamask Tutorial For COMPLETE Beginners"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    className="mt-4 rounded text-center px-0 px-md-4"
                  ></iframe>
                </div>
                <div
                  className="bg-dark px-0 px-md-4 border-bottom border-light"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay="1"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <h3 className="mt-4 pt-5 text-center fw-bold">
                    Connect your MetaMask to The Sandbox + Create an account
                  </h3>
                  <div className="row mt-4">
                    <div className="col-12 mb-4 text-center">
                      <img
                        src="https://miro.medium.com/max/685/0*ljYXe01mhjIYTu6V"
                        alt="guide"
                        className="rounded img-fluid"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <p>
                        1. Once you have MetaMask set up,{' '}
                        <a href="https://www.sandbox.game/en/">click here</a> to
                        go to The Sandbox's official website (creator Tomahawk's
                        referral link)
                      </p>
                      <p>
                        2. Click the Web 3 (MetaMask) option, shown here (if it
                        doesn't appear, click the Sign-In button on the
                        top-right)
                      </p>
                      <p>
                        3. You should get a prompt from the MetaMask browser
                        extension asking you to sign a signature request that
                        will allow MetaMask to log you into The Sandbox. Click
                        the Sign button on this prompt.
                      </p>
                      <div className="text-center">
                        <img
                          src="https://miro.medium.com/max/875/0*bB2QtISEIuADyZ1t"
                          alt="wallet"
                          className="rounded img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-dark px-0 px-md-4 border-bottom"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay="1"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <h3 className="mt-4 pt-5 text-center fw-bold">
                    Create Avatar, Download and Access Sandbox Game Maker
                  </h3>
                  <div className="row mt-4">
                    <div className="col-12 mb-4 text-center">
                      <img
                        src="https://miro.medium.com/max/875/0*iZwI7EHsbEKC1qnp"
                        alt="guide"
                        className="rounded img-fluid"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <p>
                        1. Select “Avatar” from your profile menu (top right)
                      </p>
                      <p>
                        2. Create your Avatar using the “Avatar creator”, then
                        click on “Save changes”
                      </p>
                      <p>
                        3. Select the “CREATE” button (left banner) + Game Maker
                        “Download” button.
                      </p>
                      <div className="text-center">
                        <img
                          src="https://miro.medium.com/max/875/0*DUqbeoi1JPIqFwZg"
                          alt="guide"
                          className="rounded img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-dark px-0 px-md-4 border-bottom"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay="1"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <h3 className="mt-4 pt-5 text-center fw-bold">
                    Login, Find and Play "GOG HQ"
                  </h3>
                  <div className="row mt-4">
                    <div className="col-12 mb-4 text-center">
                      <img
                        src="https://miro.medium.com/max/875/0*K_JABOLCxZ19cri3"
                        alt="guide"
                        className="rounded img-fluid"
                      />
                    </div>
                    <div className="col-12 mb-4">
                      <p>
                        1. Access the GameMaker by clicking the shortcut created
                        on your desktop
                      </p>
                      <p>
                        2. Enter your Username and password then click ‘LOGIN’
                      </p>
                      <p>
                        3. Once you log into the GameMaker with your Sandbox
                        username and password, select the “Draft Gallery” tab —
                        top right
                      </p>
                      <div className="text-center">
                        <img
                          src="https://miro.medium.com/max/875/0*MwedHhkyBqj4c0-b"
                          alt="guide"
                          className="rounded img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="bg-dark mx-0 mx-md-4"
                  data-aos="fade-up"
                  data-aos-offset="50"
                  data-aos-delay="1"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-mirror="true"
                  data-aos-once="false"
                >
                  <h3 className="mt-4 pt-5 text-center fw-bold">
                    Enjoy the game and get reward
                  </h3>
                  <div className="mt-4">
                    <img
                      src="https://miro.medium.com/max/875/0*bg7zaM5pqispM6G1"
                      alt="play"
                      className="text-center rounded"
                      width="100%"
                    />
                  </div>
                  <div className="mt-4">
                    <img
                      src="https://miro.medium.com/max/805/0*jn1KmigueVfRPIpk"
                      alt="play"
                      className="text-center rounded"
                      width="100%"
                    />
                  </div>
                  <div className="mt-4 pb-0 pb-md-4 text-center pt-4">
                    <span>Full Guide</span>
                    <p className="text-white">
                      <a
                        className="text-muted"
                        href="https://guildofguardians.medium.com/gog-x-sandbox-faction-challenge-4233fdfaa80f"
                        target="blank"
                      >
                        Click here
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HowToPlaySection;

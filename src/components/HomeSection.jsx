import React from 'react';
import Axios from 'axios';

import HeroesCard from './HeroesCard';
import AvatarCard from './AvatarCard';
import { API_URL } from '../constants/API';

import gogxsandbox1 from '../assets/collection/gogxsandbox1.jpg';
import gogxsandbox2 from '../assets/collection/gogxsandbox2.jpg';
import logo from '../assets/collection/gog-logo.webp';
import sandbox from '../assets/collection/sandbox.png';

import gyb from '../assets/collection/gyb.png';

class HomeSection extends React.Component {
  state = {
    dataHeroes: [],
    dataAvatar: [],
  };

  fetchAssetHeroes = () => {
    Axios.get(
      `${API_URL}/orders?status=active&sell_token_type=ERC721&sell_token_address=0xee972ad3b8ac062de2e4d5e6ea4a37e36c849a11&page_size=4`
    ).then((result) => {
      this.setState({
        dataHeroes: result.data.result,
      });
    });
  };

  fetchAssetAvatar = () => {
    Axios.get(
      `${API_URL}/orders?status=active&sell_token_type=ERC721&sell_token_address=0x83f120283c30c796ebe9216ccaf6718c31213681&page_size=4`
    ).then((result) => {
      this.setState({
        dataAvatar: result.data.result,
      });
    });
  };

  renderCardHeroes = () => {
    return this.state.dataHeroes.map((val, index) => {
      return <HeroesCard data={val} key={index} />;
    });
  };

  renderCardAvatar = () => {
    return this.state.dataAvatar.map((val, index) => {
      return <AvatarCard data={val} key={index} />;
    });
  };

  componentDidMount() {
    this.fetchAssetHeroes();
    this.fetchAssetAvatar();
  }

  render() {
    return (
      <>
        <div className="home-section container">
          <div className="section-one row mt-5">
            <div className="align-self-center col-12 col-md-6">
              <h1 className="fw-bold">
                GoG is a Blockchain mobile RPG Collab with Sandbox metaverse
                game.
              </h1>
              <div className="mt-5 pb-4">
                <a
                  href="https://metamask.io/"
                  className="btn btn-primary border border-0 p-3"
                >
                  Connect Wallet
                </a>
                <a
                  href="https://discord.gg/hbn6qkKY"
                  className="btn btn-secondary border border-0 p-3 mx-2"
                >
                  Join Discord
                </a>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner rounded-3">
                  <div className="carousel-item active">
                    <img
                      src={gogxsandbox1}
                      className="d-block w-100"
                      alt="gogxsandbox1"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={gogxsandbox2}
                      className="d-block w-100"
                      alt="gogxsandbox2"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                ></button>
              </div>
            </div>
          </div>
          <div
            className="gogxsandbox text-center mt-5 pt-5"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="1"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <img src={logo} alt="" className="mx-4" width="300" />
            <img src={sandbox} alt="" className="mx-4" width="300" />
          </div>
          <div
            className="section-two mt-5 pt-5"
            id="about"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="1"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-center fw-bold">About GoG and Sandbox</h1>
            <p className="text-center">Knowing GoG and Sandbox Project</p>
            <div className="row mt-5">
              <div className="col-12 col-md-6 align-self-center order-2 order-sm-1">
                <iframe
                  className="rounded-3"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/FvpSXeUhL9s"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="align-self-center col-12 col-md-6 pt-4 order-1 order-sm-2"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="1"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h1 className="fw-bold">What is GoG?</h1>
                <p className="mt-5">
                  Guild of Guardians is a mobile RPG where players can turn
                  their gaming passion into assets. It will be a multiplayer,
                  fantasy, action RPG where players build their dream team of
                  ‘Guardians’ and compete in a guild to earn epic, tradeable
                  rewards.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div
                className="align-self-center col-12 col-md-6"
                data-aos="fade-up"
                data-aos-offset="50"
                data-aos-delay="1"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
              >
                <h1 className="fw-bold">What is Sandbox?</h1>
                <p className="mt-5">
                  The Sandbox is a decentralised, community-driven gaming
                  ecosystem where creators can share and monetise voxel assets
                  and gaming experiences on the Ethereum blockchain. Using The
                  Sandbox's free software, such as VoxEdit and the Game Maker,
                  players, artists and game designers can create ASSETs and
                  experiences, such as games, dioramas and art galleries, for
                  themselves and to share with others. These can be monetised to
                  earn the creator passive income.
                </p>
              </div>
              <div className="col-12 col-md-6 align-self-center">
                <iframe
                  className="rounded-3"
                  width="100%"
                  height="315"
                  src="https://www.youtube.com/embed/bNF2OHf7Big"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
          <div
            className="section-three mt-5 pt-5"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="1"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-center fw-bold">
              What is GoG x Sandbox Project
            </h1>
            <p className="text-center mt-5 px-5">
              Bot the Builder & his team are hard at work on building the GOG HQ
              social hub in The Sandbox Metaverse when all of a sudden the
              entire world is being infested with Zombies, Walkers and other
              weird undead creatures. Some say they teleported over from The
              Walking Dead series.
            </p>
            <img
              src="https://themediaverse.com/wp-content/uploads/2022/02/GuildOfGuardiansg_sandboxevent_victory.jpeg"
              alt="goghq"
              className="img-fluid rounded-3 mt-5"
            />
          </div>
          <div
            className="section-heroes mt-5 pt-5"
            data-aos="fade-up"
            data-aos-offset="50"
            data-aos-delay="1"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
          >
            <h1 className="text-center fw-bold">Explore Marketplace.</h1>
            <p className="text-center">
              Buying some character and avatar for playing GoG x Sandbox.
            </p>
            <div className="d-flex justify-content-between mx-3 pt-5 mt-5">
              <h3>Live Market Heroes</h3>
              <div className="d-flex align-items-center">
                <a href="/heroes" className="btn btn-primary border border-0">
                  See All
                </a>
              </div>
            </div>
            <div className="heroes-section container">
              <div className="mid-section">
                <div className="content-mid pt-4">
                  <div className="row">{this.renderCardHeroes()}</div>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-between mx-3 mt-5">
              <h3>Live Market Avatar</h3>
              <div className="d-flex align-items-center">
                <a href="/avatar" className="btn btn-primary border border-0">
                  See All
                </a>
              </div>
            </div>
            <div className="heroes-section container mb-4 pb-4">
              <div className="mid-section">
                <div className="content-mid pt-4">
                  <div className="row">{this.renderCardAvatar()}</div>
                </div>
              </div>
            </div>
            <div
              className="patner-section pt-4 pb-4 mb-4 text-center"
              data-aos="fade-up"
              data-aos-offset="50"
              data-aos-delay="1"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <h1 className="pb-4 fw-bold">Partners</h1>
              <div className="row pt-4">
                <div className="col-6 col-md-6 mb-4">
                  <div>
                    <img
                      src="https://builtonimmutablex.com/wp-content/uploads/2021/07/LOGO.png"
                      alt="logo"
                      width="90%"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-4">
                  <div>
                    <img
                      src="https://www.guildofguardians.com/_next/image?url=%2Fimgs%2Flogos%2Fblockchain-game-alliance.png&w=384&q=75"
                      alt="logo"
                      width="90%"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-4">
                  <div>
                    <img
                      src="https://global-uploads.webflow.com/608c5ef703153e59ec742548/608fba7b8cbaab12a7746d73_nrg-noglobe-wht%403x.png"
                      alt="logo"
                      width="90%"
                    />
                  </div>
                </div>
                <div className="col-6 col-md-6 mb-4">
                  <div>
                    <img src={gyb} alt="logo" width="90%" />
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

export default HomeSection;

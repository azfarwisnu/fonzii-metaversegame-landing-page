import React from 'react';
import Axios from 'axios';

import HeroesCard from './HeroesCard';
import AvatarCard from './AvatarCard';
import { API_URL } from '../constants/API';

import img from '../assets/collection/img.png';

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
    return this.state.dataHeroes.map((val) => {
      return <HeroesCard data={val} />;
    });
  };

  renderCardAvatar = () => {
    return this.state.dataAvatar.map((val) => {
      return <AvatarCard data={val} />;
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
          <div className="section-one d-flex justify-content-between">
            <div className="align-self-center col-6">
              <h1>Discover Best Digital Art and Collect NFTs.</h1>
              <p>
                Discover NFTs by category, track the latest drops, and follow
                the collections you love. enjoy it.
              </p>
              <div>
                <a href="#" className="btn btn-primary border border-0 p-3">
                  Connect Wallet
                </a>
                <a href="#" className="btn btn-secondary border border-0 p-3 mx-2">
                  Join Discord
                </a>
              </div>
            </div>
            <img src={img} alt="img" />
          </div>
          <div className="section-heroes">
            <h1 className="text-center">Explore Marketplace.</h1>
            <p className="text-center">
              Various kinds of best NFTs categories.
            </p>
            <div className="d-flex justify-content-between mx-3 pt-5 mt-5">
              <h3>Live Market Heroes</h3>
              <div className="d-flex align-items-center">
                <a href="/heroes" className="btn btn-primary border border-0 px-5">
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
                <a href="/avatar" className="btn btn-primary border border-0 px-5">
                  See All
                </a>
              </div>
            </div>
            <div className="heroes-section container">
              <div className="mid-section">
                <div className="content-mid pt-4">
                  <div className="row">{this.renderCardAvatar()}</div>
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

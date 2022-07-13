import React from 'react';
import Axios from 'axios';

import AvatarCard from './AvatarCard';
import { API_URL } from '../constants/API';

class AvatarSection extends React.Component {
  state = {
    data: [],
    page: 1,
    maxPage: 0,
    lastAvatar: '',
  };

  fetchAssetHeroes = () => {
    Axios.get(
      `${API_URL}/orders?status=active&sell_token_type=ERC721&sell_token_address=0x83f120283c30c796ebe9216ccaf6718c31213681&page_size=36`
    ).then((result) => {
      this.setState({
        data: result.data.result,
        maxPage: result.data.result.length / 12,
      });
    });
  };

  nextPageHandler = () => {
    if (this.state.page < this.state.maxPage) {
      this.setState({ page: this.state.page + 1 });
    }
  };

  prevPageHandler = () => {
    if (this.state.page > 1) {
      this.setState({ page: this.state.page - 1 });
    }
  };

  renderCard = () => {
    const itemPerPage = 12;
    const beginningIndex = (this.state.page - 1) * itemPerPage;
    const currentData = this.state.data.slice(
      beginningIndex,
      beginningIndex + itemPerPage
    );

    return currentData.map((val) => {
      return <AvatarCard data={val} />;
    });
  };

  componentDidMount() {
    this.fetchAssetHeroes();
  }

  render() {
    return (
      <>
        <div className="heroes-section container mt-4 pt-4 pb-4 mb-4">
          <div className="top-section row g-0 gy-md-3 gx-md-5 bg-dark mb-4 p-3 p-md-5 m-2">
            <div className="col-12 col-md-4">
              <img
                src="https://mantial-nfts.s3.amazonaws.com/mantial-nfts/gog-main/3883.png"
                alt="nft-testing"
                className="img-fluid mb-3"
              />
            </div>
            <div className="col-12 col-md-8 d-flex flex-column">
              <h3 className="fw-bold">Avatar Collections</h3>
              <p className="text-secondary text-justify">
                Avatar is a profile that is used by each user, each avatar has
                its own uniqueness, assets or components and its background will
                not be the same as other users, this is the hallmark of an
                avatar so it has a different value from the others.
              </p>
              <div className="row g-0 spec mb-3 mt-auto">
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between item">
                    <div>Floor</div>
                    <div>16.9k</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between item">
                    <div>Total Vol</div>
                    <div>202k</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between item">
                    <div>Listed</div>
                    <div>1.9k</div>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div className="d-flex justify-content-between item">
                    <div>Sale</div>
                    <div>2.9k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mid-section mx-2 mt-4 pt-4 pb-4 mb-4">
            <h2 className="text-center mb-4 pb-4">
              <strong>Avatar Live Market</strong>
            </h2>
            <div className="content-mid pt-4">
              <div className="row">{this.renderCard()}</div>
            </div>
            <div className="d-flex justify-content-between">
              <div>{/* left */}</div>
              <div>
                <button
                  disabled={this.state.page === 1}
                  className="btn btn-primary border border-0 mx-2"
                  onClick={this.prevPageHandler}
                >
                  <span>
                    <i className="bi bi-arrow-left"></i>
                  </span>
                </button>
                <span className="mx-2">
                  Page {this.state.page} of {this.state.maxPage}
                </span>
                <button
                  disabled={this.state.page === this.state.maxPage}
                  className="btn btn-primary border border-0 mx-2"
                  onClick={this.nextPageHandler}
                >
                  <span>
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AvatarSection;

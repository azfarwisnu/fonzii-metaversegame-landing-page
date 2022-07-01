import React from "react";
import Axios from "axios";

import AvatarCard from "./AvatarCard";
import { API_URL } from "../constants/API";

class AvatarSection extends React.Component {
  state = {
    data: [],
    page: 1,
    maxPage: 0,
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
        {console.log(this.state.page)}
        <div className="heroes-section container mt-4 pt-4 pb-4 mb-4">
          <div className="top-section row mt-4 pt-4 bg-dark mx-2 mb-4 pb-4">
            <div className="col-12 col-md-3 left mb-4 px-4 pb-2 mt-4">
              <img
                src="https://mantial-nfts.s3.amazonaws.com/mantial-nfts/gog-main/3883.png"
                alt="nft-testing"
              />
            </div>
            <div className="col-12 col-md-8 right mb-4 pb-4 mt-4">
              <div className="content px-2 mx-4">
                <h3>
                  <b>Avatar Collections</b>
                </h3>
                <div className="box-message">
                  <p className="mt-2 text-secondary text-justify">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as opposed to
                    using 'Content here, content here', making it look like
                    readable English. Many desktop publishing packages and web
                    page editors now use Lorem Ipsum as their default model
                    text, and a search for 'lorem ipsum' will uncover many web
                    sites still in their infancy. Various versions have evolved
                    over the years, sometimes by accident, sometimes on purpose
                    (injected humour and the like).
                  </p>
                </div>
                <div className="mb-2 pb-2 pt-4 text-dark">
                  <div className="row">
                    <div className="col-12 col-md-5 spec mb-4 mx-2 bg-secondary pb-2">
                      <div className="d-flex justify-content-between px-2 mt-2">
                        <div>FLOOR</div>
                        <div>16.9k</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 spec mb-4 mx-2 bg-secondary pb-2">
                      <div className="d-flex justify-content-between px-2 mt-2">
                        <div>Total Vol</div>
                        <div>202k</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 spec mb-4 mx-2 bg-secondary pb-2">
                      <div className="d-flex justify-content-between px-2 mt-2">
                        <div>Listed</div>
                        <div>1.9k</div>
                      </div>
                    </div>
                    <div className="col-12 col-md-5 spec mb-4 mx-2 bg-secondary pb-2">
                      <div className="d-flex justify-content-between px-2 mt-2">
                        <div>Sale</div>
                        <div>2.9k</div>
                      </div>
                    </div>
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
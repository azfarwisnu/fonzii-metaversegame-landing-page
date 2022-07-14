import React from "react";
import Axios from "axios";

import ExchangeItem from "./ExchangeItem";

class ExchangeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      matches: window.matchMedia("(min-width: 768px)").matches,
      market: [],
    };
  }

  fetchMarket = () => {
    Axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=idr"
    ).then((result) => {
      this.setState({ market: result.data });
    });
  };

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia("(min-width: 768px)").addEventListener("change", handler);
    this.fetchMarket();
  }

  render() {
    return (
      <>
        <div className="container exchange-section py-5 px-4 px-md-0">
          <h1 className="text-center fw-bold">LIVE EXCHANGE</h1>
          <h1 className="text-center">
            COIN
            <i className="mx-3 bi bi-arrow-right text-primary"></i>
            IDR
          </h1>
          <div className="exchange-table mt-5">
            {this.state.matches && (
              <div className="row">
                <div className="col-md-1 fw-bold">#</div>
                <div className="col-md fw-bold">Name</div>
                <div className="col-md fw-bold">Price</div>
                <div className="col-md fw-bold">Total Volume</div>
                <div className="col-md fw-bold">Last Update</div>
              </div>
            )}
            {this.state.market.slice(0, 30).map((val) => {
              return <ExchangeItem item={val} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ExchangeSection;

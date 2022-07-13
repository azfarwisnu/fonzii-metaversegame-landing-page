import React from 'react';

import ExchangeItem from './ExchangeItem';

class ExchangeSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia('(min-width: 768px)').matches };
  }

  markets = [
    {
      market_cap_rank: 1,
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 298347046,
      total_volume: 337426641803368,
      last_updated: '2022-07-12T13:13:28.352Z',
    },
    {
      market_cap_rank: 1,
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 298347046,
      total_volume: 337426641803368,
      last_updated: '2022-07-12T13:13:28.352Z',
    },
    {
      market_cap_rank: 1,
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 298347046,
      total_volume: 337426641803368,
      last_updated: '2022-07-12T13:13:28.352Z',
    },
    {
      market_cap_rank: 1,
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 298347046,
      total_volume: 337426641803368,
      last_updated: '2022-07-12T13:13:28.352Z',
    },
    {
      market_cap_rank: 1,
      name: 'Bitcoin',
      image:
        'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579',
      current_price: 298347046,
      total_volume: 337426641803368,
      last_updated: '2022-07-12T13:13:28.352Z',
    },
  ];

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
  }

  render() {
    return (
      <>
        <div className="container exchange-section py-5">
          <h1 className="text-center">LIVE EXCHANGE</h1>
          <h1 className="text-center text-primary">
            COIN -{' '}
            <img
              src="https://s2.coinmarketcap.com/static/cloud/img/fiat-flags/IDR.svg"
              alt="indonesia logo"
            />
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
            {this.markets.map((market) => {
              return <ExchangeItem item={market} />;
            })}
          </div>
        </div>
      </>
    );
  }
}

export default ExchangeSection;

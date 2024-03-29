import React from 'react';

class ExchangeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { matches: window.matchMedia('(min-width: 768px)').matches };
  }

  componentDidMount() {
    const handler = (e) => this.setState({ matches: e.matches });
    window.matchMedia('(min-width: 768px)').addEventListener('change', handler);
  }

  render() {
    return (
      <>
        <div className="row my-5 my-md-3 align-items-center">
          <div className="col-6 fw-bold col-md-1">
            {this.props.item.market_cap_rank}
          </div>
          <div className="col-6 col-md">
            <img
              className="exchange-img"
              src={this.props.item.image}
              alt={this.props.item.name}
            />
            {this.props.item.name}
          </div>
          {!this.state.matches && <div className="col-6 fw-bold">Price</div>}
          <div className="col-6 col-md text-primary">
            Rp {this.props.item.current_price.toLocaleString('id')}
          </div>
          {!this.state.matches && (
            <div className="col-6 fw-bold">Total Volume</div>
          )}
          <div className="col-6 col-md text-primary">
            Rp {this.props.item.total_volume.toLocaleString('id')}
          </div>
          {!this.state.matches && (
            <div className="col-6 fw-bold">Last Update</div>
          )}
          <div className="col-6 col-md">
            {new Date(this.props.item.last_updated).toUTCString()}
          </div>
        </div>
      </>
    );
  }
}

export default ExchangeItem;

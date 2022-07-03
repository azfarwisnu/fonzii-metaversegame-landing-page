import React from 'react';

class HeroesCard extends React.Component {
  render() {
    return (
      <>
        <div className="col-6 col-md-4 col-lg-3 mb-4">
          <div className="box-card bg-dark mb-4 pb-4">
            <div className="mx-3">
              <img
                src={this.props.data.sell.data.properties.image_url}
                alt="heroes"
                className="text-center"
              />
              <span className="text-white">
                <b>{this.props.data.sell.data.properties.collection.name}</b>
              </span>
              <br />
              <p className="text-white">
                {this.props.data.sell.data.properties.name} #
                {this.props.data.sell.data.token_id}
              </p>
              <div className="row pt-4">
                <div className="col-12 col-md-6">
                  <p className="text-truncate">
                    {this.props.data.buy.data.quantity / 10 ** 18}{' '}
                    {this.props.data.buy.type}
                  </p>
                </div>
                <div className="col-12 col-md-5 text-md-end">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://market.immutable.com/assets/0xee972ad3b8ac062de2e4d5e6ea4a37e36c849a11/${this.props.data.sell.data.token_id}`}
                    className="btn btn-primary border border-0"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroesCard;

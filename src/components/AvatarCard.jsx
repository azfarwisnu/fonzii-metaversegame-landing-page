import React from 'react';

class AvatarCard extends React.Component {
  render() {
    return (
      <>
        <div className="col-6 col-lg-3 mb-4">
          <div className="box-card bg-dark">
            <div className="p-3">
              <img
                src={this.props.data.sell.data.properties.image_url}
                alt="heroes"
                className="img-fluid mb-3"
              />
              <span className="text-white">
                <b>{this.props.data.sell.data.properties.collection.name}</b>
              </span>
              <br />
              <p className="text-white">
                {this.props.data.sell.data.properties.name}
              </p>
              <div className="row">
                <div className="col-12">
                  <p className="text-truncate">
                    {this.props.data.buy.data.quantity / 10 ** 18}{' '}
                    {this.props.data.buy.type}
                  </p>
                </div>
                <div className="col-12">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={`https://market.immutable.com/assets/0x83f120283c30c796ebe9216ccaf6718c31213681/${this.props.data.sell.data.token_id}`}
                    className="btn btn-primary border border-0 col-12"
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

export default AvatarCard;

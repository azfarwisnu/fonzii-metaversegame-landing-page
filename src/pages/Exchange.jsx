import React from 'react';
import ExchangeSection from '../components/ExchangeSection';

class Exchange extends React.Component {
  componentDidMount() {
    document.title = 'Exchange';
  }

  render() {
    return (
      <>
        <ExchangeSection />
      </>
    );
  }
}

export default Exchange;

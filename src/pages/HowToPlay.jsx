import React from 'react';

import HowToPlaySection from '../components/HowToPlaySection';

class HowToPlay extends React.Component {
  componentDidMount() {
    document.title = 'GoG x Sandbox | How to Play';
  }

  render() {
    return (
      <>
        <HowToPlaySection />
      </>
    );
  }
}

export default HowToPlay;

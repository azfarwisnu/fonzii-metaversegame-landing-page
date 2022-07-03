import React from 'react';

import HowToPlaySection from '../components/HowToPlaySection';

class HowToPlay extends React.Component {
  componentDidMount() {
    document.title = 'How to Play';
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

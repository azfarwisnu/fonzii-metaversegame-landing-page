import React from 'react';
import HeroesSection from '../components/HeroesSection';

class Heroes extends React.Component {
  componentDidMount() {
    document.title = 'GoG x Sandbox | Heroes Market';
  }

  render() {
    return (
      <>
        <HeroesSection />
      </>
    );
  }
}

export default Heroes;

import React from 'react';
import HeroesSection from '../components/HeroesSection';

class Heroes extends React.Component {
  componentDidMount() {
    document.title = 'Avatar Market';
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

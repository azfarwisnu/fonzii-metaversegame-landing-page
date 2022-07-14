import React from 'react';
import HomeSection from '../components/HomeSection';

class Home extends React.Component {
  componentDidMount() {
    document.title = 'GoG x Sandbox | Home';
  }

  render() {
    return <HomeSection />;
  }
}

export default Home;

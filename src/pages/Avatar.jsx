import React from 'react';
import AvatarSection from '../components/AvatarSection';

class Heroes extends React.Component {
  componentDidMount() {
    document.title = 'GoG x Sandbox | Avatar Market';
  }

  render() {
    return (
      <>
        <AvatarSection />
      </>
    );
  }
}

export default Heroes;

import React from 'react';
import TopBar from '../TopBar/TopBar';
import Galleries from '../Galleries/Galleries';

class Home extends React.Component {

  render() {
    return (
      <div>
        <TopBar albumTitle={''} />
        <Galleries />
      </div>
    );
  }
}

export default Home;

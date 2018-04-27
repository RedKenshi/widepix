/* eslint-disable max-len */
import React from 'react';
import Gallerie from '../Gallerie/Gallerie.js';

class Galleries extends React.Component {

  constructor() {
    super();
    this.state = {
      galleries: [],
    };
  }
  componentWillMount() {
    fetch('http://localhost:8081/getgalleries')
            .then(response => response.json())
            .then((json) => {
              this.setState({
                galleries: json,
              });
            });
  }
  render() {
    const gallerieList = this.state.galleries.map(gallerie => <Gallerie data={gallerie} />);
    return <div className={'gallerieList'}>{ gallerieList }</div>;
  }
}


export default Galleries;

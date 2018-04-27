import React from 'react';
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom'

class TopBar extends React.Component {

  propTypes: {
      name: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired
  };

  constructor() {
      super();
      this.state = {
      };
      this.backToGalleries = this.backToGalleries.bind(this);
  }

    backToGalleries() {
      this.props.history.push('/');
  }

  render() {
    return (
      <div className="topbar">
        <h1 onClick={this.backToGalleries} >WIDE PICTURES</h1>
          <h2>{this.props.albumTitle.toUpperCase()}</h2>
      </div>
    );
  }
}

export default withRouter(TopBar);

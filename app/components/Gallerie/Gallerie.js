import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom'

class Gallerie extends React.Component {

    propTypes: {
        name: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired
    };

    constructor() {
        super();
        this.state = {
            background:'',
        };
        this.navigateToGallerie = this.navigateToGallerie.bind(this);
    }

    componentWillMount(){
        this.setState({
            background: 'url("app/resources/thumbnails/'+this.props.data.thumbnail+'.jpg"'
        });
    }

    navigateToGallerie() {
        this.props.history.push('/'+this.props.data.name);
    }

  render() {
    return (
      <div onClick={this.navigateToGallerie} className={'gallerieThumbnailContainer'}>
        <div className={'gallerieThumbnail'} style={{backgroundImage: this.state.background}}></div>
        <h2>{this.props.data.name.toUpperCase()}</h2>
      </div>
    );
  }
}


export default withRouter(Gallerie);

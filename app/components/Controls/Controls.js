import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
var FontAwesome = require('react-fontawesome');

class Controls extends React.Component {

    propTypes: {
        previousFunction: PropTypes.func,
        nextFunction: PropTypes.func
    };

    constructor(){
        super();
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
    }

    previous(){
        this.props.previousFunction();
    }

    next(){
        this.props.nextFunction();
    }

  render() {
    return (
        <div className={'controlContainer'}>
            <button onClick={this.previous} className={'btn previous'}><FontAwesome className='super-crazy-colors' name='angle-left' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /> previous</button>
            <button onClick={this.next} className={'btn next'}>next <FontAwesome className='super-crazy-colors' name='angle-right' size='lg' style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }} /></button>
        </div>
    );
  }
}


export default withRouter(Controls);

import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter as Router } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import $ from 'jquery';

class Carousel extends React.Component {

    propTypes: {
        albumTitle: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
        serial: PropTypes.string.isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            albumTitle : this.props.albumTitle,
            picName : null,
            picUrl : null,
            picSerial : null,
        };
    }

    componentDidUpdate(){
        setTimeout(function(){
            $('#fullFormatImage').fadeIn(1000);
        },800);
    }

    componentWillReceiveProps(nextProps){
        this.setState({
            picUrl : 'app/resources/'+this.props.albumTitle+'/'+this.props.serial.toString().padStart(3,'0')+'.jpg',
            picName : this.props.name,
        })
    }

    componentWillMount(){
        this.state.picSerial = this.props.serial;
        this.state.picName = this.props.name;
        console.log(this.state);
    }

    render() {
        return (
            <div className={'carouselContainer'}>
                <h2>{this.state.picName}</h2>
                <img id={'fullFormatImage'} className={'fullFormatImage'} src={this.state.picUrl}/>
            </div>
        );
    }
}


export default withRouter(Carousel);

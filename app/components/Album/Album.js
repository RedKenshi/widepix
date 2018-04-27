import React from 'react';
import TopBar from '../TopBar/TopBar';
import Carousel from '../Carousel/Carousel';
import Controls from '../Controls/Controls';
import PropTypes from "prop-types";
import $ from "jquery";
import { withRouter } from 'react-router-dom'

class Album extends React.Component {

  propTypes: {
      albumTitle: PropTypes.string.isRequired,
  };

    constructor() {
        super();
        this.state = {
            currentPictureId: 1,
            picSerial: 1,
        };
        this.previous = this.previous.bind(this);
        this.next = this.next.bind(this);
        this.triggerUpdate = this.triggerUpdate.bind(this);
    }

    previous(){
        if(this.state.currentPictureId > 1){
            this.state.currentPictureId -= 1;
        }
        $('#fullFormatImage').fadeOut(1000);
        setTimeout(this.triggerUpdate,800);
    }

    next(){
        this.state.currentPictureId += 1;
        $('#fullFormatImage').fadeOut(1000);
        setTimeout(this.triggerUpdate,800);
    }

    triggerUpdate(){
        console.log('y');
        console.log(this.state.currentPictureId);
        fetch('http://localhost:8081/getpicture/' + this.props.albumTitle + '/' + this.state.currentPictureId)
            .then(response => response.json())
            .then((json) => {
                //console.log(json[0].name + '/' + json[0].serial);
                this.setState({
                    picName: json[0].name,
                    picSerial: json[0].serial,
                });
            });
    }

    componentDidMount(){
        console.log('x');
        console.log(this.state.currentPictureId);
        fetch('http://localhost:8081/getpicture/' + this.props.albumTitle + '/' + this.state.currentPictureId)
            .then(response => response.json())
            .then((json) => {
                //console.log(json[0].name + '/' + json[0].serial);
                this.setState({
                    picName: json[0].name,
                    picSerial: json[0].serial,
                });
            });
    }

  render() {
    return (
      <div>
        <TopBar albumTitle={this.props.albumTitle} />
        <Carousel albumTitle={this.props.albumTitle} name={this.state.picName} serial={this.state.picSerial}/>
        <Controls nextFunction={this.next} previousFunction={this.previous} />
      </div>
    );
  }
}

export default withRouter(Album);

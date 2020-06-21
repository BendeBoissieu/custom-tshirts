import React, { Component } from 'react';
import { Rnd } from "react-rnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FontPicker from "font-picker-react";
import Moveable from "react-moveable";

class Tshirt extends Component {
  constructor() {
    super()
    this.state = {
      tshirtId: null
    }
  }

  deleteImage = (e) => {
    //console.log(e);
  }

  render() {
    var url_image_upload = this.props.state.imagePreviewUrl
    const styleImageUploaded = {
      display: this.props.state.showImageUpload ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "center",
      border: (this.props.state.showAddImageUpload && this.props.state.imagePreviewUrl) ? "solid 1px #ddd" : 'none',
      backgroundImage: this.props.state.imagePreviewUrl? `url(${url_image_upload})`: 'none',
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    };

    var url_image_design = `.././public/art_word/${this.props.state.selectedImg}.svg`;
    const styleImageDesign = {
      display: this.props.state.showAddImageTshirt ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "center",
      border: (this.props.state.showAddDesign && this.props.state.selectedImg) ? "solid 1px #ddd" : 'none',
      backgroundImage: this.props.state.selectedImg? `url(${url_image_design})`: 'none',
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    };
    const styleText = {
      activeFontFamily: this.props.state.activeFontFamily,
      display: this.props.state.showAddTextTshirt ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "center",
      border: this.props.state.showAddTextMenu ? "solid 1px #ddd" : 'none',
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      fontSize: this.props.state.fontsize,
      color: this.props.state.colorFont,
      fontStyle: this.props.state.fontStyle,
      fontWeight: this.props.state.fontWeight,
      textDecoration: this.props.state.textDecoration,
      textAlign: this.props.state.textAlign
    };
    return (
      <div className="tshirt apply-font">
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300, margin: 'auto'}} src="../public/shirt2.png" alt="tshirt"  onClick={this.props.displayResult}/>
        <Rnd style={styleText} id="image_text" default={{ x: 25, y: 40, width: 100, height: 100}} onClick={this.props.showMenuImageBottom} >
          {this.props.state.text}
        </Rnd>
        <Rnd style={styleImageDesign} id="image_design" default={{ x: 20, y: 40, width: 120, height: 150}} onClick={this.props.showMenuImageBottom}>
        </Rnd>
        <Rnd style={styleImageUploaded} id="image_upload" default={{ x: 20, y: 40, width: 120, height: 150}} onClick={this.props.showMenuImageBottom}>
        </Rnd>
        <div className="bottom-menu-image" style={{display: this.props.state.showBottomMenu ? 'block' : 'none' }}>
          <FontAwesomeIcon icon={faTrash} className="icon-trash" onClick={this.props.hideComponent} />
        </div>
      </div>
    );
  }
}

export default Tshirt;


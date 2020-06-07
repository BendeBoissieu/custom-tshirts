import React, { Component } from 'react';
import { Rnd } from "react-rnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import FontPicker from "font-picker-react";

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
    var url_image = ".././public/art_word/happy_father.svg"
    const style = {
      display: this.props.state.showAddImageTshirt ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #ddd",
      backgroundImage: `url(${url_image})`,
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
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300, margin: 'auto'}} src="../public/shirt2.png" alt="tshirt" />
        <Rnd style={styleText} id="text1" default={{ x: 25, y: 40, width: 100, height: 100}} onClick={this.props.showMenuImageBottom} >
          {this.props.state.text}
        </Rnd>
        <Rnd style={style} id="img1" default={{ x: 20, y: 40, width: 120, height: 150}} onClick={this.showMenuImage}>
        </Rnd>
        <div className="bottom-menu-image" style={{display: this.props.state.showBottomMenu ? 'block' : 'none' }}>
          <FontAwesomeIcon icon={faTrash} className="icon-trash" onClick={(e) => {this.props.hideComponent()}} />
        </div>
      </div>
    );
  }
}

export default Tshirt;

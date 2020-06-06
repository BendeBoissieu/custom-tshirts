import React, { Component } from 'react';
import { Rnd } from "react-rnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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
    var url_image = ".././public/terre-arbre.png"
    const style = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "solid 1px #ddd",
      backgroundImage: `url(${url_image})`,
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat"
    };
    const styleText = {
      display: this.props.state.showAddTextTshirt ? 'flex' : 'none',
      alignItems: "center",
      justifyContent: "center",
      border: this.props.state.showAddTextMenu ? "solid 1px #ddd" : 'none',
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      fontSize: this.props.state.fontsize,
      color: this.props.state.colorFont
    };
    return (
      <div className="tshirt">
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300}} src="../public/shirt2.png" alt="tshirt" />
        <div className="box-text">
          <Rnd style={styleText} id="text1" default={{ x: 20, y: 40, width: 100, height: 100}} onClick={this.props.showMenuImageBottom} >
            {this.props.state.text}
          </Rnd>
          <div className="bottom-menu-image" style={{display: this.props.state.showBottomMenu ? 'block' : 'none' }}>
            <FontAwesomeIcon icon={faTrash} className="icon-trash" onClick={this.props.hideText} />
          </div>
          <Rnd style={style} id="img1" default={{ x: 85, y: 100, width: 120, height: 150}} onClick={this.showMenuImage}>
          </Rnd>
        </div>
      </div>
    );
  }
}

export default Tshirt;

import React, { Component } from 'react';
import { Rnd } from "react-rnd";

class Tshirt extends Component {

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
      fontSize: this.props.state.fontsize,
      color: this.props.state.colorFont
    };
    return (
      <div className="tshirt">
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300}} src="../public/shirt2.png" alt="tshirt" />
        <div className="box-text">
          <div className="text" style={styleText}>{this.props.state.text}</div>
        </div>
          <Rnd style={style} default={{ x: 85, y: 100, width: 120, height: 150}} />
      </div>
    );
  }
}

export default Tshirt;

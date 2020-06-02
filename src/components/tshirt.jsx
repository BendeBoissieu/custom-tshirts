import React, { Component } from 'react';

class Tshirt extends Component {

  render() {
    const styleText = {
      fontSize: this.props.state.fontsize,
      color: this.props.state.colorFont
    }
    return (
      <div className="tshirt">
        <img style={{backgroundColor: this.props.state.colorTshirt, width: 300}} src="../public/shirt2.png" alt="tshirt" />
        <div className="box-text">
          <div className="text" style={styleText}>{this.props.state.text}</div>
        </div>
      </div>
    );
  }
}

export default Tshirt;

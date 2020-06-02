import React, { Component } from 'react';

class AddText extends Component {
  render(){
    return(
      <div className="addText">
        <h3>Add your text</h3>
        <p className="fa-close" onClick={this.props.showHideAddText}>close</p>
        <input className="text-input" value={this.props.text} placeholder='your text' onChange={this.props.changeText}></input>
        <p>Font Size</p>
        <input className="text-input" value={this.props.state.fontsize} onChange={this.props.changeTextFontSize}></input>
        <p>Font Couleur</p>
        <ul className="nav" onClick={this.props.changeFontColor}>
          <li className="color-preview" data-font-id= "black" style={{backgroundColor: "black" }}></li>
          <li className="color-preview" data-font-id= "green" style={{backgroundColor: "green" }}></li>
          <li className="color-preview" data-font-id= "yellow" style={{backgroundColor: "yellow" }}></li>
          <li className="color-preview" data-font-id= "#eead91" style={{backgroundColor: "#eead91" }}></li>
          <li className="color-preview" data-font-id= "#c50404" style={{backgroundColor: "#c50404" }}></li>
        </ul>
      </div>
    );
  }
}

export default AddText;

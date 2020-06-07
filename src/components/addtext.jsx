import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBold, faItalic, faUnderline, faAlignJustify, faAlignLeft, faAlignCenter, faAlignRight } from "@fortawesome/free-solid-svg-icons";
import ColorFontCustom from './colorfontcustom';
import FontPicker from "font-picker-react";


var numbersFontSize = [];
for (var i = 8; i <= 35; i++) {
   numbersFontSize.push(i);
}

var fontkey = config.FONT_KEY

class AddText extends Component {
  render(){
    const fontStyle = {
      fontStyle: this.props.state.fontStyle,
      fontWeight: this.props.state.fontWeight,
      textDecoration: this.props.state.textDecoration,
      textAlign: this.props.state.textAlign
    }

    return(
      <div className="addText">
        <h3>
          Add your text
          <span>
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={(e) => {this.props.hideMenu('add_text')}} />
          </span>
        </h3>
        <div className="container-add-text">
          <textarea className="text-input apply-font" value={this.props.text} style={fontStyle} placeholder='Your text' onChange={this.props.changeText}></textarea>
          <div className="font-input">
            Font Family
            <FontPicker apiKey={fontkey} activeFontFamily={this.props.state.activeFontFamily}onChange={(nextFont) => {this.props.changeFontFamily}} />
          </div>
          <div className="font-input">
            Font Size
            <select style= {{width: "70px", margin: "0 10px"}} value={this.props.state.fontsize} onChange={this.props.changeTextFontSize} >
              {numbersFontSize.map((number) => <option key={number.toString()} value={number}>{number}</option>)}
            </select>
          </div>
          <div className="font-input">
            Font Couleur
            <ColorFontCustom color= {this.props.state.colorFont } changeFontColor={this.props.changeFontColor}/>
          </div>
          <hr/>
          <FontAwesomeIcon icon={faBold} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('bold')}} />
          <FontAwesomeIcon icon={faItalic} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('italic')}} />
          <FontAwesomeIcon icon={faUnderline} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('underline')}} />
          <FontAwesomeIcon icon={faAlignJustify} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('justify')}} />
          <FontAwesomeIcon icon={faAlignLeft} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('left')}} />
          <FontAwesomeIcon icon={faAlignCenter} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('center')}} />
          <FontAwesomeIcon icon={faAlignRight} className="icon-text-style" onClick={(e) => {this.props.changeFontStyle('right')}} />

        </div>

      </div>
    );
  }

}

export default AddText;

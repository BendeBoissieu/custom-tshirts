import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ColorFontCustom from './colorfontcustom';

var numbersFontSize = [];
for (var i = 8; i <= 35; i++) {
   numbersFontSize.push(i);
}

class AddText extends Component {

  render(){
    return(
      <div className="addText">
        <h3>
          Add your text
          <span>
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={this.props.hideAddTextMenu} />
          </span>
        </h3>
        <div className="row">
          <div className="col-xs-6">
            <textarea className="text-input" value={this.props.text} placeholder='your text' onChange={this.props.changeText}></textarea>
            <p>Font Size</p>
            <select value={this.props.state.fontsize} onChange={this.props.changeTextFontSize} >
              {numbersFontSize.map((number) => <option key={number.toString()} value={number}>{number}</option>)}
            </select>
            <p>Font Family</p>
          </div>
          <div className="col-xs-6">
            <p>Font Couleur</p>
            <ColorFontCustom color= {this.props.state.colorFont } changeFontColor={this.props.changeFontColor}/>
          </div>
        </div>

      </div>
    );
  }

}

export default AddText;

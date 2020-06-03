import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class AddText extends Component {
  render(){
    return(
      <div className="addText">
        <h3>
          Add your text
          <span>
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={this.props.showHideAddText} />
          </span>
        </h3>
        <div className="row">
          <div className="col-xs-6">
            <textarea className="text-input" value={this.props.text} placeholder='your text' onChange={this.props.changeText}></textarea>
            <p>Font Size</p>
            <input className="text-input" value={this.props.state.fontsize} onChange={this.props.changeTextFontSize}></input>
          </div>
          <div className="col-xs-6">
            <p>Font Couleur</p>
            <SketchPicker color={ this.props.state.colorFont } onChangeComplete={ this.props.changeFontColor }
            />
          </div>
        </div>

      </div>
    );
  }
}

export default AddText;


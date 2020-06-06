import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faBold, faItalic, faUnderline, faAlignJustify, faAlignLeft, faAlignCenter, faAlignRight } from "@fortawesome/free-solid-svg-icons";
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
        <div className="container-add-text">
          <textarea className="text-input" value={this.props.text} placeholder='Your text' onChange={this.props.changeText}></textarea>
          <p>
            Font Size
            <select style= {{width: "70px", margin: "0 10px"}} value={this.props.state.fontsize} onChange={this.props.changeTextFontSize} >
              {numbersFontSize.map((number) => <option key={number.toString()} value={number}>{number}</option>)}
            </select>
          </p>
          <p>
            Font Couleur
            <ColorFontCustom color= {this.props.state.colorFont } changeFontColor={this.props.changeFontColor}/>
          </p>
          <hr/>
          <FontAwesomeIcon icon={faBold} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faItalic} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faUnderline} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faAlignJustify} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faAlignLeft} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faAlignCenter} className="icon-text-style" onClick={this.props.hideText} />
          <FontAwesomeIcon icon={faAlignRight} className="icon-text-style" onClick={this.props.hideText} />

        </div>

      </div>
    );
  }

}

export default AddText;

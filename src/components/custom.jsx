import React, { Component } from 'react';
import AddText from './addtext';
import FindDesign from './finddesign';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faIcons, faPenSquare } from "@fortawesome/free-solid-svg-icons";

class Custom extends Component {
  render(){
    return(
      <div className="Custom">
        <h2>Stanley/Stella - STTW036</h2>
        <div className="rectangle-customize" style={{display: this.props.state.showAddTextMenu ? 'block' : 'none' }}>
          <AddText state={this.props.state} changeText={this.props.changeText} hideMenu={this.props.hideMenu} changeTextFontSize={this.props.changeTextFontSize} changeFontColor={this.props.changeFontColor} changeFontStyle={this.props.changeFontStyle} changeFontFamily={this.props.changeFontFamily}/>
        </div>
        <div className="rectangle-customize" style={{display: this.props.state.showAddDesign ? 'block' : 'none' }}>
          <FindDesign hideMenu={this.props.hideMenu} selectImg={this.props.selectImg} />
        </div>


        <p>Choose Color</p>
        <ul className="nav" onClick={this.props.changeTshirtColor}>
          <li className="color-preview" data-id= "white" style={{backgroundColor: "white" }}></li>
          <li className="color-preview" data-id= "black" style={{backgroundColor: "black" }}></li>
          <li className="color-preview" data-id= "#616161" style={{backgroundColor: "#616161" }}></li>
          <li className="color-preview" data-id= "green" style={{backgroundColor: "green" }}></li>
          <li className="color-preview" data-id= "yellow" style={{backgroundColor: "yellow" }}></li>
          <li className="color-preview" data-id= "#eead91" style={{backgroundColor: "#eead91" }}></li>
          <li className="color-preview" data-id= "#806355" style={{backgroundColor: "#806355" }}></li>
          <li className="color-preview" data-id= "#3469b7" style={{backgroundColor: "#3469b7" }}></li>
          <li className="color-preview" data-id= "#c50404" style={{backgroundColor: "#c50404" }}></li>
        </ul>
        <br/>
        <br/>
        <p>Choose quantity/size</p>
        <table className="quantity-size" onChange={this.props.quantitySize}>
          <tbody>
            <tr>
              <th>XS</th>
              <th>S</th>
              <th>M</th>
              <th>L</th>
              <th>XL</th>
              <th>XXL</th>
              <th>3XL</th>
            </tr>
            <tr>
              <td><input className="size-input" name="XS" type="number" min='0'></input></td>
              <td><input className="size-input" name="S" type="number" min='0'></input></td>
              <td><input className="size-input" name="M" type="number" min='0'></input></td>
              <td><input className="size-input" name="L" type="number" min='0'></input></td>
              <td><input className="size-input" name="XL" type="number" min='0'></input></td>
              <td><input className="size-input" name="XXL" type="number" min='0'></input></td>
              <td><input className="size-input" name="2XL" type="number" min='0'></input></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <button className="button-custom">
          <FontAwesomeIcon icon={faUpload} className="icons-buttons"/>
          Upload Image</button>
        <button className="button-custom button-custom-middle" onClick={this.props.showFindDesign}>
          <FontAwesomeIcon icon={faIcons} className="icons-buttons"/>
          Find Design</button>
        <button className="button-custom" onClick={this.props.showAddTextMenu}>
          <FontAwesomeIcon icon={faPenSquare} className="icons-buttons"/>
          Add text
        </button>
      </div>
    );
  }
}

export default Custom;


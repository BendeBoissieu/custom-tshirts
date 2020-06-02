import React, { Component } from 'react';
import AddText from './addtext';

class Custom extends Component {
  render(){
    return(
      <div className="Custom">
        <h2>Stanley/Stella - STTW036</h2>
        <div className="add_text" style={{display: this.props.state.showAddText ? 'block' : 'none' }}>
          <AddText state={this.props.state} changeText={this.props.changeText} showHideAddText={this.props.showHideAddText} changeTextFontSize={this.props.changeTextFontSize} changeFontColor={this.props.changeFontColor}/>
        </div>
        <p>Choose Color</p>
        <ul className="nav" onClick={this.props.changeTshirtColor}>
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
              <td><input className="size-input" name="XS" type="number" placeholder='3456'></input></td>
              <td><input className="size-input" name="S" type="number" placeholder='234'></input></td>
              <td><input className="size-input" name="M" type="number" placeholder='342'></input></td>
              <td><input className="size-input" name="L" type="number" placeholder='1245'></input></td>
              <td><input className="size-input" name="XL" type="number" placeholder='345'></input></td>
              <td><input className="size-input" name="XXL" type="number" placeholder='356'></input></td>
              <td><input className="size-input" name="2XL" type="number" placeholder='46'></input></td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <button>Upload Image</button>
        <button>Find Design</button>
        <button onClick={this.props.showHideAddText}>Add text</button>
      </div>
    );
  }
}

export default Custom;


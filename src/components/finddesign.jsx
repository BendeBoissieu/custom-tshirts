import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class FindDesign extends Component {
  render(){
    return(
      <div className="addText">
        <h3>
          Find a design
          <span>
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={(e) => {this.props.hideMenu('add_design')}} />
          </span>
        </h3>
        <div className="row">
          <div className="col-sm-3">
            <img src=".././public/art_word/garden_trolley.svg" id="garden_trolley" alt="Garden Trolley"/>
          </div>
          <div className="col-sm-3">
            <img src=".././public/art_word/happy_father.svg" id="happy_father" alt="Garden Trolley"/>
          </div>
        </div>

      </div>
    );
  }
}

export default FindDesign;


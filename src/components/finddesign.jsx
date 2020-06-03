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
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={this.props.showHideFindDesign} />
          </span>
        </h3>

      </div>
    );
  }
}

export default FindDesign;


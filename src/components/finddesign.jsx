import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import ImgDesign from './img_design';

const image_designs = ["garden_trolley", "happy_father", "black_white_rainbow"];

class FindDesign extends Component {
  renderList = () => {
    return image_designs.map(img =>
        <ImgDesign name={img} key={img} selectImg={this.props.selectImg}/>
    )
  }
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
          {this.renderList()}
        </div>

      </div>
    );
  }
}

export default FindDesign;


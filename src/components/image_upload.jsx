import React, { Component } from 'react';
import { SketchPicker } from 'react-color';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class ImageUpload extends React.Component {
  render() {
    let $imagePreview = null;
    $imagePreview = (<div className="previewText"></div>);
    return (
      <div className="addText">
        <h3>
          Upload a picture
          <span>
            <FontAwesomeIcon icon={faTimes} style= {{float: "right"}} onClick={(e) => {this.props.hideMenu('add_upload')}} />
          </span>
        </h3>
        <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
            <input className="fileInput"
              type="file"
              onChange={(e)=>this.props._handleImageChange(e)} />
          </form>
        </div>
      </div>
    )
  }
}

export default ImageUpload


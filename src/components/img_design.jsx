import React, { Component } from 'react';

class ImgDesign extends Component {
  handleClick = () => {
    if (this.props.selectImg){this.props.selectImg(this.props.name)}
  }

  shouldComponentUpdate(nextProps, nextState){
    return nextProps.name != this.props.name; //don t call render is props not changed
  }

  render(){
    console.log("img design"+ this.props.name);
    if (!this.props.name) {
      return null;
    }
    const src = `.././public/art_word/${this.props.name}.svg`;
    return(
      <div className="col-sm-3">
        <img src={src} dataimage={this.props.name} onClick={this.handleClick} alt={this.props.name} width="100px"/>
      </div>
    );
  }
}

export default ImgDesign;

import React, { Component } from 'react';
import Tshirt from './tshirt';
import Custom from './custom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colorTshirt: 'green',
      text: 'Your text',
      fontsize: 12,
      showAddTextMenu: false,
      showAddTextTshirt: false,
      colorFont: '#22194D',
      idText: 0,
      showBottomMenu: false,
      fontStyle: 'normal',
      fontWeight: 'normal',
      textDecoration: 'none',
      textAlign: 'left'
    }
  }


  //createIdText = () => {
  //  this.setState({idText: this.state.idText + 1})
  //  this.setState({`showAddText_${this.state.idText}`: true})
  //  console.log("id");
  //  console.log(`showAddText_${this.state.idText +1}`);
  //}

  hideAddTextThirt = () => {
    this.setState({showAddTextTshirt: false})
  }

  showAddTextMenu = () => {
    this.setState({showAddTextMenu: true})
    this.setState({showAddTextTshirt: true})
    this.setState({showBottomMenu: true})
  }

  hideAddTextMenu = () => {
    this.setState({showAddTextMenu: false})
    this.setState({showBottomMenu: false})
  }

  showMenuImageBottom = () => {
    this.setState({showBottomMenu: true})
    this.setState({showAddTextMenu: true})
  }

  hideText = () => {
    this.setState({showAddTextTshirt: false})
    this.setState({showBottomMenu: false})
    this.setState({showAddTextMenu: false})
  }

  //showHideAddText = () => {
  //  console.log(id);
  //  this.setState({showAddText: !this.state.showAddText})
  //}

  showHideFindDesign = () => {
    this.setState({showFindDesign: !this.state.showFindDesign})
  }

  changeText = (e) => {
    var newtext = e.target.value.split(" ").join("\u00A0");
    this.setState({text: newtext})
  }

  changeTextFontSize = (e) => {
    var valueSize = parseInt(e.target.value);
    this.setState({fontsize: valueSize})
  }

  changeFontColor = (color) => {
    this.setState({colorFont: color.hex})
  }

  changeFontStyle = (e) => {
    switch (e) {
      case 'italic':
        if(this.state.fontStyle == e){
          this.setState({fontStyle: 'normal'})
        } else
        {
          this.setState({fontStyle: e})
        }
      case 'bold':
        if(this.state.fontWeight == e){
          this.setState({fontWeight: 'normal'})
        } else
        {
          this.setState({fontWeight: e})
        }
      case 'underline':
        if(this.state.textDecoration == e){
          this.setState({textDecoration: 'none'})
        } else
        {
          this.setState({textDecoration: e})
        }
      case 'justify':
        this.setState({textAlign: e})
      case 'left':
        this.setState({textAlign: e})
      case 'center':
        this.setState({textAlign: e})
      case 'right':
        this.setState({textAlign: e})
    }
  }

  changeTshirtColor = (e) => {
    this.setState({colorTshirt: e.target.getAttribute('data-id')})
  }

  quantitySize = (e) => {
    //console.log(e.target);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5 col-xs-12">
            <Tshirt state={this.state} showMenuImageBottom={this.showMenuImageBottom} hideText={this.hideText}/>
          </div>
          <div className="col-sm-7 col-xs-12">
            <Custom state={this.state} showAddTextMenu={this.showAddTextMenu} hideAddTextMenu={this.hideAddTextMenu} changeTshirtColor={this.changeTshirtColor} quantitySize={this.quantitySize} changeText={this.changeText} changeTextFontSize={this.changeTextFontSize} changeFontColor={this.changeFontColor} showHideFindDesign={this.showHideFindDesign} createIdText={this.createIdText} changeFontStyle={this.changeFontStyle} />
            <button className="button-continue">Continue</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';
import Tshirt from './tshirt';
import Custom from './custom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      colorTshirt: 'white',
      text: 'write here',
      fontsize: 12,
      showAddText: false,
      colorFont: 'red'
    }
  }

  showHideAddText = () => {
    this.setState({showAddText: !this.state.showAddText})
  }

  changeText = (e) => {
    this.setState({text: e.target.value})
  }

  changeTextFontSize = (e) => {
    var valueSize = parseInt(e.target.value);
    this.setState({fontsize: valueSize})
  }

  changeFontColor = (e) => {
    this.setState({colorFont: e.target.getAttribute('data-font-id')})
  }

  changeTshirtColor = (e) => {
    this.setState({colorTshirt: e.target.getAttribute('data-id')})
  }

  quantitySize = (e) => {
    console.log(e.target);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <Tshirt state={this.state}/>
          </div>
          <div className="col-sm-7">
            <Custom state={this.state} showHideAddText={this.showHideAddText} changeTshirtColor={this.changeTshirtColor} quantitySize={this.quantitySize} changeText={this.changeText} changeTextFontSize={this.changeTextFontSize} changeFontColor={this.changeFontColor}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

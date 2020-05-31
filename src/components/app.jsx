import React, { Component } from 'react';
import Tshirt from './tshirt';
import Custom from './custom';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 'white'
    }
  }

  changeTshirtColor = (e) => {
    this.setState({color: e.target.getAttribute('data-id')})
  }

  quantitySize = (e) => {
    console.log(e.target);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <Tshirt color={this.state.color}/>
          </div>
          <div className="col-sm-7">
            <Custom changeTshirtColor={this.changeTshirtColor} quantitySize={this.quantitySize}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App;

import React, { Component } from 'react';

class Tshirt extends Component {

  render() {
    return (
      <div className="tshirt">
        <img style={{backgroundColor: this.props.color, width: 300}} src="../public/shirt2.png" alt="tshirt" />
      </div>
    );
  }
}

export default Tshirt;

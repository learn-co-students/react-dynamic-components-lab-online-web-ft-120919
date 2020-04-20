import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [

    ]
  }

  render() {
    return (
      <div className="color-box" style={{ opacity: this.props.value /*replace null with the value*/ }}>
        {this.props.value >= 0.2 ? this.props.value - 0.1 : this.promp.value}
      </div>
    )
  }

}


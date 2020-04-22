import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    const thisOpacity = this.props.opacity * 100;
    const newOpacity = thisOpacity - 10;
    return (
      <div className="color-box" style={{opacity: this.props.opacity}}>
        {thisOpacity < 20 ? null : <ColorBox opacity={newOpacity / 100}/>}
      </div>
    )
  }

}


import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if(this.props.selectGif) {
      this.props.selectGif(this.props.id);
    }
  }

  render() {
    const src = `https://media4.giphy.com/media/${this.props.id}/giphy.gif`;
    return(
      <img className="gif" src={src} onClick={this.handleClick} />
    )
  }
}

export default Gif;

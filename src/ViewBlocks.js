import React, { Component } from "react"

class ViewBlocks extends Component {
  handleClick() {
    console.log("I'm viewing the blocks!")
  }

  render() {
    return (
      <div>
        <button className="viewBlocks" onClick={this.handleClick}>
          VIEW BLOCKS
        </button>
      </div>
    )
  }
}

export default ViewBlocks

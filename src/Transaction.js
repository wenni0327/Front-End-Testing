import React, { Component } from "react"

class Transaction extends Component {
  constructor(props) {
    super(props)
    this.state = { showTransForm: false }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    this.setState({ showTransForm: true })
  }

  renderTransForm() {
    return (
      <div>
        <form className="form">
          <label className="formLabel">To</label>
          <input
            type="number"
            className="formInput"
            placeholder="Enter public key"
          ></input>

          <label className="formLabel">Amount</label>
          <input
            type="number"
            className="formInput"
            placeholder="Enter amount"
          ></input>

          <button className="formButton">Confirm</button>
        </form>
      </div>
    )
  }

  render() {
    const { showTransForm } = this.state

    return (
      <div>
        <button className="transaction" onClick={this.onClick}>
          TRANSACTION
        </button>
        {showTransForm && this.renderTransForm()}
      </div>
    )
  }
}

export default Transaction

import * as React from "react"
import { Link } from "react-router-dom"

import "./tweet.css"

class Tweet extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
    this.popup = this.popup.bind(this)
    this.close = this.close.bind(this)
    this.onUser = this.onUser.bind(this)
  }

  onUser() {
    this.props.history.push(`/${this.props.author.username}`)
  }

  popup() {
    this.setState({ clicked: true })
  }
  close() {
    this.setState({ clicked: false })
  }

  render() {
    if (this.state.clicked) {
      return (
        <div className="overlay">
          <div className="popup">
            <button className="close-icon" onClick={this.close}>
              x
            </button>
            <div className="popup-author">
              <img className="popup-icon" src={require("./user-icon.png")} />

              <div className="popup-author-info" onClick={this.onUser}>
                <div className="tweet-author-text">
                  {this.props.author.name}
                </div>
                <div className="tweet-user-text">
                  {this.props.author.username}
                </div>
              </div>
            </div>

            <div className="popup-text">{this.props.text}</div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="tweet" onClick={this.popup}>
          <div className="tweet-author">
            <img className="author-icon" src={require("./user-icon.png")} />
            <div className="author-info">
              <div className="tweet-author-text">{this.props.author.name}</div>
              <div className="tweet-user-text">
                {this.props.author.username}
              </div>
            </div>
          </div>
          <div className="tweet-text">{this.props.text}</div>
        </div>
      )
    }
  }
}

export default Tweet

import * as React from "react"
import "./tweet.css"

interface Props {
  text: string
  id: string
  author: User
}
interface User {
  id: string
  name: string
  email: string
}

class Tweet extends React.Component<Props, { clicked: boolean }> {
  constructor(props: any) {
    super(props)
    this.state = { clicked: false }
    this.popup = this.popup.bind(this)
    this.close = this.close.bind(this)
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
              <div className="popup-author-text">{this.props.author.name}</div>
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
            <div className="tweet-author-text">{this.props.author.name}</div>
          </div>
          <div className="tweet-text">{this.props.text}</div>
        </div>
      )
    }
  }
}

export default Tweet

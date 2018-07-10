import * as React from "react"
import "./navigation.css"

class Navigation extends React.Component {
  render() {
    return (
      <div className="header">
        <header className="navigation">
          <ul className="menu">
            <li className="home">
              <img
                src={require("./home-icon-blue.png")}
                className="home-icon"
              />
              {/* <img src={require("./home-icon.png")} className="home-icon"/> */}
              Home
            </li>
            <li className="notifications">
              <img
                src={require("./notification-icon.png")}
                className="notification-icon"
              />Notifications
            </li>
            <li className="messages">
              <img
                src={require("./message-icon.png")}
                className="message-icon"
              />Messages
            </li>
          </ul>
          <img
            src={require("./bird-icon.png")}
            className="bird-icon"
            alt="bird-icon"
          />
          {/* <h2 className="nav-name">Tweeter</h2> */}
          <button className="tweetButton">Tweet</button>
          <img src={require("./user-icon.png")} className="user-icon" />
          <button className="search">Search Twitter</button>
        </header>
      </div>
    )
  }
}

export default Navigation

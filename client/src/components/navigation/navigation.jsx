import * as React from "react"
// import * as Popup from "reactjs-popup"
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
              Home
            </li>
            <li
              className="notifications"
              onClick={() => {
                window.confirm("lol sorry this doesn't work yet")
              }}
            >
              <img
                src={require("./notification-icon.png")}
                className="notification-icon"
              />Notifications
            </li>
            <li
              className="messages"
              onClick={() => {
                window.confirm("lol sorry this doesn't work yet")
              }}
            >
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
          <button
            className="tweetButton"
            onClick={() => {
              window.confirm("lol sorry this doesn't work yet")
            }}
          >
            Tweet
          </button>

          <img
            src={require("./user-icon.png")}
            className="user-icon"
            onClick={() => {
              window.confirm("lol sorry this doesn't work yet")
            }}
          />

          {/* <Popup
            trigger={<button className="search">Search Twitter</button>}
            // modal
            // contentStyle={contentStyle}
          >
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                  &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {" "}
                  Call to "createTweet" component will go here so a tweet form will pop up (theoretically)
                </div>
              </div>
            )}
          </Popup> */}

          <button
            className="search"
            onClick={() => {
              window.confirm("lol sorry this doesn't work yet")
            }}
          >
            Search Twitter
          </button>
        </header>
      </div>
    )
  }
}

export default Navigation

import * as React from "react"
import { Link } from "react-router-dom"
import "./navigation.css"

class Navigation extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = { clicked: false }
  //   this.popup = this.popup.bind(this)
  //   this.close = this.close.bind(this)
  // }

  state = {
    search: ""
  }

  // popup() {
  //   this.setState({ clicked: true })
  // }

  // close() {
  //   this.setState({ clicked: false })
  // }

  onSearch = () => {
    this.props.history.push(`/${this.state.search}`)
  }

  onLogout = () => {
    localStorage.removeItem("token")
    this.props.history.push("/login")
  }

  // onTweet = () => {
  //   if (this.state.clicked) {
  //     return (
  //       <div className="overlay">
  //         <div className="popup">
  //           <button className="close-icon" onClick={this.close}>
  //             x
  //           </button>
  //           <CreateTweet />
  //         </div>
  //       </div>
  //     )
  //   } else {
  //     return <button className="tweetButton">Tweet</button>
  //   }
  // }

  render() {
    const token = localStorage.getItem("token")

    return (
      <div className="header">
        <header className="navigation">
          <ul className="menu">
            <li className="home">
              <img src={require("./home-icon.png")} className="home-icon" />
              <Link className="link" to="/home">
                Home
              </Link>
            </li>
            <li className="profile">
              <img
                src={require("./profile-icon.png")}
                className="profile-icon"
              />
              <Link className="link" to="/myprofile">
                Profile
              </Link>
            </li>
            <li className="login">
              <img src={require("./login-icon.png")} className="login-icon" />
              {token ? (
                <button className="logout" onClick={this.onLogout}>
                  Log out
                </button>
              ) : (
                <Link className="link" to="/login">
                  Log in
                </Link>
              )}
            </li>
          </ul>

          <img
            src={require("./bird-icon.png")}
            className="bird-icon"
            alt="bird-icon"
          />
          <ul className="right-menu">
            <li>
              <button
                className="tweetButton"
                onClick={() => {
                  window.confirm("lol sorry this doesn't work yet")
                }}
                // onClick={() => {
                //   this.onTweet
                // }}
              >
                Tweet
              </button>
            </li>
            <li>
              <Link className="link" to="/myprofile">
                <img src={require("./user-icon.png")} className="user-icon" />
              </Link>
            </li>
            <li>
              <form className="search-form">
                <input
                  className="search-input"
                  type="text"
                  placeholder="Search Tweeter"
                  onChange={e => this.setState({ search: e.target.value })}
                />
                <button
                  className="search-button"
                  type="submit"
                  onClick={this.onSearch}
                >
                  <img
                    className="search-icon"
                    src={require("./search-icon.png")}
                  />
                </button>
              </form>
            </li>
          </ul>
        </header>
      </div>
    )
  }
}

export default Navigation

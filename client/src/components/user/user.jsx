import * as React from "react"
import "./user.css"

class User extends React.Component {
  render() {
    return (
      <div className="holder">
        <div className="info">
          <img className="profile-pic" src={require("./user-icon.png")} />
          <h2>Username</h2>
        </div>
      </div>
    )
  }
}

export default User

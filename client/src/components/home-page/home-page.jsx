import * as React from "react"
import Navigation from "../navigation/navigation"
import Feed from "../feed/feed"
// import User from "../user/user"
import "./home-page.css"

class HomePage extends React.Component {
  render() {
    return (
      <div className="app">
        <Navigation history={this.props.history} />
        <div className="feeder">
          <Feed history={this.props.history} />
        </div>
      </div>
    )
  }
}

export default HomePage

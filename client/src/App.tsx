import * as React from "react"
import { hot } from "react-hot-loader"
import { Switch, Route } from "react-router-dom"
import HomePage from "./components/home-page/home-page"
import LoginPage from "./components/login-page/login-page"
import ProfilePage from "./components/profile-page/profile-page"
import SignupPage from "./components/signup-page/signup-page"
import MyProfile from "./components/my-profile/my-profile"

import "./App.css"

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Switch>
          <Route exact={true} path="/" component={SignupPage} />
          <Route exact={true} path="/login" component={LoginPage} />
          <Route exact={true} path="/myprofile" component={MyProfile} />
          <Route exact={true} path="/home" component={HomePage} />
          <Route exact={true} path="/:username" component={ProfilePage} />
        </Switch>
      </div>
    )
  }
}

export default hot(module)(App)

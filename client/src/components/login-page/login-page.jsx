import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import Navigation from "../navigation/navigation"
import "./login-page.css"

const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        name
        email
        username
      }
    }
  }
`

class LoginPage extends React.Component {
  state = {
    email: "",
    password: ""
  }

  render() {
    return (
      <div className="login-page">
        {/* <Navigation history={this.props.history} /> */}
        <Mutation mutation={LOGIN}>
          {login => {
            return (
              <div className="login-container">
                <h1 className="login-welcome">Log in to Tweeter</h1>
                <div className="flexpls">
                  <form
                    className="login-form"
                    onSubmit={async e => {
                      e.preventDefault()
                      try {
                        localStorage.setItem("email", this.state.email)
                        const { data } = await login({
                          variables: {
                            email: this.state.email,
                            password: this.state.password
                          }
                        })
                        localStorage.setItem("token", data.login.token)
                        localStorage.setItem(
                          "user",
                          JSON.stringify(data.login.user)
                        )
                        this.props.history.push(`/home`)
                        // this.props.history.push(`/${data.login.user.username}`)
                      } catch (error) {
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        localStorage.removeItem("email")
                      }
                    }}
                  >
                    <input
                      className="email"
                      type="text"
                      placeholder="Email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                      className="password"
                      type="password"
                      placeholder="Password"
                      onChange={e =>
                        this.setState({ password: e.target.value })
                      }
                    />
                    <button className="login-button" type="submit">
                      Log in
                    </button>
                  </form>
                </div>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default LoginPage

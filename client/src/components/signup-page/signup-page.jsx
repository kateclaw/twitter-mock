import * as React from "react"
import { Mutation } from "react-apollo"
import gql from "graphql-tag"
import Navigation from "../navigation/navigation"
import { Link } from "react-router-dom"
import "./signup-page.css"

const SIGNUP = gql`
  mutation signup(
    $email: String!
    $password: String!
    $name: String!
    $username: String!
  ) {
    signup(
      email: $email
      password: $password
      name: $name
      username: $username
    ) {
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

class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    name: "",
    username: ""
  }

  render() {
    return (
      <div className="login-page">
        {/* <Navigation history={this.props.history} /> */}
        <Mutation mutation={SIGNUP}>
          {signup => {
            return (
              <div className="signup-container">
                <h1 className="login-welcome">Sign up for Tweeter</h1>
                <div className="flexpls">
                  <form
                    className="login-form"
                    onSubmit={async e => {
                      e.preventDefault()
                      try {
                        localStorage.setItem("email", this.state.email)
                        const { data } = await signup({
                          variables: {
                            email: this.state.email,
                            password: this.state.password,
                            name: this.state.name,
                            username: this.state.username
                          }
                        })
                        localStorage.setItem("token", data.signup.token)
                        localStorage.setItem(
                          "user",
                          JSON.stringify(data.signup.user)
                        )
                        this.props.history.push(`/home`)
                      } catch (error) {
                        localStorage.removeItem("token")
                        localStorage.removeItem("user")
                        localStorage.removeItem("email")
                      }
                    }}
                  >
                    <input
                      className="name"
                      type="text"
                      placeholder="Name"
                      onChange={e => this.setState({ name: e.target.value })}
                    />
                    <input
                      className="email"
                      type="text"
                      placeholder="Email"
                      onChange={e => this.setState({ email: e.target.value })}
                    />
                    <input
                      className="username"
                      type="text"
                      placeholder="Username"
                      onChange={e =>
                        this.setState({ username: e.target.value })
                      }
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
                      Sign up
                    </button>
                  </form>
                </div>
                <div className="login-option">
                  <h4>Already have an account? </h4>
                  <Link className="login-link" to="/login">
                    <button className="option-button">Login</button>
                  </Link>
                </div>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default SignUp

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
        <Navigation history={this.props.history} />
        <Mutation mutation={LOGIN}>
          {login => {
            return (
              <div className="login-container">
                <h1 className="login-welcome">Log in to Twitter</h1>
                <form
                  className="login-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    const { data } = await login({
                      variables: {
                        email: this.state.email,
                        password: this.state.password
                      }
                    })
                    localStorage.setItem("token", data.login.token)
                    this.props.history.push("/")
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
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <button className="login-button" type="submit">
                    Log in
                  </button>
                </form>
              </div>
            )
          }}
        </Mutation>
      </div>
    )
  }
}

export default LoginPage

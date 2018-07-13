import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import Navigation from "../navigation/navigation"
import Tweet from "../tweet/tweet"

const GET_MY_PROFILE = gql`
  query getMyProfile($email: String) {
    myFeed(orderBy: createdAt_DESC, email: $email) {
      author {
        name
      }
      text
    }
  }
`

class MyProfile extends React.Component {
  render() {
    return (
      <div className="profile-page">
        <Navigation history={this.props.history} />
        <div className="container">
          <h1 className="user-header">My Profile</h1>

          <div className="profile-feeder">
            <Query
              variables={{
                email: localStorage.getItem("email")
              }}
              query={GET_MY_PROFILE}
            >
              {({ loading, error, data }) => {
                if (loading) {
                  return (
                    <img
                      src={require("./loader.gif")}
                      className="loader"
                      alt="loader"
                    />
                  )
                }
                if (error) {
                  return "OOps, somehing blew up."
                }
                return (
                  <div className="tweet-container">
                    {data.myFeed.map(tweet => {
                      return (
                        <Tweet
                          key={tweet.id}
                          text={tweet.text}
                          author={tweet.author}
                        />
                      )
                    })}
                  </div>
                )
              }}
            </Query>
          </div>
        </div>
      </div>
    )
  }
}

export default MyProfile

import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import CreateTweet from "../create-tweet/create-tweet"
import "./feed.css"

const GET_TWEETS = gql`
  query {
    feed(orderBy: "createdAt_DESC") {
      id
      text
      author {
        id
        name
      }
    }
  }
`

// interface Data {
//   tweets: Array<Tweet>
// }

// interface Tweet {
//   id: string
//   text: string
//   author: User
// }

// interface User {
//   id: string
//   name: string
//   email: string
// }

class Feed extends React.Component {
  render() {
    return (
      <div>
        <Query query={GET_TWEETS}>
          {({ loading, error, data, refetch }) => {
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
                <div className="form">
                  <CreateTweet refetchTweetFeed={refetch} />
                </div>

                {data.feed.map(tweet => {
                  return (
                    <div>
                      <div className="tweet">
                        <div className="tweet-author">
                          <img
                            className="author-icon"
                            src={require("./user-icon.png")}
                          />
                          {tweet.author.name}
                        </div>
                        <div className="tweet-text">{tweet.text}</div>
                      </div>
                    </div>
                  )
                })}
                <div className="empty" />
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default Feed

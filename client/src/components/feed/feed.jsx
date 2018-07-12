import * as React from "react"
import gql from "graphql-tag"
import { Query } from "react-apollo"
import CreateTweet from "../create-tweet/create-tweet"
import Tweet from "../tweet/tweet"
import "./feed.css"

const GET_TWEETS = gql`
  query {
    feed(orderBy: createdAt_DESC) {
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
              <div className="feed-container">
                <div className="form">
                  <CreateTweet refetchTweetFeed={refetch} />
                </div>

                {data.feed.map(tweet => {
                  return (
                    <Tweet
                      key={tweet.id}
                      text={tweet.text}
                      author={tweet.author}
                    />
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

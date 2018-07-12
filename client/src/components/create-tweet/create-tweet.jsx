import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import "./create-tweet.css"

const CREATE_TWEET = gql`
  mutation createTweet($text: String!) {
    createTweet(text: $text) {
      text
      author {
        id
        name
        email
      }
    }
  }
`

class CreateTweet extends React.Component {
  render() {
    let input

    return (
      <div>
        <Mutation mutation={CREATE_TWEET}>
          {(createTweet, { data }) => {
            return (
              <div className="creater">
                <form
                  className="create-form"
                  onSubmit={async e => {
                    e.preventDefault()
                    await createTweet({
                      variables: {
                        // author: "test3@me.com",
                        text: input.value
                      }
                    })
                    this.props.refetchTweetFeed()
                    input.value = ""
                  }}
                >
                  <input
                    ref={node => {
                      input = node
                    }}
                    type="text"
                    className="tweet-input"
                    placeholder="What's happening?"
                  />

                  <button className="create-button" type="submit">
                    Tweet
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

export default CreateTweet

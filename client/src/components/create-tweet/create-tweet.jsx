import * as React from "react"
import gql from "graphql-tag"
import { Mutation } from "react-apollo"
import "./create-tweet.css"

const CREATE_TWEET = gql`
  mutation createTweet($text: String!, $author: String!) {
    createTweet(text: $text, author: $author) {
      text
      author {
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
              <div>
                {/* <div className="holder">
                  <input
                    ref={node => {
                      input = node
                    }}
                    type="text"
                    class="city-input"
                    placeholder="What's happening?"
                  />
                  <button type="submit">Tweet</button>
                </div> */}
                <form
                  onSubmit={e => {
                    e.preventDefault()
                    createTweet({
                      variables: {
                        author: "harris@me.com",
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
                    className="input"
                    placeholder="What's happening?"
                  />

                  <button type="submit">Tweet</button>
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

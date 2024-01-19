import React from "react"
import PageHead from "../layout/pageHead"
import Posts from "./posts"

const headInfo = {
  headline: "My posts",
  text: "I enjoy writing on my free time about programming and all kind of stuff."
}

export default function Articles() {
  return (
    <div data-testid="articles-div">
      <PageHead {...headInfo} />
      <Posts />
    </div>
  )
}
import React from "react"
import Hero from "./hero"
import DevTool from "./devTool"
import WorkHistory from "./workHistory"

export default function HomeComponent() {
  

  return (
    <div data-testid="home-component">
      <Hero />
      <div className="lg:flex flex-row">
      <DevTool />
      <div className="lg:w-1/2 lg:my-8 my-8">
      <WorkHistory />
      </div>
      </div>
    </div>
  )
}
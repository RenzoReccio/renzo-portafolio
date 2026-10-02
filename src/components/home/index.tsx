import React from "react";
import Hero from "./hero";
import DevTool from "./devTool";
import WorkHistory from "./workHistory";

export default function HomeComponent() {
  return (
    <div className="space-y-12 sm:space-y-16" data-testid="home-component">
      <Hero />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7">
          <DevTool />
        </div>
        <div className="lg:col-span-5 sticky top-24">
          <WorkHistory />
        </div>
      </div>
    </div>
  );
}
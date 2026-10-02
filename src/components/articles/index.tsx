import React from "react";
import PageHead from "../layout/pageHead";
import Posts from "./posts";

const headInfo = {
  headline: "Articles & Writing",
  text: "Technical essays and guides on software engineering, conversational AI, and scalable frontend architectures.",
  eyebrow: "Thought Leadership",
};

export default function Articles() {
  return (
    <div data-testid="articles-div" className="space-y-8">
      <PageHead {...headInfo} />
      <Posts />
    </div>
  );
}
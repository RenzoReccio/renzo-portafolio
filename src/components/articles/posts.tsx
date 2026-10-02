import PostPreview from "./postPreview";

export const postsArr: {
  key: number;
  date: string;
  title: string;
  body: string;
  link: string;
  readTime?: string;
}[] = [
  {
    key: 0,
    date: "December 2023",
    title: "Building Custom Chatbot Interfaces: Angular + Dialogflow",
    body: "When building an application for a business there is always a chance in which the word Chatbot pops up, and you end up looking for a lot of options, however most of chatbots are pre-build and have little no customization. Here is how to architect an end-to-end custom conversational experience.",
    link: "https://medium.com/@renzo.reccio/angular-dialogflow-7910f25e289d",
    readTime: "5 min read",
  },
];

export default function Posts() {
  return (
    <div data-testid="posts-div" className="w-full max-w-3xl space-y-6">
      {postsArr.map((item) => (
        <PostPreview key={item.key} post={item} />
      ))}
    </div>
  );
}
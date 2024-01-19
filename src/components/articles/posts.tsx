import PostPreview from "./postPreview"

export const postsArr: {
  key: number
  date: string 
  title: string
  body: string
  link: string
 }[] = [
  {
    key: 0,
    date: "December 2023",
    title: "Angular + Dialogflow",
    body: "When building an application for a business there is always a chance in which the word Chatbot pops up, and you end up looking for a lot of options, however most of chatbots are pre-build and have little no customization",
    link: "https://medium.com/@renzo.reccio/angular-dialogflow-7910f25e289d"
  }
]



export default function Posts() {
  return (
    <div data-testid="posts-div" className="lg:w-3/4 ">
      {postsArr.map(i => (
        <div key={i.key}>
          <PostPreview post={i} />
        </div>
      ))}
    </div>
  )
}
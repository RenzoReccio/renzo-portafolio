import Link from "next/link"

interface PostPreviewProps {
  post: {
    key: number
    date: string
    title: string
    body: string
    link: string
  }
}

export default function PostPreview(props: PostPreviewProps) {
  const { post } = props
  return (
    <div className="p-4 my-2 rounded-lg text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 hover:bg-zinc-100" data-testid={`post-${post.key}`}>
      <p className="border-l-2 dark:border-l-zinc-400 pl-2 my-2 text-sm" data-testid="post-date">{post.date}</p>
      <h3 className="font-semibold py-1 my-2 dark:text-zinc-100 text-black" data-testid="post-title">{post.title}</h3>
      <p className="text-sm font-light  my-2" data-testid="post-preview">{`${post.body.slice(0, 250)}...`}</p>
      <Link className="text-sm dark:text-emerald-300 text-emerald-500 hover:text-emerald-400 my-2" target="_blank" href={post.link}>Read article</Link>
    </div>
  )
}

interface PageHeadProps {
  headline: string
  text: string
}

export default function PageHead(props: PageHeadProps) {
  const { headline, text } = props
  return (
    <div className=" p-2 dark:text-zinc-400  md:w-2/3" data-testid="page-head">
      <h1 className="py-4 font-semibold text-5xl dark:text-zinc-100">{headline}</h1>
      <p className="py-2 ">{text}</p>
    </div>
  )
}
import Image from "next/image";

interface DevToolCardProps {
  devTool: {
    key: number
    title: string
    body: string,
    image: string
  }
}

export default function DevToolCard(props: DevToolCardProps) {
  const { devTool } = props
  return (
    <div className="p-4 my-2 rounded-lg text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-800 hover:bg-zinc-100" data-testid={`devtool-${devTool.key}`}>
      <Image className="rounded-full " src={"/images/programming/" + devTool.image} width="50" height="50" alt="Profile pic" title="Dev Tool" />
      <h4 className="font-semibold py-1 my-2 dark:text-zinc-100 text-black" data-testid="devTool-title">{devTool.title}</h4>
      <p className="text-sm font-light  my-2" data-testid="devTool-preview">{`${devTool.body}`}</p>
    </div>
  )
}
interface WorkListItemProps {
  company: string
  position: string
  years: string
}

export default function WorkListItem(props: WorkListItemProps) {
  const { company, position, years} = props
  return (
    <div className="flex flex-row justify-between py-2" data-testid="work-list-item">
      <div className="flex flex-col ">
        <h4 className="font-semibold text-sm dark:text-zinc-100">{company}</h4>
        <p className="text-sm text-slate-600 dark:text-zinc-400">{position}</p>
      </div>
      <p className="text-sm text-slate-600 dark:text-zinc-400">{years}</p>
    </div>
  )
}
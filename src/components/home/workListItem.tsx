interface WorkListItemProps {
  company: string;
  position: string;
  years: string;
  isCurrent?: boolean;
}

export default function WorkListItem(props: WorkListItemProps) {
  const { company, position, years, isCurrent } = props;

  return (
    <div
      className="flex items-center justify-between py-4 group transition-colors duration-150"
      data-testid="work-list-item"
    >
      <div className="flex items-center gap-3.5">
        {/* Company Avatar with initial */}
        <div className="w-9 h-9 rounded-xl bg-paper-3 border border-rule flex items-center justify-center text-xs font-mono font-bold text-ink shadow-sm">
          {company.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h4 className="font-semibold text-sm text-ink group-hover:text-amber-500 transition-colors">
              {company}
            </h4>
            {isCurrent && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Active
              </span>
            )}
          </div>
          <p className="text-xs text-muted mt-0.5">
            {position}
          </p>
        </div>
      </div>

      <div className="text-xs font-mono font-medium text-muted px-3 py-1 rounded-full bg-paper-3 border border-rule/60">
        {years}
      </div>
    </div>
  );
}
import { MdWorkOutline } from "react-icons/md";
import WorkListItem from "./workListItem";

export const workArr: {
  company: string;
  position: string;
  years: string;
  id: string;
  isCurrent?: boolean;
}[] = [
    {
      company: "Paysafe",
      position: "Senior Software Engineer",
      years: "2026-present",
      id: "job-4",
      isCurrent: true,
    },
    {
      company: "Encora",
      position: "Senior Software Engineer",
      years: "2024-2026",
      id: "job-3",
      isCurrent: false,
    },
    {
      company: "Globant",
      position: "Fullstack Developer",
      years: "2022-2024",
      id: "job-0",
    },
    {
      company: "NTT DATA",
      position: "Salesforce Developer",
      years: "2021-2022",
      id: "job-1",
    },
    {
      company: "Grupo Lucky",
      position: "Fullstack Developer",
      years: "2020-2021",
      id: "job-2",
    },
  ];

export default function WorkHistory() {
  return (
    <section className="w-full mt-0">
      <div className="mb-8">
        <div className="section-label">
          <span className="num">03</span>
          <span className="divider">⁄</span>
          <span>Track Record</span>
        </div>
        <h2 className="ui-headline text-ink mt-2">
          Career Experience<span className="text-amber-400">.</span>
        </h2>
        <p className="text-sm text-muted mt-1.5 max-w-xl">
          Professional timeline, software engineering contributions, and enterprise delivery history.
        </p>
      </div>

      <div
        className="ui-card p-6 sm:p-7 shadow-ui-card w-full"
        data-testid="work-history-div"
      >
        <div className="flex items-center gap-3 pb-5 border-b border-rule">
          <div
            data-testid="work-icon"
            className="w-10 h-10 rounded-2xl bg-amber-300/20 text-amber-600 dark:text-amber-300 flex items-center justify-center text-xl shadow-sm border border-amber-300/40"
          >
            <MdWorkOutline />
          </div>
          <div>
            <h3 className="text-base font-semibold text-ink">
              Engineering Positions
            </h3>
            <p className="text-xs text-muted font-mono">
              2020 &mdash; Present · 6+ years in production systems
            </p>
          </div>
        </div>

        <div className="divide-y divide-rule mt-2" data-testid="work-arr-div">
          {workArr.map((i) => (
            <WorkListItem
              key={i.id}
              company={i.company}
              position={i.position}
              years={i.years}
              isCurrent={i.isCurrent}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

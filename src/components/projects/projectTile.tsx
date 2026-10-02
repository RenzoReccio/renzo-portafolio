import Link from "next/link";
import { BsLink45Deg } from "react-icons/bs";
import { FiArrowUpRight, FiCode } from "react-icons/fi";

interface ProjectTileProps {
  id: number;
  title: string;
  blurb: string;
  link: string;
  tag?: string;
}

export default function ProjectTile(props: ProjectTileProps) {
  const { title, blurb, link, id, tag } = props;
  const isExternal = link.startsWith("http");
  const href = isExternal ? link : link.startsWith("/") ? link : `/${link}`;

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      data-testid={"project-tile-" + id}
      className="ui-card ui-card-hover apple-press p-6 sm:p-7 flex flex-col justify-between h-full group"
    >
      <div>
        {/* Top bar with icon and link arrow */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-10 h-10 rounded-2xl bg-paper-3 border border-rule flex items-center justify-center text-ink shadow-sm transition-transform duration-300 group-hover:scale-105">
            <FiCode className="text-lg" />
          </div>

          <div className="w-8 h-8 rounded-full bg-paper-3 flex items-center justify-center text-muted group-hover:text-amber-500 group-hover:bg-amber-300/20 transition-colors">
            <FiArrowUpRight className="text-base transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        {tag && (
          <span className="inline-block font-mono text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 border border-cyan-500/20 mb-2.5">
            {tag}
          </span>
        )}

        <h2 className="text-xl font-bold tracking-tight text-ink group-hover:text-amber-500 transition-colors">
          {title}
        </h2>

        <p className="mt-2.5 text-sm text-muted leading-relaxed font-normal">
          {blurb}
        </p>
      </div>

      {/* Footer Link Label */}
      <div className="mt-6 pt-4 border-t border-rule flex items-center text-xs font-mono font-medium text-muted group-hover:text-ink transition-colors">
        <BsLink45Deg className="mr-1.5 text-base flex-shrink-0" />
        <span className="truncate">{link}</span>
      </div>
    </Link>
  );
}
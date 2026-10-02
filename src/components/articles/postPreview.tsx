import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

interface PostPreviewProps {
  post: {
    key: number;
    date: string;
    title: string;
    body: string;
    link: string;
    readTime?: string;
  };
}

export default function PostPreview(props: PostPreviewProps) {
  const { post } = props;

  return (
    <article
      className="ui-card ui-card-hover apple-press p-6 sm:p-7 flex flex-col justify-between group"
      data-testid={`post-${post.key}`}
    >
      <div>
        {/* Top metadata pill */}
        <div className="flex items-center justify-between gap-2 mb-3.5">
          <div className="flex items-center gap-2">
            <span
              className="font-mono text-xs font-medium px-2.5 py-1 rounded-full bg-paper-3 text-ink/80 border border-rule/60"
              data-testid="post-date"
            >
              {post.date}
            </span>
            <span className="font-mono text-xs text-muted">
              {post.readTime || "4 min read"}
            </span>
          </div>

          <div className="w-8 h-8 rounded-full bg-paper-3 flex items-center justify-center text-muted group-hover:text-amber-500 group-hover:bg-amber-300/20 transition-colors">
            <FiArrowUpRight className="text-base transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </div>

        <h3
          className="text-xl font-bold tracking-tight text-ink group-hover:text-amber-500 transition-colors"
          data-testid="post-title"
        >
          {post.title}
        </h3>

        <p
          className="mt-3 text-sm text-muted leading-relaxed font-normal"
          data-testid="post-preview"
        >
          {post.body}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between">
        <Link
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-600 dark:text-amber-400 hover:text-amber-500 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          href={post.link}
        >
          <span>Read essay</span>
          <FiArrowUpRight className="text-sm" />
        </Link>
        <span className="font-mono text-[11px] text-muted">
          Medium publication
        </span>
      </div>
    </article>
  );
}
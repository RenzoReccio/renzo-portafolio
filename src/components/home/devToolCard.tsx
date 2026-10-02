import Image from "next/image";

interface DevToolCardProps {
  devTool: {
    key: number;
    title: string;
    body: string;
    image: string;
  };
}

export default function DevToolCard(props: DevToolCardProps) {
  const { devTool } = props;
  const tags = devTool.body.split(",").map((s) => s.trim());

  return (
    <div
      className="ui-card ui-card-hover apple-press p-5 sm:p-6 flex flex-col justify-between h-full group"
      data-testid={`devtool-${devTool.key}`}
    >
      <div>
        {/* Tool Icon Box */}
        <div className="w-14 h-14 rounded-2xl p-2.5 bg-paper-3/80 border border-rule shadow-sm flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-105">
          <Image
            className="rounded-xl object-contain"
            src={`/images/programming/${devTool.image}`}
            width={44}
            height={44}
            alt={devTool.title}
            title={devTool.title}
          />
        </div>

        <h3
          className="text-lg font-semibold tracking-tight text-ink group-hover:text-amber-500 transition-colors"
          data-testid="devTool-title"
        >
          {devTool.title}
        </h3>

        <p
          className="text-xs text-muted mt-1.5 leading-relaxed"
          data-testid="devTool-preview"
        >
          {devTool.body}
        </p>
      </div>

      {/* Tech Pills */}
      <div className="mt-5 flex flex-wrap gap-1.5 pt-3.5 border-t border-rule">
        {tags.map((tag) => (
          <span
            key={tag}
            className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-full bg-paper-3/90 text-ink/80 border border-rule/60"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
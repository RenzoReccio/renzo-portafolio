interface PageHeadProps {
  headline: string;
  text: string;
  eyebrow?: string;
  number?: string;
}

export default function PageHead(props: PageHeadProps) {
  const { headline, text, eyebrow, number = "01" } = props;
  return (
    <div className="py-8 sm:py-12 max-w-3xl" data-testid="page-head">
      {eyebrow && (
        <div className="section-label mb-3">
          <span className="num">{number}</span>
          <span className="divider">⁄</span>
          <span>{eyebrow}</span>
        </div>
      )}
      <h1 className="ui-headline text-ink font-bold tracking-tight">
        {headline}<span className="text-amber-400">.</span>
      </h1>
      <p className="mt-3 text-base sm:text-lg text-muted leading-relaxed font-normal">
        {text}
      </p>
    </div>
  );
}
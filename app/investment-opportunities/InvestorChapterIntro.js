export default function InvestorChapterIntro({ chapter }) {
  if (!chapter) return null;

  return (
    <div className="inv-land-chapter-head inv-wrap inv-reveal">
      <div className="inv-land-chapter-accent" aria-hidden="true" />
      <div className="inv-land-chapter-meta">
        <span className="inv-land-chapter-num">{chapter.index}</span>
        <span className="inv-land-chapter-title">{chapter.title}</span>
      </div>
      <p className="inv-land-chapter-summary">{chapter.summary}</p>
    </div>
  );
}

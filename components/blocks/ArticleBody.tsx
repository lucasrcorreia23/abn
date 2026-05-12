/**
 * ArticleBody — editorial body with drop-cap lead, sub-headings and a pull-quote.
 * Content is filler lorem-style text in English so the wireframe reads as
 * a real article without committing to specific copy.
 */
export default function ArticleBody({
  title,
  excerpt,
}: {
  title: string;
  excerpt: string;
}) {
  return (
    <section className="mx-auto max-w-3xl px-4 pb-12 sm:px-6">
      <div className="prose-editorial">
        <p className="drop-cap">
          {excerpt} The announcement, made during a press briefing in the company&rsquo;s
          headquarters, signals a broader shift in how operators across the industry are
          approaching the next decade of fleet, infrastructure and workforce planning.
        </p>

        <p>
          Speaking to ABN, executives close to the program said the work has been in motion
          for over eighteen months, with multiple stakeholders aligning on a roadmap that
          balances commercial pressure with the operational realities of running an
          increasingly complex global network.
        </p>

        <h2>What this means for operators</h2>

        <p>
          Industry analysts note that the announcement is consistent with a pattern that has
          accelerated since the start of 2025: larger players consolidating tier-one
          partnerships, mid-tier operators looking for differentiation through service, and a
          long tail of regional carriers re-examining their commercial relationships.
        </p>

        <blockquote>
          &ldquo;{title}&rdquo; — this is the kind of story we&rsquo;ll be analysing closely
          over the next quarter, said ABN&rsquo;s editorial team.
        </blockquote>

        <h3>The numbers behind the headline</h3>

        <p>
          The figures cited at the announcement are broadly in line with prior public
          disclosures. ABN has reviewed historical filings and supplier interviews and the
          underlying assumptions appear reasonable, though several data points remain
          difficult to independently verify.
        </p>

        <p>
          That said, the wider industry context matters: capacity, cost-per-available-seat
          kilometre, and shop-visit economics are all moving in directions that make this
          decision more, rather than less, defensible.
        </p>

        <h2>What we&rsquo;ll be watching next</h2>

        <p>
          Three things to track over the coming months: regulatory feedback in key markets,
          announcements from peer operators (which will signal whether this becomes an
          industry norm or remains a one-off), and the financial terms of any follow-on
          agreements.
        </p>

        <p>
          ABN will continue to cover this story across our four verticals as it develops.
          Subscribe to our newsletter to receive analysis like this directly in your inbox.
        </p>
      </div>
    </section>
  );
}

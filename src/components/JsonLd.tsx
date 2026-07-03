// Renders a schema.org JSON-LD <script> block for structured data / rich results.
// Server component — the JSON is emitted in the initial HTML so Google reads it on crawl.

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — it's our own structured data, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

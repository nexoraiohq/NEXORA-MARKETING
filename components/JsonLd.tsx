import type { JsonLdNode } from "@/lib/jsonld";

/**
 * Renders schema.org structured data. Google reads JSON-LD anywhere in the
 * document, so it is injected right where it belongs to each route.
 */
export function JsonLd({ data }: { data: JsonLdNode | JsonLdNode[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

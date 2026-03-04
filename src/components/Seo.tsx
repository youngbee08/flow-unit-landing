import { Helmet } from "react-helmet-async";

type SeoProps = {
  title: string;
  description?: string;
  canonicalPath?: string;
};

const SITE_URL = "https://flowunit.co";

export default function Seo({ title, description, canonicalPath }: SeoProps) {
  const canonical = canonicalPath ? `${SITE_URL}${canonicalPath}` : SITE_URL;

  return (
    <Helmet>
      <title>{title}</title>

      <meta property="og:title" content={title} />
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="FlowUnit" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}
    </Helmet>
  );
}

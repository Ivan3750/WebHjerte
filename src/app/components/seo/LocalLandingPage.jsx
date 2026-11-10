import ContentPage from "./ContentPage";
import ProcessBlock from "../home/ProcessBlock";

/**
 * Skabelon til lokale SEO-landingssider (Horsens / Midtjylland).
 * Tynd wrapper om den fælles ContentPage, så alle sider deler samme udtryk.
 */
export default function LocalLandingPage({ path, name, serviceType, eyebrow, h1, intro, sections, faqs, related, summary, city, facts }) {
  return (
    <ContentPage
      path={path}
      type="service"
      name={name}
      serviceType={serviceType}
      eyebrow={eyebrow}
      h1={h1}
      intro={intro}
      summary={summary}
      sections={sections}
      faqs={faqs}
      related={related}
      city={city}
      facts={facts}
      extra={<ProcessBlock />}
    />
  );
}

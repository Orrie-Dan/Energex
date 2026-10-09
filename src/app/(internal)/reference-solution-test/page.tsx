import type { Metadata } from "next";
import { SiteChrome } from "../../components/site-chrome";
import { SolutionDetailPage } from "../../components/solution-detail/solution-detail-page";
import { referenceSolutionTest } from "../../../data/solutions";
import "../../solution-detail.css";

/**
 * Development / fidelity A/B shell.
 * Not linked from production navigation. English only.
 */
export const metadata: Metadata = {
  title: "Reference Solution Test",
  robots: { index: false, follow: false },
  description: "Internal fidelity replica of the Tilanium service-detail template.",
};

export default function ReferenceSolutionTestPage() {
  return (
    <SiteChrome locale="en">
      <SolutionDetailPage
        locale="en"
        solution={referenceSolutionTest}
        useFamilyNavigation={false}
        previousOverride={null}
        nextOverride={null}
      />
    </SiteChrome>
  );
}

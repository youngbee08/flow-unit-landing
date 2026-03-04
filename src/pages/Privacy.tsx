import { useMemo } from "react";
import { LegalTemplate } from "../components/templates/LegalTemplate";
import Seo from "../components/Seo";

export default function PrivacyPage() {
  const toc = useMemo(
    () => [
      { id: "summary", label: "Summary" },
      { id: "collect", label: "Information We Collect" },
      { id: "use", label: "How We Use Data" },
      { id: "share", label: "Data Sharing & Disclosure" },
      { id: "rights", label: "Your Data Rights" },
      { id: "security", label: "Security" },
      { id: "retention", label: "Data Retention" },
      { id: "cookies", label: "Cookies" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const sections = useMemo(
    () => [
      {
        id: "summary",
        title: "Summary",
        body: (
          <>
            <p>
              This Privacy Policy explains what we collect, why we collect it,
              and how we handle it when you use FlowUnit.
            </p>
            <p className="mt-3">
              We aim to keep it simple: collect what we need to run the product,
              keep it protected, and give you control where possible.
            </p>
          </>
        ),
      },
      {
        id: "collect",
        title: "Information We Collect",
        body: (
          <>
            <p>We may collect:</p>
            <ul className="mt-3 list-disc pl-5">
              <li>Account details (e.g., name, email).</li>
              <li>Workspace content you create (projects, tasks, comments).</li>
              <li>Usage data (feature interactions, diagnostics).</li>
              <li>Device/browser data for performance and security.</li>
            </ul>
          </>
        ),
      },
      {
        id: "use",
        title: "How We Use Data",
        body: (
          <>
            <p>We use data to:</p>
            <ul className="mt-3 list-disc pl-5">
              <li>Provide and improve FlowUnit.</li>
              <li>Keep the product secure and prevent abuse.</li>
              <li>Offer support and respond to requests.</li>
              <li>Understand usage patterns to improve UX.</li>
            </ul>
          </>
        ),
      },
      {
        id: "share",
        title: "Data Sharing & Disclosure",
        body: (
          <>
            <p>
              We do not sell your personal data. We may share limited
              information with trusted service providers to operate FlowUnit
              (e.g., hosting, analytics, support tools).
            </p>
            <p className="mt-3">
              We may disclose information if required by law or to protect the
              rights, safety, and integrity of FlowUnit and users.
            </p>
          </>
        ),
      },
      {
        id: "rights",
        title: "Your Data Rights",
        body: (
          <>
            <p>
              Depending on your location, you may have rights to access,
              correct, export, or delete your personal data.
            </p>
            <p className="mt-3">
              You can request help with these actions through our support
              channels.
            </p>
          </>
        ),
      },
      {
        id: "security",
        title: "Security",
        body: (
          <>
            <p>
              We use reasonable security measures to protect your data. No
              system is 100% secure, but we work to prevent unauthorized access
              and misuse.
            </p>
          </>
        ),
      },
      {
        id: "retention",
        title: "Data Retention",
        body: (
          <>
            <p>
              We retain information as long as needed to provide the service and
              meet legal or operational obligations. You can request deletion
              where applicable.
            </p>
          </>
        ),
      },
      {
        id: "cookies",
        title: "Cookies",
        body: (
          <>
            <p>
              We may use cookies or similar technologies to keep you signed in,
              remember preferences, and measure product performance.
            </p>
          </>
        ),
      },
      {
        id: "contact",
        title: "Contact",
        body: (
          <>
            <p>
              Questions about privacy? Contact us via the support channels
              listed on the website.
            </p>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <>
      <Seo
        title="Privacy Policy — FlowUnit"
        description="How FlowUnit collects, uses, and protects your information."
        canonicalPath="/legal/privacy-policy"
      />

      <LegalTemplate
        pageTitle="Privacy Policy"
        updatedAt="March 3, 2026"
        readTime="10 minutes"
        toc={toc}
        sections={sections}
        sideCard={
          <div className="flex flex-col gap-2">
            <div className="text-primary font-semibold">Privacy request</div>
            <div className="text-tertiary text-sm">
              Need access/export/delete? Send a request and we’ll guide you.
            </div>
            <button className="mt-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition">
              Start Request
            </button>
          </div>
        }
      />
    </>
  );
}

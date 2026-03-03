import { useMemo } from "react";
import { LegalTemplate } from "../components/templates/LegalTemplate";

export default function TermsPage() {
  const toc = useMemo(
    () => [
      { id: "acceptance", label: "Acceptance of Terms" },
      { id: "registration", label: "Account Registration" },
      { id: "billing", label: "Subscription & Billing" },
      { id: "acceptable-use", label: "Acceptable Use" },
      { id: "ip", label: "Intellectual Property" },
      { id: "liability", label: "Limitation of Liability" },
      { id: "termination", label: "Termination" },
      { id: "changes", label: "Changes to These Terms" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  const sections = useMemo(
    () => [
      {
        id: "acceptance",
        title: "Acceptance of Terms",
        body: (
          <>
            <p>
              By accessing or using FlowUnit, you agree to these Terms of
              Service. If you do not agree, please do not use the service.
            </p>
            <p className="mt-3">
              These terms apply to all visitors, users, and others who access or
              use FlowUnit.
            </p>
          </>
        ),
      },
      {
        id: "registration",
        title: "Account Registration",
        body: (
          <>
            <p>
              To use certain features, you may need to create an account. You
              agree to provide accurate information and keep it up to date.
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li>You’re responsible for activity on your account.</li>
              <li>Keep your login details secure.</li>
              <li>Notify us if you suspect unauthorized access.</li>
            </ul>
          </>
        ),
      },
      {
        id: "billing",
        title: "Subscription & Billing",
        body: (
          <>
            <p>
              If FlowUnit offers paid plans, billing terms will be disclosed at
              checkout. You agree to pay fees and applicable taxes based on your
              selected plan.
            </p>
            <p className="mt-3">
              We may update pricing or plan features, but we’ll communicate
              changes in a reasonable way.
            </p>
          </>
        ),
      },
      {
        id: "acceptable-use",
        title: "Acceptable Use",
        body: (
          <>
            <p>
              You agree not to misuse FlowUnit or help anyone else do so. This
              includes (but is not limited to) attempting to access data you
              don’t own, disrupting service, or violating any laws.
            </p>
            <ul className="mt-3 list-disc pl-5">
              <li>No abuse, harassment, or harmful content.</li>
              <li>No reverse engineering or security probing.</li>
              <li>No unauthorized automation that harms performance.</li>
            </ul>
          </>
        ),
      },
      {
        id: "ip",
        title: "Intellectual Property",
        body: (
          <>
            <p>
              FlowUnit and its content (excluding user content) are owned by
              FlowUnit and protected by applicable intellectual property laws.
            </p>
            <p className="mt-3">
              You keep ownership of the content you upload, create, or manage
              inside your workspace—subject to the rights needed for FlowUnit to
              provide the service.
            </p>
          </>
        ),
      },
      {
        id: "liability",
        title: "Limitation of Liability",
        body: (
          <>
            <p>
              FlowUnit is provided “as is”. To the maximum extent permitted by
              law, we are not liable for indirect, incidental, or consequential
              damages arising from your use of the service.
            </p>
          </>
        ),
      },
      {
        id: "termination",
        title: "Termination",
        body: (
          <>
            <p>
              We may suspend or terminate access if you violate these terms or
              if required for security, legal, or operational reasons.
            </p>
          </>
        ),
      },
      {
        id: "changes",
        title: "Changes to These Terms",
        body: (
          <>
            <p>
              We may update these Terms from time to time. If changes are
              material, we’ll provide notice through the site or other
              reasonable means.
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
              Questions about these Terms? Contact us via support channels
              listed on the website.
            </p>
          </>
        ),
      },
    ],
    [],
  );

  return (
    <LegalTemplate
      pageTitle="Terms of Service"
      updatedAt="March 3, 2026"
      readTime="12 minutes"
      toc={toc}
      sections={sections}
      sideCard={
        <div className="flex flex-col gap-2">
          <div className="text-primary font-semibold">Need help?</div>
          <div className="text-tertiary text-sm">
            If anything here is unclear, reach out and we’ll clarify.
          </div>
          <button className="mt-2 px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition">
            Message Support
          </button>
        </div>
      }
    />
  );
}

import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMail } from "react-icons/hi";
import { FaLinkedinIn } from "react-icons/fa";
import assets from "../../assets/assets";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const columns = [
    {
      title: "Product",
      links: [
        { label: "Features", to: "/features" },
        { label: "Pricing", to: "/pricing" },
        {
          label: "Releases",
          to: "https://github.com/youngbee08/flow-unit-client/releases",
        },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
        { label: "Privacy Policy", to: "/privacy" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Help Center", to: "/help" },
        {
          label: "Community",
          to: "https://whatsapp.com/channel/0029Vb2Tnmp1Hsq0howQez1V",
        },
        {
          label: "API Docs",
          to: "https://flowunitserver.vercel.app/#overview",
        },
      ],
    },
  ];

  return (
    <footer className="bg-white border-t border-tertiary/20 mt-auto">
      <div className="app-container py-12">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4 flex flex-col gap-1">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={assets.noBgLogo}
                alt="FlowUnit logo"
                className="w-15 h-10 object-contain -translate-x-5"
              />
              <span className="text-lg font-bold text-primary -translate-x-12">
                FlowUnit
              </span>
            </Link>

            <p className="max-w-sm text-sm text-tertiary leading-relaxed">
              Making project management effortless through AI. Built for modern,
              distributed teams around the globe.
            </p>

            <div className="flex items-center gap-3 mt-3">
              <a
                href="mailto:flowunitapp@gmail.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
                aria-label="Email"
              >
                <HiOutlineMail className="text-lg text-primary" />
              </a>

              <a
                href="https://x.com/flowunitapp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
                aria-label="LinkedIn"
              >
                <FaXTwitter className="text-lg text-primary" />
              </a>
              <a
                href="https://linkedin.com/company/flowunit"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-lg text-primary" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              {columns.map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm font-semibold text-primary">
                    {col.title}
                  </h4>

                  <ul className="mt-4 space-y-3">
                    {col.links.map((l) => (
                      <li key={l.label}>
                        <Link
                          to={l.to}
                          className="text-sm text-tertiary hover:text-primary transition-colors"
                        >
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-tertiary/20 pt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-tertiary">
            © {year} FlowUnit. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-xs">
            <Link
              to="/terms"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy"
              className="text-tertiary hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

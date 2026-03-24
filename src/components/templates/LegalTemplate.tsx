import React, { useEffect, useMemo, useRef, useState } from "react";
import { FaCalendar } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

type TocItem = { id: string; label: string };
type LegalSection = { id: string; title: string; body: React.ReactNode };

type LegalTemplateProps = {
  pageTitle: string;
  updatedAt: string;
  readTime?: string;
  toc: TocItem[];
  sections: LegalSection[];
  sideCard?: React.ReactNode;
};

const cls = (...s: Array<string | false | null | undefined>) =>
  s.filter(Boolean).join(" ");

const TOP_OFFSET = 96;

/**
 * Contained "sticky" fallback:
 * - Sidebar follows scroll starting after container top
 * - Stops at container bottom
 * - Uses translateY, so it works even when CSS sticky is blocked
 */
function useContainedSticky<
  C extends HTMLElement,
  S extends HTMLElement,
>(opts: {
  containerRef: React.RefObject<C | null>;
  sidebarRef: React.RefObject<S | null>;
  topOffset: number;
  enabled: boolean;
}) {
  const { containerRef, sidebarRef, topOffset, enabled } = opts;
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!enabled) return;

    const container = containerRef.current;
    const sidebar = sidebarRef.current;
    if (!container || !sidebar) return;

    let last = -1;

    const getContainerTop = () => {
      let top = 0;
      let el: HTMLElement | null = container;
      while (el) {
        top += el.offsetTop;
        el = el.offsetParent as HTMLElement | null;
      }
      return top;
    };

    const run = () => {
      raf.current = null;

      const scrollY = window.scrollY;
      const containerTop = getContainerTop();
      const containerBottom = containerTop + container.offsetHeight;
      const sidebarHeight = sidebar.offsetHeight;

      const maxTranslate = Math.max(
        0,
        containerBottom - containerTop - sidebarHeight,
      );
      const desired = scrollY + topOffset - containerTop;
      const translate = Math.min(Math.max(desired, 0), maxTranslate);

      const rounded = Math.round(translate);

      if (rounded !== last) {
        last = rounded;
        sidebar.style.transform = `translate3d(0, ${rounded}px, 0)`;
      }
    };

    const onScroll = () => {
      if (raf.current != null) return;
      raf.current = window.requestAnimationFrame(run);
    };

    const onResize = () => run();

    run();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      if (raf.current != null) window.cancelAnimationFrame(raf.current);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [containerRef, sidebarRef, topOffset, enabled]);
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");

  useEffect(() => {
    if (!ids.length) return;

    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0.1, 0.2, 0.35, 0.5] },
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [ids]);

  return [active, setActive] as const;
}

export const LegalTemplate: React.FC<LegalTemplateProps> = ({
  pageTitle,
  updatedAt,
  readTime = "10 minutes",
  toc,
  sections,
  sideCard,
}) => {
  const ids = useMemo(() => toc.map((t) => t.id), [toc]);
  const [active, setActive] = useActiveSection(ids);

  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarInnerRef = useRef<HTMLDivElement>(null);

  const [isLg, setIsLg] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const update = () => setIsLg(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  useContainedSticky({
    containerRef,
    sidebarRef: sidebarInnerRef,
    topOffset: TOP_OFFSET,
    enabled: isLg,
  });

  const onJump = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="w-full">
      <div className="flex flex-col gap-2">
        <h1 className="text-primary text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
          {pageTitle}
        </h1>
        <div className="text-tertiary text-xs flex items-center">
          <span className="mx-2">
            <FaCalendar />
          </span>
          <span>Last updated {updatedAt}</span>
          <span className="mx-2 lg:flex hidden">
            <IoTimeOutline />
          </span>
          <span className="lg:flex hidden">Reading time: {readTime}</span>
        </div>
      </div>

      <div
        ref={containerRef}
        className="mt-6 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"
      >
        <aside className="hidden lg:block lg:col-span-3">
          <div
            ref={sidebarInnerRef}
            className="will-change-transform transform-gpu"
          >
            <div className="rounded-xl border border-tertiary/15 bg-white p-4 h-125">
              <div className="max-h-120 overflow-auto styled-scrollbar">
                <div className="text-primary font-semibold text-sm">
                  Table of contents
                </div>

                <div className="mt-3 flex flex-col gap-1">
                  {toc.map((item, idx) => {
                    const isActive = active === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onJump(item.id)}
                        className={cls(
                          "group relative text-left rounded-xl px-3 py-2 text-sm transition outline-none",
                          "hover:bg-[#f7f9ff] hover:text-primary",
                          isActive
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-tertiary",
                        )}
                      >
                        <span
                          className={cls(
                            "absolute left-0 top-2 bottom-2 w-0.75 rounded-full transition",
                            isActive ? "bg-primary" : "bg-transparent",
                          )}
                        />
                        <span className="mr-2 text-tertiary/60">
                          {idx + 1}.
                        </span>
                        {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {sideCard ? (
              <div className="mt-4 hidden lg:block">
                <div className="rounded-2xl border border-tertiary/15 bg-white p-5 shadow-sm">
                  <div className="text-primary font-semibold text-base">
                    Need help?
                  </div>

                  <p className="mt-2 text-sm text-tertiary leading-relaxed">
                    If anything here is unclear, reach out and we’ll clarify.
                  </p>

                  <a href="mailto:flowunitapp@gmail.com">
                    <button className="mt-4 w-full px-4 py-2.5 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition">
                      Message Support
                    </button>
                  </a>
                </div>
              </div>
            ) : null}
          </div>
        </aside>

        <main className="lg:col-span-9">
          <div className="rounded-xl border border-tertiary/15 bg-white">
            <div className="p-5 sm:p-7 lg:p-8">
              {sections.map((sec, i) => (
                <section
                  key={sec.id}
                  id={sec.id}
                  style={{ scrollMarginTop: TOP_OFFSET + 12 }}
                  className={cls(
                    i ? "mt-10 pt-10 border-t border-tertiary/10" : "",
                  )}
                >
                  <h2 className="text-primary font-bold text-lg sm:text-xl">
                    {i + 1}. {sec.title}
                  </h2>

                  <div className="mt-3 text-tertiary text-sm sm:text-base leading-relaxed">
                    {sec.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="border-t border-tertiary/10 p-5 sm:p-7 lg:hidden">
              <div className="rounded-2xl bg-primary text-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                <div className="max-w-xl">
                  <div className="font-semibold text-base sm:text-lg">
                    Questions about these terms?
                  </div>
                  <p className="text-white/80 text-sm sm:text-base mt-1">
                    Reach out and we’ll respond as soon as possible.
                  </p>
                </div>

                <a
                  href="mailto:flowunitapp@gmail.com"
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white text-primary text-sm font-semibold hover:brightness-110 transition text-center"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

import React, { useEffect, useMemo, useState } from "react";
import { IoIosPlayCircle } from "react-icons/io";
import {
  FiZap,
  FiUsers,
  FiCheckCircle,
  FiLayers,
  FiShield,
} from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import assets from "../assets/assets";
import { motion, type Variants } from "framer-motion";
import Seo from "../components/Seo";
import { Helmet } from "react-helmet-async";

const EASE_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: EASE_OUT },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const card: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT },
  },
};

const mockFloat: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
};

const Home: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeMockup, setActiveMockup] = useState(0);

  const Stars = ({ count = 5 }: { count?: number }) => (
    <div className="flex items-center gap-1 text-primary">
      {Array.from({ length: count }).map((_, i) => (
        <FiStar key={i} className="text-sm" />
      ))}
    </div>
  );

  const features = useMemo(
    () => [
      {
        title: "Smart Generator",
        desc: "Import an existing project and generate a clean task list from its title and description, ready to review and assign.",
        icon: <FiZap />,
      },
      {
        title: "Manual Task Creation",
        desc: "Create tasks yourself with full control—priorities, structure, and workflow stay in your hands.",
        icon: <FiLayers />,
      },
      {
        title: "Team Collaboration",
        desc: "Assign tasks, track ownership, and keep work moving in one shared workspace.",
        icon: <FiUsers />,
      },
      {
        title: "Progress Clarity",
        desc: "See what’s pending and completed instantly, so you always know what to focus on next.",
        icon: <FiCheckCircle />,
      },
      {
        title: "Clean Project Structure",
        desc: "Break projects into organized tasks that remain easy to follow even as work grows.",
        icon: <FiLayers />,
      },
      {
        title: "Secure by Design",
        desc: "Workspace access is tied to your account and team membership to keep projects private.",
        icon: <FiShield />,
      },
    ],
    [],
  );

  const steps = useMemo(
    () => [
      {
        title: "Create a project",
        desc: "Start with a title and a short description of what you’re building.",
      },
      {
        title: "Generate or add tasks",
        desc: "Add tasks manually, or let FlowUnit suggest a structured task list using AI.",
      },
      {
        title: "Assign, track, ship",
        desc: "Assign tasks, monitor progress, and stay focused until completion.",
      },
    ],
    [],
  );

  const testimonials = useMemo(
    () => [
      {
        name: "Daniel Olabisi",
        role: "Software Developer",
        quote:
          "FlowUnit made our planning clearer. The task structure feels natural and reduces back-and-forth.",
        stars: 5,
      },
      {
        name: "Michael Peters",
        role: "Software Developer",
        quote:
          "The Smart Generator kills the blank-page problem. It gets me from idea to execution fast.",
        stars: 5,
      },
      {
        name: "Patrick Kolapo",
        role: "Entrepreneur",
        quote:
          "Simple, clean, and easy to adopt. We didn’t need a long onboarding to start using it.",
        stars: 4,
      },
    ],
    [],
  );

  const faqs = useMemo(
    () => [
      {
        q: "Is FlowUnit for individuals or teams?",
        a: "FlowUnit is built for both. You can use it independently to organize personal projects, or collaborate with a team in a shared workspace where tasks can be assigned, tracked, and managed collectively.",
      },
      {
        q: "How does the Smart Generator work?",
        a: "Start by creating a project with a clear title and description. The Smart Generator analyzes your project details and automatically produces a structured list of actionable tasks. You can review, edit, refine, and assign these tasks before saving them to your workflow.",
      },
      {
        q: "Can I create tasks manually?",
        a: "Yes. Manual task creation is always available. You can add tasks, organize them, set priorities, and manage progress entirely on your own. The Smart Generator is optional and designed to assist—not replace, your planning process.",
      },
      {
        q: "Do I need to install anything?",
        a: "No installation is required. FlowUnit runs directly in your browser, so you can sign in from any device and begin planning immediately without additional setup.",
      },
      {
        q: "Is my data secure?",
        a: "Your workspace is tied to your authenticated account, and access is controlled by team membership and permissions. Only authorized users can view or interact with your projects.",
      },
    ],
    [],
  );

  const mockupSlides = useMemo(
    () => [
      { src: assets.mockup1, alt: "FlowUnit dashboard overview" },
      { src: assets.mockup2, alt: "FlowUnit smart generator view" },
      { src: assets.mockup3, alt: "FlowUnit tasks view" },
      { src: assets.mockup4, alt: "FlowUnit project view" },
      { src: assets.mockup5, alt: "FlowUnit team view" },
    ],
    [],
  );

  useEffect(() => {
    const id = setInterval(() => {
      setActiveMockup((prev) => (prev + 1) % mockupSlides.length);
    }, 4500);
    return () => clearInterval(id);
  }, [mockupSlides.length]);

  return (
    <>
      <Seo
        title="FlowUnit — Clarity Without the Chaos"
        description="Plan projects, generate structured tasks with AI, assign teammates, and track progress in one focused workspace."
        canonicalPath="/"
      />
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "FlowUnit",
            url: "https://flowunit.co",
            logo: "https://flowunit.co/dark_logo_circled.png",
            sameAs: [
              "https://x.com/flowunitapp",
              "https://linkedin.com/company/flowunit",
            ],
          })}
        </script>

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "FlowUnit",
            url: "https://flowunit.co",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://flowunit.co/?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          })}
        </script>
      </Helmet>
      <div className="flex flex-col gap-10 lg:gap-14">
        <motion.section
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-7 items-center justify-center text-center"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col gap-1 sm:gap-2 lg:gap-4"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl text-primary font-bold">
              Clarity Without the Chaos
            </h2>
            <p className="text-tertiary text-sm lg:text-base font-medium sm:w-[71%] lg:w-[51%] mx-auto">
              Turn project ideas into structured tasks, manually or with AI
              assistance. FlowUnit helps individuals and teams plan, organize,
              assign, and track work in one focused workspace.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto max-w-xs sm:max-w-none"
          >
            <button
              onClick={() => (location.href = "/get-started")}
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition cursor-pointer"
            >
              Get Started
            </button>

            <button
              onClick={() =>
                window.open("https://www.youtube.com/@zenithdevtech")
              }
              className="w-full sm:w-auto px-5 py-3 rounded-xl bg-white border border-tertiary/40 text-primary text-sm font-semibold hover:brightness-110 transition cursor-pointer flex items-center justify-center gap-1"
            >
              <IoIosPlayCircle />
              Watch Demo
            </button>
          </motion.div>
        </motion.section>

        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-[#f7f9ff] to-white" />
          <div className="pointer-events-none absolute -top-16 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-10 -z-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

          <div className="flex flex-col gap-6 lg:gap-10">
            <motion.div
              variants={mockFloat}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="relative w-full"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: EASE_OUT }}
                className="hidden md:block relative rounded-xl overflow-hidden border border-tertiary/15 bg-white/80 shadow-2xl backdrop-blur"
              >
                <div className="flex items-center gap-2 px-5 py-4 border-b border-tertiary/10 bg-white/70">
                  <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                  <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                  <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                  <span className="ml-3 text-xs text-tertiary/70">
                    app.flowunit.co
                  </span>
                </div>
                <img
                  src={assets.mockup1}
                  alt="FlowUnit dashboard preview"
                  className="w-full"
                  loading="lazy"
                />
              </motion.div>

              <div className="md:hidden">
                <div className="relative rounded-xl overflow-hidden border border-tertiary/15 bg-white shadow-2xl">
                  <div className="flex items-center gap-2 px-5 py-4 border-b border-tertiary/10 bg-white">
                    <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                    <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                    <span className="h-3 w-3 rounded-full bg-tertiary/20" />
                    <span className="ml-3 text-xs text-tertiary/70">
                      app.flowunit.co
                    </span>
                  </div>

                  <div className="relative overflow-hidden">
                    <div
                      className="flex transition-transform duration-500 ease-out"
                      style={{
                        transform: `translateX(-${activeMockup * 100}%)`,
                      }}
                    >
                      {mockupSlides.map((slide, idx) => (
                        <div key={idx} className="min-w-full">
                          <div className="max-h-65 overflow-hidden">
                            <img
                              src={slide.src}
                              alt={slide.alt}
                              className="w-full h-full object-cover object-top"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-center gap-2">
                  {mockupSlides.map((_, idx) => {
                    const isActive = idx === activeMockup;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveMockup(idx)}
                        className={`h-2.5 rounded-full transition-all ${
                          isActive
                            ? "w-7 bg-primary"
                            : "w-2.5 bg-tertiary/25 hover:bg-tertiary/40"
                        }`}
                        aria-label={`View screen ${idx + 1}`}
                      />
                    );
                  })}
                </div>
              </div>

              <div className="pointer-events-none absolute -bottom-7 left-1/2 h-16 w-[85%] -translate-x-1/2 rounded-full bg-primary/10 blur-2xl" />
            </motion.div>
          </div>
        </section>

        <section id="features" className="flex flex-col gap-8 lg:gap-12">
          <div className="text-center">
            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">
              Built for planning, execution, and clean delivery
            </h3>
            <p className="mt-2 text-tertiary text-sm sm:text-base max-w-3xl mx-auto">
              From messy ideas to structured tasks, FlowUnit keeps projects
              organized, teams aligned, and progress visible at a glance.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {features.map((f, idx) => (
              <motion.div
                key={idx}
                variants={card}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className="rounded-xl border border-tertiary/15 bg-white p-5 sm:p-6 shadow-sm"
              >
                <div className="h-11 w-11 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl">
                  {f.icon}
                </div>
                <h4 className="mt-4 text-primary font-semibold text-base">
                  {f.title}
                </h4>
                <p className="mt-2 text-sm text-tertiary leading-relaxed">
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="how-it-works" className="flex flex-col gap-8 lg:gap-12">
          <div className="text-center">
            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">
              From idea to execution
            </h3>
            <p className="mt-2 text-tertiary text-sm sm:text-base">
              A simple workflow that turns projects into structured, actionable
              tasks.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {steps.map((s, idx) => (
              <motion.div
                key={idx}
                variants={card}
                className="relative pl-10 md:pl-0"
              >
                <div className="absolute left-4 top-0 h-full w-px bg-tertiary/20 md:hidden" />

                <div className="absolute left-0 top-0 md:static md:mb-4">
                  <div className="h-8 w-8 rounded-full border border-tertiary/20 bg-white flex items-center justify-center text-xs font-bold text-primary">
                    {idx + 1}
                  </div>
                </div>

                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-4 left-10 right-0 h-px bg-tertiary/20" />
                )}

                <div className="md:pt-0">
                  <div className="text-xs font-semibold text-primary/80 tracking-wide">
                    STEP {idx + 1}
                  </div>
                  <h4 className="mt-2 text-primary font-semibold">{s.title}</h4>
                  <p className="mt-2 text-sm text-tertiary leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        <section id="testimonials" className="flex flex-col gap-6 lg:gap-10">
          <div className="text-center">
            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">
              Trusted by builders who value clarity
            </h3>
            <p className="mt-2 text-tertiary text-sm sm:text-base max-w-2xl mx-auto">
              Real feedback from teams and individuals using FlowUnit to plan
              better and ship faster.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="hidden md:grid grid-cols-3 gap-6"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={card}
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 240, damping: 22 }}
                className="rounded-xl border border-tertiary/15 bg-white p-6 shadow-sm"
              >
                <Stars count={t.stars ?? 5} />
                <p className="mt-4 text-sm text-tertiary leading-relaxed">
                  “{t.quote}”
                </p>

                <div className="mt-5 flex items-center gap-3 border-t border-tertiary/10 pt-4">
                  <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                    {t.name?.[0] ?? "U"}
                  </div>
                  <div>
                    <div className="text-primary font-semibold leading-tight">
                      {t.name}
                    </div>
                    <div className="text-xs text-tertiary">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="md:hidden">
            <motion.div
              variants={card}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="rounded-xl border border-tertiary/15 bg-white p-6 shadow-sm"
            >
              <Stars count={testimonials[activeTestimonial]?.stars ?? 5} />
              <p className="mt-4 text-sm text-tertiary leading-relaxed">
                “{testimonials[activeTestimonial]?.quote}”
              </p>

              <div className="mt-5 flex items-center gap-3 border-t border-tertiary/10 pt-4">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold">
                  {testimonials[activeTestimonial]?.name?.[0] ?? "U"}
                </div>
                <div>
                  <div className="text-primary font-semibold leading-tight">
                    {testimonials[activeTestimonial]?.name}
                  </div>
                  <div className="text-xs text-tertiary">
                    {testimonials[activeTestimonial]?.role}
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="mt-4 flex items-center justify-center gap-2">
              {testimonials.map((_, idx) => {
                const isActive = idx === activeTestimonial;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      isActive
                        ? "w-7 bg-primary"
                        : "w-2.5 bg-tertiary/25 hover:bg-tertiary/40"
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </section>

        <section id="faqs" className="flex flex-col gap-6 lg:gap-10">
          <div className="text-center">
            <h3 className="text-primary text-xl sm:text-2xl lg:text-3xl font-bold">
              Questions, answered
            </h3>
            <p className="mt-2 text-tertiary text-sm sm:text-base">
              Everything you need to know before you start.
            </p>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="flex flex-col gap-3"
          >
            {faqs.map((item, idx) => {
              const isOpen = openFaq === idx;

              return (
                <motion.div
                  key={idx}
                  variants={card}
                  className="rounded-xl border border-tertiary/15 bg-white overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left px-5 py-4 transition hover:bg-white/70"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div className="text-primary font-semibold">{item.q}</div>
                      <span
                        className={`text-primary/70 text-lg leading-none transition-transform duration-300 ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? "–" : "+"}
                      </span>
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm text-tertiary leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>
      </div>
    </>
  );
};

export default Home;

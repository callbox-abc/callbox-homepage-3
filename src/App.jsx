import React, { useState, useEffect } from "react";
import {
  Phone,
  Mail,
  Users,
  CalendarCheck,
  Globe,
  Target,
  Headset,
  Network,
  ShieldCheck,
  Brain,
  Star,
  TrendingUp,
  Quote,
  PlayCircle,
  ChevronDown,
  ArrowRight,
  Menu,
  X,
  Boxes,
  Cloud,
  CreditCard,
  HeartPulse,
  Factory,
  Database,
  Shield,
  Linkedin,
  Youtube,
  Twitter,
  MapPin,
} from "lucide-react";

/**
 * Callbox homepage \u2014 mockup V3 "Console"
 * A bolder, graphic take: mostly dark canvas, sharp-edged bento grids,
 * monospace treatment for live data, and a hero illustration built as a
 * live "console" card \u2014 a ticking meetings-booked counter plus an
 * auto-advancing service dock, instead of an orbit or radar.
 *
 * Stack: React + Tailwind CSS (arbitrary hex values, no config changes needed)
 * + lucide-react icons. Same palette and sample content as the other mockups,
 * styled differently on purpose for comparison.
 */

/* ----------------------------- sample content ---------------------------- */

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Why Callbox", href: "#why-callbox" },
  { label: "Results", href: "#results" },
  { label: "Industries", href: "#industries" },
  { label: "FAQ", href: "#faq" },
];

const TRUST_LOGOS = ["NORTHPEAK", "VELORA", "ORBITAL", "ARKHAUS", "FINWAVE", "GRIDLINE"];

const DOCK_SERVICES = [
  { icon: Phone, label: "Calling" },
  { icon: Mail, label: "Email" },
  { icon: Users, label: "ABM" },
  { icon: CalendarCheck, label: "Events" },
  { icon: Globe, label: "Cross-border" },
];

const STATS = [
  { value: "20+", label: "Years in B2B lead generation", big: true },
  { value: "15K+", label: "Companies engaged" },
  { value: "10K+", label: "Campaigns delivered" },
  { value: "60+", label: "Countries reached" },
];

const AWARDS = [
  { icon: Star, label: "Clutch \u2014 Top B2B Agency" },
  { icon: TrendingUp, label: "G2 \u2014 High Performer" },
  { icon: ShieldCheck, label: "DesignRush \u2014 Verified Partner" },
];

const SERVICES = [
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Build a pipeline of sales-ready leads matched to your ideal customer profile.",
  },
  {
    icon: Headset,
    title: "Appointment Setting & SDR",
    desc: "Dedicated SDR pods book qualified meetings straight onto your calendar.",
  },
  {
    icon: Users,
    title: "Account-Based Marketing",
    desc: "Coordinated, multi-touch campaigns that open doors at priority accounts.",
  },
  {
    icon: CalendarCheck,
    title: "Event & Webinar Marketing",
    desc: "Fill the room and the follow-up pipeline, before and after the event.",
  },
  {
    icon: Globe,
    title: "Cross-Border Expansion",
    desc: "Local market know-how to launch outbound in a new region with confidence.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: Brain,
    title: "Human + AI, working together",
    desc: "AI handles the research and signals; real SDRs handle the conversation.",
  },
  {
    icon: Headset,
    title: "A dedicated pod, not a shared queue",
    desc: "A named team learns your pitch and owns your pipeline end to end.",
  },
  {
    icon: Network,
    title: "Every channel, one cadence",
    desc: "Phone, email, LinkedIn and events sequenced into a single outreach rhythm.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance built in",
    desc: "Verified, consent-aware data sourced and handled the right way, everywhere you sell.",
  },
];

const RESULTS = [
  {
    tag: "An enterprise MSP growing in North America",
    stat: "3x",
    statLabel: "qualified meetings in 90 days",
    quote: "Callbox didn\u2019t just hit our target \u2014 they reset what we thought was possible.",
    person: "VP of Sales",
  },
  {
    tag: "An AI SaaS company expanding into APAC and SEA",
    stat: "52",
    statLabel: "appointments, 140 MQLs from one ABM program",
    quote: "We opened three new accounts in our first month of outbound.",
    person: "Head of Growth",
  },
  {
    tag: "An office solutions provider in the United States",
    stat: "57",
    statLabel: "appointments, 41 MQLs in one campaign cycle",
    quote: "Our reps stopped prospecting and started closing.",
    person: "Sales Director",
  },
];

const INDUSTRIES = [
  { icon: Boxes, label: "Software & SaaS" },
  { icon: Shield, label: "Cybersecurity" },
  { icon: Cloud, label: "Cloud & IT" },
  { icon: Brain, label: "AI & Machine Learning" },
  { icon: CreditCard, label: "FinTech" },
  { icon: HeartPulse, label: "Healthcare Tech" },
  { icon: Factory, label: "Manufacturing" },
  { icon: Database, label: "ERP & CRM" },
];

const FAQS = [
  {
    q: "What does Callbox actually do?",
    a: "Callbox is a B2B lead generation agency. We combine AI-driven research and outreach with dedicated human SDRs to book qualified sales meetings for your team.",
  },
  {
    q: "How fast can we see meetings on the calendar?",
    a: "Most programs start generating qualified appointments within the first two to three weeks of launch, once your ICP and messaging are locked.",
  },
  {
    q: "Do we get a dedicated team?",
    a: "Yes. Every engagement is staffed with a named SDR pod that learns your product \u2014 not a rotating shared queue.",
  },
  {
    q: "Which regions do you cover?",
    a: "We run live outbound campaigns across North America, APAC, Europe and Latin America, with local-market expertise in each.",
  },
  {
    q: "Is your contact data compliant?",
    a: "Yes. Our data sourcing and handling practices are built around GDPR, CCPA and regional consent requirements.",
  },
];

/* --------------------------------- shared --------------------------------- */

function Container({ className = "", children }) {
  return <div className={`mx-auto w-full max-w-6xl px-6 ${className}`}>{children}</div>;
}

function Kicker({ children, light = false }) {
  return (
    <p className={`font-mono text-xs mb-3 ${light ? "text-[#75c7fa]" : "text-[#fcbb00]"}`}>{children}</p>
  );
}

function PrimaryButton({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-[#fcbb00] px-6 py-3 text-sm font-semibold text-[#0b0b0d] transition hover:bg-[#e3a800] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fcbb00] ${className}`}
    >
      {children}
    </button>
  );
}

function GhostButton({ children, className = "", dark = false, ...props }) {
  return (
    <button
      {...props}
      className={`inline-flex items-center justify-center gap-2 rounded-md border px-6 py-3 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#75c7fa] ${
        dark ? "border-white/20 text-white hover:border-white/50" : "border-[#0b0b0d]/20 text-[#0b0b0d] hover:border-[#0b0b0d]/50"
      } ${className}`}
    >
      {children}
    </button>
  );
}

/* ---------------------------------- nav ----------------------------------- */

function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0b0d]/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fcbb00] font-mono font-bold text-[#0b0b0d]">
            C
          </span>
          <span className="text-lg font-semibold tracking-tight">Callbox</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-white/60 hover:text-white transition">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton>
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-[#0b0b0d] px-6 py-4">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} className="text-sm text-white/80" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <PrimaryButton className="w-full mt-2">Book a Call</PrimaryButton>
          </div>
        </div>
      )}
    </header>
  );
}

/* ---------------------------- 1. hero + illustration ----------------------- */

function ConsoleIllustration() {
  const [count, setCount] = useState(1284);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCount((c) => c + Math.ceil(Math.random() * 2)), 2600);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setActive((i) => (i + 1) % DOCK_SERVICES.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-xl border border-[#75c7fa]/25 bg-[#161619] p-6 shadow-[0_0_60px_rgba(117,199,250,0.08)]">
      {/* title bar */}
      <div className="flex items-center justify-between border-b border-white/10 pb-4">
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded bg-[#fcbb00] font-mono text-xs font-bold text-[#0b0b0d]">
            C
          </span>
          <span className="text-sm font-semibold text-white">Callbox</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#75c7fa] opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#75c7fa]" />
          </span>
          <span className="font-mono text-xs text-white/50">live outreach</span>
        </div>
      </div>

      {/* ticking counter */}
      <div className="py-8">
        <p className="font-mono text-xs uppercase tracking-wide text-white/40">Meetings booked this quarter</p>
        <p className="mt-2 font-mono text-5xl font-bold tabular-nums text-white">{count.toLocaleString()}</p>
      </div>

      {/* auto-advancing service dock */}
      <div className="relative flex gap-2 border-t border-white/10 pt-5">
        {DOCK_SERVICES.map(({ icon: Icon, label }, i) => (
          <div
            key={label}
            className={`flex flex-1 flex-col items-center gap-2 rounded-md border px-2 py-3 transition-colors duration-500 ${
              active === i ? "border-[#fcbb00]/60 bg-[#fcbb00]/10" : "border-white/10"
            }`}
          >
            <Icon className={`h-4 w-4 transition-colors duration-500 ${active === i ? "text-[#fcbb00]" : "text-white/40"}`} />
            <span className={`font-mono text-[10px] transition-colors duration-500 ${active === i ? "text-white" : "text-white/30"}`}>
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-[#0b0b0d]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative grid grid-cols-1 items-center gap-16 py-20 lg:grid-cols-2 lg:py-28">
        <div>
          <p className="font-mono text-xs text-[#75c7fa]">// B2B lead generation, running live</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            Real conversations. Smarter pipeline.
          </h1>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/60">
            Callbox pairs dedicated SDRs with AI-driven data and outreach to
            book qualified meetings for B2B teams, across every channel and
            region.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <PrimaryButton>
              Book a Call <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
            <GhostButton dark>See how it works</GhostButton>
          </div>

          <div className="mt-14">
            <p className="font-mono text-xs text-white/30">trusted by sales teams at</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3">
              {TRUST_LOGOS.map((name) => (
                <span key={name} className="text-sm font-semibold tracking-wide text-white/30">
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ConsoleIllustration />
      </Container>
    </section>
  );
}

/* --------------------------- 2. proof in numbers --------------------------- */

function ProofStats() {
  return (
    <section className="bg-[#0b0b0d] pb-20">
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.label} className="bg-[#161619] p-7">
              <p className="font-mono text-4xl font-bold text-white sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm text-white/45">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          {AWARDS.map((a) => (
            <div key={a.label} className="flex items-center gap-2 rounded-md border border-white/10 px-4 py-2">
              <a.icon className="h-4 w-4 text-[#fcbb00]" />
              <span className="font-mono text-xs text-white/60">{a.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 3. services ------------------------------ */

function ServicesSection() {
  return (
    <section id="services" className="bg-[#f7f7f8] py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker>what-we-do.json</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
            Everything you need to start more sales conversations.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#0b0b0d]/10 bg-[#0b0b0d]/10 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s) => (
            <div key={s.title} className="flex flex-col gap-4 bg-white p-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-[#0b0b0d]">
                <s.icon className="h-5 w-5 text-[#fcbb00]" />
              </div>
              <h3 className="text-sm font-semibold text-[#0b0b0d]">{s.title}</h3>
              <p className="text-xs leading-relaxed text-[#303035]/70">{s.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------ 4. why callbox ------------------------------ */

function WhyCallbox() {
  return (
    <section id="why-callbox" className="bg-[#0b0b0d] py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker light>why-callbox.json</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Human judgment, backed by AI at scale.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
          {DIFFERENTIATORS.map((d) => (
            <div key={d.title} className="flex gap-5 bg-[#161619] p-7">
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md border border-[#75c7fa]/30">
                <d.icon className="h-5 w-5 text-[#75c7fa]" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-white">{d.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/50">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* -------------------------------- 5. results -------------------------------- */

function ResultsSection() {
  return (
    <section id="results" className="bg-[#f7f7f8] py-24">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Kicker>results.json</Kicker>
            <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">
              Pipeline outcomes from real Callbox programs.
            </h2>
          </div>
          <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#0b0b0d]">
            <PlayCircle className="h-5 w-5 text-[#fcbb00]" />
            Watch client stories
          </button>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-[#0b0b0d]/10 bg-[#0b0b0d]/10 lg:grid-cols-3">
          {RESULTS.map((r) => (
            <div key={r.tag} className="flex flex-col bg-white p-8">
              <p className="text-sm text-[#0b0b0d]/50">{r.tag}</p>
              <p className="mt-4 font-mono text-4xl font-bold text-[#0b0b0d]">{r.stat}</p>
              <p className="mt-1 text-sm text-[#303035]/70">{r.statLabel}</p>
              <div className="mt-6 flex-1 border-t border-[#0b0b0d]/10 pt-6">
                <Quote className="h-4 w-4 text-[#75c7fa]" />
                <p className="mt-2 text-sm italic leading-relaxed text-[#303035]">&ldquo;{r.quote}&rdquo;</p>
                <p className="mt-3 text-xs font-semibold text-[#0b0b0d]/60">{r.person}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 6. industries ------------------------------ */

function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#0b0b0d] py-24">
      <Container>
        <div className="max-w-xl">
          <Kicker light>industries.json</Kicker>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Deep campaign experience across B2B tech.
          </h2>
        </div>

        <div className="mt-12 flex flex-wrap gap-2">
          {INDUSTRIES.map((ind) => (
            <div
              key={ind.label}
              className="flex items-center gap-2 rounded-md border border-white/10 px-4 py-2.5 transition hover:border-[#75c7fa]/50"
            >
              <ind.icon className="h-4 w-4 text-[#75c7fa]" />
              <span className="font-mono text-xs text-white/70">{ind.label}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ---------------------------------- 7. faq ---------------------------------- */

function FAQItem({ item, open, onToggle }) {
  return (
    <div className="border-b border-[#0b0b0d]/10 py-6">
      <button
        className="flex w-full items-center justify-between gap-6 text-left"
        onClick={onToggle}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-[#0b0b0d]">{item.q}</span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-[#0b0b0d]/50 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#303035]/75">{item.a}</p>}
    </div>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <section id="faq" className="bg-[#f7f7f8] py-24">
      <Container className="max-w-3xl">
        <Kicker>faq.json</Kicker>
        <h2 className="text-3xl font-bold tracking-tight text-[#0b0b0d] sm:text-4xl">Your questions, answered.</h2>

        <div className="mt-10">
          {FAQS.map((item, i) => (
            <FAQItem
              key={item.q}
              item={item}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

/* ------------------------------- 8. final cta -------------------------------- */

function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#0b0b0d] py-24">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rotate-12 bg-[#fcbb00]"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 30% 100%)" }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to fill your pipeline?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-white/60">
          Book a free 30-minute strategy call and see what a dedicated SDR
          pod could do for your pipeline.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PrimaryButton>
            Book a Call <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
          <GhostButton dark>Talk to Sales</GhostButton>
        </div>
        <p className="mt-6 font-mono text-xs text-white/30">
          {"no contracts \u00b7 no setup fees \u00b7 cancel anytime"}
        </p>
      </Container>
    </section>
  );
}

/* --------------------------------- footer ----------------------------------- */

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0b0b0d] py-14">
      <Container>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 text-white">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#fcbb00] font-mono font-bold text-[#0b0b0d]">
                C
              </span>
              <span className="text-lg font-semibold tracking-tight">Callbox</span>
            </div>
            <p className="mt-4 flex items-center gap-2 text-sm text-white/40">
              <MapPin className="h-4 w-4" /> Global B2B lead generation
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Services</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>Lead Generation</li>
              <li>Appointment Setting</li>
              <li>ABM</li>
              <li>Event Marketing</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Company</p>
            <ul className="mt-4 space-y-2 text-sm text-white/50">
              <li>About Us</li>
              <li>Careers</li>
              <li>Case Studies</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold text-white">Follow</p>
            <div className="mt-4 flex gap-3">
              <Linkedin className="h-5 w-5 text-white/50" />
              <Twitter className="h-5 w-5 text-white/50" />
              <Youtube className="h-5 w-5 text-white/50" />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-xs text-white/35">
          {"\u00a9 2026 Callbox Inc. Mockup for internal review \u2014 sample content only."}
        </div>
      </Container>
    </footer>
  );
}

/* ---------------------------------- app ------------------------------------- */

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] font-sans text-[#0b0b0d] antialiased">
      <Nav />
      <main>
        <Hero />
        <ProofStats />
        <ServicesSection />
        <WhyCallbox />
        <ResultsSection />
        <IndustriesSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

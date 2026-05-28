/* global React, NodeGraph, HeroGrid, ClaudeVisual, Avatar, IndustryMotif, PartnerMark */
const { useState, useEffect, useRef } = React;

// ============ NAV ============
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-inner">
        <Logo />
        <nav className="nav-links">
          <a href="#services">Services</a>
          <a href="#process">Process</a>
          <a href="#claude">AI Delivery</a>
          <a href="#industries">Industries</a>
          <a href="#about">About</a>
          <a href="#insights">Insights</a>
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a href="login.html" className="nav-login">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><rect x="2.5" y="5.5" width="7" height="5" rx="1" stroke="currentColor" strokeWidth="1.1"/><path d="M 4 5.5 V 4 a 2 2 0 0 1 4 0 V 5.5" stroke="currentColor" strokeWidth="1.1" fill="none"/></svg>
            Client Login
          </a>
          <a href="#contact" className="nav-cta">
            Contact us <span style={{ display: "inline-block", transform: "translateY(-1px)" }}>↗</span>
          </a>
        </div>
      </div>
    </header>
  );
}

// ============ HERO ============
function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hero">
      <div className="hero-grid-bg"><HeroGrid /></div>
      <div className="container">
        <div className="hero-layout">
          <div>
            <div className="hero-badge">
              <span className="pill">v26 · Future-Ready</span>
              Now partnered with Anthropic
            </div>
            <h1 className="display h1">
              The Future-Ready Enterprise, <span className="accent">delivered</span>.
            </h1>
            <p className="hero-sub">
              Midpoint accelerates data &amp; AI transformation for Indonesia's largest enterprises. We pair a
              senior local team with cutting-edge Claude agents to ship in weeks, not quarters.
            </p>
            <div className="hero-ctas">
              <a href="#contact" className="btn btn-primary">Book a readiness audit →</a>
              <a href="#process" className="btn btn-ghost">See how we deliver</a>
            </div>
          </div>
          <div className="hero-visual" aria-hidden>
            <NodeGraph />
          </div>
        </div>

        <div className="hero-meta">
          <div className="item"><div className="num">8×</div><div className="lbl">Faster Time to Value</div></div>
          <div className="item"><div className="num">2k+</div><div className="lbl">Delivery Stories</div></div>
          <div className="item"><div className="num">+65%</div><div className="lbl">Avg. ROI Uplift</div></div>
          <div className="item"><div className="num">Jakarta</div><div className="lbl">Onshore Delivery Team</div></div>
        </div>
      </div>
    </section>
  );
}

// ============ CLIENTS ============
function Clients() {
  const brands = ["XLSmart", "Pharos", "BINUS", "BFI"];
  return (
    <section className="section-tight" data-screen-label="02b Clients" style={{ padding: "64px 0", borderBottom: "1px solid var(--line)", background: "var(--bg)" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 24, flexWrap: "wrap", gap: 16 }}>
          <div className="kicker">Trusted by</div>
          <span className="mono" style={{ color: "var(--ink-dim)" }}>// leading Indonesian enterprises</span>
        </div>
        <div style={{
          display: "flex",
          border: "1px solid var(--line)",
          borderRadius: 16,
          overflow: "hidden",
          background: "var(--bg-elev)",
          flexWrap: "wrap",
        }}>
          {brands.map((b, i) => <ClientMark key={i} brand={b} />)}
        </div>
      </div>
    </section>
  );
}

// ============ PARTNERS ============
function Partners() {
  return (
    <section className="partners" data-screen-label="02 Partners">
      <div className="container partners-inner">
        <div className="partners-label">
          <span className="mono" style={{ color: "var(--accent)" }}>// ecosystem</span><br />
          <b>Official Partners.</b> We build on the platforms the world's best enterprises trust.
        </div>
        <div className="partners-logos">
          <PartnerMark name="Salesforce" />
          <PartnerMark name="Mixpanel" />
          <PartnerMark name="AWS" />
          <PartnerMark name="GCP" />
          <PartnerMark name="Anthropic" />
        </div>
      </div>
    </section>
  );
}

// ============ SERVICES ============
const SERVICES = [
  {
    size: "s-lg",
    tag: "01 · Flagship",
    title: "Data & AI Transformation, end-to-end",
    body: "From strategy to activation on Salesforce Data Cloud, Mixpanel, AWS and GCP, delivered onshore by a senior Jakarta team.",
    chips: ["Data Cloud", "Mixpanel", "AI Activation", "MDM"],
  },
  {
    size: "s-md",
    tag: "02",
    title: "Customer 360 & Personalization",
    body: "Unified profiles, real-time segmentation, and AI-driven journeys that lift conversion and retention.",
    chips: ["CDP", "CX", "Journeys"],
  },
  {
    size: "s-md",
    tag: "03",
    title: "Agentic AI Delivery",
    body: "Claude-powered agents write mappings, policies, and tests, compressing 12-month programs into 10 to 14 weeks.",
    chips: ["Claude", "Agents", "Guardrails"],
  },
  {
    size: "s-sm",
    tag: "04",
    title: "Product & Growth Analytics",
    body: "Mixpanel-native instrumentation and activation for digital natives, telcos, and fintechs.",
    chips: ["Mixpanel"],
  },
  {
    size: "s-sm",
    tag: "05",
    title: "Compliance & Governance",
    body: "UU PDP-aligned data governance, lineage, and access controls baked in from day one.",
    chips: ["UU PDP", "Governance"],
  },
  {
    size: "s-sm",
    tag: "06",
    title: "Managed Services",
    body: "24/7 Jakarta-based run, optimization, and platform adoption support.",
    chips: ["Run", "Optimize"],
  },
];

function Services() {
  return (
    <section className="section" id="services" data-screen-label="03 Services">
      <div className="container">
        <div className="sec-head">
          <div className="title-block">
            <div className="kicker">Capabilities</div>
            <h2 className="h2">Built for enterprises that need to move without breaking.</h2>
          </div>
          <p className="lede">
            We replace 18-month consulting engagements with compact, AI-accelerated squads. Fewer handoffs, faster
            outcomes, and senior engineers (not interns) on every call.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES.map((s, i) => (
            <div key={i} className={`service ${s.size}`}>
              <span className="tag">{s.tag}</span>
              <h3 className="h3">{s.title}</h3>
              <p className="body">{s.body}</p>
              <div className="foot">
                <div className="chips">{s.chips.map((c, j) => <span className="chip" key={j}>{c}</span>)}</div>
                <div className="arrow">→</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ PROCESS ============
const STEPS = [
  {
    n: "01",
    name: "Diagnose",
    meta: "Week 0 to 2",
    title: "We map your data reality, not a slide deck of it.",
    body: "A senior partner, a data architect, and a Claude agent ingest your schemas, flows, and org context to produce an honest 30-page readiness map. Outcomes are KPI-indexed from day one.",
    bullets: [
      ["Artifact", "Readiness map + AI-prioritized backlog"],
      ["Team", "Partner, architect, Claude ingest agent"],
      ["Exit", "Signed scope + measurable KPI targets"],
    ],
  },
  {
    n: "02",
    name: "Design",
    meta: "Week 2 to 4",
    title: "Architecture that respects the mess you already have.",
    body: "We design the target state across Salesforce Data Cloud, Mixpanel, AWS/GCP, plus the compliance posture for UU PDP. Claude drafts integration specs; humans approve them.",
    bullets: [
      ["Artifact", "Target architecture + data contracts"],
      ["Coverage", "Source systems, identity, consent"],
      ["Exit", "Stakeholder-signed blueprint"],
    ],
  },
  {
    n: "03",
    name: "Build",
    meta: "Week 4 to 10",
    title: "Ship working increments every two weeks.",
    body: "Onshore squads deliver pipelines, harmonized models, and activated segments in bi-weekly demos. Claude agents generate mapping code, tests, and policy scaffolds, reviewed line by line by our engineers.",
    bullets: [
      ["Cadence", "Bi-weekly demo + prod increment"],
      ["AI leverage", "~40% of boilerplate is Claude-generated"],
      ["Exit", "Live production use-cases"],
    ],
  },
  {
    n: "04",
    name: "Activate",
    meta: "Week 8 to 12",
    title: "Move insights into the channels that make money.",
    body: "We wire segments into marketing, service, and sales workflows. A/B frameworks, measurement, and dashboards go live, with Mixpanel tracking lift end-to-end.",
    bullets: [
      ["Outputs", "Personalized journeys, alerting"],
      ["Measurement", "Lift, AOV, churn, NPS"],
      ["Exit", "Attributable revenue signal"],
    ],
  },
  {
    n: "05",
    name: "Operate",
    meta: "Ongoing",
    title: "Run, optimize, and expand, from Jakarta.",
    body: "A dedicated pod keeps platforms healthy, adds use-cases, and retrains models. Claude agents monitor data drift, anomaly patterns, and flag risks before they become outages.",
    bullets: [
      ["Coverage", "Business-hours incident + enhancement support"],
      ["SLA", "99.9% data freshness"],
      ["Cadence", "Quarterly business review"],
    ],
  },
];

function Process() {
  const [active, setActive] = useState(0);
  const s = STEPS[active];
  return (
    <section className="section" id="process" data-screen-label="04 Process" style={{ background: "var(--bg-elev)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)" }}>
      <div className="container">
        <div className="sec-head">
          <div className="title-block">
            <div className="kicker">Methodology</div>
            <h2 className="h2">A phased playbook that compresses 18 months into 12 weeks.</h2>
          </div>
          <p className="lede">
            The same methodology we've used for leading Indonesian telcos, banks, and digital natives,
            now with Claude agents embedded inside every phase.
          </p>
        </div>

        <div className="process-steps">
          <div className="process-nav">
            {STEPS.map((step, i) => (
              <button key={i} className={i === active ? "active" : ""} onClick={() => setActive(i)}>
                <span className="n">{step.n}</span>{step.name}
              </button>
            ))}
          </div>

          <div className="process-panel" key={active} style={{ animation: "fadeSlide .35s ease" }}>
            <div>
              <div className="step-meta">{s.meta} · Phase {s.n}</div>
              <h3 className="h2" style={{ fontSize: "clamp(26px, 3vw, 36px)" }}>{s.title}</h3>
              <p>{s.body}</p>
            </div>
            <div>
              <ul>
                {s.bullets.map(([k, v], i) => (
                  <li key={i}>
                    <span className="k">{k}</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <style>{`@keyframes fadeSlide {from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:none}}`}</style>
      </div>
    </section>
  );
}

// ============ CLAUDE ADVANTAGE ============
function ClaudeSection() {
  return (
    <section className="section" id="claude" data-screen-label="05 Claude Advantage">
      <div className="container">
        <div className="claude-hero">
          <div>
            <div className="kicker">The Claude Advantage</div>
            <h2 className="h2" style={{ marginTop: 18 }}>Delivery, accelerated by agents that actually ship.</h2>
            <p className="muted" style={{ marginTop: 20, fontSize: 17, lineHeight: 1.6, maxWidth: "44ch" }}>
              Every engagement runs with a Claude agent embedded in the squad. It writes mappings, drafts policy,
              generates tests, and summarizes stakeholder calls. Your engineers stay in the loop; the drudgery goes away.
            </p>
            <div className="claude-bullets">
              {[
                ["Schema & mapping generation", "Claude proposes field mappings across CRM, ERP, and product analytics. Our architects approve."],
                ["Policy-as-code for UU PDP", "Consent, retention, and access rules drafted into Terraform + Data Cloud policies."],
                ["Regression-ready test scaffolds", "Data contracts, schema tests, and anomaly checks authored in hours, not sprints."],
                ["Stakeholder intelligence", "Meeting transcripts become decisions, risks, and a living RAID log, automatically."],
              ].map(([t, d], i) => (
                <div className="claude-bullet" key={i}>
                  <div className="ix">0{i+1}</div>
                  <div><b>{t}</b><span>{d}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="claude-visual"><ClaudeVisual /></div>
        </div>
      </div>
    </section>
  );
}

// ============ INDUSTRIES ============
const INDUSTRIES = [
  { n: "01", name: "Telecommunications", desc: "Subscriber 360, churn models, real-time offer engines for tier-1 operators.", motif: "telco" },
  { n: "02", name: "Banking & Financial Services", desc: "Customer intelligence, fraud signals, PDP-ready data foundations.", motif: "bank" },
  { n: "03", name: "Retail & eCommerce", desc: "Unified loyalty, personalization, and channel-level attribution.", motif: "retail" },
  { n: "04", name: "Digital Natives & Media", desc: "Mixpanel-led product analytics, experimentation, and growth ops.", motif: "media" },
];

function Industries() {
  return (
    <section className="section" id="industries" data-screen-label="06 Industries">
      <div className="container">
        <div className="sec-head">
          <div className="title-block">
            <div className="kicker">Industries</div>
            <h2 className="h2">Depth where it matters. Built for Indonesia's toughest sectors.</h2>
          </div>
          <p className="lede">
            A decade of delivery for tier-1 telcos, banks, ecommerce leaders, and digital natives across the archipelago.
          </p>
        </div>
        <div className="industries-grid">
          {INDUSTRIES.map((ind, i) => (
            <div key={i} className="industry">
              <div>
                <div className="num">{ind.n}</div>
                <h3 className="display" style={{ marginTop: 14 }}>{ind.name}</h3>
              </div>
              <p className="desc">{ind.desc}</p>
              <IndustryMotif variant={ind.motif} />
              <div className="glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ ABOUT / TEAM ============
const FOUNDERS = [
  { name: "Sai B Uday", role: "Co-Founder & Managing Director", tone: "a", bio: "Leads strategy, delivery, and client partnerships. Two decades architecting data & CX transformations for Asia's largest enterprises." },
  { name: "Rahul Nambiar", role: "Co-Founder & Director", tone: "b", bio: "Heads engineering and platform practice across Salesforce Data Cloud, Mixpanel, and cloud-native data, the delivery engine of Midpoint." },
  { name: "Cleosent Randing", role: "Co-Founder & President Commissioner", tone: "c", bio: "Provides enterprise governance, market strategy, and executive oversight across the Indonesian business landscape." },
];

const TEAM = [
  { name: "[ Team Member ]", role: "VP, Delivery", tone: "d" },
  { name: "[ Team Member ]", role: "Head of Data Cloud", tone: "a" },
  { name: "[ Team Member ]", role: "Head of Analytics", tone: "e" },
  { name: "[ Team Member ]", role: "Principal Architect", tone: "b" },
  { name: "[ Team Member ]", role: "AI Practice Lead", tone: "c" },
  { name: "[ Team Member ]", role: "Governance Lead", tone: "d" },
  { name: "[ Team Member ]", role: "Growth Partner", tone: "e" },
  { name: "[ Team Member ]", role: "People & Culture", tone: "a" },
];

function About() {
  return (
    <section className="section about" id="about" data-screen-label="07 About">
      <div className="container">
        <div className="about-top">
          <div>
            <div className="kicker">About Midpoint</div>
            <h2 className="h2" style={{ marginTop: 18 }}>Indonesian, by design. Global, in standard.</h2>
            <p>
              Founded in August 2025, Midpoint is a Jakarta-based data &amp; AI consultancy built by a team
              that has spent the last decade delivering Indonesia's most complex data transformations, from national
              telcos to tier-1 banks and the country's largest digital natives.
            </p>
            <p>
              We compete with the Accentures and Deloittes of the world by being faster, local, and unapologetically
              AI-native. Senior engineers on every call. Claude agents on every squad. Outcomes measured, not billed.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat"><div className="num">2025</div><div className="lbl">Founded in Jakarta</div></div>
            <div className="stat"><div className="num">5×</div><div className="lbl">Faster delivery vs. Big 4</div></div>
            <div className="stat"><div className="num">10 yrs</div><div className="lbl">Avg. leadership tenure</div></div>
            <div className="stat"><div className="num">100%</div><div className="lbl">Onshore senior engineers</div></div>
          </div>
        </div>

        <div style={{ marginTop: 48 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
            <div>
              <div className="kicker">Leadership & Team</div>
              <h3 className="h3" style={{ marginTop: 14 }}>Founders and senior practitioners, on every engagement.</h3>
            </div>
            <p className="mono" style={{ color: "var(--ink-dim)", maxWidth: "32ch" }}>
              // backed by 40+ consultants, engineers and architects across Jakarta
            </p>
          </div>

          <div className="founders">
            {FOUNDERS.map((p, i) => (
              <div className="person founder" key={i}>
                <div className="avatar"><Avatar seed={i+1} tone={p.tone} /></div>
                <div>
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role}</div>
                </div>
                <p className="bio">{p.bio}</p>
              </div>
            ))}
          </div>

          <div className="team-grid" style={{ marginTop: 16 }}>
            {TEAM.map((p, i) => (
              <div className="team-card" key={i}>
                <div className="mini-avatar"><Avatar seed={i+10} tone={p.tone} /></div>
                <div>
                  <div className="name">{p.name}</div>
                  <div className="role">{p.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ INSIGHTS ============
const INSIGHTS = [
  { cat: "Playbook", time: "12 min", title: "Why 18-month Data Cloud programs are over, and what replaces them.", tone: "a" },
  { cat: "Field Notes", time: "8 min", title: "Designing UU PDP-compliant customer profiles on Salesforce Data Cloud.", tone: "b" },
  { cat: "AI Delivery", time: "10 min", title: "How we embed Claude agents inside a Mixpanel implementation squad.", tone: "c" },
];

function Insights() {
  return (
    <section className="section" id="insights" data-screen-label="08 Insights">
      <div className="container">
        <div className="sec-head">
          <div className="title-block">
            <div className="kicker">Insights</div>
            <h2 className="h2">Field-tested thinking from the delivery floor.</h2>
          </div>
          <p className="lede">
            No fluff, no ghostwriters. Every piece is authored by a practitioner who shipped the thing they're writing about.
          </p>
        </div>
        <div className="insights-grid">
          {INSIGHTS.map((p, i) => (
            <a className="insight" key={i} href="#">
              <div className="thumb"><Avatar seed={i+21} tone={p.tone} /></div>
              <div className="meta"><span className="c">{p.cat}</span><span>{p.time} read</span></div>
              <h3 className="display">{p.title}</h3>
              <div className="read"><span>Read article</span><span>→</span></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONTACT / CTA ============
function Contact() {
  return (
    <section className="cta-band" id="contact" data-screen-label="09 Contact">
      <div className="container cta-inner">
        <div>
          <div className="kicker">Start the conversation</div>
          <h2 className="h2" style={{ marginTop: 18 }}>Ready to build your future-ready enterprise?</h2>
          <p>
            Tell us about your data ambition, from a 30-day audit to a 12-week Data Cloud go-live. A senior partner
            will reply within one business day.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a href="mailto:info@midpoint.id" className="btn btn-primary">Contact us to know more →</a>
            <a href="#about" className="btn btn-ghost">Meet the team</a>
          </div>
        </div>
        <div className="cta-card">
          <a href="mailto:info@midpoint.id" className="mail">
            <span style={{ color: "var(--accent)" }}>✉</span> info@midpoint.id
          </a>
          <div className="line"><span className="k">HQ</span><span>One Pacific Place, 15th Floor<br />Jl. Jend. Sudirman Kav. 52-53<br />Senayan, Kebayoran Baru<br />Jakarta Selatan 12190, Indonesia</span></div>
          <div className="line"><span className="k">Entity</span><span>PT Midpoint Teknologi Global</span></div>
          <div className="line"><span className="k">Response</span><span>&lt; 24 hours, from a partner</span></div>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER ============
function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <div>
            <img src="assets/midpoint-logo.svg" alt="Midpoint" style={{ height: 28, width: "auto", color: "var(--ink)" }} />
            <p style={{ marginTop: 16, maxWidth: "36ch" }}>
              The future-ready enterprise, delivered. Jakarta-based, globally benchmarked.
            </p>
          </div>
          <div>
            <h4>Services</h4>
            <ul><li><a href="#services">Data & AI</a></li><li><a href="#services">Customer 360</a></li><li><a href="#services">Mixpanel</a></li><li><a href="#services">Managed Services</a></li></ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul><li><a href="#about">About</a></li><li><a href="#about">Team</a></li><li><a href="#insights">Insights</a></li><li><a href="#contact">Contact</a></li><li><a href="login.html">Client Portal</a></li></ul>
          </div>
          <div>
            <h4>Partners</h4>
            <ul><li>Salesforce</li><li>Mixpanel</li><li>AWS</li><li>GCP</li><li>Anthropic</li></ul>
          </div>
        </div>

        <div className="container" style={{ padding: 0 }}>
          <div className="footer-wordmark">midpoint.</div>
        </div>

        <div className="footer-bottom">
          <div>© 2026 PT Midpoint Teknologi Global</div>
          <div>Jakarta · Indonesia</div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Hero, Partners, Clients, Services, Process, ClaudeSection, Industries, About, Insights, Contact, Footer });

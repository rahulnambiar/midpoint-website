// ============ PORTAL MOCK DATA ============
// Multi-tenant: represent a client (XLSmart) viewing their delivery

const CLIENT = {
  name: "XLSmart",
  plan: "Enterprise",
  initials: "XL",
  color: "#0066CC",
  role: "Primary Sponsor",
};

const USER = {
  name: "Pradipta Wiryawan",
  email: "pradipta.w@xlsmart.co.id",
  title: "VP, Digital Transformation",
  initials: "PW",
};

const KPIS = [
  { label: "Active Projects", val: "4", delta: "+1 this quarter", dir: "up" },
  { label: "Open Tickets", val: "12", delta: "3 high priority", dir: "neutral" },
  { label: "SLA Adherence", val: "99.2%", delta: "+0.4% MoM", dir: "up" },
  { label: "Consumed Budget", val: "68%", delta: "On track · Q1", dir: "up" },
];

const PROJECTS = [
  {
    id: "MP-SF-01",
    name: "Salesforce Service Cloud Rollout",
    code: "SFSC · Wave 2",
    icon: "SF", iconBg: "#00A1E0",
    status: "on-track", statusLabel: "On Track",
    progress: 72,
    team: [
      { i: "RN", c: "#0ADE7C" },
      { i: "SB", c: "#4C6EF5" },
      { i: "CR", c: "#E67E22" },
      { i: "+5", c: "#94A8AD" },
    ],
    phase: "Build & UAT",
    nextMilestone: "Go-live: Apr 28, 2026",
  },
  {
    id: "MP-MX-02",
    name: "Mixpanel Product Analytics Foundation",
    code: "Analytics Platform",
    icon: "MX", iconBg: "#7856FF",
    status: "on-track", statusLabel: "On Track",
    progress: 48,
    team: [
      { i: "SU", c: "#0ADE7C" },
      { i: "AK", c: "#9B59B6" },
      { i: "+3", c: "#94A8AD" },
    ],
    phase: "Instrumentation",
    nextMilestone: "First insights review: Mar 12",
  },
  {
    id: "MP-DL-03",
    name: "Customer Data Platform (Snowflake + Segment)",
    code: "Data Cloud · Phase 1",
    icon: "DP", iconBg: "#05927D",
    status: "at-risk", statusLabel: "At Risk",
    progress: 35,
    team: [
      { i: "RN", c: "#0ADE7C" },
      { i: "JT", c: "#3498DB" },
      { i: "+4", c: "#94A8AD" },
    ],
    phase: "Source integrations",
    nextMilestone: "Core CDP LIVE: May 30",
  },
  {
    id: "MP-AI-04",
    name: "Claude AI Agent, Customer Support Copilot",
    code: "AI Ops",
    icon: "AI", iconBg: "#D97757",
    status: "on-track", statusLabel: "On Track",
    progress: 18,
    team: [
      { i: "CR", c: "#E67E22" },
      { i: "SB", c: "#4C6EF5" },
    ],
    phase: "Discovery",
    nextMilestone: "POC demo: Mar 21",
  },
];

const ACTIVITY = [
  { type: "deploy", who: "Rahul Nambiar", what: "deployed", target: "sfsc-case-router v2.4.1", when: "12m ago", meta: "Production · 42 changes", icon: "ok" },
  { type: "ticket", who: "You", what: "raised ticket", target: "MP-142 · Data freshness delay in Segment sync", when: "1h ago", meta: "P2 · Assigned to Jaya T.", icon: "alert" },
  { type: "report", who: "Sai B Uday", what: "published report", target: "Feb 2026 Executive Summary", when: "3h ago", meta: "Executive · 14 pages", icon: "info" },
  { type: "commit", who: "Aditya K.", what: "merged PR", target: "mixpanel-events-sdk#218, iOS event batching", when: "Yesterday", meta: "main · 8 files", icon: "ok" },
  { type: "milestone", who: "Project", what: "milestone completed", target: "SFSC UAT kickoff", when: "Yesterday", meta: "SF Service Cloud Rollout", icon: "ok" },
  { type: "alert", who: "System", what: "flagged", target: "CDP Phase 1 slipping, dependency on XL source extract", when: "2d ago", meta: "Escalated to sponsor", icon: "alert" },
];

const TICKETS = [
  { id: "MP-142", title: "Data freshness delay in Segment sync", sub: "Events delayed by ~15 min vs SLA", prio: "high", status: "open", assignee: "Jaya T.", project: "CDP Phase 1", updated: "1h ago" },
  { id: "MP-139", title: "Case routing rule not applying to EMEA region", sub: "Salesforce Service Cloud", prio: "high", status: "in-progress", assignee: "Rahul N.", project: "SFSC Rollout", updated: "3h ago" },
  { id: "MP-138", title: "Add export for monthly cohort retention", sub: "Feature request", prio: "low", status: "open", assignee: "Unassigned", project: "Mixpanel", updated: "Yesterday" },
  { id: "MP-135", title: "iOS SDK missing device_model property", sub: "Instrumentation gap", prio: "med", status: "in-progress", assignee: "Aditya K.", project: "Mixpanel", updated: "Yesterday" },
  { id: "MP-132", title: "Claude agent hallucinated policy reference in test set", sub: "Needs RAG grounding fix", prio: "med", status: "review", assignee: "Cleosent R.", project: "AI Copilot", updated: "2d ago" },
  { id: "MP-128", title: "Governance: PII masking spec review", sub: "Compliance blocker", prio: "high", status: "review", assignee: "Sai B.", project: "CDP Phase 1", updated: "3d ago" },
];

const TIMELINE = [
  { phase: "Phase 1", title: "Discovery & Readiness Audit", desc: "Current-state assessment across Salesforce, Mixpanel, and legacy CDP. Stakeholder interviews across 14 business units.", date: "Dec 2025", status: "done" },
  { phase: "Phase 2", title: "Target Architecture & Blueprint", desc: "Reference architecture, data contracts, governance framework, and ROI model signed off by steering committee.", date: "Jan 2026", status: "done" },
  { phase: "Phase 3", title: "Salesforce Service Cloud, Wave 1 Go-Live", desc: "Agent console, case routing, knowledge base for Consumer segment.", date: "Feb 2026", status: "done" },
  { phase: "Phase 4", title: "SFSC Wave 2 + Mixpanel Foundation", desc: "Enterprise & SMB segments on SFSC; Mixpanel instrumentation on iOS, Android, Web.", date: "Mar-Apr 2026", status: "current" },
  { phase: "Phase 5", title: "CDP Launch (Snowflake + Segment)", desc: "Unified customer profile, real-time activation, consent layer.", date: "May-Jun 2026", status: "upcoming" },
  { phase: "Phase 6", title: "Claude AI Copilot in Production", desc: "Agent-assist + self-serve copilot grounded in XL policy and knowledge base.", date: "Q3 2026", status: "upcoming" },
];

const REPOS = [
  { name: "xl-salesforce-config", desc: "Declarative config + metadata for SFSC org", lang: "Apex", color: "#1F6FEB", stars: 4, prs: 3, updated: "2h" },
  { name: "mixpanel-events-sdk", desc: "Shared event instrumentation SDK, iOS/Android/Web", lang: "TypeScript", color: "#3178C6", stars: 12, prs: 2, updated: "Yesterday" },
  { name: "cdp-ingestion-pipelines", desc: "Airflow DAGs for Segment → Snowflake ingestion", lang: "Python", color: "#3776AB", stars: 8, prs: 5, updated: "3h" },
  { name: "xl-claude-copilot", desc: "Customer support copilot + RAG over XL knowledge", lang: "Python", color: "#3776AB", stars: 2, prs: 1, updated: "Yesterday" },
  { name: "data-contracts", desc: "Avro schemas + governance policy-as-code", lang: "YAML", color: "#CB171E", stars: 6, prs: 0, updated: "1w" },
];

const REPORTS = [
  { type: "Executive", title: "Feb 2026 Executive Summary", size: "14 pages", date: "Mar 1, 2026", accent: "#05927D" },
  { type: "Weekly", title: "Week 09 · Cross-Project Status", size: "6 pages", date: "Feb 28, 2026", accent: "#05927D" },
  { type: "Architecture", title: "CDP Target-State Blueprint v1.2", size: "48 pages", date: "Feb 20, 2026", accent: "#4C6EF5" },
  { type: "Governance", title: "PII Masking & Data Residency Spec", size: "22 pages", date: "Feb 18, 2026", accent: "#B77900" },
  { type: "UAT", title: "SFSC Wave 2, UAT Test Plan", size: "32 pages", date: "Feb 15, 2026", accent: "#4C6EF5" },
  { type: "ROI", title: "Q1 2026 Benefits Tracking", size: "10 pages", date: "Feb 10, 2026", accent: "#05927D" },
];

const INTEGRATIONS = [
  { id: "jira", name: "Jira", desc: "Linked to xlsmart.atlassian.net · 4 projects synced", status: "connected", logo: "jira" },
  { id: "github", name: "GitHub", desc: "midpoint-labs org · 5 repositories · deploy keys active", status: "connected", logo: "github" },
  { id: "slack", name: "Slack", desc: "#midpoint-delivery · daily standup bot active", status: "connected", logo: "slack" },
  { id: "anthropic", name: "Anthropic API", desc: "claude-sonnet-4.5 · 2.1M tokens this month · $412 MTD", status: "connected", logo: "claude" },
  { id: "okta", name: "Okta", desc: "SSO + SCIM provisioning · 28 users synced", status: "connected", logo: "okta" },
  { id: "figma", name: "Figma", desc: "Design handoff files · 12 shared files", status: "connected", logo: "figma" },
];

// ============ BILLING ============
const BILLING_SUMMARY = {
  mtd: "IDR 1,284,500,000",
  mtdUsd: "USD 82,340",
  prevMonth: "IDR 1,186,200,000",
  delta: "+8.3%",
  openInvoices: 2,
  nextInvoice: "Mar 15, 2026",
  ytd: "IDR 3,942,700,000",
};

// Current month breakdown by category (in IDR millions)
const BILLING_BREAKDOWN = [
  { cat: "Project Fees",      label: "Delivery services (T&M + fixed bids)", val: 812,  color: "#05927D", pct: 63.2 },
  { cat: "License Fees",      label: "Salesforce, Mixpanel, Snowflake re-bill", val: 284, color: "#4C6EF5", pct: 22.1 },
  { cat: "Token Usage",       label: "Anthropic Claude API consumption",      val: 98,  color: "#D97757", pct: 7.6 },
  { cat: "Infrastructure",    label: "AWS, Segment, Tailscale pass-through",  val: 62,  color: "#B77900", pct: 4.8 },
  { cat: "Managed Services",  label: "Run-state SLAs, on-call, monitoring",   val: 28.5, color: "#7C8894", pct: 2.2 },
];

// Per-project billing breakdown (current month, IDR millions)
const BILLING_PROJECTS = [
  {
    id: "MP-SF-01", name: "Salesforce Service Cloud Rollout", icon: "SF", iconBg: "#00A1E0",
    type: "Fixed bid · Wave 2", total: 478.0,
    split: { project: 362.0, license: 94.0, token: 0, infra: 14.0, managed: 8.0 },
    status: "on-track",
  },
  {
    id: "MP-MX-02", name: "Mixpanel Product Analytics Foundation", icon: "MX", iconBg: "#7856FF",
    type: "T&M · Monthly cap", total: 248.5,
    split: { project: 156.0, license: 78.0, token: 4.5, infra: 8.0, managed: 2.0 },
    status: "on-track",
  },
  {
    id: "MP-DL-03", name: "Customer Data Platform (Snowflake + Segment)", icon: "DP", iconBg: "#05927D",
    type: "Phased milestone", total: 384.0,
    split: { project: 188.0, license: 112.0, token: 12.0, infra: 40.0, managed: 32.0 },
    status: "at-risk",
  },
  {
    id: "MP-AI-04", name: "Claude AI, Customer Support Copilot", icon: "AI", iconBg: "#D97757",
    type: "Discovery · T&M", total: 174.0,
    split: { project: 106.0, license: 0, token: 81.5, infra: 0, managed: 0 },
    status: "on-track",
  },
];

// Token usage for the month (Claude)
const TOKEN_USAGE = {
  model: "claude-sonnet-4-5",
  inputTokens: 42_800_000,
  outputTokens: 8_200_000,
  cacheReadTokens: 18_400_000,
  totalCost: "USD 6,280",
  idrCost: "IDR 98,000,000",
  dailyAvg: "USD 209",
  trend: [22, 28, 31, 24, 35, 42, 38, 45, 52, 58, 61, 68, 72, 79, 85, 82, 88, 94, 89, 96, 101, 108, 112, 118, 121, 128, 132, 139],
};

// Recent invoices
const INVOICES = [
  { id: "INV-2026-03-001", period: "Mar 2026 · Partial (to date)",  amount: "IDR 1,284,500,000", status: "draft",    due: "Mar 15, 2026", pdf: true },
  { id: "INV-2026-02-002", period: "Feb 2026",                      amount: "IDR 1,186,200,000", status: "paid",     due: "Feb 15, 2026", pdf: true },
  { id: "INV-2026-02-001", period: "Feb 2026 · Licenses (annual)",  amount: "IDR   894,000,000", status: "paid",     due: "Feb 05, 2026", pdf: true },
  { id: "INV-2026-01-001", period: "Jan 2026",                      amount: "IDR 1,092,800,000", status: "paid",     due: "Jan 15, 2026", pdf: true },
  { id: "INV-2025-12-001", period: "Dec 2025",                      amount: "IDR   778,400,000", status: "paid",     due: "Dec 15, 2025", pdf: true },
];

// ============ CONTRACTS & PRICING ============
const CONTRACTS = [
  {
    id: "MSA-XL-2025-001",
    title: "Master Services Agreement",
    type: "MSA",
    status: "active",
    signed: "Nov 12, 2025",
    expires: "Nov 11, 2028",
    value: "IDR 42.8B",
    valueSub: "3-year program ceiling",
    term: "36 months",
    owner: "Sai B Uday",
    clientOwner: "Andi Suryanto, CFO",
    notes: "Master framework covering all statements of work, IP, data protection, and liability caps.",
    keyTerms: [
      { k: "Payment Terms", v: "Net 30 days from invoice" },
      { k: "Liability Cap", v: "2× annual fees (per incident)" },
      { k: "IP Ownership", v: "Client owns delivered work; Midpoint retains frameworks" },
      { k: "Data Residency", v: "Indonesia only (ap-southeast-3)" },
      { k: "Termination", v: "90-day notice, pro-rated refund" },
    ],
  },
  {
    id: "SOW-SFSC-W2",
    title: "Salesforce Service Cloud, Wave 2",
    type: "SOW",
    status: "active",
    signed: "Jan 08, 2026",
    expires: "May 31, 2026",
    value: "IDR 6.2B",
    valueSub: "Fixed bid · milestone-based",
    term: "Fixed bid",
    owner: "Rahul Nambiar",
    clientOwner: "Rina Putri, VP CX",
    notes: "Enterprise + SMB segment rollout. 4 milestones, 20% retention.",
    keyTerms: [
      { k: "Milestones", v: "4 × 20% + 20% final acceptance" },
      { k: "Change Requests", v: "IDR 12M per person-week, CAB approval" },
      { k: "Go-Live SLA", v: "Apr 28, 2026 · penalty 0.5%/week" },
      { k: "Warranty", v: "90-day post go-live, bug-fix at no cost" },
    ],
  },
  {
    id: "SOW-MX-FOUND",
    title: "Mixpanel Analytics Foundation",
    type: "SOW",
    status: "active",
    signed: "Jan 22, 2026",
    expires: "Jul 22, 2026",
    value: "IDR 3.8B",
    valueSub: "T&M · monthly cap IDR 650M",
    term: "6 months",
    owner: "Sai B Uday",
    clientOwner: "Devi Kusumo, Head of Product",
    notes: "Product analytics across iOS, Android, Web. Instrumentation + insights enablement.",
    keyTerms: [
      { k: "Rate Card", v: "Senior IDR 3.6M/day · Principal IDR 5.2M/day" },
      { k: "Monthly Cap", v: "IDR 650M (soft) · hard cap IDR 780M" },
      { k: "Volume Discount", v: "12% on T&M beyond Q2 2026" },
    ],
  },
  {
    id: "SOW-CDP-P1",
    title: "Customer Data Platform, Phase 1",
    type: "SOW",
    status: "active",
    signed: "Feb 03, 2026",
    expires: "Aug 30, 2026",
    value: "IDR 9.4B",
    valueSub: "Phased milestone · 5 gates",
    term: "7 months",
    owner: "Rahul Nambiar",
    clientOwner: "Budi Hartono, CTO",
    notes: "Snowflake CDP + Segment + consent layer. Includes license re-bill at +5% handling.",
    keyTerms: [
      { k: "License Re-bill", v: "Snowflake + Segment at cost + 5%" },
      { k: "Milestone Gates", v: "5 × 18% + 10% final acceptance" },
      { k: "Risk Pool", v: "IDR 450M contingency (Midpoint-managed)" },
    ],
  },
  {
    id: "SOW-AI-COPILOT",
    title: "Claude AI, Support Copilot POC",
    type: "SOW",
    status: "active",
    signed: "Feb 14, 2026",
    expires: "May 14, 2026",
    value: "IDR 1.8B",
    valueSub: "Discovery + POC · T&M",
    term: "3 months",
    owner: "Cleosent Randing",
    clientOwner: "Rina Putri, VP CX",
    notes: "POC scope. Conversion to production SOW upon success criteria approval.",
    keyTerms: [
      { k: "Token Pass-through", v: "Anthropic API at cost + 0% for POC" },
      { k: "Success Criteria", v: "≥85% CSAT on pilot cohort, ≥40% AHT reduction" },
      { k: "Conversion", v: "Pre-negotiated production rate: IDR 2.4B / year" },
    ],
  },
  {
    id: "MSA-XL-DPA",
    title: "Data Processing Agreement",
    type: "DPA",
    status: "active",
    signed: "Nov 12, 2025",
    expires: "Co-terminus with MSA",
    value: "N/A",
    valueSub: "Governance addendum",
    term: "36 months",
    owner: "Sai B Uday",
    clientOwner: "Legal · PT XL Axiata",
    notes: "UU PDP + ISO 27001 compliant data handling. Sub-processor register maintained.",
    keyTerms: [
      { k: "Sub-processors", v: "AWS Jakarta, Snowflake APAC, pre-approved" },
      { k: "Breach Notice", v: "≤ 24 hours to DPO" },
      { k: "Audit Rights", v: "Annual · 30-day notice" },
    ],
  },
];

// Negotiated rate card
const RATE_CARD = [
  { role: "Principal Architect",       list: 6.5, negotiated: 5.2, disc: "20%" },
  { role: "Senior Engineer / Lead",    list: 4.4, negotiated: 3.6, disc: "18%" },
  { role: "Engineer",                  list: 3.2, negotiated: 2.7, disc: "16%" },
  { role: "Data Scientist (ML/AI)",    list: 5.2, negotiated: 4.3, disc: "17%" },
  { role: "Designer / UX",             list: 3.4, negotiated: 2.9, disc: "15%" },
  { role: "Project Manager",           list: 3.8, negotiated: 3.2, disc: "16%" },
  { role: "Junior / Analyst",          list: 2.2, negotiated: 2.0, disc: "10%" },
];

// License re-bill schedule
const LICENSE_REBILL = [
  { vendor: "Salesforce",   product: "Service Cloud Enterprise", seats: 240, unit: "IDR 2.9M/seat/mo", annual: "IDR 8.35B", markup: "At cost" },
  { vendor: "Mixpanel",     product: "Enterprise · 50M events",  seats: "n/a", unit: "Flat commit",      annual: "IDR 1.92B", markup: "At cost" },
  { vendor: "Snowflake",    product: "Business Critical credits", seats: "n/a", unit: "IDR 3,400 / credit", annual: "IDR 2.68B", markup: "+ 5%" },
  { vendor: "Segment",      product: "Business · 12M MTUs",       seats: "n/a", unit: "Flat commit",      annual: "IDR 1.45B", markup: "+ 5%" },
  { vendor: "Anthropic",    product: "Claude Enterprise API",     seats: "n/a", unit: "Pay-as-you-go",    annual: "Est. IDR 1.2B", markup: "+ 0% POC / + 10% prod" },
  { vendor: "Okta",         product: "Workforce Identity Prod",   seats: 420, unit: "IDR 148K/user/mo", annual: "IDR 746M",  markup: "At cost" },
];

Object.assign(window, { CONTRACTS, RATE_CARD, LICENSE_REBILL, CLIENT, USER, KPIS, PROJECTS, ACTIVITY, TICKETS, TIMELINE, REPOS, REPORTS, INTEGRATIONS, BILLING_SUMMARY, BILLING_BREAKDOWN, BILLING_PROJECTS, TOKEN_USAGE, INVOICES });

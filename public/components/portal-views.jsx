const { useState, useEffect, useRef, useMemo } = React;

// ============ SIDEBAR ============
function Sidebar({ view, setView }) {
  const nav = [
    { group: "Workspace", items: [
      { id: "dashboard", label: "Dashboard", icon: IconHome },
      { id: "projects", label: "Projects", icon: IconProjects, badge: "4" },
      { id: "timeline", label: "Roadmap", icon: IconTimeline },
    ]},
    { group: "Delivery", items: [
      { id: "tickets", label: "Tickets", icon: IconTickets, badge: "12", badgeWarn: true },
      { id: "repos", label: "Repositories", icon: IconRepo },
      { id: "reports", label: "Reports", icon: IconReports },
      { id: "billing", label: "Billing & Usage", icon: IconBilling },
      { id: "contracts", label: "Contracts & Pricing", icon: IconContract },
    ]},
    { group: "Admin", items: [
      { id: "settings", label: "Settings & Integrations", icon: IconSettings },
    ]},
  ];
  return (
    <aside className="sidebar">
      <div className="sidebar-top">
        <div className="sidebar-logo">
          <img src="assets/midpoint-logo.svg" alt="Midpoint"/>
          <span className="env-badge">PORTAL</span>
        </div>
        <div className="client-switcher">
          <div className="client-avatar" style={{ background: CLIENT.color }}>{CLIENT.initials}</div>
          <div className="client-switcher-text">
            <span className="name">{CLIENT.name}</span>
            <span className="role">{CLIENT.plan} · {CLIENT.role}</span>
          </div>
          <span className="chev"><IconChev/></span>
        </div>
      </div>

      <nav className="sidebar-nav scroll-pretty">
        {nav.map(g => (
          <React.Fragment key={g.group}>
            <div className="sidebar-group-label">{g.group}</div>
            {g.items.map(it => (
              <button key={it.id} className={`sidebar-link ${view === it.id ? "active" : ""}`} onClick={() => setView(it.id)}>
                <it.icon/>
                <span>{it.label}</span>
                {it.badge && <span className={`badge ${it.badgeWarn ? "warn" : ""}`}>{it.badge}</span>}
              </button>
            ))}
          </React.Fragment>
        ))}
      </nav>

      <div className="sidebar-bottom">
        <div className="user-card">
          <div className="user-avatar">{USER.initials}</div>
          <div className="user-card-text">
            <div className="name">{USER.name}</div>
            <div className="email">{USER.email}</div>
          </div>
          <span style={{ color: "rgba(236,245,244,0.4)" }}><IconChev/></span>
        </div>
      </div>
    </aside>
  );
}

// ============ TOPBAR ============
function Topbar({ view }) {
  const crumbs = {
    dashboard: ["XLSmart", "Dashboard"],
    projects: ["XLSmart", "Projects"],
    timeline: ["XLSmart", "Delivery Roadmap"],
    tickets: ["XLSmart", "Tickets"],
    repos: ["XLSmart", "Repositories"],
    reports: ["XLSmart", "Reports & Documents"],
    billing: ["XLSmart", "Billing & Usage"],
    contracts: ["XLSmart", "Contracts & Pricing"],
    settings: ["XLSmart", "Settings"],
  }[view] || ["XLSmart"];
  return (
    <header className="topbar">
      <div className="topbar-breadcrumb">
        {crumbs.map((c, i) => (
          <React.Fragment key={i}>
            {i > 0 && <span className="sep">/</span>}
            <span className={i === crumbs.length - 1 ? "cur" : ""}>{c}</span>
          </React.Fragment>
        ))}
      </div>
      <div className="topbar-search">
        <IconSearch/>
        <input placeholder="Search projects, tickets, people, documents…"/>
        <span className="kbd">⌘K</span>
      </div>
      <div className="topbar-actions">
        <button className="icon-btn" title="Help"><IconHelp/></button>
        <button className="icon-btn" title="Notifications"><IconBell/><span className="notif-dot"/></button>
        <a href="login.html" className="icon-btn" title="Sign out" style={{ color: "var(--ink-muted)" }}>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M 9 3 H 4 a 1 1 0 0 0 -1 1 V 12 a 1 1 0 0 0 1 1 H 9 M 11 5 L 14 8 L 11 11 M 7 8 H 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </a>
      </div>
    </header>
  );
}

// ============ DASHBOARD ============
function Dashboard({ setView }) {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Welcome back, {USER.name.split(" ")[0]}</h1>
          <div className="sub">Here's what's happening across your 4 active engagements with Midpoint.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn"><IconExt/> Export status</button>
          <button className="pbtn pbtn-primary"><IconPlus/> Raise a ticket</button>
        </div>
      </div>

      <div className="kpi-grid">
        {KPIS.map((k, i) => (
          <div className="kpi" key={i}>
            <span className="label">{k.label}</span>
            <span className="val">{k.val}</span>
            <span className={`delta ${k.dir === "down" ? "down" : k.dir === "neutral" ? "neutral" : ""}`}>
              {k.dir === "up" && "↑ "}
              {k.dir === "down" && "↓ "}
              {k.delta}
            </span>
          </div>
        ))}
      </div>

      <div className="split-2">
        <div className="card">
          <div className="card-head">
            <h3>Active Projects</h3>
            <button className="pbtn" onClick={() => setView("projects")}>View all →</button>
          </div>
          <div>
            {PROJECTS.map(p => (
              <div className="project-row" key={p.id} onClick={() => setView("projects")}>
                <div className="pname">
                  <div className="pico" style={{ background: p.iconBg, color: "white" }}>{p.icon}</div>
                  <div className="pname-txt">
                    <span className="t">{p.name}</span>
                    <span className="s">{p.code} · {p.id}</span>
                  </div>
                </div>
                <div>
                  <span className={`pill ${p.status}`}>
                    <span className="pill-dot"/> {p.statusLabel}
                  </span>
                </div>
                <div>
                  <div className="progress"><div className="progress-fill" style={{ width: `${p.progress}%` }}/></div>
                  <div className="progress-txt">{p.progress}% · {p.phase}</div>
                </div>
                <div className="avatar-stack">
                  {p.team.map((m, i) => (
                    <span className="av" key={i} style={{ background: m.c }}>{m.i}</span>
                  ))}
                </div>
                <div style={{ color: "var(--ink-dim)", display: "flex", justifyContent: "flex-end" }}><IconChev/></div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Activity</h3>
            <span className="mono" style={{ color: "var(--ink-dim)" }}>Live</span>
          </div>
          <div className="activity-list">
            {ACTIVITY.map((a, i) => {
              const Icon = a.icon === "ok" ? IconCheck : a.icon === "alert" ? IconAlert : IconInfo;
              return (
                <div className="activity-item" key={i}>
                  <div className={`activity-dot ${a.icon}`}><Icon/></div>
                  <div className="activity-text">
                    <span><strong>{a.who}</strong> {a.what} <strong>{a.target}</strong></span>
                    <div className="meta">{a.meta}</div>
                  </div>
                  <div className="activity-time">{a.when}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ PROJECTS ============
function Projects() {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Projects</h1>
          <div className="sub">All active and completed engagements delivered by Midpoint for XLSmart.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn">Filter</button>
          <button className="pbtn pbtn-primary"><IconPlus/> Request new engagement</button>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>4 Active · 2 Completed · 1 In Proposal</h3>
          <div className="tabs">
            <button className="tab active">Active</button>
            <button className="tab">All</button>
            <button className="tab">Completed</button>
          </div>
        </div>
        <div>
          {PROJECTS.map(p => (
            <div className="project-row" key={p.id}>
              <div className="pname">
                <div className="pico" style={{ background: p.iconBg, color: "white" }}>{p.icon}</div>
                <div className="pname-txt">
                  <span className="t">{p.name}</span>
                  <span className="s">{p.code} · Next: {p.nextMilestone}</span>
                </div>
              </div>
              <div>
                <span className={`pill ${p.status}`}>
                  <span className="pill-dot"/> {p.statusLabel}
                </span>
              </div>
              <div>
                <div className="progress"><div className="progress-fill" style={{ width: `${p.progress}%` }}/></div>
                <div className="progress-txt">{p.progress}% · {p.phase}</div>
              </div>
              <div className="avatar-stack">
                {p.team.map((m, i) => (
                  <span className="av" key={i} style={{ background: m.c }}>{m.i}</span>
                ))}
              </div>
              <div style={{ color: "var(--ink-dim)", display: "flex", justifyContent: "flex-end" }}><IconChev/></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ TIMELINE / ROADMAP ============
function Timeline() {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Delivery Roadmap</h1>
          <div className="sub">XLSmart × Midpoint, 18-month transformation program, unified view.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn"><IconExt/> Download Gantt (PDF)</button>
          <button className="pbtn">Share with stakeholders</button>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>Program Milestones</h3>
          <div className="tabs">
            <button className="tab active">Phase View</button>
            <button className="tab">Gantt</button>
            <button className="tab">Calendar</button>
          </div>
        </div>
        <div className="timeline">
          {TIMELINE.map((t, i) => (
            <div className={`timeline-item ${t.status}`} key={i}>
              <div className="timeline-dot"/>
              <div className="timeline-content">
                <div className="phase">{t.phase} · {t.status === "done" ? "Complete" : t.status === "current" ? "In Progress" : "Upcoming"}</div>
                <div className="t">{t.title}</div>
                <div className="d">{t.desc}</div>
              </div>
              <div className="timeline-date">{t.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ TICKETS ============
function Tickets() {
  const [showNew, setShowNew] = useState(false);
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Tickets</h1>
          <div className="sub">Raise issues, feature requests, and change orders. Synced bidirectionally with Jira.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn">Filter</button>
          <button className="pbtn">Sync Jira now</button>
          <button className="pbtn pbtn-primary" onClick={() => setShowNew(v => !v)}><IconPlus/> New ticket</button>
        </div>
      </div>

      {showNew && (
        <div className="card" style={{ marginBottom: 16, borderColor: "var(--accent)" }}>
          <div className="card-head">
            <h3>Raise a new ticket</h3>
            <button className="icon-btn" onClick={() => setShowNew(false)}><IconClose/></button>
          </div>
          <div style={{ padding: 22, display: "grid", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 180px 180px", gap: 12 }}>
              <label className="auth-field"><span>Title</span><input placeholder="Short summary of the issue or request"/></label>
              <label className="auth-field"><span>Project</span>
                <select style={{ padding: "12px 14px", border: "1px solid var(--line-strong)", borderRadius: 8, background: "var(--bg)", font: "inherit", fontSize: 14 }}>
                  <option>Salesforce Service Cloud</option>
                  <option>Mixpanel Analytics</option>
                  <option>CDP Phase 1</option>
                  <option>Claude AI Copilot</option>
                </select>
              </label>
              <label className="auth-field"><span>Priority</span>
                <select style={{ padding: "12px 14px", border: "1px solid var(--line-strong)", borderRadius: 8, background: "var(--bg)", font: "inherit", fontSize: 14 }}>
                  <option>P1, Critical</option>
                  <option>P2, High</option>
                  <option selected>P3, Medium</option>
                  <option>P4, Low</option>
                </select>
              </label>
            </div>
            <label className="auth-field"><span>Description</span>
              <textarea rows="4" placeholder="Describe the issue, steps to reproduce, expected outcome…" style={{ padding: "12px 14px", border: "1px solid var(--line-strong)", borderRadius: 8, background: "var(--bg)", font: "inherit", fontSize: 14, resize: "vertical" }}/>
            </label>
            <div style={{ display: "flex", gap: 10, justifyContent: "flex-end" }}>
              <button className="pbtn" onClick={() => setShowNew(false)}>Cancel</button>
              <button className="pbtn pbtn-primary">Create ticket · Post to Jira</button>
            </div>
          </div>
        </div>
      )}

      <div className="card">
        <div className="card-head">
          <h3>Open & In-Progress · 12</h3>
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Open</button>
            <button className="tab">In Progress</button>
            <button className="tab">Review</button>
            <button className="tab">Resolved</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "90px 1fr 100px 100px 120px 100px", gap: 14, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>ID</div><div>Title</div><div>Priority</div><div>Status</div><div>Assignee</div><div>Updated</div>
        </div>
        {TICKETS.map(t => (
          <div className="ticket-row" key={t.id}>
            <div className="ticket-id">{t.id}</div>
            <div className="ticket-title">
              {t.title}
              <div className="sub">{t.sub} · {t.project}</div>
            </div>
            <div>
              <span className={`prio ${t.prio}`}>
                {t.prio === "high" ? "●●●" : t.prio === "med" ? "●●○" : "●○○"} {t.prio.toUpperCase()}
              </span>
            </div>
            <div><span className="chip-mini">{t.status}</span></div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{t.assignee}</div>
            <div style={{ fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}>{t.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ REPOSITORIES ============
function Repos() {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Repositories</h1>
          <div className="sub">Source code owned by Midpoint, delivered to you. Synced via GitHub, read access by default, write via approval workflow.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn"><IconExt/> Open in GitHub</button>
          <button className="pbtn">Request access</button>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>midpoint-labs / xlsmart-*</h3>
          <span className="status-dot">GitHub sync · live</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1.8fr 1fr 90px 90px 90px", gap: 16, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>Repository</div><div>Language</div><div>Stars</div><div>Open PRs</div><div>Updated</div>
        </div>
        {REPOS.map(r => (
          <div className="repo-row" key={r.name} style={{ "--lang-color": r.color }}>
            <div className="repo-name">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ color: "var(--ink-muted)" }}><path d="M 3 2 H 12 a 1 1 0 0 1 1 1 V 13 a 1 1 0 0 1 -1 1 H 4 a 1 1 0 0 1 -1 -1 V 11 H 12" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"/><path d="M 3 11 a 1 1 0 0 1 1 -1 H 12" stroke="currentColor" strokeWidth="1.3"/></svg>
              <div>
                {r.name}
                <span className="desc">{r.desc}</span>
              </div>
            </div>
            <div><span className="lang-dot" style={{ "--lang-color": r.color }}>{r.lang}</span></div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>☆ {r.stars}</div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{r.prs} open</div>
            <div style={{ fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}>{r.updated}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ REPORTS ============
function Reports() {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Reports & Documents</h1>
          <div className="sub">Every deliverable, blueprints, governance specs, status reports, test plans, ROI tracking, in one place.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn">Filter</button>
          <button className="pbtn"><IconExt/> Download all</button>
        </div>
      </div>

      <div className="card">
        <div className="card-head">
          <h3>28 documents · 6 recent</h3>
          <div className="tabs">
            <button className="tab active">Recent</button>
            <button className="tab">Executive</button>
            <button className="tab">Weekly</button>
            <button className="tab">Architecture</button>
            <button className="tab">Governance</button>
          </div>
        </div>
        <div className="report-grid">
          {REPORTS.map((r, i) => (
            <div className="report-card" key={i}>
              <div className="report-type" style={{ color: r.accent }}>{r.type}</div>
              <div className="report-title">{r.title}</div>
              <div className="report-meta">
                <span>{r.size}</span>
                <span>{r.date}</span>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
                <button className="pbtn" style={{ padding: "6px 10px", fontSize: 12 }}>Preview</button>
                <button className="pbtn" style={{ padding: "6px 10px", fontSize: 12 }}><IconExt/> Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============ SETTINGS ============
function Settings() {
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Settings & Integrations</h1>
          <div className="sub">Manage identity, API tokens, VPN access, and third-party integrations for {CLIENT.name}.</div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-head"><h3>Connected Integrations</h3><button className="pbtn"><IconPlus/> Add integration</button></div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 14, padding: 22 }}>
          {INTEGRATIONS.map(it => {
            const Logo = Logos[it.logo];
            return (
              <div className="integration-card" key={it.id}>
                <div className="integration-logo">{Logo && <Logo/>}</div>
                <div className="integration-card-text">
                  <div className="t">{it.name} <span className="status-dot">Connected</span></div>
                  <div className="s">{it.desc}</div>
                </div>
                <button className="icon-btn" style={{ color: "var(--ink-muted)" }}><IconSettings/></button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-head"><h3>Enterprise API Tokens</h3><button className="pbtn pbtn-primary"><IconPlus/> Generate token</button></div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Anthropic Claude API</h4>
            <p>Workspace-level token for Claude Sonnet 4.5. Used by Copilot + document RAG services.</p>
          </div>
          <div className="settings-control">
            <div className="token-row">
              <span className="token">sk-ant-api03-xl-prod-••••••••••••••••••••••••••••4c9e</span>
              <button>Reveal</button>
              <button>Rotate</button>
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Last used 4m ago · Rotates every 90 days · Next rotation Mar 22</div>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Salesforce Connected App</h4>
            <p>OAuth 2.0 client credentials for SFSC metadata deployment and CDC event streams.</p>
          </div>
          <div className="settings-control">
            <div className="token-row">
              <span className="token">3MVG9p1Q1BCe9GmN._rU•••••••••••••••••••••••••a1f3</span>
              <button>Reveal</button>
              <button>Rotate</button>
            </div>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Snowflake Service Account</h4>
            <p>Key-pair auth for CDP pipelines. Restricted to MIDPOINT_OPS role.</p>
          </div>
          <div className="settings-control">
            <div className="token-row">
              <span className="token">MIDPOINT_SVC_ACCOUNT · RSA-2048 · fingerprint f3:8a:…</span>
              <button>Download pub</button>
              <button>Rotate</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-head"><h3>VPN & Network Access</h3><span className="status-dot">Tailscale active</span></div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Delivery Team VPN</h4>
            <p>Midpoint engineers connect to your VPC via a dedicated Tailscale tailnet. Access is MFA-enforced and session-recorded.</p>
          </div>
          <div className="settings-control">
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <label className="toggle"><input type="checkbox" defaultChecked/><span className="slider"/></label>
              <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>Allow connections · 8 engineers authorized</span>
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 4 }}>Audit log: last session closed 14m ago by Rahul Nambiar</div>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>IP Allowlist</h4>
            <p>Restrict portal + API access to known CIDR ranges.</p>
          </div>
          <div className="settings-control">
            <div className="token-row"><span className="token">203.142.81.0/24 · 14.192.21.0/26 · 103.55.17.0/28</span><button>Edit</button></div>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Require MFA on sign-in</h4>
            <p>Enforced via your identity provider (Okta).</p>
          </div>
          <div className="settings-control">
            <label className="toggle"><input type="checkbox" defaultChecked/><span className="slider"/></label>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-head"><h3>Access Controls</h3></div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Portal Users</h4>
            <p>28 users synced from Okta. Roles: 4 Sponsors · 9 Stakeholders · 15 Viewers.</p>
          </div>
          <div className="settings-control">
            <div style={{ display: "flex", gap: 10 }}>
              <button className="pbtn">Manage users</button>
              <button className="pbtn">Sync from Okta</button>
            </div>
          </div>
        </div>
        <div className="settings-row">
          <div className="settings-label">
            <h4>Data Residency</h4>
            <p>All project data (tickets, documents, metadata) stored in ap-southeast-3 (Jakarta).</p>
          </div>
          <div className="settings-control">
            <span className="chip-mini">🇮🇩 Indonesia · ap-southeast-3</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============ BILLING & USAGE ============
function Billing() {
  const maxCat = Math.max(...BILLING_BREAKDOWN.map(b => b.val));
  const trendMax = Math.max(...TOKEN_USAGE.trend);

  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Billing & Usage</h1>
          <div className="sub">Real-time cost visibility across all engagements, split by project fees, license re-bills, token consumption, and infrastructure.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn">Billing period: Mar 2026 ▾</button>
          <button className="pbtn"><IconExt/> Export CSV</button>
          <button className="pbtn pbtn-primary"><IconExt/> Download latest invoice</button>
        </div>
      </div>

      {/* Summary KPIs */}
      <div className="kpi-grid">
        <div className="kpi">
          <span className="label">Month-to-date</span>
          <span className="val" style={{ fontSize: 22 }}>{BILLING_SUMMARY.mtd}</span>
          <span className="delta">↑ {BILLING_SUMMARY.delta} vs. Feb · ≈ {BILLING_SUMMARY.mtdUsd}</span>
        </div>
        <div className="kpi">
          <span className="label">Year-to-date</span>
          <span className="val" style={{ fontSize: 22 }}>{BILLING_SUMMARY.ytd}</span>
          <span className="delta neutral">FY26 budget · 24% consumed</span>
        </div>
        <div className="kpi">
          <span className="label">Next Invoice</span>
          <span className="val" style={{ fontSize: 22 }}>{BILLING_SUMMARY.nextInvoice}</span>
          <span className="delta neutral">Mar 2026 · estimated close +8 days</span>
        </div>
        <div className="kpi">
          <span className="label">Open Invoices</span>
          <span className="val" style={{ fontSize: 22 }}>{BILLING_SUMMARY.openInvoices}</span>
          <span className="delta neutral">All within payment terms</span>
        </div>
      </div>

      {/* Breakdown + Claude token usage */}
      <div className="split-2">
        <div className="card">
          <div className="card-head">
            <h3>This Month by Category</h3>
            <div className="tabs">
              <button className="tab active">Month</button>
              <button className="tab">Quarter</button>
              <button className="tab">YTD</button>
            </div>
          </div>
          <div style={{ padding: 22 }}>
            {/* Stacked bar */}
            <div style={{ display: "flex", height: 12, borderRadius: 999, overflow: "hidden", marginBottom: 20, background: "var(--bg-elev)" }}>
              {BILLING_BREAKDOWN.map((b, i) => (
                <div key={i} style={{ width: `${b.pct}%`, background: b.color }} title={`${b.cat}: ${b.pct}%`}/>
              ))}
            </div>
            {/* Rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {BILLING_BREAKDOWN.map((b, i) => (
                <div key={i} style={{ display: "grid", gridTemplateColumns: "12px 1fr auto auto", gap: 14, alignItems: "center" }}>
                  <div style={{ width: 12, height: 12, borderRadius: 3, background: b.color }}/>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 13.5 }}>{b.cat}</div>
                    <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{b.label}</div>
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--ink-dim)" }}>{b.pct}%</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, minWidth: 120, textAlign: "right" }}>
                    IDR {b.val.toLocaleString(undefined, { minimumFractionDigits: 1, maximumFractionDigits: 1 })}M
                  </div>
                </div>
              ))}
            </div>
            <div style={{ borderTop: "1px solid var(--line)", marginTop: 20, paddingTop: 16, display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--ink-muted)" }}>Month-to-date total</span>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.01em" }}>{BILLING_SUMMARY.mtd}</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="card-head">
            <h3>Claude Token Usage</h3>
            <span className="status-dot">Live</span>
          </div>
          <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 18 }}>
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 4 }}>{TOKEN_USAGE.model}</div>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 32, letterSpacing: "-0.02em" }}>{TOKEN_USAGE.totalCost}</div>
              <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{TOKEN_USAGE.idrCost} · Avg {TOKEN_USAGE.dailyAvg}/day</div>
            </div>
            {/* Sparkline */}
            <svg viewBox="0 0 280 70" style={{ width: "100%", height: 70 }}>
              <defs>
                <linearGradient id="tokGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#D97757" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#D97757" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d={
                "M 0 70 " + TOKEN_USAGE.trend.map((v, i) =>
                  `L ${(i / (TOKEN_USAGE.trend.length - 1)) * 280} ${70 - (v / trendMax) * 60}`
                ).join(" ") + " L 280 70 Z"
              } fill="url(#tokGrad)"/>
              <path d={
                TOKEN_USAGE.trend.map((v, i) =>
                  `${i === 0 ? "M" : "L"} ${(i / (TOKEN_USAGE.trend.length - 1)) * 280} ${70 - (v / trendMax) * 60}`
                ).join(" ")
              } fill="none" stroke="#D97757" strokeWidth="1.8"/>
            </svg>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, fontSize: 12 }}>
              <div style={{ padding: "10px 12px", background: "var(--bg-elev)", borderRadius: 8 }}>
                <div style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>Input</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 2 }}>{(TOKEN_USAGE.inputTokens / 1e6).toFixed(1)}M</div>
              </div>
              <div style={{ padding: "10px 12px", background: "var(--bg-elev)", borderRadius: 8 }}>
                <div style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>Output</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 2 }}>{(TOKEN_USAGE.outputTokens / 1e6).toFixed(1)}M</div>
              </div>
              <div style={{ padding: "10px 12px", background: "var(--bg-elev)", borderRadius: 8, gridColumn: "span 2" }}>
                <div style={{ color: "var(--ink-muted)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase" }}>Cache Read (savings)</div>
                <div style={{ fontWeight: 600, fontSize: 14, marginTop: 2 }}>{(TOKEN_USAGE.cacheReadTokens / 1e6).toFixed(1)}M tokens · ~38% cost reduction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Per-project billing */}
      <div className="card" style={{ marginTop: 16 }}>
        <div className="card-head">
          <h3>Billing by Project</h3>
          <span className="mono" style={{ color: "var(--ink-dim)" }}>// current month</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.1fr 1fr 130px", gap: 16, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>Project</div>
          <div>Split</div>
          <div>Engagement Type</div>
          <div style={{ textAlign: "right" }}>Total</div>
        </div>
        {BILLING_PROJECTS.map(p => {
          const splitData = [
            { key: "project", color: "#05927D", val: p.split.project },
            { key: "license", color: "#4C6EF5", val: p.split.license },
            { key: "token",   color: "#D97757", val: p.split.token },
            { key: "infra",   color: "#B77900", val: p.split.infra },
            { key: "managed", color: "#7C8894", val: p.split.managed },
          ].filter(s => s.val > 0);
          return (
            <div key={p.id} style={{ display: "grid", gridTemplateColumns: "2fr 1.1fr 1fr 130px", gap: 16, padding: "16px 22px", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
              <div className="pname" style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div className="pico" style={{ width: 32, height: 32, borderRadius: 8, background: p.iconBg, color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13 }}>{p.icon}</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}>{p.id}</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", height: 8, borderRadius: 999, overflow: "hidden", background: "var(--bg-elev)", marginBottom: 4 }}>
                  {splitData.map((s, i) => (
                    <div key={i} style={{ flex: s.val, background: s.color }} title={`${s.key}: ${s.val}M`}/>
                  ))}
                </div>
                <div style={{ fontSize: 10.5, color: "var(--ink-muted)", fontFamily: "var(--font-mono)", display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {splitData.map((s, i) => (
                    <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 3 }}>
                      <span style={{ width: 6, height: 6, borderRadius: 2, background: s.color }}/>
                      {s.val.toFixed(1)}M
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: 12.5, color: "var(--ink-muted)" }}>{p.type}</div>
              <div style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15 }}>IDR {p.total.toFixed(1)}M</div>
            </div>
          );
        })}
      </div>

      {/* Invoices */}
      <div className="card" style={{ marginTop: 16 }}>
        <div className="card-head">
          <h3>Invoices</h3>
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Open</button>
            <button className="tab">Paid</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 180px 110px 140px 120px", gap: 16, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>Invoice #</div><div>Period</div><div>Amount</div><div>Status</div><div>Due</div><div></div>
        </div>
        {INVOICES.map(inv => (
          <div key={inv.id} style={{ display: "grid", gridTemplateColumns: "200px 1fr 180px 110px 140px 120px", gap: 16, padding: "14px 22px", borderBottom: "1px solid var(--line)", alignItems: "center" }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600 }}>{inv.id}</div>
            <div style={{ fontSize: 13.5 }}>{inv.period}</div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>{inv.amount}</div>
            <div>
              <span className={`pill ${inv.status === "paid" ? "done" : inv.status === "draft" ? "at-risk" : "on-track"}`}>
                <span className="pill-dot"/> {inv.status}
              </span>
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>{inv.due}</div>
            <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
              <button className="pbtn" style={{ padding: "5px 10px", fontSize: 11 }}>View</button>
              <button className="pbtn" style={{ padding: "5px 10px", fontSize: 11 }}><IconExt/> PDF</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ============ CONTRACTS & PRICING ============
function Contracts() {
  const [expanded, setExpanded] = useState(null);
  const totalValue = "IDR 64.0B";
  return (
    <div className="portal-page">
      <div className="page-head">
        <div>
          <h1>Contracts & Pricing</h1>
          <div className="sub">Negotiated commercial terms, rate cards, and license re-bill schedule across all engagements.</div>
        </div>
        <div className="page-head-actions">
          <button className="pbtn"><IconExt/> Export contract pack</button>
          <button className="pbtn pbtn-primary"><IconPlus/> Request amendment</button>
        </div>
      </div>

      <div className="kpi-grid">
        <div className="kpi"><span className="label">Master Agreement</span><span className="val" style={{ fontSize: 22 }}>MSA-XL-2025-001</span><span className="delta">Signed Nov 12, 2025 · Active</span></div>
        <div className="kpi"><span className="label">Program Ceiling</span><span className="val" style={{ fontSize: 22 }}>{totalValue}</span><span className="delta neutral">3-year commitment · 24% consumed</span></div>
        <div className="kpi"><span className="label">Active SOWs</span><span className="val" style={{ fontSize: 22 }}>4</span><span className="delta neutral">2 fixed · 2 T&M · 0 disputes</span></div>
        <div className="kpi"><span className="label">Avg. Rate Discount</span><span className="val" style={{ fontSize: 22 }}>16.8%</span><span className="delta">vs. published rate card</span></div>
      </div>

      <div className="card" style={{ marginBottom: 16 }}>
        <div className="card-head">
          <h3>Contracts · MSA + Statements of Work</h3>
          <div className="tabs">
            <button className="tab active">All</button>
            <button className="tab">Active</button>
            <button className="tab">Expired</button>
            <button className="tab">Drafts</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "80px 1.8fr 110px 140px 140px 40px", gap: 14, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
          <div>Type</div><div>Title · ID</div><div>Term</div><div>Value</div><div>Expires</div><div></div>
        </div>
        {CONTRACTS.map(c => (
          <React.Fragment key={c.id}>
            <div onClick={() => setExpanded(expanded === c.id ? null : c.id)} style={{ display: "grid", gridTemplateColumns: "80px 1.8fr 110px 140px 140px 40px", gap: 14, padding: "14px 22px", borderBottom: expanded === c.id ? "1px solid var(--line)" : "1px solid var(--line)", alignItems: "center", cursor: "pointer", background: expanded === c.id ? "var(--bg-elev)" : "transparent" }}>
              <div><span className="chip-mini" style={{ background: c.type === "MSA" ? "rgba(5,146,125,0.12)" : c.type === "DPA" ? "rgba(183,121,0,0.12)" : "var(--bg-elev)", color: c.type === "MSA" ? "#05927D" : c.type === "DPA" ? "#B77900" : "var(--ink-muted)" }}>{c.type}</span></div>
              <div>
                <div style={{ fontWeight: 600, fontSize: 13.5 }}>{c.title}</div>
                <div style={{ fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}>{c.id} · Signed {c.signed}</div>
              </div>
              <div><span className="pill on-track"><span className="pill-dot"/> {c.status}</span></div>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>{c.value}</div>
                <div style={{ fontSize: 11, color: "var(--ink-dim)" }}>{c.valueSub}</div>
              </div>
              <div style={{ fontSize: 12, color: "var(--ink-muted)", fontFamily: "var(--font-mono)" }}>{c.expires}</div>
              <div style={{ color: "var(--ink-dim)", transform: expanded === c.id ? "rotate(180deg)" : "none", transition: "transform .2s" }}><IconChev/></div>
            </div>
            {expanded === c.id && (
              <div style={{ padding: "22px 22px 28px", background: "var(--bg-elev)", borderBottom: "1px solid var(--line)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 20 }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 6 }}>Overview</div>
                    <p style={{ fontSize: 13.5, lineHeight: 1.5, color: "var(--ink)" }}>{c.notes}</p>
                    <div style={{ display: "flex", gap: 24, marginTop: 14, fontSize: 12 }}>
                      <div><div style={{ color: "var(--ink-muted)", fontSize: 11 }}>Midpoint Owner</div><div style={{ fontWeight: 600 }}>{c.owner}</div></div>
                      <div><div style={{ color: "var(--ink-muted)", fontSize: 11 }}>Client Owner</div><div style={{ fontWeight: 600 }}>{c.clientOwner}</div></div>
                      <div><div style={{ color: "var(--ink-muted)", fontSize: 11 }}>Term</div><div style={{ fontWeight: 600 }}>{c.term}</div></div>
                    </div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 10 }}>Negotiated Key Terms</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      {c.keyTerms.map((t, i) => (
                        <div key={i} style={{ display: "grid", gridTemplateColumns: "160px 1fr", gap: 10, padding: "8px 12px", background: "var(--bg)", borderRadius: 6, border: "1px solid var(--line)", fontSize: 12.5 }}>
                          <span style={{ color: "var(--ink-muted)", fontWeight: 500 }}>{t.k}</span>
                          <span>{t.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <button className="pbtn"><IconExt/> Download PDF</button>
                  <button className="pbtn">View redlines</button>
                  <button className="pbtn">Amendment history</button>
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="split-2">
        <div className="card">
          <div className="card-head">
            <h3>Negotiated Rate Card</h3>
            <span className="mono" style={{ color: "var(--ink-dim)" }}>// IDR M per day · effective FY26</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 80px", gap: 14, padding: "10px 22px", borderBottom: "1px solid var(--line)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-dim)" }}>
            <div>Role</div><div style={{ textAlign: "right" }}>List</div><div style={{ textAlign: "right" }}>XLSmart</div><div style={{ textAlign: "right" }}>Disc.</div>
          </div>
          {RATE_CARD.map((r, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 80px", gap: 14, padding: "12px 22px", borderBottom: "1px solid var(--line)", alignItems: "center", fontSize: 13 }}>
              <div style={{ fontWeight: 500 }}>{r.role}</div>
              <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--ink-dim)", textDecoration: "line-through" }}>IDR {r.list}M</div>
              <div style={{ textAlign: "right", fontFamily: "var(--font-display)", fontWeight: 600 }}>IDR {r.negotiated}M</div>
              <div style={{ textAlign: "right" }}><span className="chip-mini" style={{ background: "rgba(5,146,125,0.12)", color: "#05927D" }}>−{r.disc}</span></div>
            </div>
          ))}
        </div>

        <div className="card">
          <div className="card-head">
            <h3>License Re-bill Schedule</h3>
            <span className="mono" style={{ color: "var(--ink-dim)" }}>// annual</span>
          </div>
          <div style={{ padding: "8px 0" }}>
            {LICENSE_REBILL.map((l, i) => (
              <div key={i} style={{ padding: "14px 22px", borderBottom: "1px solid var(--line)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 4 }}>
                  <div style={{ fontWeight: 600, fontSize: 13.5 }}>{l.vendor}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 14 }}>{l.annual}</div>
                </div>
                <div style={{ fontSize: 12, color: "var(--ink-muted)", marginBottom: 6 }}>{l.product}</div>
                <div style={{ display: "flex", gap: 12, fontSize: 11, color: "var(--ink-dim)", fontFamily: "var(--font-mono)" }}>
                  <span>Seats: {l.seats}</span>
                  <span>· {l.unit}</span>
                  <span style={{ marginLeft: "auto", color: l.markup.includes("0%") ? "#05927D" : l.markup.includes("At cost") ? "#05927D" : "var(--ink-muted)", fontWeight: 600 }}>{l.markup}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { Sidebar, Topbar, Dashboard, Projects, Timeline, Tickets, Repos, Reports, Billing, Contracts, Settings });

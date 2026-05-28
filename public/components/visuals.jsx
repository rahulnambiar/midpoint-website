/* global React */
const { useRef, useEffect } = React;

// Static, editorial hero visual, enterprise dashboard composite
function NodeGraph() {
  // Deterministic sparkline path
  const points = [18, 22, 19, 28, 26, 34, 32, 40, 44, 41, 52, 50, 60, 58, 68, 72, 80];
  const sparkPath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${(i / (points.length - 1)) * 100} ${100 - p}`).join(" ");

  return (
    <div style={{ position: "absolute", inset: 0, padding: "8%", display: "flex", flexDirection: "column", gap: 14, fontFamily: "Inter, sans-serif" }}>
      {/* Top row: KPI card + bars card */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 14, flex: "0 0 auto" }}>
        {/* KPI card */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14,
          padding: 18, display: "flex", flexDirection: "column", gap: 10,
          boxShadow: "0 8px 24px -12px rgba(5, 146, 125, 0.18)"
        }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Customer 360 · Live</span>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
          </div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 38, letterSpacing: "-0.025em", color: "var(--ink)", lineHeight: 1 }}>
            14.3<span style={{ color: "var(--ink-dim)", fontSize: 22 }}>M</span>
          </div>
          <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>Unified profiles · refresh 15m</div>
          {/* Sparkline */}
          <svg viewBox="0 0 100 30" preserveAspectRatio="none" style={{ width: "100%", height: 36, marginTop: 4 }}>
            <defs>
              <linearGradient id="spark-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.25" />
                <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d={`${sparkPath} L 100 30 L 0 30 Z`} fill="url(#spark-fill)" transform="scale(1, 0.3)" />
            <path d={sparkPath} fill="none" stroke="var(--accent)" strokeWidth="1.2" transform="scale(1, 0.3)" vectorEffect="non-scaling-stroke" />
          </svg>
          <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "JetBrains Mono, monospace", fontSize: 10, color: "var(--ink-dim)", letterSpacing: "0.1em" }}>
            <span>Q1</span><span>Q2</span><span>Q3</span><span>Q4</span>
          </div>
        </div>

        {/* Segment breakdown card */}
        <div style={{
          background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14,
          padding: 18, display: "flex", flexDirection: "column", gap: 12,
          boxShadow: "0 8px 24px -12px rgba(10, 30, 30, 0.08)"
        }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 10, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Active Segments</span>
          {[
            ["High-value retain", 84, "var(--accent)"],
            ["Churn risk", 61, "#0ADE7C"],
            ["Reactivation", 42, "#7BD8C5"],
            ["Onboarding", 28, "#B8E6DC"],
          ].map(([label, w, c], i) => (
            <div key={i} style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--ink)" }}>
                <span>{label}</span>
                <span style={{ fontFamily: "JetBrains Mono, monospace", color: "var(--ink-dim)" }}>{w}%</span>
              </div>
              <div style={{ height: 3, borderRadius: 2, background: "var(--surface)", overflow: "hidden" }}>
                <div style={{ width: `${w}%`, height: "100%", background: c, borderRadius: 2 }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Middle: flow pipe, sources → platform → activation */}
      <div style={{
        background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14,
        padding: "18px 20px", flex: 1,
        display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr", alignItems: "center", gap: 12,
        boxShadow: "0 8px 24px -12px rgba(10, 30, 30, 0.08)"
      }}>
        {/* Sources */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Sources</span>
          {["CRM", "ERP", "Web · App"].map(s => (
            <div key={s} style={{ fontSize: 11, color: "var(--ink)", padding: "4px 8px", background: "var(--surface)", borderRadius: 5, fontFamily: "JetBrains Mono, monospace" }}>{s}</div>
          ))}
        </div>
        {/* Connector */}
        <svg width="28" height="60" viewBox="0 0 28 60"><path d="M 0 30 L 28 30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" /><path d="M 22 26 L 28 30 L 22 34" fill="none" stroke="var(--accent)" strokeWidth="1" /></svg>
        {/* Platform */}
        <div style={{
          textAlign: "center",
          padding: "14px 10px",
          borderRadius: 10,
          background: "linear-gradient(135deg, var(--accent), #0ADE7C)",
          color: "#fff",
          boxShadow: "0 10px 24px -8px rgba(5, 146, 125, 0.4)"
        }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.16em", opacity: 0.85 }}>MIDPOINT</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 14, letterSpacing: "-0.01em", marginTop: 2 }}>Data Cloud</div>
          <div style={{ fontSize: 10, opacity: 0.85, marginTop: 2 }}>+ Claude agents</div>
        </div>
        {/* Connector */}
        <svg width="28" height="60" viewBox="0 0 28 60"><path d="M 0 30 L 28 30" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 2" /><path d="M 22 26 L 28 30 L 22 34" fill="none" stroke="var(--accent)" strokeWidth="1" /></svg>
        {/* Activation */}
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Activate</span>
          {["Marketing", "Service", "Growth"].map(s => (
            <div key={s} style={{ fontSize: 11, color: "var(--ink)", padding: "4px 8px", background: "var(--accent-soft)", color: "var(--accent)", borderRadius: 5, fontFamily: "JetBrains Mono, monospace", fontWeight: 600 }}>{s}</div>
          ))}
        </div>
      </div>

      {/* Bottom row: footer metrics */}
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12,
        background: "var(--bg)", border: "1px solid var(--line)", borderRadius: 14,
        padding: "14px 18px",
        boxShadow: "0 8px 24px -12px rgba(10, 30, 30, 0.08)"
      }}>
        <div>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Time to Value</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 20, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>6 wk</div>
        </div>
        <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 14 }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Coverage</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 20, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>92%</div>
        </div>
        <div style={{ borderLeft: "1px solid var(--line)", paddingLeft: 14 }}>
          <div style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-dim)" }}>Cost Δ</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 20, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.02em" }}>−48%</div>
        </div>
      </div>
    </div>
  );
}

// Background grid for hero
function HeroGrid({ accent = "var(--accent)" }) {
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.5 }}>
      <defs>
        <pattern id="hg" width="8" height="8" patternUnits="userSpaceOnUse">
          <path d="M 8 0 L 0 0 0 8" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="0.15" />
        </pattern>
        <radialGradient id="hg-mask" cx="35%" cy="30%" r="60%">
          <stop offset="0%" stopColor={accent} stopOpacity="0.18" />
          <stop offset="70%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <rect width="100" height="100" fill="url(#hg)" />
      <rect width="100" height="100" fill="url(#hg-mask)" />
    </svg>
  );
}

// Claude panel visual, terminal-like streaming card
function ClaudeVisual() {
  return (
    <div style={{ position: "absolute", inset: 0, padding: 20, display: "flex", flexDirection: "column", gap: 12, fontFamily: "JetBrains Mono, monospace", fontSize: 11, letterSpacing: "0.02em" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--ink-dim)", fontSize: 10, textTransform: "uppercase", letterSpacing: "0.12em" }}>
        <span style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--accent)", boxShadow: "0 0 8px var(--accent)" }} />
        claude · midpoint delivery agent
        <span style={{ marginLeft: "auto" }}>t+00:00:03.412</span>
      </div>

      <div style={{ color: "var(--ink-muted)", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div><span style={{ color: "var(--accent)" }}>→</span> analyze schema(<span style={{ color: "#F5B942" }}>telco_crm</span>)</div>
        <div style={{ paddingLeft: 12, color: "var(--ink-dim)" }}>  7 tables • 128 fields • 3 PII cols detected</div>
        <div><span style={{ color: "var(--accent)" }}>→</span> generate mapping → Data Cloud unified profile</div>
        <div style={{ paddingLeft: 12 }}>  ✓ 89 fields auto-mapped</div>
        <div style={{ paddingLeft: 12 }}>  ⚠ 4 require human review</div>
        <div><span style={{ color: "var(--accent)" }}>→</span> draft PDP compliance policy</div>
        <div style={{ paddingLeft: 12 }}>  ✓ UU PDP · art. 4, 16, 27 covered</div>
        <div><span style={{ color: "var(--accent)" }}>→</span> stream segment <span style={{ color: "#F5B942" }}>high_value_churn_risk</span></div>
        <div style={{ paddingLeft: 12, color: "var(--ink)" }}>  · 14,302 profiles · refresh 15m</div>
        <div style={{ color: "var(--accent)" }}>$ <span style={{ display: "inline-block", width: 7, height: 12, background: "var(--accent)", verticalAlign: "middle", opacity: 0.85 }}/></div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8, borderTop: "1px solid var(--line)", paddingTop: 12 }}>
        <div>
          <div style={{ color: "var(--ink-dim)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em" }}>T-T-V</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 22, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>6 wk</div>
        </div>
        <div>
          <div style={{ color: "var(--ink-dim)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em" }}>Coverage</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 22, fontWeight: 600, color: "var(--ink)", letterSpacing: "-0.02em" }}>92%</div>
        </div>
        <div>
          <div style={{ color: "var(--ink-dim)", fontSize: 9, textTransform: "uppercase", letterSpacing: "0.14em" }}>Cost Δ</div>
          <div style={{ fontFamily: "Inter Tight, sans-serif", fontSize: 22, fontWeight: 600, color: "var(--accent)", letterSpacing: "-0.02em" }}>−48%</div>
        </div>
      </div>
    </div>
  );
}

// Abstract waveform / pattern avatar placeholder
function Avatar({ seed = 0, tone = "a" }) {
  const tones = {
    a: ["#2DD4BF", "#0F766E"],
    b: ["#F5B942", "#B87700"],
    c: ["#A78BFA", "#5B21B6"],
    d: ["#60A5FA", "#1E40AF"],
    e: ["#F472B6", "#9D174D"],
  };
  const [c1, c2] = tones[tone] || tones.a;
  // Deterministic pseudo-random bars
  const bars = Array.from({ length: 18 }).map((_, i) => {
    const h = 20 + ((Math.sin((seed + 1) * (i + 1) * 1.37) + 1) / 2) * 70;
    return h;
  });
  return (
    <svg viewBox="0 0 100 80" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
      <defs>
        <linearGradient id={`av-${seed}-${tone}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={c1} stopOpacity="0.9" />
          <stop offset="100%" stopColor={c2} stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <rect width="100" height="80" fill={`url(#av-${seed}-${tone})`} opacity="0.22" />
      {bars.map((h, i) => (
        <rect key={i} x={i * (100/18)} y={(80 - h*0.7)/2 + 8} width={100/18 - 0.6} height={h*0.7} fill={c1} opacity={0.75 - (i%3)*0.15} />
      ))}
    </svg>
  );
}

// Industry visual motifs
function IndustryMotif({ variant }) {
  const motifs = {
    telco: (
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[20, 35, 50, 65, 80].map((r, i) => (
          <circle key={i} cx="85" cy="95" r={r} fill="none" stroke="var(--accent)" strokeWidth="0.5" opacity={0.4 - i*0.06} />
        ))}
      </svg>
    ),
    bank: (
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[0,1,2,3,4].map(i => (
          <rect key={i} x={70 + i*5} y={40 + i*10} width="3" height={50 - i*8} fill="var(--accent)" opacity={0.5 + i*0.1} />
        ))}
      </svg>
    ),
    retail: (
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        <path d="M 60 85 Q 75 40 95 60" fill="none" stroke="var(--accent)" strokeWidth="0.8" />
        <circle cx="60" cy="85" r="1.5" fill="var(--accent)" />
        <circle cx="95" cy="60" r="1.5" fill="var(--accent)" />
      </svg>
    ),
    media: (
      <svg viewBox="0 0 100 100" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
        {[0,1,2,3,4,5,6].map(i => (
          <rect key={i} x={62 + i*5} y={90 - i*6} width="3" height={6 + i*6} fill="var(--accent)" opacity={0.4 + i*0.08} />
        ))}
      </svg>
    ),
  };
  return motifs[variant] || null;
}

// Partner logo mark, stylized typographic lockups (not trademarked artwork)
function PartnerMark({ name }) {
  const M = {
    Salesforce: (
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1, color: "#00A1E0" }}>
        <svg width="34" height="24" viewBox="0 0 34 24"><path d="M 8 6 Q 4 6 4 11 Q 4 14 6 15 Q 4 16 4 19 Q 4 22 8 22 L 26 22 Q 30 22 30 18 Q 30 16 28 15 Q 30 14 30 11 Q 30 7 26 7 Q 24 7 23 8 Q 21 4 16 4 Q 11 4 10 8 Q 9 6 8 6 Z" fill="#00A1E0" /></svg>
        salesforce
      </div>
    ),
    Mixpanel: (
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight, sans-serif", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1, color: "#7856FF" }}>
        <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="4" cy="11" r="3" fill="#7856FF" /><circle cx="11" cy="11" r="4.5" fill="#7856FF" /><circle cx="19" cy="11" r="2" fill="#7856FF" /></svg>
        Mixpanel
      </div>
    ),
    AWS: (
      <div style={{ display: "flex", flexDirection: "column", gap: 2, fontFamily: "Inter Tight, sans-serif", lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: 22, letterSpacing: "-0.02em", color: "#232F3E" }}>aws</span>
        <svg width="34" height="8" viewBox="0 0 34 8"><path d="M 0 2 Q 10 8 17 4 Q 24 0 34 4" fill="none" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" /><path d="M 28 2 L 34 4 L 28 6" fill="#FF9900" /></svg>
      </div>
    ),
    GCP: (
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight, sans-serif", fontWeight: 500, fontSize: 20, letterSpacing: "-0.01em", lineHeight: 1, color: "var(--ink)" }}>
        <svg width="22" height="22" viewBox="0 0 22 22">
          <path d="M 11 2 L 18 6 L 18 8 L 14 6 L 11 7.5 L 8 6 L 4 8 L 4 6 Z" fill="#4285F4" />
          <path d="M 4 8 L 4 14 L 8 16 L 8 10 L 11 11.5 L 14 10 L 14 16 L 18 14 L 18 8 L 14 10 L 11 8.5 L 8 10 Z" fill="#34A853" />
          <path d="M 4 14 L 11 18 L 11 12 L 8 10.5 Z" fill="#FBBC04" />
          <path d="M 18 14 L 11 18 L 11 12 L 14 10.5 Z" fill="#EA4335" />
        </svg>
        Google Cloud
      </div>
    ),
    Anthropic: (
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight, sans-serif", fontWeight: 600, fontSize: 22, letterSpacing: "-0.02em", lineHeight: 1, color: "#0A1F26" }}>
        <svg width="22" height="22" viewBox="0 0 22 22"><path d="M 7 18 L 10 4 L 12 4 L 15 18 L 13 18 L 12.2 14.5 L 9.8 14.5 L 9 18 Z M 10.3 12.5 L 11.7 12.5 L 11 8.5 Z" fill="#D97757" /></svg>
        Anthropic
      </div>
    ),
  };
  return (
    <div style={{
      padding: "18px 28px",
      display: "flex", alignItems: "center", justifyContent: "center",
      filter: "grayscale(0.2)",
      transition: "filter .2s",
    }}
    onMouseEnter={e => e.currentTarget.style.filter = "grayscale(0)"}
    onMouseLeave={e => e.currentTarget.style.filter = "grayscale(0.2)"}
    >
      {M[name] || name}
    </div>
  );
}

// Logo lockup, uses the real Midpoint SVG
function Logo() {
  return (
    <a href="#" className="nav-logo" aria-label="Midpoint">
      <img src="assets/midpoint-logo.svg" alt="Midpoint" style={{ height: 28, width: "auto" }} />
    </a>
  );
}

// Stylized client wordmark, drawn typographically, not trademarked artwork
function ClientMark({ brand }) {
  const C = {
    "XLSmart": (
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter Tight, sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.04em", lineHeight: 1 }}>
        <span style={{
          background: "#0066CC", color: "#fff",
          padding: "6px 10px", borderRadius: 6,
          fontSize: 18, letterSpacing: "-0.02em",
        }}>XL</span>
        <span style={{ color: "var(--ink)" }}>Smart</span>
      </div>
    ),
    "Pharos": (
      <div style={{ display: "flex", alignItems: "center", gap: 10, fontFamily: "Inter Tight, sans-serif", fontWeight: 700, fontSize: 26, letterSpacing: "-0.03em", lineHeight: 1 }}>
        <svg width="26" height="26" viewBox="0 0 26 26"><circle cx="13" cy="13" r="12" fill="none" stroke="#E30613" strokeWidth="2" /><path d="M 7 13 L 13 7 L 19 13 L 13 19 Z" fill="#E30613" /></svg>
        <span style={{ color: "#E30613", fontStyle: "italic" }}>Pharos</span>
      </div>
    ),
    "BINUS": (
      <div style={{ display: "flex", flexDirection: "column", gap: 2, fontFamily: "Inter Tight, sans-serif", lineHeight: 1 }}>
        <span style={{ fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", color: "#F59C00" }}>BINUS</span>
        <span style={{ fontFamily: "JetBrains Mono, monospace", fontSize: 9, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink-muted)" }}>University</span>
      </div>
    ),
    "BFI": (
      <div style={{ display: "flex", alignItems: "center", gap: 8, fontFamily: "Inter Tight, sans-serif", fontWeight: 800, fontSize: 26, letterSpacing: "-0.03em", lineHeight: 1 }}>
        <span style={{ display: "inline-flex", alignItems: "baseline", gap: 1 }}>
          <span style={{ color: "#D40000" }}>B</span>
          <span style={{ color: "#D40000" }}>F</span>
          <span style={{ color: "#FFA300" }}>I</span>
        </span>
        <span style={{ color: "var(--ink-muted)", fontWeight: 500, fontSize: 15, letterSpacing: "-0.01em" }}>Finance</span>
      </div>
    ),
  };
  return (
    <div style={{
      flex: "1 1 0", minWidth: 200,
      padding: "28px 24px",
      borderLeft: "1px solid var(--line)",
      display: "flex", alignItems: "center", justifyContent: "center",
      filter: "grayscale(0.15)",
      transition: "filter .2s, background .2s",
    }}
    onMouseEnter={e => { e.currentTarget.style.filter = "grayscale(0)"; e.currentTarget.style.background = "var(--bg)"; }}
    onMouseLeave={e => { e.currentTarget.style.filter = "grayscale(0.15)"; e.currentTarget.style.background = ""; }}
    >
      {C[brand] || null}
    </div>
  );
}

Object.assign(window, { NodeGraph, HeroGrid, ClaudeVisual, Avatar, IndustryMotif, PartnerMark, ClientMark, Logo });

const { useState: useChatState, useRef: useChatRef, useEffect: useChatEffect } = React;

// ============ CLAUDE CHAT ASSISTANT ============
function ClaudeChat() {
  const [open, setOpen] = useChatState(false);
  const [messages, setMessages] = useChatState([
    { role: "claude", text: "Hi Pradipta, I'm the **Midpoint Delivery Agent**, powered by Claude. I have full context on all four XLSmart engagements. Ask me anything about status, tickets, upcoming milestones, contracts, or billing." },
  ]);
  const [input, setInput] = useChatState("");
  const [typing, setTyping] = useChatState(false);
  const bodyRef = useChatRef(null);

  useChatEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages, typing, open]);

  const suggestions = [
    "What's blocking the CDP Phase 1 project?",
    "Summarize this week's progress across all projects",
    "Which tickets are at risk of missing SLA?",
    "When is the next Salesforce go-live?",
  ];

  async function send(text) {
    const q = (text || input).trim();
    if (!q) return;
    setMessages(m => [...m, { role: "user", text: q }]);
    setInput("");
    setTyping(true);

    const systemContext = `You are the Midpoint Delivery Agent (powered by Claude), embedded in the Midpoint client portal for XLSmart.
Active projects:
- Salesforce Service Cloud Rollout (72%, On Track, Go-live Apr 28)
- Mixpanel Analytics Foundation (48%, On Track, first insights Mar 12)
- Customer Data Platform Snowflake+Segment (35%, AT RISK, source extract dependency on XL, Core CDP live May 30)
- Claude AI Support Copilot (18%, On Track, POC demo Mar 21)
Open tickets: 12 (3 high priority incl MP-142 Segment sync delay, MP-139 EMEA case routing, MP-128 PII masking review).
Latest activity: Rahul Nambiar deployed sfsc-case-router v2.4.1 to prod; Sai B Uday published Feb exec summary.
Answer concisely, in 2-4 short sentences. Use **bold** for project names or ticket IDs.`;

    try {
      const response = await window.claude.complete({
        messages: [
          { role: "user", content: systemContext + "\n\nUser question: " + q },
        ],
      });
      setTyping(false);
      setMessages(m => [...m, { role: "claude", text: response }]);
    } catch (e) {
      setTyping(false);
      setMessages(m => [...m, { role: "claude", text: "I couldn't reach the model just now. Try again in a moment." }]);
    }
  }

  function renderBubble(text) {
    // simple **bold** parser
    const parts = text.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((p, i) =>
      p.startsWith("**") ? <strong key={i}>{p.slice(2, -2)}</strong> : <React.Fragment key={i}>{p}</React.Fragment>
    );
  }

  return (
    <>
      {!open && (
        <button className="claude-fab" onClick={() => setOpen(true)} aria-label="Ask the Midpoint Delivery Agent" title="Ask the Midpoint Delivery Agent">
          <span className="fab-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
              style={{ display: "block" }}>
              <path d="M 12 3 L 13.3 8.7 L 19 10 L 13.3 11.3 L 12 17 L 10.7 11.3 L 5 10 L 10.7 8.7 Z" fill="currentColor"/>
              <circle cx="18.5" cy="17.5" r="1.6" fill="currentColor" opacity="0.85"/>
              <circle cx="5.5" cy="18" r="1" fill="currentColor" opacity="0.65"/>
            </svg>
          </span>
        </button>
      )}
      {open && (
        <div className="claude-panel">
          <div className="claude-head">
            <div className="claude-avatar">M</div>
            <div className="claude-head-text">
              <div className="t">Midpoint Delivery Agent</div>
              <div className="s">Online · powered by Claude · full context on XLSmart</div>
            </div>
            <button className="claude-close icon-btn" onClick={() => setOpen(false)}><IconClose/></button>
          </div>

          <div className="claude-body scroll-pretty" ref={bodyRef}>
            {messages.map((m, i) => (
              <div className={`claude-msg ${m.role}`} key={i}>
                <div className="mini-av">{m.role === "claude" ? "M" : USER.initials[0]}</div>
                <div className="claude-bubble">{renderBubble(m.text)}</div>
              </div>
            ))}
            {typing && (
              <div className="claude-msg claude">
                <div className="mini-av">M</div>
                <div className="claude-typing"><span/><span/><span/></div>
              </div>
            )}
            {messages.length <= 1 && !typing && (
              <div className="claude-suggestions" style={{ marginTop: 4 }}>
                {suggestions.map((s, i) => (
                  <button key={i} className="claude-sug" onClick={() => send(s)}>{s}</button>
                ))}
              </div>
            )}
          </div>

          <div className="claude-input">
            <input
              placeholder="Ask about status, tickets, milestones…"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => { if (e.key === "Enter") send(); }}
            />
            <button className="claude-send" onClick={() => send()}><IconSend/></button>
          </div>
        </div>
      )}
    </>
  );
}

Object.assign(window, { ClaudeChat });

/* global React */
const { useState, useEffect } = React;

function TweaksPanel() {
  const [active, setActive] = useState(false);
  const [state, setState] = useState(() => window.__TWEAKS__);

  // Apply to DOM whenever state changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", state.theme);
    document.documentElement.setAttribute("data-density", state.density);
    document.documentElement.style.setProperty("--accent", state.accent);
    // derive accent-soft
    document.documentElement.style.setProperty(
      "--accent-soft",
      `color-mix(in oklab, ${state.accent} 18%, transparent)`
    );
  }, [state]);

  // Edit-mode wiring
  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data || typeof e.data !== "object") return;
      if (e.data.type === "__activate_edit_mode") setActive(true);
      if (e.data.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  const update = (patch) => {
    const next = { ...state, ...patch };
    setState(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
  };

  const accents = [
    { name: "Teal (Midpoint)", value: "#05927D" },
    { name: "Deep Ocean", value: "#0F766E" },
    { name: "Indigo", value: "#4F46E5" },
    { name: "Sunrise", value: "#B77900" },
    { name: "Charcoal", value: "#0A1F26" },
  ];

  return (
    <div className={`tweaks-panel ${active ? "" : "hidden"}`}>
      <div className="tweaks-head">
        <span className="title">Tweaks</span>
        <span className="dot" />
      </div>

      <div className="tweaks-row">
        <span className="lbl">Accent</span>
        <div className="tweaks-swatches">
          {accents.map(a => (
            <button
              key={a.value}
              title={a.name}
              className={state.accent.toLowerCase() === a.value.toLowerCase() ? "sel" : ""}
              style={{ background: a.value }}
              onClick={() => update({ accent: a.value })}
            />
          ))}
        </div>
      </div>

      <div className="tweaks-row">
        <span className="lbl">Theme</span>
        <div className="tweaks-seg">
          <button className={state.theme === "dark" ? "on" : ""} onClick={() => update({ theme: "dark" })}>Dark</button>
          <button className={state.theme === "light" ? "on" : ""} onClick={() => update({ theme: "light" })}>Light</button>
        </div>
      </div>

      <div className="tweaks-row">
        <span className="lbl">Density</span>
        <div className="tweaks-seg">
          <button className={state.density === "comfortable" ? "on" : ""} onClick={() => update({ density: "comfortable" })}>Comfortable</button>
          <button className={state.density === "compact" ? "on" : ""} onClick={() => update({ density: "compact" })}>Compact</button>
        </div>
      </div>
    </div>
  );
}

window.TweaksPanel = TweaksPanel;

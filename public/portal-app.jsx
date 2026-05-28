const { useState: useAppState, useEffect: useAppEffect } = React;

function PortalApp() {
  const [view, setView] = useAppState(() => localStorage.getItem("mp_portal_view") || "dashboard");
  useAppEffect(() => { localStorage.setItem("mp_portal_view", view); }, [view]);

  const Views = {
    dashboard: <Dashboard setView={setView}/>,
    projects: <Projects/>,
    timeline: <Timeline/>,
    tickets: <Tickets/>,
    repos: <Repos/>,
    reports: <Reports/>,
    billing: <Billing/>,
    contracts: <Contracts/>,
    settings: <Settings/>,
  };

  return (
    <div className="portal-shell">
      <Sidebar view={view} setView={setView}/>
      <div className="portal-main">
        <Topbar view={view}/>
        {Views[view] || Views.dashboard}
      </div>
      <ClaudeChat/>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("portal-root"));
root.render(<PortalApp/>);

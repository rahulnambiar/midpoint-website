/* global React, ReactDOM, Nav, Hero, Partners, Clients, Services, Salesforce, Trifecta, Process, ClaudeSection, Industries, About, Contact, Footer, TweaksPanel */

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Partners />
        <Clients />
        <Services />
        <Salesforce />
        <Trifecta />
        <Process />
        <ClaudeSection />
        <Industries />
        <About />
        <Contact />
      </main>
      <Footer />
      <TweaksPanel />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

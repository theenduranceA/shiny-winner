import React from "react";

function App() {
  return (
    <div className="landing-container">
      <header className="hero">
        <h1>Welcome to Shiny-winner App</h1>
        <p>A 30 Days Challenge with React!</p>
        <button>Get Started</button>
      </header>

      <section className="features">
        <div className="feature">
          <h2>🚀 Fast</h2>
          <p>Experience lightning-fast performance.</p>
        </div>
        <div className="feature">
          <h2>💡 Innovative</h2>
          <p>Cutting-edge technology at your fingertips.</p>
        </div>
        <div className="feature">
          <h2>🔒 Secure</h2>
          <p>Your data is safe and protected.</p>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Shiny-winner App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
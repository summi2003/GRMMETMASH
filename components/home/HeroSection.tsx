import "./HeroSection.css";

export default function HeroSection() {
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <a href="#" className="brand">
            <img
              src="/grm-logo.png"
              alt="GRM Met Mash Projects Logo"
              className="brand-logo"
            />
          </a>

          <nav className="main-nav">
            <a href="#">Home</a>
            <a href="#">About Us⌄</a>
            <a href="#">Product⌄</a>
            <a href="#">Services</a>
            <a href="#">Blog</a>
            <a href="#">Gallery</a>
            <a href="#">Contact</a>
          </nav>

          <a href="#" className="header-btn">
            Request a Quote
          </a>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-shade" />

        <div className="hero-inner">
          <p className="eyebrow">WELCOME TO GRM MET MASH PROJECTS</p>

          <h1>
            YOUR TRUSTED
            <br />
            PARTNER FOR
            <br />
            PRECISION
            <br />
            MANUFACTURING
            <br />
            SOLUTIONS
          </h1>

          <a href="#" className="primary-btn">
            Get Started
          </a>
        </div>
      </section>

      <section className="intro-section">
        <div className="intro-grid">
          <div className="intro-left">
            <div className="facility-image-card">
              <img src="/robot-welding.jpg" alt="GRM industrial facility" />

              <div className="since-card">
                <span>Since</span>
                <strong>2009</strong>
              </div>
            </div>

            <h2>The GRM MET MASH Facility</h2>

            <p>
              Delivering precision manufacturing, engineering excellence,
              industrial equipment, and reliable maintenance solutions for
              modern industries.
            </p>

            <div className="intro-actions">
              <a href="#" className="blue-small-btn">
                Explore Us
              </a>

              <a href="#" className="outline-small-btn">
                GRM MET MASH
              </a>
            </div>
          </div>

          <div className="intro-right">
            <h3>
              Receive a Fast
              <br />
              Quote from <span>GRM</span>
              <br />
              <span>MET MASH</span>
            </h3>

            <p>
              Since its establishment, GRM MET MASH has focused on delivering
              precision manufacturing solutions with quality, reliability,
              competitive pricing, and on-time delivery. We specialize in CNC
              machining, metal fabrication, and industrial component solutions
              engineered to meet modern industry standards.
            </p>

            <div className="stats-row">
              <div className="stat-box">
                <strong>5+</strong>
                <span>Years of Experience</span>
              </div>

              <div className="stat-box">
                <strong>500+</strong>
                <span>Completed Projects</span>
              </div>
            </div>

            <div className="machine-image-card">
              <img src="/cnc-machine-small.jpg" alt="CNC machining" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
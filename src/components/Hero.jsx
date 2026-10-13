import React from "react";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="eyebrow">
          WELCOME TO V RESIDENCY
        </span>

        <h1>
          Luxury &amp; Comfort
          <br />
          <span>Come Together.</span>
        </h1>

        <p>
          Discover a comfortable stay with welcoming
          hospitality and thoughtfully designed rooms
          in Jaggampeta, Andhra Pradesh.
        </p>

        <div className="hero-actions">
          <a href="#booking" className="gold-btn">
            Check Availability
          </a>

          <a href="#rooms" className="outline-btn">
            Explore Rooms
          </a>
        </div>

        <div className="hero-note">
          <span className="gold-dot"></span>
          Comfortable A/C Rooms in Jaggampeta
        </div>
      </div>
    </section>
  );
}

export default Hero;
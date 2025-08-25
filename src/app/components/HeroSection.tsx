"use client";

import React from "react";

const HeroSection: React.FC = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="hero">
      {/* Yayoi Kusama inspired BLACK dots - ON THE LEFT! */}
      <span className="dot dot--bl" aria-hidden="true"></span>
      <span className="dot dot--br" aria-hidden="true"></span>
      <span className="dot dot--tr" aria-hidden="true"></span>
      <span className="dot dot--ml" aria-hidden="true"></span>
      <span className="dot dot--mr" aria-hidden="true"></span>
      <span className="dot dot--tc" aria-hidden="true"></span>
      <span className="dot dot--bc" aria-hidden="true"></span>
      <span className="dot dot--small1" aria-hidden="true"></span>
      <span className="dot dot--small2" aria-hidden="true"></span>
      <span className="dot dot--medium1" aria-hidden="true"></span>
      <span className="dot dot--medium2" aria-hidden="true"></span>
      <span className="dot dot--extra1" aria-hidden="true"></span>
      <span className="dot dot--extra2" aria-hidden="true"></span>
      <span className="dot dot--extra3" aria-hidden="true"></span>
      <span className="dot dot--extra4" aria-hidden="true"></span>
      <span className="dot dot--extra5" aria-hidden="true"></span>
      <span className="dot dot--extra6" aria-hidden="true"></span>
      <span className="dot dot--extra7" aria-hidden="true"></span>
      <span className="dot dot--extra8" aria-hidden="true"></span>
      <span className="dot dot--extra9" aria-hidden="true"></span>
      <span className="dot dot--extra10" aria-hidden="true"></span>
      {/* ADD LEFT SIDE DOTS */}
      <span className="dot dot--leftmore1" aria-hidden="true"></span>
      <span className="dot dot--leftmore2" aria-hidden="true"></span>
      <span className="dot dot--leftmore3" aria-hidden="true"></span>
      <span className="dot dot--leftmore4" aria-hidden="true"></span>
      <span className="dot dot--leftmore5" aria-hidden="true"></span>

      <div className="hero__grid">
        {/* Left column */}
        <div className="hero__copy">
          <h1 className="hero__title">
            <span>HI, I'M</span>
            <span>ICHWAN</span>
          </h1>
          <br />
          <h3 className="hero__subtitle">A Front-end Web Developer</h3>

          {/* Quote */}
          <div className="hero__quote">
            <em>
              "I build beautiful and functional websites that bring ideas to
              life."
            </em>
          </div>

          <button
            className="btn"
            onClick={scrollToContact}
          >
            Hire me!
          </button>
        </div>

        {/* Right column */}
        <div className="hero__media">
          <img
            className="hero__photo"
            src="/avatar.jpg"
            alt="Ichwan portrait"
          />
          <img
            className="hero__sticker"
            src="/doge.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

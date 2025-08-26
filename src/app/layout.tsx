import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: "Ichwan — Portfolio",
  description: "I build beautiful and functional websites that bring ideas to life.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Fixed Navigation */}
        <header className="topbar">
          <div className="topbar__brand">Muhammad Ichwan Nurul Alam</div>
          <nav className="topbar__nav">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#experience">Experience</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact">Contact</a>
          </nav>
        </header>

        {/* Main Content */}
        <main>
          {children}
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="footer__inner">
            <div className="footer__content">
              {/* Left: Brand & Social */}
              <div className="footer__brand">
                <h3 className="footer__title">Muhammad Ichwan</h3>
                <p className="footer__subtitle">Front-end Web Developer</p>
                
                <div className="footer__social">
                  <a href="https://github.com/ichwan" className="social__link" target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                  <a href="https://farcaster.xyz/" className="social__link" target="_blank" rel="noopener noreferrer">
                    Farcaster
                  </a>
                  <a href="http://x.com/" className="social__link">
                    X/Twitter
                  </a>
                </div>
              </div>
              {/* Right: Quick Links */}
              <div className="footer__links">
                <h4 className="footer__links-title">Quick Links</h4>
                <nav className="footer__nav">
                  <a href="#about">About Me</a>
                  <a href="#skills">Skills</a>
                  <a href="#portfolio">Portfolio</a>
                  <a href="#experience">Experience</a>
                  <a href="#testimonials">Testimonials</a>
                  <a href="#contact">Contact</a>
                </nav>
              </div>
            </div>

            {/* Bottom */}
            <div className="footer__bottom">
              <p className="footer__copyright">
                © 2025 Muhammad Ichwan Nurul Alam. Built with Next.js & Tailwind CSS.
              </p>
            </div>
          </div>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}

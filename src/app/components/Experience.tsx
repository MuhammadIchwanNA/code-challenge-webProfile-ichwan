import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section id="experience" className="experience">
      <div className="experience__inner">
        <h2 className="experience__title">Experience</h2>

        <div className="experience__timeline">
          <div className="experience__card experience__card--left">
            <div className="experience__content">
              <p>
                <strong>role:</strong> "Freelance Engineer"
              </p>
              <p>
                <strong>company:</strong> "Independent Work"
              </p>
              <p>
                <strong>period:</strong> "2018 - 2020"
              </p>
              <ul className="experience__list">
                <li>Worked independently on small engineering projects</li>
                <li>Provided technical solutions for local clients</li>
                <li>Improved hands-on problem-solving and troubleshooting</li>
                <li>Built discipline in project planning and execution</li>
              </ul>
            </div>

            {/* Rocket img */}
            <Image
              src="https://backendlessappcontent.com/647804CC-0709-49FF-B21E-59553D293101/2F9D7F9B-600F-4CA5-828C-7DFBA52DB5FA/files/imageWebProfile/rocket.png"
              alt="Rocket illustration"
              width={120}
              height={120}
              className="experience__rocket"
            />

            {/* Arrow */}
            <div className="experience__arrow experience__arrow--right">→</div>
          </div>

          {/* Middle box */}
          <div className="experience__card experience__card--middle">
            <div className="experience__content">
              <p>
                <strong>role:</strong> "Small Business Owner (Metal
                Fabrication)"
              </p>
              <p>
                <strong>company:</strong> "Self-Employed"
              </p>
              <p>
                <strong>period:</strong> "2021 - 2025"
              </p>
              <ul className="experience__list">
                <li>Founded and ran a small metal fabrication workshop</li>
                <li>Managed operations, procurement, and client relations</li>
                <li>Delivered custom projects for local industries</li>
                <li>Gained experience in business management and leadership</li>
              </ul>
            </div>

            {/* Arrow */}
            <div className="experience__arrow experience__arrow--right">→</div>
          </div>

          {/* Right box */}
          <div className="experience__card experience__card--right">
            <div className="experience__content">
              <p>
                <strong>role:</strong> Fullstack Developer{" "}
                <em>(Bootcamp Trainee)</em>
              </p>
              <p>
                <strong>company:</strong> "PURWADHIKA Coding Bootcamp"
              </p>
              <p>
                <strong>period:</strong> "2025 - Present"
              </p>
              <ul className="experience__list">
                <li>
                  Learning modern web development with React, Next.js, Node.js,
                  and TypeScript
                </li>
                <li>
                  Built personal portfolio website and small projects showcasing
                  frontend skills
                </li>
                <li>
                  Practiced Agile workflow, Git version control, and code
                  collaboration
                </li>
                <li>
                  Exploring Web3 fundamentals: smart contracts, wallet
                  integration, and dApps
                </li>
              </ul>
            </div>

            {/* Moon img */}
            <Image
              src="https://backendlessappcontent.com/647804CC-0709-49FF-B21E-59553D293101/2F9D7F9B-600F-4CA5-828C-7DFBA52DB5FA/files/imageWebProfile/moon.png"
              alt="Moon illustration"
              width={160}
              height={160}
              className="experience__moon"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

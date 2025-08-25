import React from "react";
import Image from "next/image";

/** label pill */
function Pill({
  text,
  bg,
}: {
  text: string;
  bg: "orange" | "green" | "pink";
}) {
  return (
    <span className={`pill pill--${bg}`}>
      {text}
    </span>
  );
}

/** Card  */
function SkillCard({
  tone,
  children,
}: {
  tone: "purple" | "black" | "gray";
  children: React.ReactNode;
}) {
  return (
    <div className={`skills__card skills__card--${tone}`}>
      {children}
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="skills">
      <div className="skills__inner">
        <h2 className="skills__title">Skills</h2>

        {/* meme top right corner */}
        <Image 
          src="/runningfeatures.png" 
          alt="Running features illustration" 
          width={280} 
          height={300}
          className="skills__decorative-img"
        />

        {/* Row of three columns */}
        <div className="skills__grid">
          {/* Front-end */}
          <div className="skills__column">
            <Pill text="Front-end" bg="orange" />
            <SkillCard tone="purple">
              <p>
                HTML5, CSS3, <br />
                JavaScript (ES6+), <br />
                TypeScript, <br />
                React.js, <br />
                Next.js, <br />
                Tailwind CSS,
                <br />
                <br />
                Responsive Design & Accessibility,
                <br />
                Basic UI/UX principles
              </p>
            </SkillCard>
          </div>

          {/* Back-end */}
          <div className="skills__column">
            <Pill text="Back-end" bg="green" />
            <SkillCard tone="black">
              <p>
                Node.js, <br />
                Express.js, <br />
                RESTful APIs, Authentication (JWT, sessions), <br />
                Databases (MongoDB, PostgreSQL basics), <br />
                API integration (third‑party services)
              </p>
            </SkillCard>
          </div>

          {/* Web3 */}
          <div className="skills__column">
            <Pill text="Web3" bg="pink" />
            <SkillCard tone="gray">
              <p>
                Ethereum basics, Solidity <small>(smart contract)</small>, <br />
                Web3.js / Ethers.js, <br />
                Wallet integration <small>(MetaMask, Web3Modal, wagmi)</small>, <br />
                Smart contract deployment <small>(Hardhat, Remix)</small>, <br />
                Understanding of DeFi & NFT ecosystems
              </p>
            </SkillCard>
          </div>
        </div>
      </div>
    </section>
  );
}

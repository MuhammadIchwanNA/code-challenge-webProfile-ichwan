import React from "react";
import Image from "next/image"; 

const AboutMe = () => {
  return (
    <section className="about" id="about">
      <div className="about__inner">
        {/* Title */}
        <h2 className="about__title">About me</h2>

        {/* Content box */}
        <div className="about__box">
          {/* Text */}
          <p className="about__text">
            "I'm Ichwan — a frontend developer in training, currently leveling
            up through a fullstack coding bootcamp. I got into this not because
            of a perfect career plan, but because I wanted to break out of
            routine, challenge myself, and build things that actually matter.
            <br /> <br />
            Right now, I'm exploring React, Next.js, and Web3. Some days I'm
            coding, some days I'm reflecting, and some days I'm just laughing at
            memes — but all of it is part of learning.
            <br /> <br />I like clean, simple solutions (both in code and in life). I
            believe in first-principles thinking: stripping away noise until you
            see what really drives things. That's the mindset I bring to every
            project. This site is a small space to track what I'm building,
            where I'm growing, and maybe where I'm headed next."
          </p>

          {/* Image */}
          <Image
            src="/successkid.png"
            alt="Success Kid Meme"
            width={200}
            height={200}
            className="about__img"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

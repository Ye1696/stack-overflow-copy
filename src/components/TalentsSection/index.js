import React from "react";

export function TalentsSection() {
  return (
    <section className="talents-section">
      <div className="talents-wrapper">
        <div className="talent-card">
          <img
            src="https://cdn.sstatic.net/Img/home/find-candidate.svg?v=9099aa106ad3"
            alt="talent"
            width="76"
          />
          <h4>Hire your technical talent</h4>
          <p>
            We help expand your technical hiring strategy to promote your
            employer brand and highlight relevant open roles to our community of
            over 100 million developers and technologists.
          </p>
          <a href="/talent">Stack Overflow Talent</a>
        </div>
        <div className="talent-card">
          <img
            src="https://cdn.sstatic.net/Img/home/accelerate.svg?v=9d4c2786ff02"
            alt="rocket"
            width="76"
          />
          <h4>Reach developers worldwide</h4>
          <p>
            Use the world’s largest resource for people who code to help you
            increase awareness and showcase your product or service across Stack
            Overflow’s network of Q&A sites.
          </p>
          <a href="/advertising">Stack Overflow Advertising</a>
        </div>
      </div>
    </section>
  );
}

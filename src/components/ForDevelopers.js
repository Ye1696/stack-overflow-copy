import React from "react";

export function ForDevelopers() {
  return (
    <div className="forDevelopers">
      <div className="forDevelopers-container">
        <div className="forDevelopers-title">For developers, by developers</div>
        <div className="line"></div>
        <div className="forDevelopers-def">
          Stack Overflow is an{" "}
          <a href="#" className="forDevelopers-def-href">
            open community
          </a>{" "}
          for anyone that codes. We help you get answers to your toughest coding
          questions, share knowledge with your coworkers in private, and find 
          your next dream job.
        </div>
        <div className="forDevelopers-cards">
          <div className="forDevelopers-card">
            <div className="forDevelopers-card-img">
              <img src="https://cdn.sstatic.net/Img/home/public-qa.svg?v=d82acaa7df9f" />
            </div>
            <div className="forDevelopers-card-title">Public Q&A</div>
            <div className="forDevelopers-card-def">
              Get answers to more than 16.5 million questions and give back by
              sharing your knowledge with others.{" "}
              <a href="#" className="forDevelopers-card-href">
                Sign up
              </a>{" "}
              for an account.
            </div>
            <button className="forDevelopers-card-button">
              Browse questions
            </button>
          </div>
          <div className="forDevelopers-card-center">
            <div className="forDevelopers-card-img">
              <img src="https://cdn.sstatic.net/Img/home/private-qa.svg?v=2c1de180b6d7" />
            </div>
            <div className="forDevelopers-card-title">Private Q&A</div>
            <div className="forDevelopers-card-def">
              Level up with Stack Overflow while you work. Share knowledge
              privately with your coworkers using our flagship Q&A engine.
            </div>
            <button className="forDevelopers-card-button-center">
              Try for free
            </button>
          </div>
          <div className="forDevelopers-card">
            <div className="forDevelopers-card-img">
              <img src="https://cdn.sstatic.net/Img/home/jobs.svg?v=931d6c0863ee" />
            </div>
            <div className="forDevelopers-card-title">Browse jobs</div>
            <div className="forDevelopers-card-def">
              Find the right job through high quality listings and search for
              roles based on title, technology stack, salary, location, and
              more.
            </div>
            <button className="forDevelopers-card-button">Find a job</button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Cards } from "./Cards";

export function JobSection() {
  return (
    <section className="job-section">
      <h3>Looking for a job?</h3>
      <div className="jobs">
        <Cards />
        <a href="https://stackoverflow.com/jobs">View all jobs</a>
      </div>
      <img
        src="https://cdn.sstatic.net/Img/home/robot.svg?v=dfa16a330cbd"
        alt="cute-robot"
        className="cute-robot"
        width="51"
      />
    </section>
  );
}

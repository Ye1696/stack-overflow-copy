import React from "react";
import { Cards } from "./Cards";

export function TeamsSection() {
  return (
    <section className="teams-section">
      <h2>Unlock siloed knowledge with Stack Overflow for Teams</h2>
      <p>
        Wikis, chat messages, or formal documentation for knowledge management
        aren’t effective. Our question and answer format is a proven approach
        for accessing the right information in less time.
      </p>
      <a href="/teams">Learn more</a>
      <div className="cards">
        <Cards />
      </div>
    </section>
  );
}

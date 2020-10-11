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
      <div className="links">
        <a href="https://www.g2.com/products/stack-overflow-for-teams/">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910"
            alt="G2"
          />
          <strong>Leader</strong>
          Summer 2020
        </a>
        <a href="https://www.g2.com/products/stack-overflow-for-teams/">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/endorsements/g2.svg?v=670bf9279910"
            alt="G2"
          />
          <strong>Users Love Us</strong>
        </a>
        <a href="https://www.g2.com/products/stack-overflow-for-teams/">
          <img
            src="https://cdn.sstatic.net/Img/product/teams/endorsements/fastco.svg?v=5ebc802a76c7"
            alt="Fast Company"
          />
          <strong>Most Innovative Companies</strong> 2019
        </a>
      </div>
    </section>
  );
}

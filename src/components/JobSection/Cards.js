import React from "react";

const cards = [
  {
    iconSrc: "https://cdn.sstatic.net/Img/home/jobs-tech.svg?v=42f011c01763",
    text: "Browse jobs by technology",
    href:
      "https://stackoverflow.com/jobs/why-jobs-cta/BrowseByTechnology?source=Homepage",
  },
  {
    iconSrc: "https://cdn.sstatic.net/Img/home/jobs-salary.svg?v=401840ff8931",
    text: "Browse jobs by salary",
    href:
      "https://stackoverflow.com/jobs/why-jobs-cta/BrowseBySalary?source=Homepage",
  },
  {
    iconSrc: "https://cdn.sstatic.net/Img/home/jobs-visa.svg?v=1f3acc6dc772",
    text: "Browse jobs by visa sponsorship",
    href:
      "https://stackoverflow.com/jobs/why-jobs-cta/BrowseVisaJobs?source=Homepage",
  },
  {
    iconSrc: "https://cdn.sstatic.net/Img/home/jobs-remote.svg?v=a4b4d1b5a80c",
    text: "Browse remote-friendly jobs",
    href:
      "https://stackoverflow.com/jobs/why-jobs-cta/BrowseRemoteJobs?source=Homepage",
  },
];

function Card({ card }) {
  return (
    <a role="button" href={card.href} className="card">
      <img width="50" src={card.iconSrc} alt="card" />
      <p>{card.text}</p>
    </a>
  );
}

export function Cards() {
  return (
    <div className="cards-wrapper">
      {cards.map((card) => (
        <Card key={card.text} card={card} />
      ))}
    </div>
  );
}

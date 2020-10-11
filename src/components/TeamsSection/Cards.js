// @ts-check
import React from "react";
import {
  FiCalendar,
  FiKey,
  FiArchive,
  FiLock,
  FiBarChart2,
  FiThumbsUp,
  FiStar,
  FiCloud,
  FiCode,
  FiUser,
  FiTrello,
  FiShield,
} from "react-icons/fi";

const cards = [
  {
    className: "basic",
    title: "Basic",
    desc: "Private knowledge base for teams",
    price: "$6 USD",
    priceDesc: "per teammate / month",
    perks: [
      {
        icon: <FiCalendar />,
        text: "Free 30 day trial",
      },
      {
        icon: <FiShield size="24px" />,
        text: "Your own private space hosted on stackoverflow.com",
      },
      {
        icon: <FiArchive />,
        text: "Fully searchable archive",
      },
    ],
    linkText: "Get started for free",
  },
  {
    className: "business",
    title: "Business",
    desc: "Private knowledge base with SSO and premium features",
    price: "$12 USD",
    priceDesc: "per teammate / month",
    perks: [
      {
        icon: <FiKey />,
        text: "Single sign-on (SSO) with SAML",
      },
      {
        icon: <FiBarChart2 />,
        text: "Reporting and analytics",
      },
      {
        icon: <FiThumbsUp />,
        text: "Priority customer support",
      },
      {
        icon: <FiStar />,
        text: "99.5% uptime",
      },
    ],
    linkText: "Get started",
    mostUsed: true,
  },
  {
    className: "enterprise",
    title: "Enterprise",
    desc:
      "Standalone knowledge base with enhanced security and flexible hosting",
    price: "Custom pricing",
    priceDesc: "Let’s talk about what you need",
    perks: [
      {
        icon: <FiKey />,
        text: "Single sign-on with AD or SAML",
      },
      {
        icon: <FiCloud size="22px" />,
        text: "Host on your cloud or servers – or our private managed cloud",
      },
      {
        icon: <FiCode />,
        text: "Robust read and write API",
      },
      {
        icon: <FiUser size="22px" />,
        text: "Your own customer success and community building representative",
      },
      {
        icon: <FiStar />,
        text: "99.5% uptime SLA and priority support",
      },
    ],
    linkText: "Request a demo",
  },
];

export function Perk({ data }) {
  return (
    <li className="perk">
      {data.icon}
      <p>{data.text}</p>
    </li>
  );
}

export function Card({ data }) {
  return (
    <div className={`card ${data.className}`}>
      {data.mostUsed && (
        <div className="most-used">
          <p>most used</p>
          <FiTrello size="18px" />
        </div>
      )}
      <h2 className="title">{data.title}</h2>
      <p className="desc">{data.desc}</p>
      <p className="price">{data.price}</p>
      <p className="price-desc">{data.priceDesc}</p>
      <div className="divider" />
      <ul className="perks">
        {data.perks.map((perk, idx) => (
          <Perk key={idx} data={perk} />
        ))}
      </ul>
      <a role="button" href="https://stackoverflow.com/teams/create/basic">
        {data.linkText}
      </a>
    </div>
  );
}

export function Cards() {
  return (
    <div className="cards-wrapper">
      {cards.map((card) => (
        <Card key={card.className} data={card} />
      ))}
    </div>
  );
}

import React from "react";

const navs = [
  {
    title: {
      text: "stack overflow",
      href: "https://stackoverflow.com/",
    },
    links: [
      {
        text: "Questions",
        href: "https://stackoverflow.com/questions",
      },
      {
        text: "Jobs",
        href: "https://stackoverflow.com/jobs",
      },
      {
        text: "Developer Jobs Directory",
        href: "https://stackoverflow.com/jobs/directory/developer-jobs",
      },
      {
        text: "Salary Calculator",
        href: "https://stackoverflow.com/jobs/salary",
      },
      {
        text: "Help",
        href: "https://stackoverflow.com/help",
      },
      {
        text: "Mobile",
        href: "https://stackoverflow.com/mobile",
      },
      {
        text: "Disable Responsiveness",
        href: "#",
      },
    ],
  },
  {
    title: {
      text: "products",
      href: "https://stackoverflowbusiness.com/",
    },
    links: [
      {
        text: "Teams",
        href: "https://stackoverflow.com/teams",
      },
      {
        text: "Talent",
        href: "https://stackoverflow.com/talent",
      },
      {
        text: "Advertising",
        href: "https://stackoverflow.com/advertising",
      },
      {
        text: "Enterprise",
        href: "https://stackoverflow.com/enterprise",
      },
    ],
  },
  {
    title: {
      text: "company",
      href: "https://stackoverflow.com/company",
    },
    links: [
      {
        text: "About",
        href: "https://stackoverflow.com/company",
      },
      {
        text: "Press",
        href: "https://stackoverflow.com/press",
      },
      {
        text: "Work Here",
        href: "https://stackoverflow.com/company/work-here",
      },
      {
        text: "Legal",
        href: "https://stackoverflow.com/legal",
      },
      {
        text: "Privacy Policy",
        href: "https://stackoverflow.com/legal/privacy-policy",
      },
      {
        text: "Contact Us",
        href: "https://stackoverflow.com/company/contact",
      },
    ],
  },
  {
    title: {
      text: "stack exchange network",
      href: "https://stackexchange.com/",
    },
    links: [
      {
        text: "Technology",
        href: "https://stackexchange.com/#",
        isExpandable: true,
      },
      {
        text: "Life / Arts",
        href: "https://stackexchange.com/#",
        isExpandable: true,
      },
      {
        text: "Culture / Recreation",
        href: "https://stackexchange.com/#",
        isExpandable: true,
      },
      {
        text: "Science",
        href: "https://stackexchange.com/#",
        isExpandable: true,
      },
      {
        text: "Other",
        href: "https://stackexchange.com/#",
        isExpandable: true,
      },
    ],
  },
];

function Nav({ nav }) {
  return (
    <div className="footer-nav">
      <h5>
        <a href={nav.title.href}>{nav.title.text}</a>
      </h5>
      <ul>
        {nav.links.map((link) => (
          <li key={link.text}>
            <a
              href={link.href}
              className={link.isExpandable ? "expandable" : ""}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FooterNav() {
  return (
    <nav className="footer-nav-wrapper">
      {navs.map((nav) => (
        <Nav key={nav.title.text} nav={nav} />
      ))}
    </nav>
  );
}

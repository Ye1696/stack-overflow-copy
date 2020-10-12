import React from "react";

const cards = [
  {
    imgSrc: "https://cdn.sstatic.net/Img/home/developer.svg?v=b930de7967a7",
    title: "Write the script of the future",
    text: (
      <p>
        Get your coding questions answered to learn, build, and level up whether
        you’re beginning with{" "}
        <a href="/questions/tagged/javascript">JavaScript</a> or a{" "}
        <a href="/questions/tagged/react">React</a> professional.
      </p>
    ),
  },
  {
    imgSrc: "https://cdn.sstatic.net/Img/home/open-source.svg?v=847b604fd2ab",
    title: "Support open source",
    text: (
      <p>
        Reach users of your project by following tags, answering newcomer
        questions, and empowering experts in the community.{" "}
        <a href="https://stackoverflow.com/questions/55884514/what-is-the-incentive-for-curl-to-release-the-library-for-free/55885729#55885729">
          Read the curl project creator’s story
        </a>
        .
      </p>
    ),
  },
  {
    imgSrc: "https://cdn.sstatic.net/Img/home/advocate.svg?v=4b03cfb93502",
    title: "Acquire and share knowledge",
    text: (
      <p>
        Answer questions and{" "}
        <a href="https://insights.stackoverflow.com/">gain insights</a> from an
        audience of developers using your technology on Stack Overflow.
      </p>
    ),
  },
  {
    imgSrc:
      "https://cdn.sstatic.net/Img/home/career-switcher.svg?v=a41416ff19df",
    title: "Find career opportunities",
    text: (
      <p>
        Create a profile that shows off your expertise and credentials to help
        you make your next move. Start your{" "}
        <a href="https://stackoverflow.com/users/story/join">Developer Story</a>
        .
      </p>
    ),
  },
];

function Card({ card }) {
  return (
    <div className="card">
      <img src={card.imgSrc} width="176" height="151" alt="placeholder" />
      <h4>{card.title}</h4>
      {card.text}
    </div>
  );
}

export function Cards() {
  return (
    <div className="cards-wrapper">
      {cards.map((card) => (
        <Card key={card.title} card={card} />
      ))}
    </div>
  );
}

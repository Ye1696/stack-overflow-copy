// @ts-check
import React, { useEffect, useState } from "react";

const leftTabs = [
  {
    id: 1,
    iconSrc:
      "https://cdn.sstatic.net/Img/home/ask-a-question.svg?v=f4f2050b0297",
    text: "Ask a question",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-ask.svg?v=b6cd07f0765a",
  },
  {
    id: 2,
    iconSrc: "https://cdn.sstatic.net/Img/home/votes.svg?v=748a8f48a8e2",
    text: "Vote on everything",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-vote.svg?v=9d2eb0efdc17",
  },
  {
    id: 3,
    iconSrc: "https://cdn.sstatic.net/Img/home/answer.svg?v=4cd8048a676c",
    text: "Answer questions",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-answer.svg?v=b637b99bc32a",
  },
];

const rightTabs = [
  {
    id: 4,
    iconSrc: "https://cdn.sstatic.net/Img/home/tags.svg?v=913379eb09eb",
    text: "Tag your question",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-tags.svg?v=0655cbe6bffa",
  },
  {
    id: 5,
    iconSrc: "https://cdn.sstatic.net/Img/home/accept.svg?v=27d5be078970",
    text: "Accept an answer",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-accept.svg?v=f2be4b8dfdac",
  },
  {
    id: 6,
    iconSrc:
      "https://cdn.sstatic.net/Img/home/get-recognized.svg?v=3b339d9aa10c",
    text: "Get recognized",
    imgSrc:
      "https://cdn.sstatic.net/Img/home/illo-feats-recognize.svg?v=4f011d7173e8",
  },
];

function Tab({ tab, isLeft, isActive, onTabClick }) {
  return (
    <li
      onClick={() => onTabClick(tab)}
      className={`tab ${isLeft ? "left" : "right"} ${isActive ? "active" : ""}`}
    >
      <img src={tab.iconSrc} width="46" alt="icon" />
      <span>{tab.text}</span>
    </li>
  );
}

export function Tabs() {
  const [activeTab, setActiveTab] = useState(() => leftTabs[0]);

  useEffect(() => {
    const activeIdx = activeTab.id;
    const newActiveIndex = activeIdx === 6 ? 1 : activeIdx + 1;
    const newActiveTab = [...leftTabs, ...rightTabs].find(
      (tab) => tab.id === newActiveIndex
    );
    const timerId = setTimeout(() => {
      setActiveTab(newActiveTab);
    }, 5000);
    return () => clearInterval(timerId);
  }, [activeTab]);

  function handleTabClick(tab) {
    setActiveTab(tab);
  }
  return (
    <div className="tabs">
      <ul className="tabs-stack">
        {leftTabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isLeft
            isActive={activeTab.id === tab.id}
            onTabClick={handleTabClick}
          />
        ))}
      </ul>
      <img src={activeTab.imgSrc} alt="main" width="500" />
      <ul className="tabs-stack">
        {rightTabs.map((tab) => (
          <Tab
            key={tab.id}
            tab={tab}
            isLeft={false}
            isActive={activeTab.id === tab.id}
            onTabClick={handleTabClick}
          />
        ))}
      </ul>
    </div>
  );
}

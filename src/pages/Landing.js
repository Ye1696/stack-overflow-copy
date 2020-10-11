import React from "react";
import { ActionSection } from "../components/ActionSection";
import { Header } from "../components/Header";
import { LearnSection } from "../components/LearnSection";
import { Navbar } from "../components/Navbar";
import { TalentsSection } from "../components/TalentsSection";
import { TeamsSection } from "../components/TeamsSection";

export function Landing() {
  return (
    <div>
      <Navbar />
      <Header />
      <TeamsSection />
      <TalentsSection />
      <ActionSection />
      <LearnSection />
    </div>
  );
}

import React from "react";
import { ActionSection } from "../components/ActionSection";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { JobSection } from "../components/JobSection";
import { LearnSection } from "../components/LearnSection";
import { Navbar } from "../components/Navbar";
import { TalentsSection } from "../components/TalentsSection";
import { TeamsSection } from "../components/TeamsSection";
import { ForDevelopers } from "../components/ForDevelopers";

export function Landing() {
  return (
    <div>
      <Navbar />
      <Header />
      <ForDevelopers />
      <TeamsSection />
      <TalentsSection />
      <ActionSection />
      <LearnSection />
      <JobSection />
      <Footer />
    </div>
  );
}

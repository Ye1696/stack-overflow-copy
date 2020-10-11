import React from "react";
import { Header } from "../components/Header";
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
    </div>
  );
}

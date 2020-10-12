import React from "react";
import { Header } from "../components/Header";
import { Navbar } from "../components/Navbar";
import { TeamsSection } from "../components/TeamsSection";
import { ForDevelopers } from "../components/ForDevelopers";

export function Landing() {
  return (
    <div>
      <Navbar />
      <Header />
      <ForDevelopers />
      <TeamsSection />
    </div>
  );
}

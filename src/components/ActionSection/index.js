import React from "react";
import { Tabs } from "./Tabs";

export function ActionSection() {
  return (
    <section className="action-section">
      <h3>Questions are everywhere, answers are on Stack Overflow</h3>
      <Tabs />
      <h4>
        Accept the answer which solved your problem to let others benefit from
        the valuable information.
      </h4>
      <a href="/users/signup">Create an account</a>
    </section>
  );
}

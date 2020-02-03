import React from "react";
import { Parent } from "./context";
import { FinalForm } from "./form";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Parent child={<FinalForm />} />
    </div>
  );
}

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Dashboard from "../dashboard";

describe("<Dashboard />", () => {
  it("renders <Dashboard /> component in root", () => {
    // Render the component
    render(<Dashboard />);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "../home";

describe("<Home />", () => {
  it("renders <Home /> component in root", () => {
    // Render the component
    render(<Home />);
  });
});

import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom"; // Correct import for jest-dom
import PageNotFound from "../page-not-found"; // Adjust import path as necessary

describe("<PageNotFound />", () => {
  it("renders <PageNotFound /> component in root", () => {
    // Render the component
    render(<PageNotFound />);
  });
});

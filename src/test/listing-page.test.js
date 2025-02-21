import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Listing from "../listing";

describe("<Listing />", () => {
  it("renders <Listing /> component in root", () => {
    // Render the component
    render(<Listing />);
  });
});

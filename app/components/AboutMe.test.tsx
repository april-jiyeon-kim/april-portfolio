import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import AboutMe from "./AboutMe";

describe("AboutMe", () => {
  it("renders about me", () => {
    render(<AboutMe />);
    expect(screen.getByText("About me")).toBeInTheDocument();
  });
});

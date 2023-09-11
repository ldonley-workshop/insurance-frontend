import { describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import HomeHero from "./HomeHero";
import { BrowserRouter } from "react-router-dom";

describe("HomeHero Tests", () => {
  test("Should include header", async () => {
    render(
      <BrowserRouter>
        <HomeHero />
      </BrowserRouter>,
    );

    expect(screen.getByText(/Get started/i)).toBeDefined();
    expect(screen.getByText(/Exploress plans/i)).toBeDefined();
  });

  test("HomeHero snapshot", async () => {
    const { asFragment } = render(
      <BrowserRouter>
        <HomeHero />
      </BrowserRouter>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

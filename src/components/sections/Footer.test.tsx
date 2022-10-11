import { describe, test } from "vitest"
import { render, screen } from "@testing-library/react"
import React from "react"
import Footer from "./Footer"

describe("Footer Tests", () => {
  test("Should include headers", async () => {
    render(<Footer />)
    expect(screen.getByText(/Solutions/i)).toBeDefined()
    expect(screen.getByText(/Support/i)).toBeDefined()
    expect(screen.getByText(/Company/i)).toBeDefined()
    expect(screen.getByText(/Legal/i)).toBeDefined()
  })

  test("Footer snapshot", async () => {
    const { asFragment } = render(<Footer />)
    expect(asFragment()).toMatchSnapshot()
  })
})

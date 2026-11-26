import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import BookCard from "./BookCard";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

//mocks
vi.mock("use-local-storage-state", () => ({
  default: vi.fn(() => [null, vi.fn()]),
}));

vi.mock("url-join", () => ({
  default: vi.fn(() => "/mocked-path"),
}));

vi.mock("react-responsive", () => ({
  useMediaQuery: vi.fn(),
}));

describe("BookCard Component", () => {
  const defaultProps = {
    cover: "https://example.com/cover.jpg",
    summary: "This is a summary of the book.",
    path: "book-path",
    title: "Book Title",
  };

  //simulate large screens
  test("renders BookCard with title, summary, and cover image", () => {
    useMediaQuery.mockReturnValue(true);

    render(
      <Router>
        <BookCard {...defaultProps} />
      </Router>
    );

    // Check if title is displayed
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();

    // Check if summary is displayed
    expect(screen.getByText(defaultProps.summary)).toBeInTheDocument();

    // Check if cover image is rendered with the correct source
    const coverImage = screen.getByRole("img");
    expect(coverImage).toHaveAttribute("src", defaultProps.cover);

    // Check if "Read" button is present
    expect(screen.getByText("Read")).toBeInTheDocument();
  });

  //simulate small screen
  test("opens AboutModal when About button is clicked on small screens", () => {
    useMediaQuery.mockReturnValue(false);

    render(
      <Router>
        <BookCard {...defaultProps} />
      </Router>
    );

    // Simulate clicking the About button
    const aboutButton = screen.getByText("About");
    fireEvent.click(aboutButton);
    // Check if "About" button is present on small screens
    expect(screen.getByText("About")).toBeInTheDocument();
    // Verify modal appears
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.summary)).toBeInTheDocument();
  });
});

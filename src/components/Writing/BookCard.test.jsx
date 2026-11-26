import React from "react";
import { render, screen, fireEvent, within } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";
import BookCard from "./BookCard";
import { BrowserRouter as Router } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

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

  test("renders BookCard with title, summary, and cover image on large screens", () => {
    useMediaQuery.mockReturnValue(true);

    render(
      <Router>
        <BookCard {...defaultProps} />
      </Router>
    );

    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.summary)).toBeInTheDocument();

    const coverImage = screen.getByRole("img");
    expect(coverImage).toHaveAttribute("src", defaultProps.cover);

    expect(screen.getByText("Read")).toBeInTheDocument();
  });

  test("opens AboutModal when About button is clicked on small screens", () => {
    useMediaQuery.mockReturnValue(false);

    render(
      <Router>
        <BookCard {...defaultProps} />
      </Router>
    );

    const aboutButton = screen.getByText("About");
    fireEvent.click(aboutButton);

    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText(defaultProps.title)).toBeInTheDocument();
    expect(within(dialog).getByText(defaultProps.summary)).toBeInTheDocument();
  });
});


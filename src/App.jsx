import React from "react";
import { BrowserRouter as Router, Route, Routes, useParams, Navigate } from "react-router-dom";
import Homepage from "./pages/Homepage/Homepage.jsx";
import Reader from "./pages/Reader/Reader.jsx";
import books from "./data/books.json";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/reader/:path" element={<ReaderWrapper />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </Router>
);

const ReaderWrapper = () => {
  const { path } = useParams();
  const book = books.find((b) => b.slug === path);

  if (!book) {
    return <Navigate to="/" replace />;
  }

  return <Reader doc={book.epub} title={book.title} />;
};

export default App;


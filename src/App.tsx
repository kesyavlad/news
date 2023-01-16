import React from "react";
import HomePage from "./pages/HomePage";
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<ArticlePage />} />
      </Routes>
    </>
  );
}

export default App;

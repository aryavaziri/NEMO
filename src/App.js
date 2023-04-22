import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import HomeScreen from "./HomeScreen";

// const hostname = window.location.hostname + ":8000";

export default function App() {
  return (
    <Router>
      <main className="">
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
      </main>
    </Router>
  );
}

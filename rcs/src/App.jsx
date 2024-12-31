import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // import bootstrap css
import MainLayout from "./layouts/main-layout/MainLayout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";

function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout route */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested route for Home */}
          <Route index element={<Home />} />  {/* index route is for the default child route */}
        </Route>
        <Route path="/contact" element={<MainLayout />}>
          {/* Nested route for Contact */}
          <Route index element={<Contact />} />  {/* index route is for the default child route */}
        </Route>
      </Routes>
    </Router>

  );
}

export default App;

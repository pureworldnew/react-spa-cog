import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function AddStudent() {
  return (
    <>
      <main>Weldome to the add student</main>
    </>
  );
}

function EditStudent() {
  return (
    <>
      <main>Weldome to the edit student</main>
    </>
  );
}

function About() {
  return (
    <>
      <main>Welcome to the About page</main>
    </>
  );
}

function NoPage() {
  return (
    <>
      <main>Page not found</main>
    </>
  );
}
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="addstudent" element={<AddStudent />} />
        <Route path="editstudent" element={<EditStudent />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

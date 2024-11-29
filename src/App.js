import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import Contact from "./Contact";
import Form from "./Form";
import About from "./About";
import Service from "./Service";
import { Routes, Route } from "react-router-dom";

let App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route exact path="/contact/form" element={<Form />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/service" element={<Service />} />
      </Routes>
    </>
  )
}

export default App;
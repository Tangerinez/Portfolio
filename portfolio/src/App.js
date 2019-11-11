import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar />
      <Banner id="section1" />
      <About id="section2" />
      <Projects id="section3" />
      <Contact id="section4" />
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experiance from "./components/Experiance";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster, toast } from "react-hot-toast";
function App() {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <Home></Home>
        <About></About>
        <Portfolio></Portfolio>
        <Experiance></Experiance>
        <Contact></Contact>
        <Footer></Footer>
      </div>
      <Toaster />
    </>
  );
}

export default App;

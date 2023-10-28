import React, { useEffect } from "react";
import Hero from "../components/HomeCompo/Hero";
import Works from "../components/HomeCompo/WorksCompo";
import About from "../components/HomeCompo/About";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Hero />
      <Works />
      <About />
    </div>
  );
};

export default Home;

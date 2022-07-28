import React from "react";
import "./App.css";
import AboutMe from "./components/AboutMe";
import Title from "./components/Title";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectSection from "./components/ProjectSection";
import BlogSection from "./components/BlogSection";
import SkillsSection from "./components/SkillsSection";
import RecommendationSection from "./components/RecommendationSection";

// function App() {
//   let a = 10;
//   let b = 20;
//   let name = "Rishikesh";

// const customStyle = {
//   color: "green",
//   backgroundColor: "yellow",
// };
// return (
//   <div className="App">
//     <h1 className="customStyle">Portfolio website {name}</h1>
//   </div>
// );

// return React.createElement(
//   "div",
//   { className: "App" },
//   React.createElement("h1", null, "Portfolio Website")
// );
// }

function App() {
  return (
    <div>
      <Navbar />
      <Title
        name="Rishikesh Dahe."
        leadText="I am a Software Developer from INDIA"
      />
      <RecommendationSection />
      <SkillsSection />
      <ProjectSection />
      <AboutMe />
      <BlogSection />
      <Footer />
    </div>
  );
}

export default App;

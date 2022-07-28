import React from "react";
import Skill from "./Skill";
import { v4 as uuid } from "uuid";

function SkillsSection() {
  const skills = [
    {
      id: 1,
      name: "JAVA",
      imageUrl: "https://i.imgur.com/466GSZP.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 2,
      name: "HTML5",
      imageUrl: "https://i.imgur.com/HKE4Ab5.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 3,
      name: "CSS3",
      imageUrl: "https://i.imgur.com/EF54mkP.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 4,
      name: "Javascript",
      imageUrl: "https://i.imgur.com/fBEBw5N.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 5,
      name: "Bootstrap 4",
      imageUrl: "https://i.imgur.com/nyHetjN.png",
      starsTotal: 3,
      starsActive: 1,
    },
    {
      id: 6,
      name: "React",
      imageUrl: "https://i.imgur.com/kXQEHgk.png",
      starsTotal: 3,
      starsActive: 3,
    },
    {
      id: 7,
      name: "MySQL",
      imageUrl: "https://i.imgur.com/oMRvoTO.png",
      starsTotal: 3,
      starsActive: 2,
    },
    {
      id: 8,
      name: "Python",
      imageUrl: "https://i.imgur.com/OxSsO4l.png",
      starsTotal: 3,
      starsActive: 3,
    },
  ];

  const finalSkillRow = [];

  for (let i = 0; i < skills.length / 4; i++) {
    let skillRow = skills.slice(i * 4, (i + 1) * 4);
    finalSkillRow.push(
      <div key={uuid()} className="d-flex justify-content-around py-3">
        {skillRow.map((skill) => (
          <Skill key={uuid()} skill={skill} />
        ))}
      </div>
    );
  }

  return (
    <div className="bg-light w-100">
      <div className="container text-center py-5">
        <h1 className="font-weight-light">
          <span className="text-info">Technology</span> stack
        </h1>
        <div className="lead pb-5">
          I design, develop and deliver with these weapons
        </div>
        {finalSkillRow}
      </div>
    </div>
  );
}

export default SkillsSection;

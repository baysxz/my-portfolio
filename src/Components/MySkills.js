import { React } from "./icons/React";
import { Nextjs } from "./icons/Nextjs";
import { JavascriptIcon } from "./icons/JavascriptIcon";
import { Node } from "./icons/Node";
import { Express } from "./icons/Express";
import { Skill } from "./Skill";
import { Typescript } from "./icons/Typescript";
import { Nest } from "./icons/Nest";
import { Socket } from "./icons/Socket";
import { MongoDb } from "./icons/MongoDb";
import { Sass } from "./icons/Sass";
import { Tailwind } from "./icons/Tailwind";
import { Figma } from "./icons/Figma";
import { Cypress } from "./icons/Cypress";
import { Storybook } from "./icons/Storybook";
import { Git } from "./icons/Git";

const skills = [
  {
    id: 1,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 2,
    name: "Typescript",
    icon: <Typescript />,
  },
  {
    id: 3,
    name: "React",
    icon: <React />,
  },
  {
    id: 4,
    name: "Next.js",
    icon: <Nextjs />,
  },
  {
    id: 5,
    name: "Node.js",
    icon: <Node />,
  },
  {
    id: 6,
    name: "Express",
    icon: <Express />,
  },
  {
    id: 7,
    name: "Nest",
    icon: <Nest />,
  },
  {
    id: 8,
    name: "Socket",
    icon: <Socket />,
  },
  {
    id: 9,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 10,
    name: "MongoDb",
    icon: <MongoDb />,
  },
  {
    id: 11,
    name: "Sass",
    icon: <Sass />,
  },
  {
    id: 12,
    name: "Tailwind",
    icon: <Tailwind />,
  },
  {
    id: 13,
    name: "Figma",
    icon: <Figma />,
  },
  {
    id: 14,
    name: "Cypress",
    icon: <Cypress />,
  },
  {
    id: 15,
    name: "Storybook",
    icon: <Storybook />,
  },
  {
    id: 16,
    name: "Git",
    icon: <Git />,
  },
];
export default function MySkills() {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-3 md:grid-cols-6 grid-cols-8 gap-x-[58px] gap-y-4">
        {skills.map((skill) => {
          return <Skill key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
}

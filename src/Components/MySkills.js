import { JavascriptIcon } from "@/Components/icons/JavascriptIcons";
import { Typescript } from "@/Components/icons/Typescript";
import { Skill } from "@/Components/Skill";

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
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 4,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 5,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 6,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 7,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 8,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 9,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 10,
    name: "Typescript",
    icon: <Typescript />,
  },
  {
    id: 11,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 12,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 13,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 14,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 15,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
  {
    id: 16,
    name: "Javascript",
    icon: <JavascriptIcon />,
  },
];
export default function MySkills() {
  return (
    <div className="container mx-auto">
      <div className="grid sm:grid-cols-3 md:grid-cols-6 grid-cols-8">
        {skills.map((skill) => {
          return <Skill key={skill.id} name={skill.name} icon={skill.icon} />;
        })}
      </div>
    </div>
  );
}

// export default function Home() {
//   return (
//     <div>
//       {skills.map((skill) => {
//         return <Skill key={skill.id} icon={skill.icon} name={skill.name} />;
//       })}
//     </div>
//   );
// }

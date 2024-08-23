// import { Skill } from "@/Components/Skill";
// import { JavascriptIcon } from "../Components/icons/JavascriptIcons";

import Header from "@/Components/Header";
import Hero from "../Components/Hero";
import About from "@/Components/About";

// const skills = [
//   {
//     id: 1,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
//   {
//     id: 2,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
//   {
//     id: 3,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
//   {
//     id: 4,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
//   {
//     id: 5,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
//   {
//     id: 6,
//     name: JavascriptIcon,
//     icon: <JavascriptIcon />,
//   },
// ];
// export default function Home() {
//   return (
//     <div className='grid grid-cols-3 place-content-center'>
//       {skills.map((skill) => {
//         const { id, ...other } = skill;
//         return <Skill key={id} {...other} />;
//       })}
//     </div>
//   );
// }

// export default function Home() {
//   return ( <div>
// {skills.map((skill) => {
//   return <Skill key={skill.id} icon={skill.icon} name={skill.name}/>;
// })}
//   </div>
//   );
// };

export default function Home() {
  return (
    <div className="container mx-auto">
      <Header />
      <Hero />
    </div>
  );
}

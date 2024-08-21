import { Skill } from "@/Components/icons/Skill";
import {JavascriptIcon} from "../Components/icons/JavascriptIcons";

const skills = [ {
  key:1,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
{
  key:2,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
{
  key:3,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
{
  key:4,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
{
  key:5,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
{
  key:6,
  name: JavascriptIcon,
  icon: <JavascriptIcon/>
},
];
export default function Home () {
  return (
    <div className="grid grid-cols-3 place-content-center">
      {skills.map((skill)=> {
const {id, ...other}=skill;
return ( 
<Skill key={id} {...other}/>

);
      })}
    </div>
  );
}

// export default function Home() {
//   return ( <div>
// {skills.map((skill) => {
//   return <Skill key={skill.id} icon={skill.icon} name={skill.name}/>;
// })}
//   </div>
//   );
// };


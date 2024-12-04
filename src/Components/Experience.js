import { MyExperience } from "./MyExperience";

const data = [
  {
    date: "Nov 2021 - Present",
    position: "Sr. Frontend Developer",
    experience: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut pretium arcu et massa semper, id fringilla leo semper.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    date: "Jul 2017 - Oct 2021",
    position: "Team Lead",
    experience: [
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Sed quis justo ac magna.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
  {
    date: "Dec 2015 - May 2017",
    position: "Full Stack Developer",
    experience: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    ],
  },
];

export const Experience = () => {
  return (
    <div>
      <div>
        {data.map((experience, index) => {
          return (
            <MyExperience
              key={index}
              date={experience.date}
              position={experience.position}
              experience={experience.experience}
            />
          );
        })}
      </div>
    </div>
  );
};

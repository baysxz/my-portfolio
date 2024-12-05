import { MyExperience } from "./MyExperience";

const data = [
  {
    user: "boogii",
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
    user: "boogii",
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
    user: "boogii",
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
    <div className="bg-gray-50 flex flex-col items-center">
      <div>
        <p className="text-lg font-normal text-gray-600 flex items-center">
          Here is a quick summary of my most recent experiences:
        </p>
      </div>
      <div className="flex flex-col gap-4 justify-center">
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

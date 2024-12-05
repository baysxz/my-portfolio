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
    <div className="container mx-auto lg:flex lg:flex-col bg-gray-50 flex flex-col items-center gap-4 py-24 px-4">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm ">
          Experience
        </p>
        <p className="text-lg font-normal text-gray-600">
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

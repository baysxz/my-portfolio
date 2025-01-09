const { ExternalLink } = require("lucide-react");
const { MyCompanies } = require("./MyCompanies");

const data = [
  {
    id: 0,
    picture: "",
    company: "UBCab",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    actions: <ExternalLink />,
  },
  {
    id: 1,
    picture: "",
    company: "Mentorhub",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    actions: <ExternalLink />,
  },
  {
    id: 2,
    picture: "",
    company: "iToim",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    frameworks: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "Tailwindcss",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    actions: <ExternalLink />,
  },
];

const Work = () => {
  return (
    <div className="flex justify-center items-center flex-col px-4 py-16 gap-6">
      <div className="flex flex-col justify-center items-center gap-5">
        <p className="px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm flex justify-center">
          Work
        </p>
        <p className="text-lg font-normal text-gray-600">
          Some of the noteworthy projects I have built:{" "}
        </p>
      </div>
      {data.map((WorkExperience, index) => {
        return (
          <MyCompanies
            key={index}
            company={WorkExperience.company}
            details={WorkExperience.details}
            frameworks={WorkExperience.frameworks}
            actions={WorkExperience.actions}
          />
        );
      })}
    </div>
  );
};

export default Work;

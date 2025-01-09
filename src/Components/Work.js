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

export const Work = () => {
  return (
    <div>
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

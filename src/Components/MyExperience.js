import { Upwork } from "./icons/Upwork";

export const MyExperience = (props) => {
  const { date, position, experience } = props;

  return (
    <div>
      <div>
        <Upwork />
        <p>{date}</p>
        <p>{position}</p>
        <p>{experience}</p>
      </div>
    </div>
  );
};

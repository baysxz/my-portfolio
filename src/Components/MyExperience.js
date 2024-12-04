import { Upwork } from "./icons/Upwork";

export const MyExperience = (props) => {
  const { date, position, experience } = props;

  return (
    <div>
      <div className="w-[343px] h-[372px] border rounded-xl">
        <Upwork className="w-[279px] h-7" />
        <p className="text-base font-normal text-gray-700">{date}</p>
        <p className="text-lg font-semibold">{position}</p>
        <li className="text-base font-normal text-gray-600">{experience}</li>
      </div>
    </div>
  );
};

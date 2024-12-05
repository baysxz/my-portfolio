import { Upwork } from "./icons/Upwork";

export const MyExperience = (props) => {
  const { date, position, experience } = props;

  return (
    <div>
      <div className="w-[343px] h-[372px] border shadow-lg rounded-xl flex flex-col gap-4 p-8">
        <Upwork className="w-[279px] h-7" />
        <p className="text-base font-normal text-gray-700">{date}</p>
        <p className="text-lg font-semibold">{position}</p>

        <li className="text-base font-normal text-gray-600">{experience[0]}</li>
        <li className="text-base font-normal text-gray-600">{experience[1]}</li>
        <li className="text-base font-normal text-gray-600">{experience[2]}</li>
      </div>
    </div>
  );
};

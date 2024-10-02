import { Upwork } from "./icons/Upwork";

export const Experience = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex flex-col justify-center items-center sm:w-full">
        <p className="flex justify-center px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm ">
          Experience
        </p>
        <p>Here is a quick summary of my most recent experiences:</p>
      </div>

      <Upwork />
      <p>Nov 2021 - Present</p>
      <h3>Sr. Frontend Developer</h3>

      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      <li>Ut pretium arcu et massa semper, id fringilla leo semper.</li>
      <li>Sed quis justo ac magna.</li>
      <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
    </div>
  );
};

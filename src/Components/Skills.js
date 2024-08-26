import MySkills from "./MySkills.js";

export default function Skills() {
  return (
    <div className="flex flex-col sm:gap-4 sm:px-4 sm:py-16 px-20 py-24">
      <div className="flex flex-col justify-center items-center sm:w-full">
        <p className="flex justify-center px-5 py-1 w-[105px] h-[28px] bg-gray-200 border-solid rounded-xl text-sm ">
          Skills
        </p>
        <p>The skills, tools and technologies I am really good at:</p>
      </div>
      <div>
        <MySkills />
      </div>
    </div>
  );
}

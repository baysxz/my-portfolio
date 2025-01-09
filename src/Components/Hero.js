import { Status } from "./Status";
import { Figma, Github, TwitterIcon } from "lucide-react";
export default function Hero() {
  return (
    <div className=" py-24 px-20 sm:px-4 sm:py-16">
      <div className="text-center sm:flex sm:flex-col flex flex-row-reverse px-8 gap-12 sm:px-0">
        <div className="flex justify-end sm:justify-center sm:w-full w-6/12">
          <img
            className=" sm:w-[240px] sm:h-[280px] w-70 h-80"
            src="/profile.png"
          />
        </div>
        <div className="flex-col text-start sm:w-full  w-6/12 flex gap-12">
          <div className="flex-col  sm:py-1 flex gap-2">
            <h1 className="text-4xl  not-italic font-semibold sm:pt-12">
              Hi, I’m Tom 👋
            </h1>
            <p className=" self-stretch text-base font-normal text-gray-600">
              I specialize in full stack development, particularly with React.js
              and Node.js. My main goal is to create exceptional digital
              experiences that are fast, visually appealing, and accessible to
              everyone. With over 7 years of experience in web development, I
              continue to find joy in crafting innovative solutions and designs.
            </p>
          </div>
          <div className="">
            <Status />
          </div>
          <div className="flex items-center">
            <Github className="w-9 h-9 p-[6px]" />
            <TwitterIcon className="w-9 h-9 p-[6px]" />
            <Figma className="w-9 h-9 p-[6px]" />
          </div>
        </div>
      </div>
    </div>
  );
}

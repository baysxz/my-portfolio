import { Status } from "./Status";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { Figma } from "../icons/Figma";

export default function Hero() {
  return (
    <div className="text-center sm:flex sm:flex-col sm:px-4 sm:py-8 flex flex-row-reverse py-24 px-20">
      <div className="items-center sm:w-[240px] sm:h-[280px] w-6/12">
        <img src="/profile.png" />
      </div>
      <div className="flex-col text-start sm:w-full  w-6/12 flex gap-12 py-12 px-20">
        <div className="flex-col  sm:py-1 flex gap-2">
          <h1 className="text-4xl  not-italic font-semibold sm:pt-12">
            Hi, I’m Tom 👋
          </h1>
          <p className=" self-stretch text-base font-normal  ">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="flex-col ">
          <Status />
        </div>
        <div className="flex ">
          <Github />
          <Twitter />
          <Figma />
        </div>
      </div>
    </div>
  );
}

import { Status } from "./Status";
import { Github } from "../icons/Github";
import { Twitter } from "../icons/Twitter";
import { Figma } from "../icons/Figma";

export default function Hero() {
  return (
    <div className="text-center sm:flex sm:flex-col sm:px-4 sm:py-16 2xl:flex 2xl:flex-row-reverse">
      <div className=" sm:w-[280px] sm:h-[280px] items-center">
        <img src="/profile.png" />
      </div>
      <div className="flex-col text-start">
        <div className="flex-col py-12">
          <h1 className="text-4xl  not-italic font-semibold sm:pt-[68px] sm:w-[600px]">
            Hi, I’m Tom 👋
          </h1>
          <p className=" self-stretch text-base font-normal py-[8px] ">
            I specialize in full stack development, particularly with React.js
            and Node.js. My main goal is to create exceptional digital
            experiences that are fast, visually appealing, and accessible to
            everyone. With over 7 years of experience in web development, I
            continue to find joy in crafting innovative solutions and designs.
          </p>
        </div>
        <div className="flex-col py-12">
          {" "}
          <Status />
          <div className="flex py-12">
            <Github />
            <Twitter />
            <Figma />
          </div>
        </div>
      </div>
    </div>
  );
}

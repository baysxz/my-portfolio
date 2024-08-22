import { Status } from "./Status";
import { Github } from "./icons/Github";
import { Twitter } from "./icons/Twitter";
import { Figma } from "./icons/Figma";

export default function Hero() {
  return (
    <div className="text-center">
      <h1 className="text-4xl not-italic font-semibold">Hi, I’m Tom 👋</h1>
      <p className=" self-stretch text-base font-normal ">
        I specialize in full stack development, particularly with React.js and
        Node.js. My main goal is to create exceptional digital experiences that
        are fast, visually appealing, and accessible to everyone. With over 7
        years of experience in web development, I continue to find joy in
        crafting innovative solutions and designs.
      </p>
      <Status />
      <Github />
      <Twitter />
      <Figma />
    </div>
  );
}

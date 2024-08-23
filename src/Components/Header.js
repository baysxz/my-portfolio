import { MenuIcon } from "../icons/MenuIcon";
import { Divider } from "../icons/Divider";
import { DarkModeIcon } from "../icons/DarkModeIcon";

export default function Header() {
  return (
    <div className="flex justify-between sm:p-4 2xl:px-20 2xl:py-4">
      <h1 className="font-normal text-3xl text-center ">BAY</h1>
      <div className="md:block sm:hidden">
        <ul className="flex flex-row gap-6 text-gray-600  justify-center items-center">
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <div>
            <DarkModeIcon />
          </div>
          <button
            className="bg-gray-900 text-gray-50 rounded-xl py-1.5 px-4
">
            Download CV
          </button>
        </ul>
      </div>
      <div className="sm:block 2xl:hidden w-[24px] h-[24px] ">
        <MenuIcon />
      </div>
    </div>
  );
}

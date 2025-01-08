import { MenuIcon } from "./icons/MenuIcon";
import { DarkModeIcon } from "./icons/DarkModeIcon";

export default function Header() {
  return (
    <div className='flex justify-between p-4 lg:px-20 lg:py-4 px-8'>
      <h1 className='font-normal text-3xl text-center '>BAY</h1>
      <div className='md:block sm:hidden'>
        <ul className='flex flex-row gap-6 text-gray-600  justify-center items-center'>
          <li>About</li>
          <li>Work</li>
          <li>Testimonials</li>
          <li>Contact</li>
          <div>
            <DarkModeIcon />
          </div>
          <button className='bg-gray-900 text-gray-50 rounded-xl py-1.5 px-4'>
            Download CV
          </button>
        </ul>
      </div>
      <div className='sm:block hidden w-[24px] h-[24px] '>
        <MenuIcon />
      </div>
    </div>
  );
}

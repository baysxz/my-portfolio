import { MenuIcon } from "../icons/MenuIcon";
import { DarkModeIcon } from "../icons/DarkModeIcon";

export default function Header() {
  return (
    <div className='flex justify-between p-4'>
      <h1 className='font-normal text-3xl text-center'>BAY</h1>
      <div className='sm:hidden md:block'>
        <ul className='flex flex-row gap-6 text-gray-600  justify-center items-center'>
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <li>About</li>
          <div>
            <DarkModeIcon />
          </div>
          <button
            className='bg-gray-900 text-gray-50 rounded-xl py-1.5 px-4
'>
            Download CV
          </button>
        </ul>
      </div>
      <div className='lg:hidden'>
        <MenuIcon />
      </div>
    </div>
  );
}

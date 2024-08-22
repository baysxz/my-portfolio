import { LocationIcon } from "../icons/LocationIcon";
import { IconDot } from "../icons/IconDot";

export const Status = () => {
  return (
    <div className='flex self-stretch flex-col justify-center grid-cols-2'>
      <div className='flex '>
        <LocationIcon />
        <p>Ulaanbaatar, Mongolia</p>
      </div>
      <div className='flex '>
        <IconDot />
        <p>Available for new projects</p>
      </div>
    </div>
  );
};

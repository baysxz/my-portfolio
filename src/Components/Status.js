import { LocationIcon } from "../icons/LocationIcon";
import { IconDot } from "../icons/IconDot";

export const Status = () => {
  return (
    <div className="flex self-stretch flex-col justify-center">
      <div className="flex ">
        <LocationIcon className="flex justify-center items-center w-6 h-6" />
        <p>Ulaanbaatar, Mongolia</p>
      </div>
      <div className="flex  ">
        <IconDot className="flex justify-center items-center w-6 h-6" />
        <p>Available for new projects</p>
      </div>
    </div>
  );
};

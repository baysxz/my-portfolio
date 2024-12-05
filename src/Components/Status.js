import { Dot, MapPin } from "lucide-react";

export const Status = () => {
  return (
    <div className="flex self-stretch flex-col justify-center">
      <div className="flex gap-2 text-base font-normal text-gray-600">
        <MapPin /> <p>Ulaanbaatar, Mongolia</p>
      </div>
      <div className="flex gap-2 text-base font-normal text-gray-600">
        <Dot className="text-green-600" /> <p>Available for new projects</p>
      </div>
    </div>
  );
};

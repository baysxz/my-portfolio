import Image from "next/image";
import profile from "../public/ll"; //// .public

export default function ProfilePic() {
  return <Image src={profile} alt='Picture of the author' />;
}

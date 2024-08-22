import Image from "next/image";
import profile from "../public/profile"; //// .public

// export default function ProfilePic() {
//   return <Image src={profile} alt='Picture of the author' />;
// }

export default function ProfilePicture() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Image
        alt='=profile'
        // Importing an image will
        // automatically set the width and height
        src={profile}
        sizes='100vw'
        // Make the image display full width
        style={{
          width: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}

import AvatarImage from "@/assets/img/image-avatar.png";
import Image from "next/image";

export default function Avatar() {
  return (
    <>
      <div className="h-12 w-12">
        <Image src={AvatarImage} alt="name" className="border-solid border-2 border-primary-orange rounded-full"/>
      </div>
    </>
  );
}

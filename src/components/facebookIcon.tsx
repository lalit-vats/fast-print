// import Image from "next/image";
import { Facebook } from "lucide-react";
// import FacebookImage from "../../public/images/facebook-logo.svg";

const FacebookIcon = () => {
  return (
    <div className=" fixed bottom-[110px] right-4 cursor-pointer mb-1 bg-blue-500 rounded-full p-1.5">
      <a href="https://www.facebook.com/fastprintdelhi/" target="_blank"
        className="block hover:scale-130 transition-transform duration-200"
      >
        <Facebook  color="white"/>
      </a>
    </div>
  );
};

export default FacebookIcon;
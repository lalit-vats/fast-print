// import Image from "next/image";
import { Facebook } from "lucide-react";
// import FacebookImage from "../../public/images/facebook-logo.svg";

const FacebookIcon = () => {
  return (
    <div className=" fixed bottom-[96px] right-4 cursor-pointer mb-1">
      <a href="https://www.facebook.com/profile.php?id=100076726903219/" target="_blank"
        className="block hover:scale-130 transition-transform duration-200"
      >
        <Facebook />
      </a>
    </div>
  );
};

export default FacebookIcon;
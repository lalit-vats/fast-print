import Image from "next/image";
import FacebookImage from "../../public/images/facebook-logo-png.png";

const FacebookIcon = () => {
  return (
    <div className=" fixed bottom-[96px] right-4 cursor-pointer mb-1">
      <a href="https://www.facebook.com/profile.php?id=100076726903219/" target="_blank">
        <Image src={FacebookImage} width={55} height={55} alt="whatsappIcon" />
      </a>
    </div>
  );
};

export default FacebookIcon;
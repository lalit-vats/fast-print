import Image from "next/image";
import InstagramImage from "../../public/images/instagram-logo-png.png";

const InstaIcon = () => {
  return (
    <div className="fixed bottom-[54px] right-4 cursor-pointer mb-1">
      <a href="https://www.instagram.com/hometechnician_ggn/" target="_blank">
        <Image src={InstagramImage} width={55} height={55} alt="whatsappIcon" />
      </a>
    </div>
  );
};

export default InstaIcon;


import Image from "next/image";
import WhatsappImage from "../../public/Images/WhatsAppIcon.png";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50">
      <a 
        href="https://api.whatsapp.com/send?phone=7303387506" 
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-110 transition-transform duration-200"
      >
        <Image 
          src={WhatsappImage} 
          width={48} 
          height={48} 
          alt="WhatsApp Contact" 
          className="w-auto h-auto"
        />
      </a>
    </div>
  );
};

export default WhatsappIcon;

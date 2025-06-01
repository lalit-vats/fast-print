import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 mb-1 bg-[#25D366] rounded-full p-1.5">
      <a 
        href="https://api.whatsapp.com/send?phone=9266822218" 
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-130 transition-transform duration-200"
      >
        <FaWhatsapp size={26} color="white"/>
      </a>
    </div>
  );
};

export default WhatsappIcon;

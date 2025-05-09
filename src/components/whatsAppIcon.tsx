import { FaWhatsapp } from "react-icons/fa";

const WhatsappIcon = () => {
  return (
    <div className="fixed bottom-5 right-4 z-50 mb-1">
      <a 
        href="https://api.whatsapp.com/send?phone=9266822218" 
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:scale-130 transition-transform duration-200"
      >
        <FaWhatsapp size={26}/>
      </a>
    </div>
  );
};

export default WhatsappIcon;

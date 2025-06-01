import { Instagram } from "lucide-react";

const InstaIcon = () => {
  return (
    <div className="fixed bottom-[66px] right-4 cursor-pointer mb-1 bg-gradient-to-r from-[#F9CE34] via-[#EE2A7B] to-[#6228D7] rounded-full p-1.5">
      <a href="https://www.instagram.com/fastprintdelhi/" target="_blank"
      className="block hover:scale-130 transition-transform duration-200"
      >
      
      <Instagram color="white"/>
      </a>
    </div>
  );
};

export default InstaIcon;


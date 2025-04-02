import Image from "next/image";
import { servicesData, ServiceData } from "../../lib/utils";

const Services = () => {
    return (
        <div className=" bg-gray-100 p-4">
            <h2 className="text-4xl text-center font-medium md:mt-14 mb-2.5 text-[#EF4136]">
                Our Main Services
            </h2>
            <h2 className="text-4xl mb-2 text-center font-medium md:text-6xl ">
                Professional digital printing
            </h2>
            <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 ">
                {servicesData.map((data: ServiceData, index: number) => {
                    return (
                        <div
                            key={index}
                            className="bg-white transition-colors duration-500 
                              hover:bg-gradient-to-bl from-blue-200
                              via-yellow-50 to-pink-300 shadow-2xl,
                              py-6 px-4 rounded-lg flex flex-col items-center min-h-[300px]"
                        >
                            <Image
                                src={data.img}
                                alt="Print Icon"
                                height={60}
                                className="transform transition-transform duration-300 hover:rotate-45"
                            />
                            <h3 className="text-2xl font-medium text-[#EF4136]">
                                {data.title}
                            </h3>
                            <p className="text-center font-medium  text-gray-700">
                                {data.description}
                            </p>
                        </div>
                    );
                })}
            </div>
            
        </div>
    );
};

export default Services;

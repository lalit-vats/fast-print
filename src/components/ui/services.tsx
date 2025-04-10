import Image from "next/image";
import { servicesData, ServiceData, AnimateServices,} from "../../lib/utils";

const Services = () => {
    return (
        <div className=" bg-gray-100 p-4">
            <h2 className="text-4xl text-center font-medium md:mt-14 mb-2.5 text-[#EF4136]">
                Our Main Services
            </h2>
            <h2 className="text-4xl mb-2 text-center font-medium md:text-6xl ">
                Professional digital printing
            </h2>
            <div className="gap-4">
                <div className=" grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-8 p-4 mb-4 ">
                    {servicesData.map((data: ServiceData, index: number) => {
                        return (
                            <div
                                key={index}
                                className="bg-white transition-colors duration-500 
                              hover:bg-gradient-to-bl from-blue-200
                              via-yellow-50 to-pink-300 shadow-2xl,
                              py-6 px-4 rounded-lg flex flex-col items-center min-h-[300px] gap-1.5"
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
                                <p className=" font-medium text-justify  text-gray-700">
                                    {data.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
                <div className="overflow-x-auto bg-amber-50 p-2">
  <div className="flex md:grid md:grid-cols-4 gap-4 mt-4 min-w-[450px]  md:w-full">
    {AnimateServices.map((d, i) => (
      <div key={i} className="flex flex-col justify-center items-center gap-7 p-2.5 min-w-[350px]">
        {i % 2 === 0 ? (
          <>
            <p className="text-[#EF4136] font-bold text-2xl">{d.sno}</p>
            <h2 className="text-2xl font-bold text-gray-700 text-center">{d.title}</h2>
            <p className="text-justify mb-5 text-wrap text-gray-600">{d.diccription}</p>
            <Image
              src={d.img}
              alt="service image"
              width={247}
              height={171}
              className="animate-[bounce_4s_infinite] translate-y-0.5 ease-linear"
            />
          </>
        ) : (
          <>
            <Image
              src={d.img}
              alt="service image"
              width={247}
              height={171}
              className="animate-[bounce_4s_infinite] -translate-y-0.5 ease-linear"
            />
            <p className="text-[#EF4136] font-bold text-2xl">{d.sno}</p>
            <h2 className="text-2xl font-bold text-gray-700 text-center">{d.title}</h2>
            <p className="text-justify text-gray-600">{d.diccription}</p>
          </>
        )}
      </div>
    ))}
  </div>
</div>

                {/* <div className="grid grid-cols-1 md:grid-cols-4 mt-4  bg-amber-50 p-2 ">
                    {AnimateServices.map((d, i) => {
                        return (
                            <div key={i} className="flex flex-col justify-center items-center gap-7  p-2.5 ">
                                {i % 2 === 0 ? (
                                    <>
                                        <p className="text-[#EF4136] font-bold text-2xl" >{d.sno}</p>
                                        <h2 className="text-2xl font-bold text-gray-700 text-center">{d.title}</h2>
                                        <p className="text-center mb-5">{d.diccription}</p>
                                        <Image src={d.img} alt="service image" width={247} height={171} className="  animate-[bounce_4s_infinite] translate-y-0.5 ease-linear   " /></>
                                ) : (
                                    <>
                                        <Image src={d.img} alt="service image" width={247} height={171} className="  animate-[bounce_4s_infinite] -translate-y-0.5 ease-linear   " />
                                        <p className="text-[#EF4136] font-bold text-2xl">{d.sno}</p>
                                        <h2 className="text-2xl font-bold text-gray-700 text-center">{d.title}</h2>
                                        <p className="text-center ">{d.diccription}</p>
                                    </>
                                )}
                            </div>
                        )
                    })}
                </div> */}
            </div>

        </div>
    );
};

export default Services;

"use client"
import { useState } from "react";
import Image from "next/image";

const Degree360 = () => {
    const [activePassengerIndex, setActivePassengerIndex] = useState(0);
    const [activeCommercialIndex, setActiveCommercialIndex] = useState(0);
    const [showPassenger, setShowPassenger] = useState(true);


    const passengerVideos = [
        { src: "/complete.mp4", thumbnail: "/compatele-body.png", label: "Complete body" },
        { src: "/front.mp4", thumbnail: "/front.png", label: "Front" },
        { src: "/Commercial-Cabin.mp4", thumbnail: "/cabin.png", label: "Cabin" },
        { src: "/trunk.mp4", thumbnail: "/trunk.png", label: "Trunk" },
        { src: "/extrior.mp4", thumbnail: "/exterior.png", label: "Exterior" },
    ];

    const commercialVideos = [
        { src: "/Commercial-Alpha.mp4", thumbnail: "/complete-body.png", label: "Complete body" },
        { src: "/Commercial-Engine.mp4", thumbnail: "/engine.png", label: "Engine" },
        { src: "/Commercial-Cabin.mp4", thumbnail: "/complete-body.png", label: "Cabin" },
    ];



    return (
        <section className="bg-[#000000] text-[#FFFFD6] lg:px-20 md:px-10 px-5 py-20">
            <h2 className="text-center text-4xl font-normal">
                Evolving the drive with <span className="font-bold">360-degree</span> <br />
                <span className="hidden md:block">comprehensive solutions</span>
            </h2>

            <div className="flex flex-col lg:flex-row pt-5 lg:gap-5">
                {/* Left sidebar with toggle buttons */}
                <div className="order-2 lg:order-1 lg:w-[25%] border-l-2 border-white lg:pl-10 md:pl-6 pl-4 lg:h-64 lg:pt-0 mt-10">
                    <button
                        onClick={() => setShowPassenger(true)}
                        className={`text-[25px] text-left ${showPassenger ? "text-white" : "text-gray-400"}`}
                    >
                        Passenger vehicles
                    </button>
                    <p className="pt-3">Revving up innovation from interior to exterior.</p>

                    <button
                        onClick={() => setShowPassenger(false)}
                        className={`text-[25px] pt-10 text-left ${!showPassenger ? "text-white" : "text-gray-400"}`}
                    >
                        Commercial vehicles
                    </button>
                    <p className="pt-3">Advancing engineering for heavy-duty vehicles.</p>
                </div>

                {/* Video content area */}
                <div className="lg:order-2 order-1 lg:w-[75%] lg:pl-32 lg:pt-0 pt-6">
                    {/* Passenger Vehicles Section */}
                    <div className={`transition-opacity duration-500 ${showPassenger ? "block" : "hidden"}`}>
                        <div className="flex justify-center lg:w-[90%]">
                            <video
                                autoPlay
                                muted
                                playsInline
                                key={passengerVideos[activePassengerIndex].src}
                                className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                            >
                                <source src={passengerVideos[activePassengerIndex].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="flex flex-wrap gap-5 mt-6 lg:pl-10 lg:pt-0 pt-6">
                            {passengerVideos.map((video, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActivePassengerIndex(index)}
                                    className="flex flex-col items-center focus:outline-none"
                                >
                                    <div className="w-20 h-16 rounded-md overflow-hidden transition-all duration-300">
                                        <Image
                                            src={video.thumbnail}
                                            width={50}
                                            height={45}
                                            alt={video.label}
                                            className={`w-full h-full object-cover transition-all duration-300 ${index === activePassengerIndex
                                                ? "brightness-100"
                                                : "brightness-50 grayscale"
                                                }`}
                                        />
                                    </div>
                                    <span
                                        className={`text-xs mt-2 transition-all ${index === activePassengerIndex ? "text-white" : "text-gray-400"
                                            }`}
                                    >
                                        {video.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Commercial Vehicles Section with ref for intersection observer */}
                    <div

                        className={`transition-opacity duration-500 ${!showPassenger ? "block" : "hidden"}`}
                    >
                        <div className="flex justify-center lg:w-[90%]">
                            <video
                                autoPlay
                                muted
                                playsInline
                                key={commercialVideos[activeCommercialIndex].src}
                                className="w-full h-full object-cover object-center rounded-xl shadow-lg"
                            >
                                <source src={commercialVideos[activeCommercialIndex].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="flex flex-wrap gap-5 mt-2 lg:pl-10 lg:pt-0 pt-6">
                            {commercialVideos.map((video, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveCommercialIndex(index)}
                                    className="flex flex-col items-center focus:outline-none"
                                >
                                    <div className="w-20 h-16 rounded-md overflow-hidden transition-all duration-300">
                                        <Image
                                            src={video.thumbnail}
                                            width={50}
                                            height={45}
                                            alt={video.label}
                                            className={`w-full h-full object-cover transition-all duration-300 ${index === activeCommercialIndex
                                                ? "brightness-100"
                                                : "brightness-50 grayscale"
                                                }`}
                                        />
                                    </div>
                                    <span
                                        className={`text-xs mt-2 transition-all ${index === activeCommercialIndex ? "text-white" : "text-gray-400"
                                            }`}
                                    >
                                        {video.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Degree360;
"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function Degree360() {
    const passengerVideos = [
        { src: "/complete.mp4", thumbnail: "/complete-body.png", label: "Complete body" },
        { src: "/front.mp4", thumbnail: "/front.png", label: "Front" },
        { src: "/Commercial-Cabin.mp4", thumbnail: "/cabin.png", label: "Cabin" },
        { src: "/trunk.mp4", thumbnail: "/trunk.png", label: "Trunk" },
        { src: "/exterior.mp4", thumbnail: "/exterior.png", label: "Exterior" },
    ];
    const commercialVideos = [
        { src: "/Commercial-Alpha.mp4", thumbnail: "/complete-body.png", label: "Complete body" },
        { src: "/Commercial-Engine.mp4", thumbnail: "/engine.png", label: "Engine" },
        { src: "/Commercial-Cabin.mp4", thumbnail: "/complete-body.png", label: "Cabin" },
    ];

    const [activePassengerIndex, setActivePassengerIndex] = useState(0);
    const [activeCommercialIndex, setActiveCommercialIndex] = useState(0);
    const [activeSection, setActiveSection] = useState<"passenger" | "commercial">("passenger");

    const sectionRef1 = useRef<HTMLDivElement>(null);
    const sectionRef2 = useRef<HTMLDivElement>(null);
    const video1Ref = useRef<HTMLVideoElement>(null);
    const video2Ref = useRef<HTMLVideoElement>(null);

    // IntersectionObserver to detect which section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === sectionRef1.current) {
                            setActiveSection("passenger");
                            video2Ref.current?.pause();
                            video1Ref.current?.play();
                        } else if (entry.target === sectionRef2.current) {
                            setActiveSection("commercial");
                            video1Ref.current?.pause();
                            video2Ref.current?.play();
                        }
                    }
                });
            },
            { threshold: 0.5 } // Trigger when 50% of the section is visible
        );

        if (sectionRef1.current) observer.observe(sectionRef1.current);
        if (sectionRef2.current) observer.observe(sectionRef2.current);

        return () => {
            if (sectionRef1.current) observer.unobserve(sectionRef1.current);
            if (sectionRef2.current) observer.unobserve(sectionRef2.current);
        };
    }, []);

    const playAndScrollTo = (
        videoRef: HTMLVideoElement | null,
        sectionRef: HTMLDivElement | null,
        section: "passenger" | "commercial"
    ) => {
        if (!videoRef || !sectionRef) return;

        setActiveSection(section); // Update active section on click
        sectionRef.scrollIntoView({ behavior: "smooth", block: "center" });

        setTimeout(() => {
            videoRef.play();
        }, 500);
    };

    return (
        <section className="bg-[#000000] text-white lg:px-20 md:px-10 px-5 py-20">
            {/* Sticky Header */}
            <h2 className="sticky top-16 text-center text-2xl font-semibold z-10 bg-[#000000]">
                Evolving the drive with <span className="font-bold">360-degree</span> <br />
                <span className="hidden md:block">comprehensive solutions</span>
            </h2>

            {/* Fixed Button Panel */}
            <div className="lg:sticky lg:mt-0 mt-20  lg:top-52 z-10 lg:w-[25%] flex flex-col items-start border-l-2 border-white pl-5">
                <button
                    onClick={() => playAndScrollTo(video1Ref.current, sectionRef1.current, "passenger")}
                    className={`text-2xl ${activeSection === "passenger" ? "text-white" : "text-gray-400"}`}
                >
                    Passenger vehicles
                </button>
                <p className="pt-3">Revving up innovation from interior to exterior.</p>
                <button
                    onClick={() => playAndScrollTo(video2Ref.current, sectionRef2.current, "commercial")}
                    className={`pt-5 text-2xl ${activeSection === "commercial" ? "text-white" : "text-gray-400"}`}
                >
                    Commercial vehicles
                </button>
                <p className="pt-3">Advancing engineering for heavy-duty vehicles.</p>
            </div>

            {/* Passenger Vehicles Video Section */}
            <div ref={sectionRef1} className="lg:min-h-screen flex flex-col lg:pl-[450px] lg:px-0 md:px-10 px-5">
                <div className="flex justify-center lg:w-[90%]">
                    <video
                        ref={video1Ref}
                        autoPlay
                        muted
                        playsInline
                        key={passengerVideos[activePassengerIndex].src}
                        className="w-full h-full object-cover object-center rounded-xl shadow-lg lg:pt-40 md:pt-20 pt-24"
                    >
                        <source src={passengerVideos[activePassengerIndex].src} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>

                <div className="flex flex-wrap gap-5 mt-3 lg:pl-10 lg:pt-0 pt-6">
                    {passengerVideos.map((video, index) => (
                        <button
                            key={index}
                            onClick={() => setActivePassengerIndex(index)}
                            className="flex flex-col items-center focus:outline-none"
                        >
                            <div className="w-20 h-16 rounded-md overflow-hidden transition-all duration-300">
                                <Image
                                    src={video.thumbnail}
                                    width={80}
                                    height={64}
                                    alt={video.label}
                                    className={`w-full h-full object-cover transition-all duration-300 ${index === activePassengerIndex ? "brightness-100" : "brightness-50 grayscale"
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

            {/* Commercial Vehicles Video Section */}
            <div ref={sectionRef2} className="lg:min-h-screen flex flex-col lg:pl-[450px] lg:px-0 md:px-10 px-5">
                <div className="flex justify-center lg:w-[90%]">
                    <video
                        ref={video2Ref}
                        autoPlay={activeSection === "commercial"} // Only autoPlay when section is active
                        muted
                        playsInline
                        key={commercialVideos[activeCommercialIndex].src}
                        className="w-full h-full object-cover object-center rounded-xl shadow-lg lg:pt-32 md:pt-20 pt-24"
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
                                    width={80}
                                    height={64}
                                    alt={video.label}
                                    className={`w-full h-full object-cover transition-all duration-300 ${index === activeCommercialIndex ? "brightness-100" : "brightness-50 grayscale"
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
        </section>
    );
}

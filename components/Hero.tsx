export default function HeroSection() {
    return (
        // <section className="relative h-screen overflow-hidden pt-16">
        //     {/* Background Video */}
        //     <div>
        //         <video
        //             autoPlay
        //             muted
        //             loop
        //             playsInline
        //             preload="auto"
        //             className="absolute top-0 left-0 w-full h-full object-cover"
        //         >
        //             <source src="/automotive.mp4" type="video/mp4" />
        //             Your browser does not support the video tag.
        //         </video>
        //     </div>


        //     {/* Overlay */}
        //     <div className="absolute inset-0 bg-black bg-opacity-60 z-0"></div>

        //     {/* Content */}
        //     <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        //         <span className="text-xl mb-4 text-[#EBEBED]">Driven by performance</span>
        //         <h2 className="text-lg md:text-4xl font-semibold">
        //             Soft trims and <span className="text-[#00BFFF]">NVH solutions</span> <br />
        //             for seamless rides
        //         </h2>
        //     </div>
        // </section>
        <section className="relative h-screen overflow-hidden pt-16 bg-blue-950">
            {/* Background Video */}
            <div className="absolute inset-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    className="top-0 left-0 w-full h-full object-cover object-center"
                >
                    <source src="/automotive.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>


            {/* Overlay */}
            <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

            {/* Content */}
            <div className="absolute  inset-0 z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <span className="text-xl mb-4 text-[#EBEBED] drop-shadow-md">
                    Driven by performance
                </span>
                <h2 className="text-lg md:text-4xl font-bold drop-shadow-md">
                    Soft trims and <span className="text-[#00BFFF]">NVH solutions</span> <br />
                    for seamless rides
                </h2>
            </div>
        </section>

    );
}
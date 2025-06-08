import Link from "next/link";
import Image from "next/image";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaPinterest,
    FaTwitter,
} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative h-auto lg:px-36 md:px-28 sm:px-14 px-5 py-10 bg-gradient-to-t from-[#B4D6F1] via-[#FCFDFF] 40 to-transparent overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute bottom-[-70px] right-[-70px] w-[480px] h-[480px] rounded-full z-0 bg-[#F5F6FC] opacity-50 blur-sm"></div>
            <div className="absolute bottom-[-30px] right-[-30px] w-[200px] h-[200px] rounded-full z-0 bg-[#F5F6FC] opacity-70 blur-md"></div>

            {/* Logo */}
            <div className="md:pt-5 pt-4 relative z-10">
                <Image
                    src="/logo.svg"
                    alt="Supreme Group logo"
                    height={200}
                    width={140}
                    loading="lazy"
                    className="bg-white"
                />
            </div>

            {/* Footer Grid */}
            <div className="relative z-10 text-[#787A79] md:py-5 grid lg:grid-cols-[1fr_1fr_1fr_1fr] md:grid-cols-[1fr_1fr] grid-cols-[1fr] gap-5">
                <div>
                    <div className="text-xl uppercase mb-3 font-semibold text-[#000000]">
                        Applications
                    </div>
                    <ul className="space-y-2">
                        <li className="pt-3">
                            <Link href="/">Apparel</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/about-us">Automotive</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/blog">Filtration</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/services">Customised Nonwoven</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="text-xl text-[#000000] uppercase mb-3 font-semibold">
                        Company
                    </div>
                    <ul className="space-y-2">
                        <li className="pt-3">
                            <Link href="/">Who We Are</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/about-us">Global Compentency</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/blog">Innovation</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/services">ESG Impact</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="text-xl text-[#000000] uppercase mb-3 font-semibold">
                        More
                    </div>
                    <ul className="space-y-2">
                        <li className="pt-3">
                            <Link href="/services/website-development">Contact Us</Link>
                        </li>
                        <li className="pt-3">
                            <Link href="/services/mobile-applications-development">Careers</Link>
                        </li>
                    </ul>
                </div>

                <div>
                    <div className="text-xl text-[#000000] uppercase mb-3 font-semibold">
                        Follow Us
                    </div>
                    <div className="flex gap-5 justify-center items-center mb-10 pt-3">
                        <Link
                            href="https://www.facebook.com/soEffortsSolution/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook account for Supreme Group"
                            title="Supreme Group Facebook"
                        >
                            <FaFacebook size={30} />
                        </Link>
                        <Link
                            href="https://instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram account for Supreme Group"
                            title="Supreme Group Instagram"
                        >
                            <FaInstagram size={30} />
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/so-efforts-solution/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Linkedin account for Supreme Group"
                            title="Supreme Group Linkedin"
                        >
                            <FaLinkedin size={30} />
                        </Link>
                        <Link
                            href="https://twitter.com/so_efforts_solu"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter account for Supreme Group"
                            title="Supreme Group Twitter"
                        >
                            <FaTwitter size={30} />
                        </Link>
                        <Link
                            href="https://in.pinterest.com/soEffortsSolution/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Pinterest account for Supreme Group"
                            title="Supreme Group Pinterest"
                        >
                            <FaPinterest size={30} />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="relative z-10 text-[#787A79] md:py-5 md:flex justify-between text-sm text-center md:mt-8">
                <p>© {new Date().getFullYear()} Supreme Group - All rights reserved</p>
                <div className="flex gap-2 justify-center items-center lg:pt-0 pt-3">
                    <span>Supreme House, 110, GIDC, Vapi, Gujarat, India</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;


import Image from "next/image";
function Navbar() {
    return (
        <header>
            <nav className="bg-[#FFFFFF] fixed z-20 md:px-11 px-5 w-full flex justify-between items-center h-16">
                <div>
                    <Image alt="Supreme Group logo - logo"
                        src='./logo.svg'
                        width={150}
                        height={85}
                        className=""></Image>
                </div>
            </nav>
        </header>
    )
}

export default Navbar
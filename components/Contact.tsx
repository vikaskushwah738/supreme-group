
function Contact() {
    return (
        <section className="bg-[rgb(0,106,188)] flex flex-col lg:flex-row text-[#FFFFFF] lg:px-36 md:px-16 px-5 py-20">
            <div className="lg:w-[40%] order-2 lg:order-1 ">
                <h2 className="text-4xl font-normal hidden lg:block"><span className="border-b-2 border-gray-50 pb-2">Get</span> in touch</h2>
                <ul className="space-y-5 pt-10 ">
                    <li className="text-xl">For general enquiries</li>
                    <li> <span className="text-xl">Address :</span> <br />
                        110, 16th Road, Chembur, Mumbai - 400071</li>
                    <li><span className="text-xl">Phone :</span> <br />
                        +91 22 25208822
                    </li>
                    <li><span className="text-xl">Email :</span> <br />
                        info@supremegroup.co.in</li>

                </ul>
            </div>
            <div className="lg:w-[60%] lg:order-2 order-1">
                <h2 className="text-4xl font-normal lg:hidden block pb-10"><span className="border-b-2 border-gray-50 pb-2">Get</span> in touch</h2>
                <form className="space-y-3">
                    {/* Full Name */}
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="full Name"
                            className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div >
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
                            required
                        />
                    </div>

                    {/* Company */}
                    <div >

                        <input
                            type="text"
                            name="company"
                            placeholder="Company"
                            className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none "
                        />
                    </div>

                    {/* Message */}
                    <div >

                        <textarea
                            name="message"
                            rows={4}
                            placeholder="Message"
                            className="w-full border-b border-gray-300 px-2 py-2 focus:outline-none"
                            required
                        ></textarea>
                    </div>

                    {/* Send Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className=" hover:bg-white hover:text-black bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-xl transition duration-300"
                        >
                            Send
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact
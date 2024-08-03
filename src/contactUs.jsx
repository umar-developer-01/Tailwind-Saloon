import Instagram from "./assets/instagram.png";
import Whatsapp from "./assets/whatsapp.jpg"

const ContactUs = () => {
    return (
        <>
            <div className="bg-slate-900 px-4 py-6">
                <div className="flex w-full h-[17rem] mx-auto rounded-lg">
                    <div className=" flex flex-col w-full">
                        <div className="bg-pink-500 h-24 flex items-center justify-center">
                            <p className="text-white text-2xl mt-4 text-center">Contact Us</p>
                        </div>

                        <div className="bg-slate-700 grow p-8 flex flex-col justify-around items-center gap-4">
                            <div className=" flex items-center gap-2">


                                <a href="https://www.instagram.com/mramshairandmakeupacademy/" target="_blank" rel="noopener noreferrer">
                                    <img src={Instagram} alt="instagram" className="h-8 w-8 rounded-lg" />
                                </a>

                                <p className="text-center  text-white">Instagram</p>

                            </div>
                            <div className="flex items-center gap-2">
                                <a href="whatsapp://send?phone=918400783879">
                                    <img src={Whatsapp} alt="whatsapp" className="h-8 w-8 rounded-lg" />
                                </a>
                                <p className="text-center   text-white">Whatsapp</p>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs
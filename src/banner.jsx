

const Banner = () => {

    return (
        <>
            <div className="bg-slate-900 px-4 py-6">
                <div className="flex w-full h-[27rem] mx-auto rounded-lg">
                    <div className=" flex flex-col">
                        <div className="bg-pink-500 h-24 flex items-center justify-center">
                            <p className="text-white text-center">India's No 1 Award Winning Beauty And Makeup Academy</p>
                        </div>
                        <div className="bg-slate-700 grow">
                            <p className="text-center mt-6 text-4xl text-white">Classes Updates</p>
                            <div className="flex flex-col items-start gap-6 mt-4 pl-9 ">
                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Monday to Friday</p>
                                    <p className="text-pink-500">Regular Classes</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Saturday</p>
                                    <p className="text-pink-500">Special Classes</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <p className="text-gray-400">Sunday</p>
                                    <p className="text-pink-500">Weekend Batches</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Banner
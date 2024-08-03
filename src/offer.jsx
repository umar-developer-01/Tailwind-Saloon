

const Offer = () => {
    return (
        <>
            <div className="bg-slate-900 px-4 py-6">
                <div className="flex w-full h-[27rem] mx-auto rounded-lg">
                    <div className=" flex flex-col w-full">
                        <div className="bg-pink-500 h-24 flex items-center justify-center">
                            <p className="text-white text-2xl mt-4 text-center">What We Offer</p>
                        </div>
                        <div className="bg-slate-700 grow">
                            <p className="text-center mt-6 text-4xl text-white">Our Courses</p>
                            <div className="flex flex-col items-start gap-6 mt-4 pl-9 ">
                                <div className="flex flex-col gap-2">
                        
                                    <p className="text-pink-500">Makeup Course</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                 
                                    <p className="text-pink-500">Hairs Course</p>
                                </div>

                                <div className="flex flex-col gap-2">
                                    
                                    <p className="text-pink-500">Nail Course</p>
                                </div>

                                
                                <div className="flex flex-col gap-2">
                                    
                                    <p className="text-pink-500">Cidesco Course</p>
                                </div>
                                <div className="flex flex-col gap-2">
                                    
                                    <p className="text-pink-500">Cosmetology Course</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Offer


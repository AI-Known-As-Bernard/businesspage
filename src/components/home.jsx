

const HomeContent = () => {

    return (
        <>
            <section className=" bg-blueGray-200 -mt-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-1 shadow-lg rounded-lg">
                                <div className="px-4 flex-auto">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center mt-16">
                        <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                            <h3 className="text-3xl mb-2 mt-10 font-semibold leading-normal">
                                Serving Phoenix, Glendale and the valley since 1998
                            </h3>
                            <p className="text-lg font-light leading-relaxed mt-6 mb-4 text-blueGray-600">
                                QuikTek's experienced computer repair technicians have been repairing computers since 1998. We provide a broad range of services to cater to our client's needs, including virus/spyware removal, laptop repair, desktop repair and network repair. We can repair your computer in our clean, well stocked shop, or provide service on-site, in your home or office. Pickup and delivery service is also available so you can take advantage of lower in-shop pricing without leaving your home or office.
                            </p>
                            <p className="text-lg font-light leading-relaxed mt-0 mb-8 text-blueGray-600">
                                Because of our training and real-world experience, we can provide you with solutions to virtually any computer or networking problem. Accountability is just as important as expertise and both are as important to us as they are to you. We will never over-promise or under-deliver. We'll do exactly what we say we'll do. In other words, we honor our commitments. It's why our very first customer – back in 1998 – is still a QuikTek customer today.We encourage you to call us at 602-290-1586 so we can further discuss your computer needs.
                            </p>
                        </div>
                        <div className="w-full md:w-4/12 px-0 mr-auto ml-auto">
                            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-2 shadow-lg rounded-lg bg-blue-800">
                                <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full align-middle rounded-t-lg" />
                                <blockquote className="relative p-8 mb-4">
                                    <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 100" className="absolute left-0 w-full block h-95-px -top-94-px">
                                    </svg>

                                    <h4 className="text-xl font-bold text-white">
                                        Computer Repair Services for the valley
                                    </h4>
                                    <p className="text-md font-light mt-2 text-white">
                                        We supply unrivaled computer repair in and around the following areas: Phoenix, Glendale, Peoria and around the west valley.
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeContent
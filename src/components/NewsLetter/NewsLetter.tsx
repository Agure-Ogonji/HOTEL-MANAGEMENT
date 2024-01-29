const NewsLetter = () =>{
    return (
        <section className="container mx-auto px-4">
            <form action="" className="bg-primary text-white px-4 rounded-xl md:rounded-[30px] flex flex-col justify-center items-center py-6 md:py-4">
                <p className="md:font-semibold text-lg md:text-xl text-center mb-3">
                    EXPLORE MORE ABOUT OUR HOTEL
                </p>
                <h6 className="md:font-semibold font-medium text-2xl md:text-3xl lg:text-5xl text-center">
                    SIGN UP FOR OUR NEWSLETTER
                </h6>

                <div className="flex-col justify-center w-full md:flex-row flex pt-12">
                    <input type="email" placeholder="YOUR EMAIL" className="bg-[#026057] h-11 md:h-16 mb-2 md:mb-0 rounded-xl pl-6 md:mr-5 md:w-[452px] text-white placeholder:text-white focus:outline-none" />

                    <button className="btn-tertiary" type="button">SUBSCRIBE</button>
                </div>
            </form>
        </section>
    );
};

export default NewsLetter;
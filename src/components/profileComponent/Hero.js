import React from 'react'

const Hero = () => {
    return (
        <section className=" body-font">
            <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-5xl text-6xl mb-4 font-bold">Unlock Professional Insights with ScrapeKart</h1>
                    <p className="mb-8 md:text-lg leading-relaxed">To unleash the full potential of our LinkedIn Scraper Extraordinaire, simply enter the LinkedIn URL you wish to mine below. Whether it's for market research, talent acquisition, or networking intelligence, let ScrapeKart be your guide through the vast landscape of LinkedIn. Type the LinkedIn URL into the box below and let the scraping adventure begin!.</p>
                    <div className="flex w-full md:justify-start justify-center items-end">
                        <div className="relative mr-4 md:w-full lg:w-full xl:w-1/2 w-2/4">
                            <label for="hero-field" className="leading-7 text-sm ">Linkedin URL</label>
                            <input type="text" id="hero-field" name="hero-field" className="w-full bg-gray-100 rounded border bg-opacity-50 border-gray-300 focus:ring-2 focus:ring-indigo-200 focus:bg-transparent focus:border-indigo-500 text-base outline-none tpy-1 px-3 leading-8 transition-colors duration-200 ease-in-out md:h-11" />
                        </div>
                        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded md:text-lg max-h-11 text-sm ">Get it scrapped</button>
                    </div>
                    <p className="text-sm mt-2 mb-8 w-full">Put linkedin url of account you want to scrap</p>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                </div>
            </div>
        </section>
    )
}

export default Hero
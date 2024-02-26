import aboutPageBackgroundImage from '../assets/about.png'

const AboutPage = () => {
    return (
        <div className='w-full'>
            <img className="w-auto h-96 sm:h-screen mt-[5rem] sm:mt-[4rem]" src={aboutPageBackgroundImage} alt='aboutPageBackgroundImage' />
            <div className='mt-24 flex flex-col items-center justify-center'>
                <div className="text-center text-neutral-900 text-3xl font-bold font-inter leading-9 mb-6 p-1">Don’t squeeze in a sedan when you could relax in a van.</div>
                <div className="w-[87%] sm:w-[92%] lg:w-[77%] xl:w-[51%] text-neutral-900 text-base font-medium font-inter leading-snug mb-24">
                    Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    <br />(Hitch costs extra 😉)<br /><br />Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </div>
                <div className="bg-amber-200 mb-28 w-[87%] sm:w-[92%] lg:w-[77%] xl:w-[51%] rounded-md">
                    <div className="w-full m-[1rem] sm:m-[3rem]">
                        <p className="w-full text-neutral-900 text-lg sm:text-2xl font-bold font-inter leading-loose">Your destination is waiting.<br />Your van is ready.</p>
                        <button className="w-44 h-12 mt-10 bg-neutral-900 rounded-lg justify-center items-center inline-flex">
                            <span className="text-white text-base font-bold font-inter leading-normal">Explore our vans</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
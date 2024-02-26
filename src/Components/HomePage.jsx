import { Link } from 'react-router-dom'
import homePagebackgroundImage from '../assets/BackgroundImage.png'

const HomePage = () => {
    return (
        <div className="relative">
            <img className="w-full h-[86vh] sm:h-[89.4vh]" src={homePagebackgroundImage} alt='homePagebackgroundImage'/>
            <div className="absolute p-5 inset-0 flex items-center justify-center text-white h-[100vh]">
                <div className="items-center text-center flex flex-col">
                    <span className="text-4xl font-extrabold font-inter leading-10 mb-3">You got the travel plans, we got the travel vans.</span>
                    <span className="text-base font-medium font-inter leading-normal mb-6">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</span>
                    <Link to='/Vans' className='w-full mt-4'>
                        <button className='w-full h-12 bg-orange-400 rounded' type="button">Find your van</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage
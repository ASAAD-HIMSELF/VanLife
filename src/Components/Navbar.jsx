import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import signInIcon from '../assets/Icon.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (pathname) => {
        return location.pathname === pathname;
    };

    return (
        <nav className={`bg-orange-50 border-gray-200 dark:bg-gray-900 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="flex items-center justify-between mx-auto p-4">
                <div className="w-full text-black text-xl md:text-2xl font-black leading-10">
                    <NavLink to="/" end>#VANLIFE</NavLink>
                </div>
                <div className="w-auto flex">
                    <ul className="font-medium flex gap-3 sm:gap-10 p-4">
                        <li>
                            <NavLink to="/Host" end className={`${isActive('/Host') || isActive('/Host/Income') || isActive('/Host/Vans') || isActive('/api/Host/Vans/1') || isActive('/api/Host/Vans/2') || isActive('/api/Host/Vans/6') || isActive('/Host/Reviews') ? 'hover:underline underline font-bold' : ''}`}>Host</NavLink>
                        </li>
                        <li>
                            <NavLink to="/About" className={`${isActive('/About') ? 'hover:underline underline font-bold' : ''}`}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Vans" className={`${isActive('/Vans') ? 'hover:underline underline font-bold' : ''}`}>Vans</NavLink>
                        </li>
                        {location.pathname === '/signIn' && <img className='w-[1.13rem] h-[1.13rem] mt-1' src={signInIcon} alt="Icon" />}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const HostNavbar = () => {
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
        <nav className={`bg-orange-50 mt-20 h-40 flex items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
            <div className="p-4">
                <ul className='flex flex-row items-center gap-3 sm:gap-12 text-[1.06rem] sm:text-xl'>
                    <li>
                        <NavLink to="/Host" end className={({ isActive }) => (isActive ? 'hover:underline underline font-bold' : '')}>Dashboard</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Host/Income" end className={({ isActive }) => (isActive ? 'hover:underline underline font-bold' : '')}>Income</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Host/Vans" end className={`${isActive('/Host/Vans') || isActive('/api/Host/Vans/1') || isActive('/api/Host/Vans/2') || isActive('/api/Host/Vans/6') ? 'hover:underline underline font-bold' : ''}`}>Vans</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Host/Reviews" end className={({ isActive }) => (isActive ? 'hover:underline underline font-bold' : '')}>Reviews</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default HostNavbar;
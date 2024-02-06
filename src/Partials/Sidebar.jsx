import React, { useState }  from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { HiBars2 } from "react-icons/hi2";
import { AiOutlineClose} from 'react-icons/ai';
import { GoArrowUpRight } from "react-icons/go";
import Logo from "../assets/logo.png";

export default function Sidebar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    const SidebarData = [
        { title: 'z21 Thesis', path: '/thesis', cName: 'nav-text' },
        { title: 'About us', path: '/portfolio', cName: 'nav-text' },
        { title: 'Portfolio', path: '/investment', cName: 'nav-text' },
        { title: 'Community', path: '/community', cName: 'nav-text' },
    ];

    return (
        
        <header className="bg-black fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16">
            <div className="container">
                <IconContext.Provider value={{ color: '#fff' }}>
                    <div className="flex justify-between items-center w-full h-[80px]">
                        <Link to="#" className="ml-4 text-5xl" onClick={showSidebar}>
                        <HiBars2 />
                        </Link>
                        <div className="logo">
                            <a href="/" className="navbar-brand">
                                <img src={Logo} alt='' height="28" width="182" />
                            </a>
                        </div>
                        <div className="contact-nav bg-[#DE5126] px-8 py-4 rounded-full hidden md:block">
                            <Link to="/" className="text-white text-xl font-semibold flex justify-center items-center">Contact us <GoArrowUpRight /></Link>
                        </div>
                    </div>
                    <nav className={sidebar ? 'nav-menu bg-[#DE5126] w-[100%] md:w-[50%] h-screen fixed top-0 left-0 px-16 md:px-32 transition-all duration-300 delay-500' : 'nav-menu hidden left-[-100%] transition-all duration-300 delay-500'}>
                        <div className='navbar-toggle'>
                            <Link to='#' className='ml-4 text-white text-5xl' onClick={showSidebar}>
                                <AiOutlineClose />
                            </Link>
                        </div>
                        <ul className=' mt-4' onClick={showSidebar}>
                            {SidebarData.map((item, index) => (
                                <li key={index} className={`py-12 ${index !== SidebarData.length - 1 ? 'border-b-[1px] border-white' : ''} ${item.cName}`}>
                                    <Link to={item.path} className="text-white text-5xl">
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </IconContext.Provider>
            </div>
        </header>
        
    )
}

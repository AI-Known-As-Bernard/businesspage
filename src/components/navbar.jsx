import logo from '../components/images/bussinessLogo.png'
import { Link } from "react-router-dom";
import '../pages/Home.css'
const Navbar = () => {

    const loadMe = () => {
        const button = document.querySelector('#menu-button');
        const menu = document.querySelector('#menu');
        button.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
    return (
        <>
            <header onLoad={() => loadMe()}>
                <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0px-4 text-lg text-gray-700 bg-black">
                    <div>
                        <a href="https://react-icons.github.io/react-icons/icons?name=gi">
                            <img src={logo} width='300' height='75' className='ml-4' alt='logo' />
                        </a>
                    </div>

                    <svg xmlns="http://www.w3.org/2000/svg" id="menu-button" className="h-8 w-8 cursor-pointer md:hidden block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>

                    <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                        <ul className=" mr-4 pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                            <li className="md:p-4 p-2 block hover:text-blue-400 text-xl">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="md:p-4 p-2 block hover:text-blue-400 text-xl">
                                <Link to="/about">About Us</Link>
                            </li>
                            <li className="md:p-4 p-2 block hover:text-blue-400 text-xl">
                                <Link to="/support">Support</Link>
                            </li>
                            <li className="md:p-4 p-2 block hover:text-blue-400 text-xl">
                                <Link to="/services">Services</Link>
                            </li>
                            <li className="md:p-4 p-2 block hover:text-blue-400 text-xl">
                                <Link to="/contact">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;
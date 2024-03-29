import logo from '../components/images/businessInitials.png'
import { IoCallSharp } from 'react-icons/io5'
import { MdEmail } from 'react-icons/md'
import { Link } from "react-router-dom";

const Footer = () => {

    return (
        <>
            <div>
                <footer className="text-gray-600 body-font bg-gray-700">
                    <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                            <a href='#0' className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                                <img src={logo} alt='logo' className="w-28" />
                                <span className="ml-3 text-xl text-white">QuikTek Computers</span>
                            </a>
                        </div>
                        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                            <div className="lg:w-1/6 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Site Map</h2>
                                <nav className="list-none mb-10">
                                    <li className="text-white hover:text-red-300">
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li className="text-white hover:text-red-300">
                                        <Link to="/about">About Us</Link>
                                    </li>
                                    <li className="text-white hover:text-red-300">
                                        <Link to="/support">Support</Link>
                                    </li>
                                    <li className="text-white hover:text-red-300">
                                        <Link to="/services">Services</Link>
                                    </li>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 flex justify-center">Contact Us</h2>
                                <nav className="list-none mb-10">
                                    <table className="flex justify-center"><tbody>
                                        <tr><td><a className="text-white hover:text-red-300 flex" href="tel:+6022901586"><IoCallSharp />: 602-290-1586</a></td></tr>
                                        <tr><td><a className="text-white hover:text-red-300 flex" href="mailto:Dave@QuikTekComputer.com"><MdEmail />: @Dave</a></td></tr>
                                    </tbody>
                                    </table>
                                </nav>
                            </div>
                            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3 flex justify-center">Hours Of Operation</h2>
                                <nav className="list-none mb-10">
                                    <table className="text-white flex justify-center">
                                        <tbody>
                                            <tr><th>Mon-Fri:&nbsp;</th><td>9am - 5pm</td></tr>
                                            <tr><th>Saturday:&nbsp;</th><td>10am - 2pm</td></tr>
                                            <tr><th>Sunday:&nbsp;</th><td>Closed</td></tr>
                                        </tbody>
                                    </table>
                                </nav>
                            </div>
                            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                                <h2 className="title-font font-bold text-white tracking-widest text-md mb-3">Location</h2>
                                <nav className="list-none mb-2 flex justify-center">
                                    <iframe title="storeLocation" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13289.133522244032!2d-112.186368!3d33.6238936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5d77990170c86477!2sQuikTek%20Computer%20Repair%20and%20Upgrade!5e0!3m2!1sen!2sus!4v1654416978812!5m2!1sen!2sus" width="150" height="150" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">Frame</iframe>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-900">
                        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                            <p className="text-white text-sm text-center sm:text-left">© 2022 Bernard —
                                <a href="#0" rel="noopener noreferrer" className="text-gray-400 ml-1" target="_blank">@Developer</a>
                            </p>
                            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                                <a href="#0" className="text-gray-200">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                    </svg>
                                </a>
                                <a href="#0" className="ml-3 text-gray-200">
                                    <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                    </svg>
                                </a>
                                <a href="#0" className="ml-3 text-gray-200">
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                    </svg>
                                </a>
                                <a href="#0" className="ml-3 text-gray-200">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                                        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                        <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                    </svg>
                                </a>
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer
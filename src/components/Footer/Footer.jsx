
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <h1 className="text-2xl font-bold">My Portfolio</h1>
                </div>
                <div className="flex space-x-4">
                    <a href="https://facebook.com" className="text-white hover:text-gray-400">
                        <FaYoutube size={24} />
                    </a>
                    <a href="https://twitter.com" className="text-white hover:text-gray-400">
                        <FaXTwitter size={24} />
                    </a>
                    <a href="https://linkedin.com" className="text-white hover:text-gray-400">
                        <FaLinkedin size={24} />
                    </a>
                    <a href="https://github.com" className="text-white hover:text-gray-400">
                        <FaGithub size={24} />
                    </a>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
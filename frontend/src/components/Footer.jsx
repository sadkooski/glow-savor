import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-white  pmd:b-[5vw] md:pt-[5vw] md:mt-[3vw] w-full">
            <div className="md:mx-[8vw] px-[6vw] md:px-0">
                {/* Główna sekcja footer */}
                <div className="flex flex-col md:flex-row items-center justify-between border-b-1 pt-25 md:pt-0 border-black md:pb-[3vw]">
                    {/* Tekst po lewej */}
                    <p className="md:text-[0.6vw] text-xs">&copy; 2025 GLOW&SAVOR CREATIONS</p>

                    {/* Linki na środku */}
                    <div className="flex md:gap-[6vw] md:text-[1.2vw] pt-10 md:mx-auto">
                        <Link to="https://instagram.com" target="_blank" className="hover:text-blue-400 md:pr-[12vw]">
                        <img src="assets/icons/instagram.svg" alt="Instagram" className="w-12 md:w-[2vw] hover:opacity-70 hover:fill-blue-400" />
                        </Link>
                    </div>

                    {/* Logo po prawej */}
                    <Link to="/" className="hover:text-blue-400 md:w-[12vw] w-40 md:absolute md:left-[81vw]">
                    <img className="" src="/assets/icons/2.png" alt="" />
                    </Link>
                </div>

                {/* Dolna sekcja z nawigacją */}
                <div className="flex flex-col md:flex-row justify-center md:gap-[15vw] gap-20 md:text-[1.5vw] text-4xl md:pt-[1.5vw] md:pb-[4vw] py-15 md:py-0 font-[Didonesque]">
                    <Link to="/" className="hover:text-blue-400">Home</Link>
                    <Link to="/blog" className="hover:text-blue-400">Blog</Link>
                    <Link to="/about" className="hover:text-blue-400">O Mnie</Link>
                    <Link to="/contact" className="hover:text-blue-400">Kontakt</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import { Link } from "@inertiajs/react";
import { useState, useEffect } from "react";
import NavLink from "./Header/Navlink";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const NAV_LINKS = [
        { href: "/", label: "Inicio" },
        { href: "/cursos", label: "Cursos" },
        { href: "/servicios", label: "Servicios" },
        { href: "/contacto", label: "Contactos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header
                className={`w-full fixed top-0 z-50 transition-all duration-500 ${
                    mobileMenuOpen
                        ? "bg-blue-900/40 backdrop-blur-xl"
                        : isScrolled
                          ? "bg-gradient-to-br from-blue-950 via-blue-900 to-blue-900/80 py-2 shadow-lg backdrop-blur-md"
                          : "bg-gradient-to-br from-blue-950 via-blue-900/90 to-blue-900/80 py-5 shadow-lg backdrop-blur-sm"
                }`}
            >
                <div className="container mx-auto flex justify-between items-center px-6">
                    <Link href="/" className="flex items-center">
                        <img
                            src="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1770049923/Captura_de_pantalla_2026-02-02_122929-removebg-preview_unf5ci.png"
                            alt="Plotterly Logo"
                            className={`transition-all duration-300 object-contain ${
                                isScrolled ? "h-12 w-32" : "h-16 w-40"
                            }`}
                        />
                    </Link>
{/* Desktop Navigation 
                    <nav className="hidden lg:flex items-center gap-8 font-semibold">
                        {NAV_LINKS.map((link) => {
                            const isActive = link.href === "/";
                            return (
                                <NavLink
                                    key={link.href}
                                    href={link.href}
                                    className={`text-lg ${
                                        isActive
                                            ? "text-[#33CCCC]"
                                            : "text-white hover:text-[#33CCCC]"
                                    }`}
                                >
                                    {link.label}
                                </NavLink>
                            );
                        })}
                    </nav>
                    */}

                  {/*  <button
                        className="lg:hidden text-white transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg
                                className="w-8 h-8 border border-white/20 rounded-lg p-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                    */}
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ${
                        mobileMenuOpen
                            ? "max-h-96 border-t border-white/10"
                            : "max-h-0"
                    }`}
                >
                    <nav className="container mx-auto px-6 py-8 flex flex-col gap-6">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white hover:text-[#33CCCC] font-bold py-2 text-2xl transition-all duration-300"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>
                </div>
            </header>
        </>
    );
}

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size change
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Set `isMobile` to true if screen width < 768px
    };

    // Run once on mount
    handleResize();

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);

    // Disable scrolling when the mobile menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <nav className="bg-red-600 text-white p-4 flex justify-between items-center">
      {/* Logo */}
      <Link href="/" className="nav-logo">
        <Image
          src="/CS Club Mascot Logo.png"
          alt="CS Club Logo"
          width={120}
          height={80}
          className="hover:opacity-80 cursor-pointer object-contain"
        />
      </Link>

      {/* Mobile Hamburger Menu Button */}
      {isMobile && (
        <button
          className="flex items-center text-white z-50"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Desktop Navigation Links */}
      {!isMobile && (
        <div className="flex space-x-6">
          <Link href="/" className="hover:bg-white hover:text-red">Home</Link>
          <Link href="/tutorials" className="hover:bg-white hover:text-red">Tutorials</Link>
          <Link href="/games" className="hover:bg-white hover:text-red">Games</Link>
          <Link href="/about" className="hover:bg-white hover:text-red">About Us</Link>
          <Link href="/news" className="hover:bg-white hover:text-red">News</Link>
          <Link href="/members" className="hover:bg-white hover:text-red">Members List</Link>
          <Link href="/signin" className="hover:bg-white hover:text-red">Sign In / Register</Link>
        </div>
      )}

      {/* Mobile Navigation Overlay */}
      {isMobile && isMobileMenuOpen && (
        <div className="fixed inset-0 bg-red-600 flex flex-col items-center justify-center space-y-8 z-40">
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-white"
            onClick={toggleMobileMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Mobile Navigation Links */}
          <Link href="/" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>Home</Link>
          <Link href="/tutorials" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>Tutorials</Link>
          <Link href="/games" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>Games</Link>
          <Link href="/about" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>About Us</Link>
          <Link href="/news" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>News</Link>
          <Link href="/members" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>Members List</Link>
          <Link href="/signin" className="text-xl hover:text-gray-300" onClick={toggleMobileMenu}>Sign In / Register</Link>
        </div>
      )}
    </nav>
  );
}
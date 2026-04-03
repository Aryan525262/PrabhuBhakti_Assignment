"use client";
import { Menu, X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const NavbarSection = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Courses", id: "courses" },
    { label: "Ebooks", id: "ebooks" },
    { label: "Webinars", id: "webinars" },
    { label: "About", id: "about" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 h-16 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="p-2 rounded-xl shadow">
            <Image src="/logo.png" alt="logo" width={25} height={25} />
          </div>
          <h1 className="text-lg font-bold text-black">PrabhuBhakti</h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-sm font-semibold text-gray-600 hover:text-black transition"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Section */}
        <div className="hidden md:flex items-center gap-4">
          <ShoppingBag className="text-gray-600 hover:text-black cursor-pointer" size={20} />
          <button className="px-4 py-2 text-sm font-semibold text-white bg-black rounded-full hover:bg-gray-800 transition">
            Sign In
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ShoppingBag className="text-gray-600" size={20} />
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} className="text-gray-600 hover:text-black cursor-pointer" /> : <Menu size={24} className="text-gray-600 hover:text-black cursor-pointer"/>}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-left text-gray-700 font-medium"
            >
              {link.label}
            </button>
          ))}

          <button className="mt-2 px-4 py-2 bg-black text-white rounded-full">
            Sign In
          </button>
        </div>
      )}
    </header>
  );
};

export default NavbarSection;
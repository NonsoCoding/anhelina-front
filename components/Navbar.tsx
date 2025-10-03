"use client";

import { useState } from "react";
import { MessageSquareIcon, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Meet Anhelina", link: "./" },
    { name: "About", link: "./" },
    { name: "Explore plans", link: "./" },
    { name: "FAQ", link: "./" },
  ];

  return (
    <nav className="w-full shadow-xl sticky top-0 bg-gray-900 z-50">
      <div className="flex items-center justify-between w-[90%] md:w-[90%] mx-auto py-4">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <MessageSquareIcon size={25} color="white" className="mt-1" />
          <p className="text-xl md:text-2xl text-white font-bold">Anhelina</p>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="relative text-white py-1 text-sm md:text-[14px] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-gray-200 after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </div>
          <button className="border border-white text-sm md:text-[14px] bg-white text-gray-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Try Anhelina
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Side Navigation for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 shadow-lg transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-700">
          <p className="text-white text-lg font-bold">Menu</p>
          <button className="text-white" onClick={() => setIsOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <div className="flex flex-col gap-6 p-6">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="text-white text-sm font-medium hover:text-gray-300 transition-colors"
            >
              {item.name}
            </a>
          ))}
          <button className="border border-white text-sm bg-white text-gray-900 font-semibold px-5 py-2 rounded-lg hover:bg-gray-200 transition-colors">
            Try Anhelina
          </button>
        </div>
      </div>

      {/* Overlay Background */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}
    </nav>
  );
};

export default Navbar;


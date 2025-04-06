import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { PiArrowUpRightBold } from "react-icons/pi";
// import { useRouter } from "@tanstack/react-router";

export const Navbar = () => {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-4 z-50 mx-auto w-full max-w-[1080px]">
      <div className="mx-2 flex items-center justify-between rounded-full bg-white px-4 py-1 md:mx-0">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-[36px]" />
          <h1 className="text-2xl font-bold">BTN</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden space-x-6 md:flex">
          <a href="/" className="text-gray-700 hover:text-black">
            Home
          </a>
          <a href="/about" className="text-gray-700 hover:text-black">
            About
          </a>
          <a href="/contact" className="text-gray-700 hover:text-black">
            Contact
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button className="text-gray-700 md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>

        <div className="hidden h-full items-center gap-2 md:flex">
          <h2 className="font-bold">Contact Us</h2>
          <div className="bg-primary-700 flex h-7 w-7 items-center justify-center rounded-full text-white">
            <PiArrowUpRightBold className="w-4" />
          </div>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {isOpen && (
        <nav className="mt-3 space-y-2 px-2 md:hidden">
          <a href="/" className="block text-gray-700 hover:text-black">
            Home
          </a>
          <a href="/about" className="block text-gray-700 hover:text-black">
            About
          </a>
          <a href="/contact" className="block text-gray-700 hover:text-black">
            Contact
          </a>
        </nav>
      )}
    </header>
  );
};

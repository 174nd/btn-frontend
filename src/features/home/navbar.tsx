import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { PiArrowUpRightBold } from "react-icons/pi";
// import { useRouter } from "@tanstack/react-router";

export const Navbar = () => {
  // const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const link = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Products", href: "/products" },
    // { name: "Why Choose Us", href: "/why-choose-us" },
    // { name: "Testimony", href: "/testimony" },
    // { name: "Contact Us", href: "/contact" },
    // { name: "Privacy & Policy", href: "/privacy-policy" },
  ];

  return (
    <header className="fixed top-4 z-50 mx-auto w-full max-w-[1080px]">
      <div className="mx-2 flex items-center justify-between rounded-full bg-white px-4 py-1 md:mx-0">
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Logo" className="w-[36px]" />
          <h1 className="text-2xl font-bold">BTN</h1>
        </div>

        {/* Desktop nav */}
        <nav className="hidden space-x-6 md:flex">
          {link.map((item) => (
            <a key={item.name} href={item.href} className="text-gray-700 hover:text-black">
              {item.name}
            </a>
          ))}
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

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="top-full mt-3 w-full rounded-2xl shadow-md md:hidden"
          >
            <ul className="mx-4 flex flex-col gap-4 rounded-2xl bg-white px-4 py-2">
              {link.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="text-gray-700 hover:text-black">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

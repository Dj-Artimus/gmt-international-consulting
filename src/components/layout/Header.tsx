"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  // Helper function to check if a link is active
  const isActive = (href: string) => {
    // For the 'Home' route, check for exact match
    if (href === "/") {
      return pathname === href;
    } // For other routes, check if the path starts with the link's href // This handles nested routes (e.g., '/services/detail' highlights 'Services')
    return pathname.startsWith(href);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 bg-accent transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-sm" : ""
      }`}
    >
      <nav
        className={`container mx-auto px-4 py-2 flex items-center justify-between border-secondary transition-all duration-75 ${
          isScrolled ? "" : "border-b-4"
        }`}
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="flex-shrink-0"
        >
          <Link href="/" className="">
            <Image
              src={"/images/logo.png"}
              alt="GMT International Consulting"
              className="h-20 w-auto"
              width={500}
              height={300}
              priority
            />
          </Link>
        </motion.div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center gap-8 lg:gap-16 xl:gap-20">
          {navItems.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className={`relative text-lg py-2 transition-colors text-primary group ${
                isActive(item.href) ? "font-semibold" : ""
              }`}
            >
              {item.name}
              <span
                className={`absolute bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full`}
              />
            </Link>
          ))}

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              whileHover={{ scale: 1.0, y: -2 }}
              whileTap={{ scale: 0.95, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                href="/contact"
                className="inline-block bg-primary hover:bg-primary-hover font-medium px-6 py-3 rounded-full transition-all duration-300 hover:shadow-md shadow-primary/30"
              >
                Book Consultation
              </Link>
            </motion.button>
          </motion.div>
        </div>

        {/* Mobile Menu */}
      </nav>
    </motion.header>
  );
};

export default Header;

"use client";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoCall, IoLocationSharp, IoMail } from "react-icons/io5";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Talent Empowerment", href: "/services" },
    { name: "Organizational Vitality", href: "/services" },
    { name: "Industry Expertise", href: "/services" },
    { name: "Strategic Consulting", href: "/services" },
  ];

  return (
    <footer className="w-full bg-secondary">
      <div className="bg-primary text-secondary py-12 lg:py-20 rounded-t-4xl">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <Link href="/" className="w-fit flex items-center">
                  <img
                    src="/images/logo.png"
                    alt="GMT International Consulting"
                    className="h-24 w-auto mb-4 brightness-0 invert"
                  />
                </Link>
                <p className="text-primary-foreground/80 max-w-md leading-relaxed">
                  A women-owned business specializing in empowering talent and
                  restoring vitality in the life sciences industry.
                </p>
              </div>

              <div className="space-y-3">
                <Link
                  href="mailto:info@gmtconsulting.com"
                  className="flex items-center space-x-3 w-fit hover:text-accent"
                >
                  <IoMail className="h-5 w-5" />
                  <span>info@gmtconsulting.com</span>
                </Link>
                <Link
                  href="tel:+1234567890"
                  className="flex items-center space-x-3 w-fit hover:text-accent"
                >
                  <IoCall className="h-5 w-5" />
                  <span>(555) 123-4567</span>
                </Link>
                <Link
                  href="#"
                  className="flex items-center space-x-3 w-fit hover:text-accent"
                >
                  <IoLocationSharp className="h-5 w-5" />
                  <span>
                    123 Innovation Drive, Life Sciences District, Boston, MA
                    02118
                  </span>
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
              <nav className="space-y-3">
                {quickLinks.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="block text-secondary-hover hover:text-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Services</h3>
              <nav className="space-y-3">
                {services.map((link, index) => (
                  <Link
                    href={link.href}
                    key={index}
                    className="block text-secondary-hover hover:text-accent transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
            </div>
          </div>

          <div className="flex justify-between items-center w-full border-t border-primary-foreground/20 mt-12 pt-8 text-center text-primary-foreground/60">
            <p>
              &copy; 2025 GMT International Consulting. All rights reserved. |
              WBENC Certified ®
            </p>

            <div className="flex space-x-4">
              <Link
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Facebook"
              >
                <FaFacebookF className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:text-accent transition-colors"
                aria-label="Instagram"
              >
                <BsInstagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

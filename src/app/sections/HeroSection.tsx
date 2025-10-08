"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-accent py-16 lg:py-24 h-screen w-full overflow-hidden text-primary">
      <div className="container mx-auto px-4 h-full">
        <div className="flex h-full gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8 z-10"
          >
            <motion.h1
              className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Empowering
              <br />
              Talent.
              <br />
              Restoring Vitality.
            </motion.h1>

            <motion.p
              className="font-outfit font-light text-xl leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming our life sciences organizations with expert
              consulting that combines strategic insight with deep industry
              knowledge. We specialize in empowering life sciences-supporting
              organizations.
            </motion.p>

            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href="/contact"
                  className="h-full inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-6 py-3 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  Book a Consultation
                </Link>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.95, y: 0 }}
                transition={{ duration: 0.3 }}
                className="relative block"
              >
                <Link
                  href="/services"
                  className=" bg-secondary hover:bg-secondary-hover/50 p-3 rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-300"
                >
                  <BsArrowRight className="w-7 h-7" />
                </Link>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Portrait */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="absolute inset-0 right-0 bottom-0 w-full flex justify-end items-end"
          >
            <Image
              src={"/images/gina-portrait.png"}
              alt="Portrait of Gina Thompson smiling"
              className="w-full max-w-md lg:max-w-lg h-auto object-cover"
              width={800}
              height={1200}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

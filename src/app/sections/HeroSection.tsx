"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-accent py-16 lg:py-24 h-screen w-full overflow-hidden text-primary">
      <div className="container mx-auto px-4 h-full group group/animated-underline">
        <div className="flex h-full gap-8 lg:gap-10 pt-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8 z-10"
          >
            <motion.h3
              className="text-lg max-w-2xl -mb-0.5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transforming Leaders For Tommorow?
            </motion.h3>
            <motion.h1
              className="font-poppins text-4xl lg:text-6xl xl:text-7xl font-semibold leading-tight mt-2.5"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Growth Made
              <br />
              Tangible
            </motion.h1>

            <motion.p
              className="text-lg leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              From emerging leaders to seasoned professionals, we make growth
              personal, practical, and lasting. GMT International Consulting is
              built on the belief that growth should be both personal and
              professional. With over 20 years in the life and health sciences
              industry,{" "}
              <AnimatedUnderline underlineColor="primary">
                <span className="font-semibold">
                  President Gina Maria Thompson
                </span>
              </AnimatedUnderline>{" "}
              has coached more than 100 direct reports, mentored hundreds of
              peers and students, and guided leaders to reach their fullest
              potential
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
                  href="#services"
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
            <div className="w-full max-w-md lg:max-w-lg max-h-[700px] h-auto rounded-tl-[82px] overflow-hidden">
              <Image
                src={"/images/gina-portrait1.png"}
                alt="Portrait of Gina Thompson smiling"
                className="object-cover group-hover:scale-105 transition-all rounded-tl-4xl duration-1000"
                width={800}
                height={1000}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

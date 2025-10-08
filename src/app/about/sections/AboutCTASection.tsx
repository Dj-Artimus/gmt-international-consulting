"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const AboutCTASection: React.FC = () => {
  return (
    <section className="w-full mt-4 bg-white">
      <motion.div
        initial={{ opacity: 0.8, y: -40 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-white text-primary p-8 lg:px-10 lg:py-12 rounded-4xl max-w-4xl mx-auto flex flex-col gap-12 lg:gap-8 justify-center shadow-2xl hover:translate-y-[-4px] hover:shadow-md hover:shadow-primary/40 transition-all duration-500 text-center"
      >
        <h2 className="text-4xl lg:text-5xl font-semibold mb-4">
          Say Hello to Gina
        </h2>
        <p className="font-outfit font-extralight text-[26px] mb-8 leading-relaxed">
          I&rsquo;d love to learn more about your journey and explore how GMT
          International Consulting can support your growth— let&rsquo;s start the
          conversation and build something great together.
        </p>
        <motion.button
          whileHover={{ scale: 1.02, y: -3 }}
          whileTap={{ scale: 0.95, y: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Link
            className="font-poppins text-white bg-primary hover:bg-primary-hover font-semibold px-6 py-3 rounded-full mt-1 inline-block hover:shadow-lg transition-all duration-300"
            href="#contact-section"
          >
            Start the Conversation
          </Link>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default AboutCTASection;

"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-20 text-white bg-primary mt-4">
      <div className="container mx-auto px-4 text-center">
        {/* CTA Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-xl lg:text-2xl font-bold mb-4">
            Ready to Transform Your Organization?
          </h2>
          <p className="text-lg text-white/90 mb-8 leading-relaxed">
            Join the growing list of life sciences consultancies that have
            chosen GMT International to drive their organizational success.
          </p>
          <motion.button
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.95, y: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              className="text bg-accent/20 hover:bg-accent/30 font-semibold px-6 py-3 rounded-full mt-1 inline-block hover:shadow-lg transition-all duration-300"
              href="/contact"
            >
              Book Your Consultation Today
            </Link>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

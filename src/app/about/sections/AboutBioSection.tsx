"use client";
import { motion } from "framer-motion";
import React from "react";

const AboutBioSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-secondary rounded-t-4xl -translate-y-8 -mb-8"
    >
      <div className="container mx-auto px-4 py-16 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 border-b-4 border-secondary-hover">
            <motion.h2
              className="text-4xl lg:text-5xl font-semibold mb-6"
              style={{ color: "#581042" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Professional Bio
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="font-outfit font-extralight mb-12 text-3xl space-y-10 leading-snug text-primary"
          >
            <p>
              Gina Thompson is a servant leader, mom, and proud &lsquo;Gigi,&rsquo;
              originally from Pittsburgh, where she earned both her
              undergraduate and master&rsquo;s degrees from Duquesne University. In
              2008, she relocated to Raleigh as the Director of Operations at
              Misys Healthcare Systems, moving to company headquarters and
              continuing a career that now spans more than 20 years in life and
              health sciences.
            </p>
            <p>
              What fuels Gina most is helping young professionals successfully
              transition from the classroom into careers they may never have
              envisioned — guiding them to navigate new paths with confidence
              and purpose. Through GMT International Consulting, she extends
              that same passion by helping leaders step into their potential,
              build thriving teams, and create lasting impact — all while
              holding close to her greatest calling: her family and faith.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutBioSection;

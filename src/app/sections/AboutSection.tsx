"use client";
import { motion } from "framer-motion";
import React from "react";
import AnimatedCounter from "../../components/ui/AnimatedCounter";

const AboutSection: React.FC = () => {
  const stats = [
    { label: "Years Of Experience", suffix: "+", value: 15 },
    { label: "Provided strategic guidance", suffix: "+", value: 100 },
    { label: "Empowered a network", suffix: "+", value: 30 },
    { label: "Achieved a promotion", suffix: "%", value: 98 },
  ];

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
              className="font-outfit text-3xl lg:text-4xl font-bold mb-8"
              style={{ color: "#581042" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-lg leading-8 text-primary">
              At GMT International Consulting, we empower life sciences
              organizations to thrive in an increasingly complex and competitive
              landscape. With a deep understanding of the industry&rsquo;s scientific,
              regulatory, and commercial dimensions, we deliver strategic
              consulting solutions that drive innovation, unlock talent, and
              accelerate growth.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <motion.button
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-2 items-start"
                >
                  <AnimatedCounter
                    end={stat.value}
                    duration={2000}
                    suffix={stat.suffix}
                    className="text-3xl lg:text-7xl font-bold text-primary"
                  />
                  <h4 className="text-sm text-primary font-medium leading-tight">
                    {stat.label}
                  </h4>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;

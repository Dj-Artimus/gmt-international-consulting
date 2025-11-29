"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { motion } from "framer-motion";
import React from "react";

const ServicesSection: React.FC = () => {
  const [flippedCards, setFlippedCards] = React.useState<{
    [key: number]: boolean;
  }>({});

  const services = [
    {
      id: 1,
      name: (
        <>
          Talent <br /> Development
        </>
      ),
    },
    {
      id: 2,
      name: (
        <>
          Leadership <br /> Empowerment
        </>
      ),
    },
    {
      id: 3,
      name: (
        <>
          Career Transition <br /> Coaching
        </>
      ),
    },
    {
      id: 4,
      name: (
        <>
          Building <br /> High-Performing <br /> Teams that <br /> Thrive
        </>
      ),
    },
    {
      id: 5,
      name: (
        <>
          Equipping <br /> Leaders With <br /> the Tools to <br /> Succeed
        </>
      ),
    },
    {
      id: 6,
      name: (
        <>
          Guiding Future <br /> Professionals <br /> from Classroom <br /> to
          Industry
        </>
      ),
    },
  ];

  // Helper to get pairs for the 3 cards
  // Card 1: Front=0 (id 1), Back=3 (id 4)
  // Card 2: Front=1 (id 2), Back=4 (id 5)
  // Card 3: Front=2 (id 3), Back=5 (id 6)
  const cardPairs = [
    { front: services[0], back: services[3] },
    { front: services[1], back: services[4] },
    { front: services[2], back: services[5] },
  ];

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-secondary rounded-t-4xl -translate-y-8 -mb-8"
    >
      <div className="container mx-auto px-4 pt-16 lg:pt-20 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="mb-12 border-b border-primary">
            <motion.h4
              className="text-xs mb-2"
              style={{ color: "#581042" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Solutions Tailored For Your Success
            </motion.h4>
            <motion.h2
              className="font-outfit text-3xl lg:text-4xl font-semibold mb-3"
              style={{ color: "#581042" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Services
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {cardPairs.map((pair, index) => (
              <div
                key={index}
                className="group group/animated-underline min-h-72 h-[60vh] max-h-[600px] perspective-1000 cursor-pointer"
                onClick={() => handleCardClick(index)}
              >
                <div
                  className={`relative w-full h-full transition-all duration-700 transform-style-3d ${
                    flippedCards[index] ? "rotate-y-180" : ""
                  }`}
                >
                  {/* Front Face */}
                  <div className="absolute w-full h-full backface-hidden">
                    <div className="flex justify-center items-center w-full h-full rounded-4xl bg-primary p-6">
                      <h2 className="text-3xl font-outfit font-semibold text-center leading-relaxed text-white">
                        <AnimatedUnderline underlineColor="white">
                          {pair.front.name}
                        </AnimatedUnderline>
                      </h2>
                    </div>
                  </div>

                  {/* Back Face */}
                  <div className="absolute w-full h-full backface-hidden rotate-y-180">
                    <div className="flex justify-center items-center w-full h-full rounded-4xl bg-white border-2 border-primary p-6">
                      <h2 className="text-3xl font-outfit font-semibold text-center leading-relaxed text-primary">
                        <AnimatedUnderline underlineColor="primary">
                          {pair.back.name}
                        </AnimatedUnderline>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

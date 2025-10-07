"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { BsGlobe2 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa6";

const MissionVisionSolutionsSection: React.FC = () => {
  const consultingSolutions = [
    {
      title: "Talent Empowerment",
      description:
        "Empowering talent through development programs that enhance skills and drive performance.",
    },
    {
      title: "Industry Expertise",
      description:
        "Providing industry expertise to navigate complexities and drive strategic transformation.",
    },
    {
      title: "Organizational Vitality",
      description:
        "Restoring organizational vitality through strategic consulting and innovative solutions.",
    },
  ];

  return (
    <section className="w-full text-white bg-secondary">
      <div className=" bg-primary py-16 lg:py-20 rounded-t-4xl">
        <div className="container mx-auto space-y-16 lg:space-y-28">
          {/* Mission and Vision  */}
          <div className="flex flex-col gap-8 lg:gap-2 max-w-1/2">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8 hover:translate-y-[-4px] hover:shadow-sm shadow-accent/40 rounded-[50px] transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-3 text-primary bg-accent rounded-full w-fit px-6 py-2 pt-2.5">
                <FaRegHeart className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Our Mission</h3>
              </div>
              <p className="leading-relaxed">
                To empower talent and restore vitality to the sciences
                organizations through strategic consulting, innovative
                solutions, and deep industry expertise. We believe that when
                science thrives, organizations flourish, and life-changing
                innovations emerge.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-8 hover:translate-y-[-4px] hover:shadow-sm shadow-accent/40 rounded-[50px] transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-3 text-primary bg-accent rounded-full w-fit px-6 py-2 pt-2.5">
                <BsGlobe2 className="w-5 h-5" />
                <h3 className="text-xl font-semibold">Our Vision</h3>
              </div>
              <p className="leading-relaxed">
                A life sciences industry where every organization operates at
                its highest potential, where talent is nurtured and empowered,
                becoming a healthier world for everyone.
              </p>
            </motion.div>
          </div>

          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12 lg:mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Integrated Expertise for Life Sciences Transformation
              </h2>
              <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                We deliver end-to-end consulting solutions tailored to the
                distinct competencies and growth potential of the life sciences
                sectors.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto">
              {consultingSolutions.map((solution, index) => (
                <motion.div
                  key={solution.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="border-r-2 border-accent/50 last-of-type:border-r-0 px-6"
                >
                  <div className="space-y-4 hover:translate-y-[-4px] transition-transform duration-500">
                    <h3 className="text-xl font-semibold text-white">
                      {solution.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed">
                      {solution.description}
                    </p>
                    <Link
                      href="#"
                      className="relative text-white hover:text-white/80 py-3 h-auto font-medium group"
                    >
                      Learn More
                      <span
                        className={`absolute bottom-1 left-0 w-0 h-0.5 bg-accent/80 transition-all duration-300 group-hover:w-full`}
                      />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSolutionsSection;

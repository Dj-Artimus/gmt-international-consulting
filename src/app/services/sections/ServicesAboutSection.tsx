"use client";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Stat = {
  label: React.ReactNode;
  value: number | null;
  prefix?: string;
  suffix?: string;
  icon: string;
  iconAlt?: string;
  iconColor?: string;
};

const stats: Stat[] = [
  {
    label: (
      <>
        years of <br /> experience
      </>
    ),
    value: 25,
    icon: "/images/clock.png",
    iconAlt: "Clock icon",
  },
  {
    label: (
      <>
        of Peers, Colleagues &<br />
        Students Mentored
      </>
    ),
    value: null,
    prefix: "Hundreds",
    icon: "/images/globe.png",
    iconAlt: "Globe icon",
  },
  {
    label: (
      <>
        Organizatins <br /> Served
      </>
    ),
    value: 20,
    suffix: "+",
    icon: "/images/handshake.png",
    iconAlt: "Handshake icon",
  },
  {
    label: (
      <>
        Direct Reports
        <br />
        Coached
      </>
    ),
    value: 100,
    suffix: "+",
    icon: "/images/people.png",
    iconAlt: "Group icon",
  },
  {
    label: (
      <>
        Regretted Turnover
        <br />
        Across 20+ Years
      </>
    ),
    value: 0,
    suffix: "%",
    icon: "/images/trophy.png",
    iconAlt: "Trophy icon",
  },
  {
    label: (
      <>
        Your Team or <br /> Career Could Be <br /> the Next Milestone
        <br />
        We Celebrate
      </>
    ),
    value: null,
    icon: "★",
    iconAlt: "Star icon",
    iconColor: "#E3B23C", // gold
  },
];

const ServicesAboutSection: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full relative bg-secondary"
    >
      <div className="container mx-auto px-4 py-16 lg:py-20 z-30">
        <motion.div
          initial={{ opacity: 0, y: 50, zIndex: 10 }}
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
              Empowering Growth Through People
            </motion.h4>
            <motion.h2
              className="text-3xl lg:text-4xl font-outfit font-semibold mb-6"
              style={{ color: "#581042" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              About Us
            </motion.h2>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-between gap-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full"
            >
              <p className="text-2xl leading-snug text-primary">
                At GMT International Consulting, we empower life sciences
                organizations to thrive in an increasingly complex and
                competitive landscape. With a deep understanding of the
                industry&rsquo;s scientific, regulatory, and commercial dimensions, we
                deliver strategic consulting solutions that drive innovation,
                unlock talent, and accelerate growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full flex justify-center items-center overflow-hidden max-w-96  max-h-64 rounded-3xl"
            >
              <Image
                src={"/images/gmt-about-us-img1.jpg"}
                alt="about us image"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="w-full mt-16 z-50 -mb-40">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full bg-accent rounded-3xl px-16 py-14 shadow-2xl hover:translate-y-[-4px] hover:shadow-md hover:shadow-primary/60 transition-all duration-500 p-8"
            >
              <motion.h2
                className="font-outfit text-2xl lg:text-3xl font-semibold mb-6 text-primary"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                By the Numbers (So Far... and Growing)
              </motion.h2>
              <div className="flex flex-col items-center gap-6">
                <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-12 w-full">
                  {stats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-6 hover:translate-y-[-4px]  transition-all duration-500 p-4 w-full"
                    >
                      {stat.icon === "★" ? (
                        <span
                          className="text-8xl"
                          style={{ color: stat.iconColor ?? "#E3B23C" }}
                          aria-label={stat.iconAlt ?? "Star icon"}
                        >
                          ★
                        </span>
                      ) : (
                        <Image
                          src={stat.icon}
                          alt={stat.iconAlt ?? ""}
                          width={70}
                          height={70}
                          style={
                            stat.iconColor
                              ? {
                                  filter: `drop-shadow(0 0 0 ${stat.iconColor})`,
                                }
                              : {}
                          }
                        />
                      )}
                      <div className="flex flex-col justify-center">
                        <div className="flex items-end gap-2">
                          {stat.value !== null ? (
                            <AnimatedCounter
                              end={stat.value}
                              duration={2000}
                              suffix={stat.suffix}
                              className="text-4xl lg:text-5xl font-semibold text-primary"
                            />
                          ) : stat.prefix ? (
                            <span className="text-4xl lg:text-4xl font-semibold text-primary">
                              {stat.prefix}
                            </span>
                          ) : stat.icon === "★" ? (
                            <span
                              className="text-4xl lg:text-5xl font-semibold"
                              style={{ color: stat.iconColor ?? "#E3B23C" }}
                            >
                              {/* empty, icon already rendered */}
                            </span>
                          ) : null}
                        </div>
                        <div className="font-outfit text-xl text-primary font-light text-nowrap">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02, y: -3 }}
                  whileTap={{ scale: 0.95, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="/contact"
                    className="h-full inline-block bg-primary hover:bg-primary-hover text-white font-semibold px-14 py-4 rounded-full cursor-pointer hover:shadow-lg transition-all duration-300"
                  >
                    Be Part of the Next <br /> Milestone Celebrated
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesAboutSection;

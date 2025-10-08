"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const AboutHeroSection: React.FC = () => {
  return (
    <section className="relative bg-accent py-16 lg:py-24 h-screen w-full overflow-hidden text-primary">
      <div className="container mx-auto px-4 h-full group/animated-underline">
        <div className="flex h-full gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6 lg:space-y-8 z-10"
          >
            <motion.h1
              className="font-poppins text-3xl lg:text-4xl xl:text-5xl font-semibold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Meet Gina: A Servant Leader <br />
              with a Passion for People
            </motion.h1>

            <motion.p
              className="font-outfit font-extralight text-2xl leading-relaxed max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              I&rsquo;m Gina Thompson,{" "}
              <AnimatedUnderline underlineColor="primary">
                <span className="font-semibold">
                  founder of GMT International Consulting
                </span>
              </AnimatedUnderline>{" "}
              , a servant leader with more than 20 years of experience in life
              and health sciences. Originally from Pittsburgh and now based in
              Raleigh, I&lsquo;ve led consulting practices, guided partner
              strategies, and mentored professionals at every stage of their
              careers. My greatest passion is helping young professionals
              navigate the transition from classroom to career and equipping
              leaders with the tools to build thriving, resilient teams. At my
              core, I am a mom, a proud &lsquo;Gigi&rsquo;, and someone who
              believes in leaving a legacy of service, faith, and family.
            </motion.p>
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

export default AboutHeroSection;

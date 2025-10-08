"use client";
import AnimatedUnderline from "@/components/ui/AnimatedUnderline";
import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

type SwiperInstance = SwiperType;

const ServicesSection: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  // const [autoplayEnabled, setAutoplayEnabled] = useState(false);

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

  const handleSlideChange = (swiper: SwiperInstance) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    console.log(isBeginning, isEnd);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full bg-secondary rounded-t-4xl -translate-y-8 -mb-8"
    >
      <div className="container mx-auto px-4 pt-16 lg:pt-20">
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
            onViewportEnter={() => swiperRef.current?.autoplay.start()}
            onViewportLeave={() => swiperRef.current?.autoplay.stop()}
          >
            <Swiper
              modules={[Navigation, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                handleSlideChange(swiper);
              }}
              onMouseEnter={() => swiperRef.current?.autoplay.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay.start()}
              onSlideChange={handleSlideChange}
              onInit={(swiper) => {
                handleSlideChange(swiper);
                swiper.autoplay.stop();
              }}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                // 1280: { slidesPerView: 3.2 },
              }}
              navigation={{
                prevEl: ".featured-prev-collection",
                nextEl: ".featured-next-collection",
              }}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
                stopOnLastSlide: false,
              }}
              speed={2500}
            >
              {services.map((service, index) => (
                <SwiperSlide key={service.id}>
                  {/* <Link */}
                  <motion.div
                    key={index}
                    initial={{ y: 30 }}
                    whileInView={{ y: 0 }}
                    transition={{ duration: 2, delay: 0.1 }}
                    // href={`/${service.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className="group/animated-underline p-3 py-8"
                  >
                    <div className="flex justify-center items-center w-full min-h-72 h-[60vh] max-h-[600px] rounded-4xl bg-primary hover:scale-105 transition-transform duration-300 cursor-pointer">
                      <h2 className="text-3xl font-outfit font-semibold text-center leading-relaxed text-white">
                        <AnimatedUnderline underlineColor="primary">
                          {service.name}
                        </AnimatedUnderline>
                      </h2>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ServicesSection;

"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ConsultingSolution {
  id: string;
  title: React.ReactNode;
  description: string;
  image: string;
}


const MissionVisionStatementSolutionsSection: React.FC = () => {
  const consultingSolutions: ConsultingSolution[]= [
    {
      id: "talent-development-engagement",
      title: <>Talent Development & Engagement</>,
      description:
        "Strategic workforce development and leadership training tailored for life sciences professionals",
      image: "/images/consulting-meeting.jpg",
    },
    {
      id: "leadership-empowerment",
      title: (
        <>
          Leadership <br /> Empowerment
        </>
      ),
      description:
        "Deep knowledge and experience across pharmaceuticals, biotechnology and medical device sectors.",
      image: "/images/leadership-training.jpg",
    },
    {
      id: "career-coaching",
      title: (
        <>
          Career Transition <br /> Coaching
        </>
      ),
      description:
        "Comprehensive solutions to restore energy, innovation, and growth to your life sciences organization.",
      image: "/images/career-coaching.jpg",
    },
  ];

  return (
    <section className="w-full text-white bg-secondary">
      <div className=" bg-primary py-16 lg:py-20 lg:pt-40 rounded-t-4xl">
        <div className="container mx-auto space-y-16 lg:space-y-28">
          {/* Mission and Vision  */}
          <div className="flex gap-8 font-outfit">
            {/* Mission Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="w-full space-y-8 hover:translate-y-[-4px] hover:shadow-sm shadow-accent/40 rounded-[50px] transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-3 text-primary bg-tertiary rounded-full w-fit px-6 py-2 pt-2.5">
                <Image
                  src="/images/rocket.png"
                  alt="Star Image"
                  width={28}
                  height={28}
                />
                <h3 className="text-2xl font-semibold">Mission Statement</h3>
              </div>
              <p className="leading-relaxed text-xl">
                At GMT International Consulting, we deliver tailored coaching
                and consulting services that help companies create, grow, and
                sustain high-performing teams, while equipping leaders with the
                tools, strategies, and confidence to inspire their people and
                navigate career transitions successfully.
              </p>
            </motion.div>

            {/* Vision Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-full space-y-8 hover:translate-y-[-4px] hover:shadow-sm shadow-accent/40 rounded-[50px] transition-all duration-500 p-8"
            >
              <div className="flex items-center gap-3 text-primary bg-tertiary rounded-full w-fit px-6 py-2 pt-2.5">
                <Image
                  src="/images/star.png"
                  alt="Star Image"
                  width={28}
                  height={28}
                />
                <h3 className="text-2xl font-semibold">Vision Statement</h3>
              </div>
              <p className="leading-relaxed text-xl">
                To empower the next generation of leaders and organizations to
                thrive with engaged teams, resilient cultures, and lasting
                impact across life sciences and beyond.
              </p>
            </motion.div>
          </div>

          <div id="consultancy-services" className="container mx-auto px-4">
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
                We deliver end-to-end consulting solutions tailored for engaging
                teams, pivoting careers and emerging leaders.
              </p>
            </motion.div>

            <div className="font-outfit grid md:grid-cols-3 gap-8 lg:gap-6 max-w-6xl mx-auto ps-2">
              {consultingSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  id={solution.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="border-r-2 border-accent/50 last-of-type:border-r-0 px-6 pe-11 group"
                >
                  <div className="space-y-4 text-center group-hover:translate-y-[-4px] transition-transform duration-500">
                    <div className="overflow-hidden w-full h-full rounded-xl">
                      <Image
                        src={solution.image}
                        alt={solution.description}
                        width={300}
                        height={200}
                        className="mx-auto aspect-video rounded-xl object-center object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <h3 className="text-2xl font-semibold text-white">
                      {solution.title}
                    </h3>
                    <p className="text-white/90 leading-relaxed px-2">
                      {solution.description}
                    </p>
                    <Link
                      href="#"
                      className="relative text-white hover:text-white/80 py-3 h-auto font-medium group/underline"
                    >
                      Learn More
                      <span
                        className={`absolute bottom-1 left-0 w-0 h-0.5 bg-accent/80 transition-all duration-300 group-hover/underline:w-full`}
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

export default MissionVisionStatementSolutionsSection;

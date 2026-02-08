"use client"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Service {
  number: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    number: "01",
    title: "Video Editing",
    description:
      "High-quality video editing for social media, ads, and brand content with smooth cuts, motion graphics, and storytelling.",
  },
  {
    number: "02",
    title: "Website Development",
    description:
      "Modern, fast, and responsive websites built for performance, conversions, and clean user experience.",
  },
  {
    number: "03",
    title: "Graphic Designing",
    description:
      "Eye-catching visual designs including social media posts, branding assets, and marketing creatives.",
  },
];

const ServiceItem = ({
  service,
  index,
  isLast,
}: {
  service: Service;
  index: number;
  isLast: boolean;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className="group"
    >
      <div className="flex items-start gap-6 md:gap-10 lg:gap-16 py-8 md:py-10 transition-all duration-300 hover:pl-2">
        <span className="service-number select-none transition-transform duration-300 group-hover:scale-105">
          {service.number}
        </span>
        <div className="flex flex-col gap-2 pt-2 md:pt-3">
          <h3 className="service-title transition-all duration-300 group-hover:tracking-wider">
            {service.title}
          </h3>
          <p className="service-description max-w-xl">
            {service.description}
          </p>
        </div>
      </div>
      {!isLast && <div className="service-divider" />}
    </motion.div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="w-full bg-background py-16 md:py-20 lg:py-24 text-black"
    >
      <div className="section-container">
        <div className="bg-card rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 shadow-sm">
          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="heading-display mb-12 md:mb-16"
          >
            SERVICES
          </motion.h2>

          {/* Services List */}
          <div className="flex flex-col">
            {services.map((service, index) => (
              <ServiceItem
                key={service.number}
                service={service}
                index={index}
                isLast={index === services.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

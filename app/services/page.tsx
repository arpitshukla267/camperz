"use client";

import { motion } from "framer-motion";
import { Compass, Mountain, TentTree, Footprints } from "lucide-react";

const services = [
  {
    title: "Custom Travel Planning",
    description: "Get personalized itineraries crafted by adventure experts tailored to your preferences.",
    icon: <Compass size={36} className="text-green-700" />,
  },
  {
    title: "Camp Site Booking",
    description: "Book top-rated campgrounds directly through our platform with real-time availability.",
    icon: <TentTree size={36} className="text-green-700" />,
  },
  {
    title: "Guided Hikes & Tours",
    description: "Connect with certified guides for safe and enriching trekking experiences worldwide.",
    icon: <Footprints size={36} className="text-green-700" />,
  },
  {
    title: "Gear Recommendations",
    description: "Explore and shop expert-recommended gear for every kind of terrain and weather.",
    icon: <Mountain size={36} className="text-green-700" />,
  },
];

const ServicesPage = () => {
  return (
    <section className="w-full bg-white text-green-900 py-20 mt-[6rem] mb-[3rem] px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-4 bg-green-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-700 text-sm md:text-base pl-[3.5rem]">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;

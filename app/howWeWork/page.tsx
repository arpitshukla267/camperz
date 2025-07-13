"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle, User, Download, MapPin, Map } from "lucide-react";

const steps = [
  {
    title: "Download the App",
    description: "Get HiLink from the App Store or Google Play and install it on your device.",
    icon: <Download size={32} className="text-green-700" />,
  },
  {
    title: "Create Your Profile",
    description: "Set up your personal preferences and let us know your adventure style.",
    icon: <User size={32} className="text-green-700" />,
  },
  {
    title: "Choose Destination",
    description: "Browse curated locations with real-time reviews, elevation data, and more.",
    icon: <MapPin size={32} className="text-green-700" />,
  },
  {
    title: "Start Your Journey",
    description: "Use in-app maps, weather data, and trail guidance to begin your adventure.",
    icon: <Map size={32} className="text-green-700" />,
  },
];

const HowHilinkWorks = () => {
  return (
    <section className="w-full bg-white text-green-900 py-20 mt-[6rem] px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          How HiLink Works
        </motion.h2>

        <div className="grid gap-10 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="flex gap-5 items-start bg-green-50 p-6 rounded-2xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 p-3 rounded-full">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.8, duration: 0.6 }} 
          className="mt-16 flex justify-center"
        >
          <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-medium flex items-center gap-2"
            onClick={() => (window.location.href = '/login')}>
            <CheckCircle size={20} /> Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowHilinkWorks;

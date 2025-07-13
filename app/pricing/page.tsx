"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "Basic Explorer",
    price: "$0",
    features: [
      "Access to free camp spots",
      "Basic map and elevation tools",
      "Basic weather updates",
      "Limited gear suggestions",
    ],
    highlight: false,
  },
  {
    name: "Adventure Pro",
    price: "$9.99/mo",
    features: [
      "All Basic features",
      "Exclusive campsite deals",
      "Advanced navigation tools",
      "Priority support",
    ],
    highlight: true,
  },
  {
    name: "Expedition Elite",
    price: "$19.99/mo",
    features: [
      "All Pro features",
      "1-on-1 trip planning",
      "Offline maps access",
      "Early gear access",
    ],
    highlight: false,
  },
];

const PricingPage = () => {
  return (
    <section className="w-full bg-white py-20 px-4 md:px-20 mt-[6rem] mb-[3rem] text-green-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Choose Your Plan
        </motion.h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-14">
          Start for free, upgrade anytime. HiLink helps every adventurer find their perfect path.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`border rounded-3xl p-8 shadow-md transition hover:shadow-lg flex flex-col items-center gap-6 ${
                plan.highlight ? "bg-green-100 border-green-500" : "bg-green-400"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className="text-3xl font-extrabold text-green-700">{plan.price}</p>
              <ul className="text-left space-y-3">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 size={20} className="text-green-600" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-medium">
                {plan.price === "$0" ? "Get Started" : "Subscribe Now"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPage;

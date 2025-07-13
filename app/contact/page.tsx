"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <section className="w-full bg-white text-green-900 py-20 mt-[6rem] px-4 md:px-20">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-10"
        >
          Get in Touch
        </motion.h2>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="flex items-start gap-4">
              <MapPin className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">Address</p>
                <p className="text-gray-700">Jhansi, Up, India, 284003</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">Phone</p>
                <a href="tel:+916393818467" className="text-gray-700 hover:underline">+91 6393818467</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <a href = "mailto:shuklaarpit440@gmail.com" className="text-gray-700 hover:underline"> shuklaarpit440gmail.com </a>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 p-8 rounded-2xl shadow-md"
          >
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

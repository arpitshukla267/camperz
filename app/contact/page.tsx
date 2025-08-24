"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface ApiResponse {
  message: string;
  data?: any;
  error?: string;
}

const ContactPage = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      alert("Please fill out all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(
        "http://localhost:5000/api/messages/global-submit",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        }
      );

      const data: ApiResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      console.log("✅ Message sent:", data.data);

      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitStatus("success");
    } catch (error) {
      console.error("❌ Error sending message:", error);
      setSubmitStatus("error");
      alert("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white text-green-900 py-20 mt-[6rem] px-4 md:px-20"
    >
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
          {/* Contact Info */}
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
                <p className="text-gray-700">Jhansi, UP, India, 284003</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">Phone</p>
                <a
                  href="tel:+916393818467"
                  className="text-gray-700 hover:underline"
                >
                  +91 6393818467
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-green-600" size={24} />
              <div>
                <p className="font-semibold">Email</p>
                <a
                  href="mailto:shuklaarpit440@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  shuklaarpit440@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-green-50 p-8 rounded-2xl shadow-md"
          >
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Subject"
              />
            </div>
            <div className="mb-5">
              <label className="block text-sm font-semibold mb-1">Message</label>
              <textarea
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full font-medium disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>

            {submitStatus === "success" && (
              <p className="mt-4 text-black font-medium">
                ✅ Message sent successfully!
              </p>
            )}
            {submitStatus === "error" && (
              <p className="mt-4 text-red-600 font-medium">
                ❌ Failed to send message. Try again.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;

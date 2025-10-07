"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { IoCall } from "react-icons/io5";

const ContactSection: React.FC = () => {
  const textareaRef = useRef(null);

  const MIN_ROWS = 1;
  const MAX_ROWS = 5;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to 'auto' to correctly calculate scrollHeight for current content
    textarea.style.height = "auto";

    // Get calculated line height from CSS. This is essential for accurate row height calculation.
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 24; // Fallback line height
    const verticalPaddingBorder = textarea.offsetHeight - textarea.clientHeight;

    // Calculate pixel heights for minimum (2) and maximum (5) rows
    const minHeightPx = MIN_ROWS * lineHeight + verticalPaddingBorder;
    const maxHeightPx = MAX_ROWS * lineHeight + verticalPaddingBorder;

    const contentHeight = textarea.scrollHeight;

    // Logic to set height and overflow
    if (contentHeight <= minHeightPx) {
      // 1. Content is less than or equal to 2 rows
      textarea.style.height = `${minHeightPx}px`;
      textarea.style.overflowY = "hidden";
    } else if (contentHeight > minHeightPx && contentHeight < maxHeightPx) {
      // 2. Content is between 2 and 5 rows, expand dynamically
      textarea.style.height = `${contentHeight}px`;
      textarea.style.overflowY = "hidden";
    } else {
      // 3. Content exceeds 5 rows, lock height to 5 rows and show scrollbar
      textarea.style.height = `${maxHeightPx}px`;
      textarea.style.overflowY = "auto";
    }
  };

  React.useEffect(() => {
    // Run the adjustment initially and whenever the text state changes
    adjustHeight();
  }, [formData.message]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simple form validation
    // if (!formData.name || !formData.email || !formData.message) {
    //   toast({
    //     title: "Please fill in all fields",
    //     variant: "destructive",
    //   });
    //   setIsSubmitting(false);
    //   return;
    // }

    // Simulate form submission
    try {
      // In a real app, you'd send this to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // toast({
      //   title: "Message sent successfully!",
      //   description: "We'll get back to you soon.",
      // });
      alert({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // toast({
      //   title: "Error sending message",
      //   description: "Please try again later.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  return (
    <section className="w-full mt-4 text-white bg-secondary">
      {/* Contact Heading */}
      <div className="mx-auto px-4 text-center py-16 lg:py-20 bg-primary rounded-b-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center pb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Start Your Transformation
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ready to empower your talent and restore vitality to your
            organization? Contact us today to schedule your consultation.
          </p>
        </motion.div>
      </div>

      {/* Contact Details and Form */}
      <motion.div
        initial={{ opacity: 0.8, y: 0 }}
        whileInView={{ opacity: 1, y: -80 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-accent text-primary p-8 lg:px-10 lg:py-12 rounded-4xl max-w-4xl mx-auto flex flex-col lg:flex-row gap-12 lg:gap-8 justify-center divide-x-0 lg:divide-x-2 divide-secondary-hover"
      >
        <div className="w-3/4 h-64 flex flex-col justify-between">
          <div className="space-y-12">
            <div>
              <h3 className="text-2xl font-semibold mb-2">Email Us</h3>
              <Link
                href="mailto:info@gmtconsulting.com"
                className="flex items-center text-xl"
              >
                info@gmtconsulting.com
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex space-x-10">
              <Link
                href="https://www.instagram.com/gmtconsulting"
                target="_blank"
              >
                <BsInstagram className="text-2xl" />
              </Link>
              <Link
                href="https://www.facebook.com/gmtconsulting"
                target="_blank"
              >
                <FaFacebookF className="text-2xl" />
              </Link>
              <Link href="tel:+1234567890" target="_blank">
                <IoCall className="text-2xl" />
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-fit bg-primary hover:bg-primary-hover rounded-full text-accent px-6 py-2.5 font-semibold cursor-pointer"
            form="contact-form"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </div>
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          className="space-y-6 w-full"
        >
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-4 rounded-lg focus:outline-primary placeholder:text-primary bg-secondary/50"
            required
          />
          <input
            id="email"
            name="email"
            type="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-4 rounded-lg focus:outline-primary placeholder:text-primary bg-secondary/50"
            required
          />
          <textarea
            ref={textareaRef}
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={1}
            className="w-full p-4 rounded-lg focus:outline-primary placeholder:text-primary bg-secondary/50 resize-none"
            required
          />
        </form>
      </motion.div>
    </section>
  );
};

export default ContactSection;

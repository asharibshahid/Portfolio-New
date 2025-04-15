"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { Icon } from "@iconify/react"; // Import Iconify

const Contact = () => {
  useEffect(() => {
    // GSAP Animations
    gsap.from(".contact-heading", {
      opacity: 0,
      x: -100,
      duration: 1.5,
      ease: "power3.out",
    });

    gsap.from(".contact-form", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });

    gsap.from(".contact-info", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-900 to-indigo-900 text-white py-16 px-4">
        <br />
        <br />
      <div className="container mx-auto">
        {/* Heading Section */}
        <br />
        <h2 className="contact-heading text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="contact-form">
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <input type="hidden" name="access_key" value="0eb265e5-be95-4968-ba9a-19ecc044c1a0" />

              {/* Full Name */}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full p-3 bg-gray-700 rounded-md text-white placeholder-gray-400"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full p-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info text-center lg:text-left">
            <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
            <p className="text-sm mb-2">📍 Location: Karachi, Pakistan</p>
            <p className="text-sm mb-2">📧 Email: businessnovacart@gmail.com</p>
            <p className="text-sm mb-6">📞 Phone: (+92) 03212558027</p>

            {/* Social Media Icons */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <a href="ttps://www.facebook.com/asharibshahid" target="_blank" rel="noopener noreferrer">
                <Icon icon="logos:facebook" className="w-10 h-10 text-blue-500 hover:scale-110 transition-transform" />
              </a>
              <a href="https://x.com/AsharibSheikh01" target="_blank" rel="noopener noreferrer">
                <Icon icon="skill-icons:twitter" className="w-10 h-10 text-sky-400 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.instagram.com/web_ghost.io/" target="_blank" rel="noopener noreferrer">
                <Icon icon="skill-icons:instagram" className="w-10 h-10 text-pink-500 hover:scale-110 transition-transform" />
              </a>
              <a href="https://www.linkedin.com/in/asharib-shahid-73a3022b5/" target="_blank" rel="noopener noreferrer">
                <Icon icon="skill-icons:linkedin" className="w-10 h-10 text-blue-600 hover:scale-110 transition-transform" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:github" className="w-10 h-10 text-gray-400 hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// app/page.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const HomePage = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Navbar */}
        <nav className="bg-gray-100 dark:bg-gray-800 p-4 sticky top-0 z-50">
          <div className="container mx-auto flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold text-blue-600 dark:text-blue-400"
            >
              FutureVolt
            </Link>
            <div className="hidden md:flex items-center space-x-6 flex-grow justify-center">
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                About
              </Link>
              <Link
                href="/testimonials"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Testimonials
              </Link>
              <Link
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                <Icon icon="mdi:facebook" className="text-2xl" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-400"
              >
                <Icon icon="mdi:twitter" className="text-2xl" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-700"
              >
                <Icon icon="mdi:linkedin" className="text-2xl" />
              </a>
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                <Icon
                  icon={
                    darkMode
                      ? "mdi:white-balance-sunny"
                      : "mdi:moon-waning-crescent"
                  }
                  className="text-2xl"
                />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 bg-gray-100 dark:bg-gray-800 z-50 flex flex-col items-center justify-center ${
            menuOpen ? "block" : "hidden"
          } md:hidden`}
        >
          <button onClick={toggleMenu} className="absolute top-4 right-4 p-2">
            <Icon icon="mdi:close" className="text-2xl" />
          </button>
          <ul className="text-center space-y-8">
            <li>
              <Link
                href="/"
                className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Hero Section */}
        <header className="relative bg-gray-900 text-white py-20 px-4 text-center">
          <img
            src="https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Electrician at work"
            className="absolute inset-0 w-full h-full object-cover opacity-50 brightness-50"
          />
          <div className="relative z-10" data-aos="fade-up">
            <h1 className="text-5xl font-bold mb-4">
              Powering the Future, Today
            </h1>
            <p className="text-xl mb-8 text-white font-semibold p-5">
              Innovative electrical solutions for a brighter tomorrow
            </p>
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full inline-flex items-center"
            >
              <Icon icon="mdi:phone" className="mr-2" />
              Contact Us
            </Link>
          </div>
        </header>

        {/* Features Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "mdi:lightning-bolt",
                title: "Smart Home Integration",
                description:
                  "Seamlessly connect your home's electrical systems for maximum efficiency.",
              },
              {
                icon: "mdi:leaf",
                title: "Eco-Friendly Solutions",
                description:
                  "Reduce your carbon footprint with our energy-efficient electrical installations.",
              },
              {
                icon: "mdi:clock-fast",
                title: "24/7 Emergency Service",
                description:
                  "Round-the-clock support for all your electrical emergencies.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <Icon
                  icon={feature.icon}
                  className="mx-auto mb-4 text-blue-500 text-4xl"
                />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-blue-600 dark:bg-blue-700 py-16 px-4 text-center text-white">
          <div data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Upgrade Your Electrical Systems?
            </h2>
            <p className="text-xl mb-8">
              Let's bring your home or business into the future.
            </p>
            <Link
              href="/services"
              className="bg-white text-blue-600 hover:bg-gray-100 dark:hover:bg-gray-200 font-bold py-2 px-4 rounded-full"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-200 dark:bg-gray-800 py-8 px-4 text-center">
          <p>&copy; 2024 FutureVolt Electricians. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

const HomePageWrapper = () => (
  <ThemeProvider>
    <HomePage />
  </ThemeProvider>
);

export default HomePageWrapper;

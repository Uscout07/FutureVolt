'use client';
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useTheme } from '../context/ThemeContext';
import ClientOnly from '../components/ClientOnly';

const ServicesContent = () => {
  const { darkMode } = useTheme();
  const services = [
    { icon: 'mdi:home-lightning-bolt', title: 'Residential Wiring', description: 'Complete wiring solutions for new homes and renovations.' },
    { icon: 'mdi:office-building', title: 'Commercial Electrical', description: 'Electrical systems for offices, retail spaces, and industrial facilities.' },
    { icon: 'mdi:solar-panel', title: 'Solar Panel Installation', description: 'Harness the power of the sun with our solar panel solutions.' },
    { icon: 'mdi:electric-switch', title: 'Smart Home Integration', description: 'Transform your home with cutting-edge smart technology.' },
    { icon: 'mdi:security', title: 'Security Systems', description: 'Protect your property with advanced security and surveillance systems.' },
    { icon: 'mdi:lightning-bolt', title: 'Emergency Repairs', description: '24/7 emergency electrical repair services.' }
  ];

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="bg-white dark:bg-gray-900 min-h-screen">
        <main className="container mx-auto px-4 py-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">Our Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <Icon icon={service.icon} className="text-4xl mb-4 text-blue-600 dark:text-blue-400" />
                <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{service.title}</h2>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full inline-flex items-center">
              <Icon icon="mdi:phone" className="mr-2" />
              Schedule a Service
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

const Services = () => (
  <ClientOnly>
    <ServicesContent />
  </ClientOnly>
);

export default Services;
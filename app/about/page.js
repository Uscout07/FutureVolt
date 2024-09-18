import React from 'react';
import { Icon } from '@iconify/react';

const AboutPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Master Electrician', image: 'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Jane Smith', role: 'Residential Specialist', image: 'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mike Johnson', role: 'Commercial Expert', image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        {/* Image Section */}
        <div className="w-full lg:w-1/2 p-10">
          <img src="https://cdn.pixabay.com/photo/2024/07/01/20/41/ai-generated-8866051_1280.jpg" alt="Feature Image" className="w-full h-auto shadow-lg"/>
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 px-10">
          <h1 className="text-5xl font-extrabold text-gray-800 dark:text-white mb-12" data-aos="fade-down">
            About FutureVolt
          </h1>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            Founded in 2010, FutureVolt has been at the forefront of electrical innovation for over a decade. Our mission is to provide
            cutting-edge electrical solutions that are safe, efficient, and environmentally friendly.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
            With a team of highly skilled electricians and a commitment to customer satisfaction, we've grown to become a trusted name in both
            residential and commercial electrical services.
          </p>
          {/* Icon for decoration, can replace or remove */}
          <Icon icon="mdi:lightning-bolt" color="#FF521B" width="50" height="50" />
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto mt-16 px-10">
        <h2 className="text-4xl font-extrabold text-gray-800 dark:text-white text-center mb-12">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
              <p className="text-lg text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

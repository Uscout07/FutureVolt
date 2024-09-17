import React from 'react';
import { Icon } from '@iconify/react';

const AboutPage = () => {
  const teamMembers = [
    { name: 'John Doe', role: 'Master Electrician', image: 'https://images.pexels.com/photos/819530/pexels-photo-819530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Jane Smith', role: 'Residential Specialist', image: 'https://images.pexels.com/photos/415263/pexels-photo-415263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { name: 'Mike Johnson', role: 'Commercial Expert', image: 'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen">
      <main className="container mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-down">
          About FutureVolt
        </h1>

        {/* Our Story Section */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">Our Story</h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6 md:px-20">
            Founded in 2010, FutureVolt has been at the forefront of electrical innovation for over a decade. Our mission is to provide
            cutting-edge electrical solutions that are safe, efficient, and environmentally friendly.
          </p>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300 md:px-20">
            With a team of highly skilled electricians and a commitment to customer satisfaction, we've grown to become a trusted name in both
            residential and commercial electrical services.
          </p>
        </section>

        {/* Our Values Section */}
        <section className="mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white text-center">Our Values</h2>
          <ul className="list-disc list-inside text-lg leading-relaxed text-gray-600 dark:text-gray-300 space-y-4 md:px-20 flex flex-col w-full justify-evenly items-center text-left">
            <li>Safety First: We prioritize the safety of our clients and team in every project.</li>
            <li>Innovation: We stay ahead of the curve with the latest electrical technologies.</li>
            <li>Sustainability: We're committed to eco-friendly practices and energy-efficient solutions.</li>
            <li>Integrity: We conduct our business with honesty and transparency.</li>
            <li>Excellence: We strive for the highest quality in our work and customer service.</li>
          </ul>
        </section>

        {/* Our Team Section */}
        <section data-aos="fade-up">
          <h2 className="text-3xl font-bold mb-12 text-gray-800 dark:text-white text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">{member.name}</h3>
                <p className="text-lg text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;

import React from 'react';

const TestimonialPage = () => {
  const testimonials = [
    {
      name: 'Emily Johnson',
      role: 'Homeowner',
      testimonial: 'FutureVolt transformed my home with safe and efficient electrical solutions. Their team is professional and highly knowledgeable.',
      image: 'https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      name: 'James Williams',
      role: 'Business Owner',
      testimonial: 'The service from FutureVolt is top-notch. They handled all the electrical needs of my commercial building flawlessly.',
      image: 'https://images.pexels.com/photos/1680175/pexels-photo-1680175.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=10'
    },
    {
      name: 'Sarah Brown',
      role: 'Project Manager',
      testimonial: 'I have worked with many electricians, but FutureVolt stands out for their expertise and attention to detail. Highly recommended!',
      image: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen py-16">
      <main className="container mx-auto px-4">
        <h1 className="text-5xl font-extrabold text-center mb-12 text-gray-800 dark:text-white" data-aos="fade-down">
          Testimonials
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12" data-aos="fade-up">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-100 dark:bg-gray-800 p-8 rounded-lg shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-2xl font-semibold text-center text-gray-800 dark:text-white">{testimonial.name}</h3>
              <p className="text-center text-gray-500 dark:text-gray-400 mb-4">{testimonial.role}</p>
              <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default TestimonialPage;

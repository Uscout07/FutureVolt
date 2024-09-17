import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    alert('Form submitted!');
  };

  return (
    <form className="p-6 bg-[#EDD382]" onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          className="w-full p-2 mb-4 border"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          className="w-full p-2 mb-4 border"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          className="w-full p-2 mb-4 border"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        ></textarea>
      </div>
      <button type="submit" className="bg-[#FC9E4F] p-2 w-full">Send Message</button>
    </form>
  );
}

'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#020122] text-white' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <span className="text-2xl font-bold">ElectriPro</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-[#FF521B] px-3 py-2 rounded-md text-sm font-medium">Home</Link>
              <Link href="/about" className="hover:text-[#FF521B] px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="/services" className="hover:text-[#FF521B] px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="/testimonials" className="hover:text-[#FF521B] px-3 py-2 rounded-md text-sm font-medium">Testimonials</Link>
              <Link href="/contact" className="hover:text-[#FF521B] px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
            </div>
          </div>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-[#FF521B] focus:outline-none">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="hover:text-[#FF521B] block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link href="/about" className="hover:text-[#FF521B] block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link href="/services" className="hover:text-[#FF521B] block px-3 py-2 rounded-md text-base font-medium">Services</Link>
            <Link href="/testimonials" className="hover:text-[#FF521B] block px-3 py-2 rounded-md text-base font-medium">Testimonials</Link>
            <Link href="/contact" className="hover:text-[#FF521B] block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import Image from 'next/image';

export default function footer(){
  return (
    <footer className="bg-white border-t border-gray-200 py-8 px-4 md:px-16">
      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6">
        <div>
          <h2 className="text-lg font-bold text-black">Subscribe to our newsletter</h2>
          <p className="text-base text-black mt-2">
            Stay updated with the latest news, courses, and offers.
          </p>
        </div>

        <div className="max-w-6xl mx-auto mt-4">
          <form className="flex items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-black text-gray-700 rounded-md focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-5 py-2 text-sm border border-black text-gray-700 rounded-md hover:bg-gray-100 transition-colors"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-black mt-4">
            By subscribing, you agree to our{' '}
            <a href="#" className="underline text-blue-500">
              Privacy Policy
            </a>.
          </p>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 py-9">
        <div className="flex items-center space-x-2 pt-5 pb-5">
          {/* Logo and Text */}
          <Image
            src="/images/Frame 1.png" 
            alt="Logo"
            height={40}
            width={40}
            className="object-contain"
          />
          <h3 className="text-xl font-bold text-black">Ddsgnr</h3>
        </div>

        <div>
          <h4 className="text-lg font-medium text-black">Courses</h4>
          <ul className="mt-4 space-y-2 text-black text-sm">
            <li>Business</li>
            <li>Development</li>
            <li>Technology</li>
            <li>Design</li>
            <li>Programming</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-black">Resources</h4>
          <ul className="mt-4 space-y-2 text-black text-sm">
            <li>Career</li>
            <li>Resume</li>
            <li>Learning</li>
            <li>Interview Preparation</li>
            <li>Jobs</li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-medium text-black">About Us</h4>
          <ul className="mt-4 space-y-2 text-black text-sm">
            <li>Contact</li>
            <li>Help/Support</li>
            <li>FAQ</li>
            <li>Terms and Conditions</li>
            <li>Partners</li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-black text-sm">
        <p>© 2023 Ddsgnr. All rights reserved.</p>
        <div className="flex space-x-2 mt-2 md:mt-0">
          <a href="#" className="underline text-blue-500">
            Privacy Policy
          </a>
          <a href="#" className="underline text-blue-500">
            Terms of Service
          </a>
          <a href="#" className="underline text-blue-500">
            Cookies Settings
          </a>
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="#"
            aria-label="Facebook"
            className="text-black hover:text-blue-600 transition-colors"
          >
            <FaFacebook size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-black hover:text-pink-600 transition-colors"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-black hover:text-blue-400 transition-colors"
          >
            <FaTwitter size={20} />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="text-black hover:text-blue-700 transition-colors"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};



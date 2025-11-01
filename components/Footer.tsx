"use client";

import { useState } from 'react';
import { Send } from 'lucide-react';
import { footerData } from '@/lib/data';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setEmail('');
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-green-400 w-8 h-8 rounded flex items-center justify-center mr-3">
                <div className="w-4 h-4 bg-slate-900 rounded-sm"></div>
              </div>
              <span className="text-white text-2xl font-bold">MYKD</span>
            </div>
            
            <p className="text-gray-400 text-sm leading-relaxed">
              Lorem ipsum dolor sitamet consectetur adipiscing Duis esollicitudin augue euismod. Nulla ullamcorper dolor sitamet consectetur.
            </p>

            <div>
              <h4 className="text-white font-semibold mb-3">ACTIVE WITH US</h4>
              <div className="flex space-x-3">
                {footerData.socialLinks.map((social) => (
                  <div
                    key={social.name}
                    className="w-10 h-10 bg-slate-800 hover:bg-green-400 rounded-lg flex items-center justify-center cursor-pointer transition-all duration-300 group"
                  >
                    <div className="w-5 h-5 bg-gray-400 group-hover:bg-slate-900 rounded"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">QUICK LINK</h4>
            <ul className="space-y-3">
              {footerData.quickLinks.map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Supports */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">SUPPORTS</h4>
            <ul className="space-y-3">
              {footerData.supports.map((support) => (
                <li key={support}>
                  <a 
                    href="#" 
                    className="text-gray-400 hover:text-green-400 transition-colors duration-200 text-sm"
                  >
                    {support}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="text-white font-semibold text-lg">NEWSLETTER</h4>
            <p className="text-gray-400 text-sm">
              Subscribe our newsletter to get our latest update & news consectetur
            </p>
            
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-green-500 hover:bg-green-400 text-white rounded-r-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © 2024 MYKD Gaming. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
"use client";

import { useState } from 'react';
import { teamMembers } from '@/lib/data';

export default function TeamSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-32 h-32 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-green-400/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-green-400 text-lg font-medium tracking-wider mb-4 block">
            OUR TEAM MEMBERS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ACTIVE TEAM MEMBERS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 transition-all duration-500 hover:border-green-400/50 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2">
                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Decorative corners */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-green-400/30 group-hover:border-green-400 transition-colors duration-300"></div>
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-green-400/30 group-hover:border-green-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-green-400/30 group-hover:border-green-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-green-400/30 group-hover:border-green-400 transition-colors duration-300"></div>

                <div className="relative z-10 text-center">
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-slate-600 group-hover:border-green-400 transition-colors duration-300 relative">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className={`absolute inset-0 bg-green-400/20 transition-opacity duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'}`}></div>
                    </div>
                    <div className="absolute -inset-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-green-400 font-medium text-sm tracking-wider">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
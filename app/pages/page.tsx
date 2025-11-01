"use client";

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { pageCategories } from '@/lib/data';
import { ArrowRight, FileText, HelpCircle, Settings, Shield, Trophy, Users } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PagesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const pathname = usePathname();
  
  // You can use pathname directly in your component
  // For example, to highlight the current page in navigation
  // or to conditionally render content based on the current route

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-2 h-2 bg-green-300 rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-3 h-3 bg-green-500 rounded-full animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="mb-6">
              <span className="text-green-400 text-lg font-medium tracking-wider">EXPLORE</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              ALL
              <span className="block text-green-400">PAGES</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover all the resources, guides, and information available on our platform
            </p>
          </div>
        </div>
      </section>

      {/* Pages Directory */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Category Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <h2 className="text-2xl font-bold text-white mb-6">Categories</h2>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                      selectedCategory === null
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    <span>All Pages</span>
                  </button>
                  {pageCategories.map((category) => {
                    const getIcon = (iconName: string) => {
                      const icons = { Trophy, Users, HelpCircle, Shield, Settings, FileText };
                      return icons[iconName as keyof typeof icons];
                    };
                    const IconComponent = getIcon(category.icon);
                    return (
                      <button
                        key={category.title}
                        onClick={() => setSelectedCategory(category.title)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 flex items-center space-x-3 ${
                          selectedCategory === category.title
                            ? 'bg-green-500 text-white'
                            : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                        }`}
                      >
                        <IconComponent className="w-5 h-5" />
                        <span>{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Pages Content */}
            <div className="lg:col-span-3">
              {selectedCategory === null ? (
                // Show all categories
                <div className="space-y-12">
                  {pageCategories.map((category) => {
                    const getIcon = (iconName: string) => {
                      const icons = { Trophy, Users, HelpCircle, Shield, Settings, FileText };
                      return icons[iconName as keyof typeof icons];
                    };
                    const IconComponent = getIcon(category.icon);
                    return (
                      <div key={category.title}>
                        <div className="flex items-center space-x-3 mb-6">
                          <div className="bg-green-500/20 p-2 rounded-lg">
                            <IconComponent className="w-6 h-6 text-green-400" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {category.pages.map((page) => (
                            <div
                              key={page.name}
                              className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-1 group cursor-pointer"
                            >
                              <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                                {page.name}
                              </h4>
                              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                {page.description}
                              </p>
                              <div className="flex items-center text-green-400 text-sm font-medium group-hover:text-green-300 transition-colors">
                                <span>Learn More</span>
                                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                // Show selected category
                <div>
                  {pageCategories
                    .filter(category => category.title === selectedCategory)
                    .map((category) => {
                      const getIcon = (iconName: string) => {
                        const icons = { Trophy, Users, HelpCircle, Shield, Settings, FileText };
                        return icons[iconName as keyof typeof icons];
                      };
                      const IconComponent = getIcon(category.icon);
                      return (
                        <div key={category.title}>
                          <div className="flex items-center space-x-3 mb-8">
                            <div className="bg-green-500/20 p-3 rounded-lg">
                              <IconComponent className="w-8 h-8 text-green-400" />
                            </div>
                            <div>
                              <h3 className="text-3xl font-bold text-white">{category.title}</h3>
                              <p className="text-gray-300">Explore all {category.title.toLowerCase()} related pages</p>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {category.pages.map((page) => (
                              <div
                                key={page.name}
                                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2 group cursor-pointer"
                              >
                                <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-green-400 transition-colors">
                                  {page.name}
                                </h4>
                                <p className="text-gray-300 mb-6 leading-relaxed">
                                  {page.description}
                                </p>
                                <div className="flex items-center text-green-400 font-medium group-hover:text-green-300 transition-colors">
                                  <span>Access Page</span>
                                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Quick Access</h2>
            <p className="text-gray-300">Frequently accessed pages and resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Tournament Rules', icon: Trophy, color: 'green' },
              { name: 'Getting Started', icon: HelpCircle, color: 'blue' },
              { name: 'Privacy Policy', icon: Shield, color: 'purple' },
              { name: 'Technical Support', icon: Settings, color: 'orange' },
            ].map((item) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={item.name}
                  className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 transform hover:-translate-y-1 cursor-pointer group text-center"
                >
                  <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 transition-colors">
                    <IconComponent className="w-8 h-8 text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold group-hover:text-green-400 transition-colors">
                    {item.name}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
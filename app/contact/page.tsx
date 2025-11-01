"use client";

import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import { contactData } from '@/lib/data';
import { useAppStore, useContactForm } from '@/lib/store';
import { Clock, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';

export default function ContactPage() {
  const contactForm = useContactForm();
  const { updateContactForm, submitContactForm, isLoading, setCurrentPage } = useAppStore();

  // useEffect(() => {
  //   setCurrentPage('/contact');
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []); // Empty dependency array ensures this runs only once on mount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitContactForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    updateContactForm(e.target.name, e.target.value);
  };

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
              <span className="text-green-400 text-lg font-medium tracking-wider">GET IN TOUCH</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              CONTACT
              <span className="block text-green-400">US</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to join the gaming revolution? We're here to help you get started
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Let's Start a Conversation</h2>
                <p className="text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're interested in joining our tournaments, have questions about our platform, 
                  or want to partner with us, we'd love to hear from you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-6">
                {contactData.info.map((info, index) => {
                  const getIcon = (iconName: string) => {
                    const icons = { Mail, Phone, MapPin, Clock };
                    const IconComponent = icons[iconName as keyof typeof icons];
                    return IconComponent ? <IconComponent className="w-6 h-6 text-green-400" /> : null;
                  };

                  return (
                    <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-300 group">
                      <div className="flex items-start space-x-4">
                        <div className="bg-green-500/20 p-3 rounded-lg group-hover:bg-green-500/30 transition-colors">
                          {getIcon(info.icon)}
                        </div>
                        <div>
                          <h3 className="text-white font-semibold mb-2">{info.title}</h3>
                          <p className="text-gray-300 mb-2">{info.description}</p>
                          {info.link.startsWith('mailto:') || info.link.startsWith('tel:') ? (
                            <a href={info.link} className="text-green-400 hover:text-green-300 transition-colors whitespace-pre-line">
                              {info.value}
                            </a>
                          ) : (
                            <div className="text-green-400 whitespace-pre-line">
                              {info.value}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-gray-300">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-white font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={contactForm.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white focus:outline-none focus:border-green-400 transition-colors"
                  >
                    <option value="">Select a subject</option>
                    <option value="tournament">Tournament Information</option>
                    <option value="partnership">Partnership Opportunities</option>
                    <option value="support">Technical Support</option>
                    <option value="general">General Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-white font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactForm.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-green-500 hover:bg-green-400 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-5 h-5" />
                  <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-300">Quick answers to common questions</p>
          </div>

          <div className="space-y-6">
            {contactData.faq.map((faq, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-500/20 p-2 rounded-lg flex-shrink-0">
                    <MessageSquare className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                    <p className="text-gray-300">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
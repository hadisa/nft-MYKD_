"use client";

import { useState, useEffect, useCallback, useMemo } from 'react';
import { Calendar, User, ArrowRight, Search, Filter } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useAppStore } from '@/lib/store';
import { newsArticles } from '@/lib/data';

const categories = ['All', 'Tournament', 'Technology', 'Players', 'Community', 'Training'] as const;

export default function NewsPage() {
  // Get only the necessary state and actions from the store
  // const selectedCategory = useAppStore((state) => state.selectedCategory);
  // const searchTerm = useAppStore((state) => state.searchTerm);
  // const setSelectedCategory = useAppStore((state) => state.setSelectedCategory);
  // const setSearchTerm = useAppStore((state) => state.setSearchTerm);
  // const setCurrentPage = useAppStore((state) => state.setCurrentPage);

  // // Set current page on mount and initialize data
  // useEffect(() => {
  //   setCurrentPage('/news');
  //   // Set initial data if needed
  //   const currentNews = useAppStore.getState().news;
  //   if (currentNews.length === 0) {
  //     useAppStore.getState().setNews(newsArticles);
  //   }
  // }, [setCurrentPage]);

  // // Get news from the store with proper typing
  // const news = useAppStore((state) => state.news);

  // // Memoize filtered articles to prevent unnecessary recalculations
  // const { filteredArticles, featuredArticle, regularArticles } = useMemo(() => {
  //   const filtered = news.filter((article) => {
  //     const matchesCategory = selectedCategory === 'All' || article.category === selectedCategory;
  //     const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
  //     return matchesCategory && matchesSearch;
  //   });

  //   return {
  //     filteredArticles: filtered,
  //     featuredArticle: filtered.find(article => article.featured),
  //     regularArticles: filtered.filter(article => !article.featured)
  //   };
  // }, [news, selectedCategory, searchTerm]);

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
              <span className="text-green-400 text-lg font-medium tracking-wider">STAY UPDATED</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              GAMING
              <span className="block text-green-400">NEWS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay informed with the latest updates, tournaments, and gaming industry news
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              {/* <input
                type="text"
                placeholder="Search news..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-400 transition-colors"
              /> */}
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="text-gray-400 w-5 h-5" />
              <div className="flex flex-wrap gap-2">
                {/* {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedCategory === category
                        ? 'bg-green-500 text-white'
                        : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                    }`}
                  >
                    {category}
                  </button>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {/* {featuredArticle && selectedCategory === 'All' && !searchTerm && (
        <section className="py-16 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Featured Story</h2>
              <div className="w-20 h-1 bg-green-400"></div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-500 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
                
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      {featuredArticle.category}
                    </span>
                    <div className="flex items-center text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(featuredArticle.date).toLocaleDateString()}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                    {featuredArticle.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{featuredArticle.author}</span>
                    </div>
                    
                    <button className="flex items-center text-green-400 hover:text-green-300 font-medium transition-colors group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )} */}

      {/* News Grid */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Latest News</h2>
            <div className="w-20 h-1 bg-green-400"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* {regularArticles.map((article) => (
              <div
                key={article.id}
                className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2 group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-medium rounded-full">
                      {article.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-400 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-400 transition-colors line-clamp-2">
                    {article.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <User className="w-4 h-4 mr-2" />
                      <span className="text-sm">{article.author}</span>
                    </div>
                    
                    <button className="flex items-center text-green-400 hover:text-green-300 font-medium transition-colors text-sm group">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-lg mb-4">No articles found</div>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )} */}
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
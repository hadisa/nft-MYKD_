"use client";

import { useEffect, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import TeamSection from '@/components/TeamSection';
import TournamentSection from '@/components/TournamentSection';
import Footer from '@/components/Footer';
import { useAppStore } from '@/lib/store';
import { tournaments, newsArticles } from '@/lib/data';

export default function Home() {
  const { setTournaments, setNews } = useAppStore();

  useEffect(() => {
    // Initialize store with data only once on component mount
    setTournaments(tournaments as any); // Quick fix with type assertion
    setNews(newsArticles);
  }, [setTournaments, setNews]); // Add dependencies to follow React hooks rules

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />

      {/* Main Content */}
      <main className="pt-16">
        <HeroSection />
        <TeamSection />
        <TournamentSection />
      </main>

      <Footer />
    </div>
  );
}
"use client";

import { useState, useEffect, useCallback } from 'react';
import { Trophy, Clock, DollarSign } from 'lucide-react';
import { useTournaments, useAppStore } from '@/lib/store';

function CountdownTimer({ endDate }: { endDate: Date }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="flex justify-center space-x-4 mb-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="text-center">
          <div className="bg-slate-700/50 rounded-lg px-2 py-1 min-w-[40px]">
            <div className="text-white font-bold text-lg">
              {value.toString().padStart(2, '0')}
            </div>
          </div>
          <div className="text-gray-400 text-xs mt-1 uppercase">
            {unit.slice(0, 3)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function TournamentSection() {
  // Get tournaments directly from the store without causing re-renders
  const tournaments = useAppStore((state) => state.tournaments);
  const joinTournament = useAppStore((state) => state.joinTournament);
  const isLoading = useAppStore((state) => state.isLoading);

  const handleJoinTournament = useCallback(async (tournamentId: number) => {
    try {
      await joinTournament(tournamentId);
    } catch (error) {
      console.error('Failed to join tournament:', error);
    }
  }, [joinTournament]);

  return (
    <section id="tournament" className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-8 h-8 bg-yellow-400 rounded-full animate-bounce opacity-20"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-green-400 rounded-full animate-pulse opacity-30"></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-red-400 rounded-full animate-ping opacity-25"></div>
        <div className="absolute top-1/2 right-10 w-12 h-12 border-2 border-green-400 rounded-full animate-spin opacity-20"></div>
        
        {/* Floating Gaming Elements */}
        <div className="absolute top-1/4 right-1/4 animate-float">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg">
            <DollarSign className="w-8 h-8 text-white" />
          </div>
        </div>
        
        <div className="absolute top-3/4 left-1/4 animate-float-delayed">
          <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-lg">
            <Trophy className="w-6 h-6 text-white" />
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex items-center space-x-2 text-sm">
          <a href="#home" className="text-green-400 hover:text-green-300 transition-colors">HOME</a>
          <span className="text-gray-500">•</span>
          <span className="text-white">TOURNAMENT</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            TOURNAMENT
          </h1>
          
          <div className="mb-8">
            <span className="text-blue-400 text-lg font-medium tracking-wider">
              OUR TOURNAMENT
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            PLAY TO EARN GAMES
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tournaments.map((tournament, index) => (
            <div
              key={index}
              className="group relative bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 hover:border-green-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-green-500/10 transform hover:-translate-y-2"
            >
              {/* Prize Banner */}
              <div className={`absolute -top-4 left-6 px-4 py-2 rounded-lg font-bold text-slate-900 flex items-center space-x-2 ${
                tournament.color === 'yellow' 
                  ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' 
                  : 'bg-gradient-to-r from-green-400 to-green-600'
              }`}>
                <Trophy className="w-4 h-4" />
                <span>${tournament.prize.toLocaleString()}</span>
              </div>

              <div className="pt-8">
                <CountdownTimer endDate={tournament.endDate} />
                
                <h3 className={`text-xl font-bold mb-6 text-center ${
                  tournament.color === 'yellow' ? 'text-yellow-400' : 'text-green-400'
                }`}>
                  {tournament.title}
                </h3>

                <div className="text-center">
                  <button 
                    onClick={() => handleJoinTournament(tournament.id)}
                    disabled={isLoading}
                    className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                    tournament.color === 'yellow'
                      ? 'bg-yellow-500 hover:bg-yellow-400 text-slate-900'
                      : 'bg-green-500 hover:bg-green-400 text-white'
                  }`}>
                    {isLoading ? 'JOINING...' : 'JOIN NOW'}
                  </button>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
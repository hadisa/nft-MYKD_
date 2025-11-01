"use client";

import { useState, useEffect, useRef } from "react";
import {
  Trophy,
  Users,
  DollarSign,
  Globe,
  ArrowRight,
  Play,
} from "lucide-react";

const FloatingElement = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <div
    className="absolute animate-float opacity-20 hover:opacity-40 transition-all duration-500 cursor-pointer"
    style={{
      animationDelay: `${delay}s`,
      animationDuration: "8s",
    }}
  >
    {children}
  </div>
);

const AnimatedBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const rect = backgroundRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={backgroundRef} className="absolute inset-0 overflow-hidden">
      {/* Main Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-green-900/20" />

      {/* Animated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent" />
      <div
        className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent"
        style={{
          maskImage:
            "radial-gradient(circle at center, black, transparent 70%)",
        }}
      />

      {/* Animated Light Beams */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1 h-64 bg-gradient-to-b from-green-400/40 to-transparent animate-beam-1" />
        <div className="absolute top-0 right-1/3 w-1 h-48 bg-gradient-to-b from-green-300/30 to-transparent animate-beam-2" />
        <div className="absolute bottom-0 left-1/3 w-1 h-56 bg-gradient-to-t from-green-400/40 to-transparent animate-beam-3" />
      </div>

      {/* Floating Gaming Elements */}
      <FloatingElement delay={0}>
        <div className="top-20 left-10 w-16 h-16 bg-gradient-to-br from-green-400/20 to-green-600/20 backdrop-blur-sm border border-green-400/30 rounded-xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-110 transition-transform">
          <Trophy className="w-8 h-8 text-green-400" />
        </div>
      </FloatingElement>

      <FloatingElement delay={2}>
        <div className="top-32 right-20 w-12 h-12 bg-gradient-to-br from-green-300/20 to-green-500/20 backdrop-blur-sm border border-green-300/30 rounded-xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-110 transition-transform">
          <div className="w-6 h-6 bg-green-400 rounded-full animate-pulse" />
        </div>
      </FloatingElement>

      <FloatingElement delay={4}>
        <div className="bottom-40 left-1/4 w-14 h-14 bg-gradient-to-br from-green-500/20 to-green-700/20 backdrop-blur-sm border border-green-500/30 rounded-xl flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-110 transition-transform">
          <div
            className="w-7 h-7 border-2 border-green-400 rounded-lg animate-spin"
            style={{ animationDuration: "3s" }}
          />
        </div>
      </FloatingElement>

      {/* Animated Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Interactive Glow */}
      <div
        className="absolute w-96 h-96 bg-green-500/10 rounded-full blur-3xl transition-all duration-300 ease-out"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: "translate(-50%, -50%)",
          opacity: Math.max(
            0.3,
            0.5 -
              (Math.abs(mousePosition.x - 50) +
                Math.abs(mousePosition.y - 50)) /
                200
          ),
        }}
      />
    </div>
  );
};

const StatCardWithImage = ({
  value,
  label,
  icon: Icon,
  delay,
  imageUrl,
}: {
  value: string;
  label: string;
  icon: any;
  delay: number;
  imageUrl: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValue = parseInt(value.replace(/[^0-9]/g, ""));
    const increment = targetValue / 60;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  const formatValue = (num: number, original: string) => {
    if (original.includes("K")) return `${Math.round(num / 1000)}K+`;
    if (original.includes("M")) return `$${Math.round(num / 1000000)}M+`;
    return `${Math.round(num)}+`;
  };

  return (
    <div
      ref={ref}
      className="group relative overflow-hidden rounded-2xl transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url('${imageUrl}')`,
          transform: isHovered ? "scale(1.1)" : "scale(1)",
        }}
      />

      {/* Gradient Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/60 to-green-900/40 group-hover:from-slate-900/70 group-hover:to-green-900/50 transition-all duration-500" /> */}

      {/* Border Glow Effect */}
      <div
        className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 ${
          isHovered
            ? "border-green-400/50 shadow-lg shadow-green-500/20"
            : "border-slate-700/50"
        }`}
      />

      {/* Content */}
      <div className="relative z-10 p-6 text-center ">
        <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-500/30 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm">
          <Icon className="w-8 h-8 text-green-400" />
        </div>

        <div className="text-3xl font-bold bg-green-900/70 rounded-xl  text-white mb-2 group-hover:text-green-400 transition-colors duration-300">
          {formatValue(count, value)}
          <div className="text-gray-300 text-sm font-medium group-hover:text-green-300 transition-colors">
            {label}
          </div>
        </div>
      </div>
    </div>
  );
};

const CTAButton = ({
  children,
  variant = "primary",
  icon: Icon,
  onClick,
}: {
  children: string;
  variant?: "primary" | "secondary";
  icon?: any;
  onClick?: () => void;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyles =
    "group px-8 py-4 font-semibold rounded-lg transition-all duration-300 transform flex items-center justify-center space-x-2 relative overflow-hidden";

  const variants = {
    primary:
      "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25",
    secondary:
      "border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Shine effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-transform duration-1000 ${
          isHovered ? "translate-x-[100%]" : "translate-x-[-100%]"
        }`}
      />

      {Icon && <Icon className="w-5 h-5 relative z-10" />}
      <span className="relative z-10">{children}</span>
      {variant === "primary" && (
        <ArrowRight
          className={`w-5 h-5 relative z-10 transition-transform duration-300 ${
            isHovered ? "translate-x-1" : ""
          }`}
        />
      )}
    </button>
  );
};

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Stat cards with individual background images
  const stats = [
    {
      icon: Users,
      value: "50K+",
      label: "Active Players",
      image: "/nft2.png", // Update with your image path
    },
    {
      icon: DollarSign,
      value: "$10M+",
      label: "Prize Pool",
      image: "/nft1.png", // Update with your image path
    },
    {
      icon: Trophy,
      value: "5K+",
      label: "Tournaments",
      image: "/nft2.png", // Update with your image path
    },
    {
      icon: Globe,
      value: "120+",
      label: "Countries",
      image: "/nft1.png", // Update with your image path
    },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <AnimatedBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-400/20 rounded-full px-4 py-2 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-sm font-medium tracking-wider">
                  WELCOME TO MYKD
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Ultimate Gaming
                <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                  Experience
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                Compete in thrilling tournaments, earn incredible rewards, and
                join a global community of gamers. Your journey to greatness
                starts here.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <CTAButton variant="primary" icon={Trophy}>
                Join Tournament
              </CTAButton>

              <CTAButton variant="secondary" icon={Play}>
                Watch Live
              </CTAButton>
            </div>

            {/* Quick Stats */}
            <div
              className={`flex flex-wrap gap-6 pt-8 transition-all duration-1000 delay-500 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {[
                { value: "24/7", label: "Live Support" },
                { value: "99.9%", label: "Uptime" },
                { value: "Instant", label: "Payouts" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl font-bold text-green-400">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Stats Grid with Images */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <StatCardWithImage
                key={index}
                value={stat.value}
                label={stat.label}
                icon={stat.icon}
                delay={index * 200}
                imageUrl={stat.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-green-400/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>

      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
        @keyframes beam-1 {
          0%,
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          50% {
            transform: translateY(100%);
            opacity: 1;
          }
        }
        @keyframes beam-2 {
          0%,
          100% {
            transform: translateY(-100%);
            opacity: 0;
          }
          30% {
            transform: translateY(50%);
            opacity: 0.5;
          }
          60% {
            transform: translateY(100%);
            opacity: 0;
          }
        }
        @keyframes beam-3 {
          0%,
          100% {
            transform: translateY(100%);
            opacity: 0;
          }
          50% {
            transform: translateY(-100%);
            opacity: 1;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        .animate-beam-1 {
          animation: beam-1 4s ease-in-out infinite;
        }
        .animate-beam-2 {
          animation: beam-2 6s ease-in-out infinite;
        }
        .animate-beam-3 {
          animation: beam-3 5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

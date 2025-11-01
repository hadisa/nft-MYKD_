// Team Members Data
export const teamMembers = [
  {
    id: 1,
    name: 'KILLER MASTER',
    role: 'BLOCKCHAIN EXPERT',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Expert in blockchain technology and cryptocurrency with 8+ years of experience.',
    skills: ['Blockchain', 'Smart Contracts', 'DeFi', 'Web3'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 2,
    name: 'TANU MARK',
    role: 'DEVELOPER',
    image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Full-stack developer specializing in gaming platforms and real-time applications.',
    skills: ['React', 'Node.js', 'TypeScript', 'WebSocket'],
    social: {
      twitter: '#',
      linkedin: '#',
      github: '#'
    }
  },
  {
    id: 3,
    name: 'THOMPSON SCOT',
    role: 'ART DIRECTOR',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Creative director with expertise in gaming UI/UX and digital art.',
    skills: ['UI/UX Design', '3D Modeling', 'Animation', 'Branding'],
    social: {
      twitter: '#',
      linkedin: '#',
      dribbble: '#'
    }
  },
  {
    id: 4,
    name: 'SHAKH DANIAL',
    role: 'CRYPTO ADVISOR',
    image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400',
    bio: 'Cryptocurrency advisor and tokenomics expert with deep market knowledge.',
    skills: ['Tokenomics', 'DeFi', 'Market Analysis', 'Strategy'],
    social: {
      twitter: '#',
      linkedin: '#',
      medium: '#'
    }
  },
];

// Tournament Data
export const tournaments = [
  {
    id: 1,
    title: 'TOURNAMENT OF WEEKLY',
    prize: 25000,
    color: 'green',
    endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
    participants: 1250,
    maxParticipants: 2000,
    gameType: 'Battle Royale',
    status: 'active',
    description: 'Weekly tournament with exciting prizes and competitive gameplay.',
    rules: ['Must be level 10+', 'No cheating allowed', 'Fair play required'],
    schedule: {
      registration: 'Mon-Wed',
      tournament: 'Thu-Sun',
      results: 'Monday'
    }
  },
  {
    id: 2,
    title: 'LUCKY CARD',
    prize: 50000,
    color: 'yellow',
    endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
    participants: 890,
    maxParticipants: 1000,
    gameType: 'Card Game',
    status: 'active',
    description: 'High-stakes card tournament with massive rewards.',
    rules: ['Experience required', 'Buy-in: $50', 'Tournament format'],
    schedule: {
      registration: 'Daily',
      tournament: 'Every 3 days',
      results: 'Immediate'
    }
  },
  {
    id: 3,
    title: 'TOURNAMENT OF MONTH',
    prize: 75000,
    color: 'green',
    endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
    participants: 2100,
    maxParticipants: 5000,
    gameType: 'Multi-Game',
    status: 'registration',
    description: 'Monthly championship with the biggest prizes of the year.',
    rules: ['Open to all levels', 'Multiple game modes', 'Elimination rounds'],
    schedule: {
      registration: 'First 2 weeks',
      tournament: 'Last 2 weeks',
      results: 'End of month'
    }
  },
];

// News Articles Data
export const newsArticles = [
  {
    id: 1,
    title: 'MYKD Championship 2024: The Ultimate Gaming Showdown',
    excerpt: 'Get ready for the biggest gaming tournament of the year with over $500,000 in prizes and competitors from around the globe.',
    content: 'The MYKD Championship 2024 is set to be the most spectacular gaming event of the year...',
    image: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Gaming Team',
    date: '2024-01-15',
    category: 'Tournament',
    featured: true,
    readTime: '5 min read',
    tags: ['Championship', 'Tournament', 'Prizes', 'Competition']
  },
  {
    id: 2,
    title: 'New Gaming Arena Opens with State-of-the-Art Technology',
    excerpt: 'Experience gaming like never before in our new facility equipped with the latest hardware and immersive environments.',
    content: 'Our new gaming arena features cutting-edge technology...',
    image: 'https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Tech Team',
    date: '2024-01-12',
    category: 'Technology',
    featured: false,
    readTime: '3 min read',
    tags: ['Technology', 'Arena', 'Hardware', 'Innovation']
  },
  {
    id: 3,
    title: 'Player Spotlight: Rising Stars in Competitive Gaming',
    excerpt: 'Meet the next generation of professional gamers who are making waves in the competitive scene.',
    content: 'These talented individuals are reshaping the gaming landscape...',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Community Team',
    date: '2024-01-10',
    category: 'Players',
    featured: false,
    readTime: '4 min read',
    tags: ['Players', 'Spotlight', 'Competition', 'Rising Stars']
  },
  {
    id: 4,
    title: 'Blockchain Integration: The Future of Gaming Rewards',
    excerpt: 'Discover how blockchain technology is revolutionizing gaming rewards and creating new opportunities for players.',
    content: 'Blockchain technology is transforming how we think about gaming rewards...',
    image: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Blockchain Team',
    date: '2024-01-08',
    category: 'Technology',
    featured: false,
    readTime: '6 min read',
    tags: ['Blockchain', 'Rewards', 'Technology', 'Innovation']
  },
  {
    id: 5,
    title: 'Community Events: Building Connections Beyond Gaming',
    excerpt: 'Join our community events designed to bring gamers together and foster lasting friendships.',
    content: 'Our community events are more than just gaming...',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Community Team',
    date: '2024-01-05',
    category: 'Community',
    featured: false,
    readTime: '3 min read',
    tags: ['Community', 'Events', 'Social', 'Networking']
  },
  {
    id: 6,
    title: 'Training Programs: Level Up Your Gaming Skills',
    excerpt: 'Professional coaching and training programs to help you reach your full potential in competitive gaming.',
    content: 'Our comprehensive training programs are designed...',
    image: 'https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=800',
    author: 'Training Team',
    date: '2024-01-03',
    category: 'Training',
    featured: false,
    readTime: '5 min read',
    tags: ['Training', 'Skills', 'Coaching', 'Development']
  },
];

// Navigation Data
export const navigationItems = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/#about' },
  { name: 'TOURNAMENT', href: '/#tournament' },
  { name: 'PAGES', href: '/pages' },
  { name: 'NEWS', href: '/news' },
  { name: 'CONTACT', href: '/contact' },
];

// Footer Data
export const footerData = {
  quickLinks: [
    'Gaming',
    'Product',
    'All NFTs',
    'Social Network',
    'Domain Names',
    'Collectibles',
  ],
  supports: [
    'Setting & Privacy',
    'Help & Support',
    'Live Auctions',
    'Item Details',
    '24/7 Supports',
    'Our News',
  ],
  socialLinks: [
    { name: 'facebook', url: '#', icon: 'facebook' },
    { name: 'twitter', url: '#', icon: 'twitter' },
    { name: 'instagram', url: '#', icon: 'instagram' },
    { name: 'discord', url: '#', icon: 'discord' },
  ]
};

// Page Categories Data
export const pageCategories = [
  {
    title: 'Tournament Pages',
    icon: 'Trophy',
    pages: [
      { name: 'Tournament Rules', description: 'Complete rules and regulations for all tournaments', href: '/pages/tournament-rules' },
      { name: 'Prize Structure', description: 'Detailed breakdown of prizes and rewards', href: '/pages/prize-structure' },
      { name: 'Tournament History', description: 'Past tournaments and their results', href: '/pages/tournament-history' },
      { name: 'Leaderboards', description: 'Current rankings and player statistics', href: '/pages/leaderboards' },
    ]
  },
  {
    title: 'Community',
    icon: 'Users',
    pages: [
      { name: 'Player Profiles', description: 'Showcase of our top players and their achievements', href: '/pages/player-profiles' },
      { name: 'Community Guidelines', description: 'Rules for maintaining a positive gaming environment', href: '/pages/community-guidelines' },
      { name: 'Events Calendar', description: 'Upcoming events and community gatherings', href: '/pages/events-calendar' },
      { name: 'Hall of Fame', description: 'Celebrating our legendary players', href: '/pages/hall-of-fame' },
    ]
  },
  {
    title: 'Support & Help',
    icon: 'HelpCircle',
    pages: [
      { name: 'Getting Started', description: 'New to MYKD? Start your journey here', href: '/pages/getting-started' },
      { name: 'Technical Support', description: 'Troubleshooting and technical assistance', href: '/pages/technical-support' },
      { name: 'Account Management', description: 'Managing your account and settings', href: '/pages/account-management' },
      { name: 'Payment & Billing', description: 'Information about payments and transactions', href: '/pages/payment-billing' },
    ]
  },
  {
    title: 'Legal & Privacy',
    icon: 'Shield',
    pages: [
      { name: 'Terms of Service', description: 'Legal terms and conditions for using our platform', href: '/pages/terms-of-service' },
      { name: 'Privacy Policy', description: 'How we protect and use your personal information', href: '/pages/privacy-policy' },
      { name: 'Cookie Policy', description: 'Information about our use of cookies', href: '/pages/cookie-policy' },
      { name: 'GDPR Compliance', description: 'Our commitment to data protection', href: '/pages/gdpr-compliance' },
    ]
  },
  {
    title: 'Platform Features',
    icon: 'Settings',
    pages: [
      { name: 'Blockchain Integration', description: 'How we use blockchain technology', href: '/pages/blockchain-integration' },
      { name: 'Security Features', description: 'Keeping your account and data safe', href: '/pages/security-features' },
      { name: 'Mobile App', description: 'Download and use our mobile application', href: '/pages/mobile-app' },
      { name: 'API Documentation', description: 'For developers integrating with our platform', href: '/pages/api-documentation' },
    ]
  },
  {
    title: 'Resources',
    icon: 'FileText',
    pages: [
      { name: 'Gaming Guides', description: 'Tips and strategies to improve your gameplay', href: '/pages/gaming-guides' },
      { name: 'Training Resources', description: 'Educational content for skill development', href: '/pages/training-resources' },
      { name: 'Industry News', description: 'Latest updates from the gaming industry', href: '/pages/industry-news' },
      { name: 'Press Kit', description: 'Media resources and company information', href: '/pages/press-kit' },
    ]
  },
];

// Hero Section Data
export const heroData = {
  title: {
    main: 'GAMING',
    highlight: 'TOURNAMENT'
  },
  subtitle: 'Join the ultimate gaming experience with professional tournaments, amazing prizes, and a community of elite players.',
  stats: [
    { label: 'Active Players', value: '50K+', icon: 'Users' },
    { label: 'Total Prizes', value: '$2M+', icon: 'DollarSign' },
    { label: 'Tournaments', value: '500+', icon: 'Trophy' },
    { label: 'Countries', value: '120+', icon: 'Globe' }
  ],
  features: [
    {
      title: 'Professional Tournaments',
      description: 'Compete in high-stakes tournaments with professional players worldwide',
      icon: 'Trophy'
    },
    {
      title: 'Blockchain Rewards',
      description: 'Secure and transparent reward system powered by blockchain technology',
      icon: 'Shield'
    },
    {
      title: 'Global Community',
      description: 'Connect with gamers from around the world in our vibrant community',
      icon: 'Users'
    }
  ],
  cta: {
    primary: 'JOIN TOURNAMENT',
    secondary: 'LEARN MORE'
  }
};

// Contact Data
export const contactData = {
  info: [
    {
      title: 'Email Us',
      description: 'Send us an email anytime',
      value: 'contact@mykd.com',
      icon: 'Mail',
      link: 'mailto:contact@mykd.com'
    },
    {
      title: 'Call Us',
      description: 'Mon-Fri from 8am to 5pm',
      value: '+1 (234) 567-890',
      icon: 'Phone',
      link: 'tel:+1234567890'
    },
    {
      title: 'Visit Us',
      description: 'Come say hello at our office',
      value: '123 Gaming Street\nTech City, TC 12345',
      icon: 'MapPin',
      link: '#'
    },
    {
      title: 'Business Hours',
      description: 'Our working hours',
      value: 'Monday - Friday: 8:00 AM - 6:00 PM\nSaturday: 9:00 AM - 4:00 PM\nSunday: Closed',
      icon: 'Clock',
      link: '#'
    }
  ],
  faq: [
    {
      question: "How do I join a tournament?",
      answer: "Simply navigate to our Tournament section, choose your preferred tournament, and click 'Join Now'. You'll need to create an account and meet the tournament requirements."
    },
    {
      question: "What are the system requirements?",
      answer: "Our platform supports most modern devices. For optimal gaming experience, we recommend a stable internet connection and updated browser or our mobile app."
    },
    {
      question: "How are prizes distributed?",
      answer: "Prizes are distributed automatically through our secure blockchain-based system within 24-48 hours after tournament completion."
    },
    {
      question: "Can I participate in multiple tournaments?",
      answer: "Yes! You can participate in multiple tournaments simultaneously, as long as their schedules don't conflict."
    }
  ]
};
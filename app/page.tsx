'use client';

import { useState, useRef, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Building2, Bitcoin, ArrowLeftRight, X, ChevronRight, Shield, Clock, Users, Check } from 'lucide-react';
import Link from 'next/link';

// Service data for the 3 categories
const services = [
  {
    id: 'online-banks',
    title: 'Online Banks',
    subtitle: 'Digital Banking Solutions',
    description: 'Expert consultation on selecting and optimizing digital banking services. We help you navigate the complex landscape of online banking, from account setup to international transfers.',
    icon: Building2,
    color: 'from-slate-700 to-slate-900',
    accentColor: '#1e3a5f',
    features: [
      'Multi-currency account setup',
      'International transfer optimization',
      'Fee structure analysis',
      'Security best practices',
      'Business account consultation',
    ],
    stats: { clients: '2,400+', satisfaction: '98%', avgSavings: '$1,200/yr' },
  },
  {
    id: 'crypto-tax',
    title: 'Crypto Exchanges',
    subtitle: 'Tax & Compliance',
    description: 'Navigate cryptocurrency taxation with confidence. Our specialists provide guidance on exchange selection, tax reporting, and regulatory compliance across jurisdictions.',
    icon: Bitcoin,
    color: 'from-amber-700 to-amber-900',
    accentColor: '#92400e',
    features: [
      'Exchange comparison & selection',
      'Tax liability calculation',
      'Regulatory compliance guidance',
      'Portfolio tracking setup',
      'DeFi tax implications',
    ],
    stats: { clients: '1,800+', satisfaction: '97%', avgSavings: '$3,400/yr' },
  },
  {
    id: 'currency-converter',
    title: 'Currency Exchange',
    subtitle: 'Conversion Consulting',
    description: 'Maximize value in international currency exchanges. We provide strategic advice on timing, platforms, and methods to optimize your foreign exchange transactions.',
    icon: ArrowLeftRight,
    color: 'from-emerald-700 to-emerald-900',
    accentColor: '#065f46',
    features: [
      'Rate comparison analysis',
      'Optimal timing strategies',
      'Platform recommendations',
      'Hedging consultation',
      'Corporate FX solutions',
    ],
    stats: { clients: '3,100+', satisfaction: '99%', avgSavings: '$890/yr' },
  },
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleServiceHover = (serviceId: string) => {
    if (!activeService) {
      setActiveService(serviceId);
      setIsExpanding(true);
    }
  };

  const handleServiceClick = (serviceId: string) => {
    if (activeService === serviceId) {
      setActiveService(null);
      setIsExpanding(false);
    } else {
      setActiveService(serviceId);
      setIsExpanding(true);
    }
  };

  const closePanel = () => {
    setActiveService(null);
    setIsExpanding(false);
  };

  const activeServiceData = services.find(s => s.id === activeService);

  if (!mounted) return null;

  // Golden ratio: 1.618
  // Panel width when expanded: 61.8% of screen (golden ratio)
  // Content proportions follow divine ratio

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 overflow-hidden">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-xl font-semibold text-stone-800 dark:text-stone-100 tracking-tight">
            <span className="text-amber-700 dark:text-amber-500">Old</span>Gold
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors">
              Sign In
            </Link>
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full hover:bg-stone-200 dark:hover:bg-stone-800 text-stone-600 dark:text-stone-400 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Main 3-Section Layout */}
      <main ref={containerRef} className="h-screen flex">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeService === service.id;
          
          return (
            <div
              key={service.id}
              className={`relative flex-1 flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-out
                ${isActive ? 'flex-[1.618]' : activeService ? 'flex-[0.5]' : 'flex-1'}
                ${index === 0 ? 'border-r border-stone-200 dark:border-stone-800' : ''}
                ${index === 1 ? 'border-r border-stone-200 dark:border-stone-800' : ''}
              `}
              onMouseEnter={() => !activeService && handleServiceHover(service.id)}
              onClick={() => handleServiceClick(service.id)}
            >
              {/* Background Gradient - appears on hover/active */}
              <div 
                className={`absolute inset-0 bg-gradient-to-b ${service.color} transition-opacity duration-500 ease-out
                  ${isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-10'}
                `}
              />

              {/* Default State Content */}
              <div 
                className={`relative z-10 flex flex-col items-center text-center px-8 transition-all duration-500
                  ${isActive ? 'opacity-0 scale-95 pointer-events-none' : 'opacity-100 scale-100'}
                `}
              >
                <div 
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300
                    bg-stone-100 dark:bg-stone-800 group-hover:bg-stone-200 dark:group-hover:bg-stone-700
                  `}
                  style={{ 
                    // Golden ratio based sizing: height = width / 1.618 for rectangular feel
                  }}
                >
                  <Icon size={32} className="text-stone-700 dark:text-stone-300" />
                </div>
                
                <h2 className="text-2xl font-semibold text-stone-800 dark:text-stone-100 mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-stone-500 dark:text-stone-400 mb-6">
                  {service.subtitle}
                </p>
                
                <button 
                  className="px-6 py-3 bg-stone-800 dark:bg-stone-100 text-stone-100 dark:text-stone-800 rounded-lg text-sm font-medium
                    hover:bg-stone-700 dark:hover:bg-stone-200 transition-colors flex items-center gap-2"
                >
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>

              {/* Expanded Panel Content */}
              {isActive && (
                <div 
                  className={`absolute inset-0 z-20 flex flex-col text-white overflow-y-auto
                    transition-all duration-500 ease-out
                    ${isExpanding ? 'opacity-100' : 'opacity-0'}
                  `}
                >
                  {/* Close Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); closePanel(); }}
                    className="absolute top-20 right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    aria-label="Close panel"
                  >
                    <X size={20} />
                  </button>

                  {/* Panel Content - Golden Ratio Layout */}
                  <div className="flex-1 flex flex-col justify-center px-12 py-24">
                    {/* Top Section: 38.2% */}
                    <div className="mb-auto pt-8">
                      <div className="flex items-center gap-3 mb-4">
                        <Icon size={28} />
                        <span className="text-white/60 text-sm uppercase tracking-wider">{service.subtitle}</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        {service.title}
                      </h1>
                      <p className="text-lg text-white/80 max-w-lg leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Middle Section: 61.8% - Features & Stats */}
                    <div className="my-8">
                      {/* Stats Row */}
                      <div className="flex gap-8 mb-10">
                        <div>
                          <div className="text-3xl font-bold">{service.stats.clients}</div>
                          <div className="text-sm text-white/60">Clients Served</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">{service.stats.satisfaction}</div>
                          <div className="text-sm text-white/60">Satisfaction</div>
                        </div>
                        <div>
                          <div className="text-3xl font-bold">{service.stats.avgSavings}</div>
                          <div className="text-sm text-white/60">Avg. Savings</div>
                        </div>
                      </div>

                      {/* Features List */}
                      <div className="space-y-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                              <Check size={12} />
                            </div>
                            <span className="text-white/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Bottom Section - CTA */}
                    <div className="mt-auto pb-8">
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-white text-stone-900 rounded-lg font-semibold hover:bg-stone-100 transition-colors flex items-center justify-center gap-2">
                          Schedule Consultation
                          <ChevronRight size={18} />
                        </button>
                        <button className="px-8 py-4 bg-white/10 text-white rounded-lg font-medium hover:bg-white/20 transition-colors border border-white/20">
                          View Pricing
                        </button>
                      </div>
                      
                      {/* Trust Indicators */}
                      <div className="flex items-center gap-6 mt-8 text-sm text-white/60">
                        <span className="flex items-center gap-2">
                          <Shield size={14} />
                          Secure & Confidential
                        </span>
                        <span className="flex items-center gap-2">
                          <Clock size={14} />
                          24h Response
                        </span>
                        <span className="flex items-center gap-2">
                          <Users size={14} />
                          Expert Team
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Minimal Footer */}
      <footer className="fixed bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-stone-50 dark:from-stone-950 to-transparent pointer-events-none">
        <div className="flex items-center justify-between max-w-7xl mx-auto text-xs text-stone-400 pointer-events-auto">
          <span>© 2024 OldGold Financial Consulting</span>
          <div className="flex gap-4">
            <a href="#" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">Terms</a>
            <a href="#" className="hover:text-stone-600 dark:hover:text-stone-300 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

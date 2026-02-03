'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { useTheme } from 'next-themes';
import { Moon, Sun, Landmark, Bitcoin, ArrowLeftRight, X, ChevronRight, ChevronDown, Shield, Award, TrendingUp, Check, Menu } from 'lucide-react';
import Link from 'next/link';

// Divine Proportion (Golden Ratio) φ = 1.618033988749895
const PHI = 1.618033988749895;

// Divine proportion scale - properly calculated for readable sizes
const getGoldenScale = (viewportHeight: number, viewportWidth: number, isMobile: boolean) => {
  // Desktop: base from width, Mobile: base from width to maintain visual consistency
  // Using width ensures proportions look similar regardless of orientation
  const baseText = isMobile 
    ? Math.max(12, Math.round(viewportWidth / 30))  // Mobile: width-based for consistency
    : Math.max(12, Math.round(viewportWidth / 100)); // Desktop: width-based
  
  return {
    // Typography scale (divine progression from readable base)
    textXs: baseText,                                    // Base size
    textSm: Math.round(baseText * PHI),                  // φ¹
    textBase: Math.round(baseText * Math.pow(PHI, 2)),   // φ²
    textLg: Math.round(baseText * Math.pow(PHI, 3)),     // φ³
    textXl: Math.round(baseText * Math.pow(PHI, 4)),     // φ⁴
    
    // Spacing scale (divine progression)
    spaceXs: Math.round(baseText * 0.5),                 
    spaceSm: Math.round(baseText * 0.8),                 
    spaceBase: Math.round(baseText * PHI),               
    spaceLg: Math.round(baseText * Math.pow(PHI, 2)),    
    spaceXl: Math.round(baseText * Math.pow(PHI, 3)),    
    
    // Object sizes (proportional to text)
    iconSize: Math.round(baseText * Math.pow(PHI, 2)),   
    iconContainerSize: Math.round(baseText * Math.pow(PHI, 3)),
  };
};

const services = [
  {
    id: 'online-banks',
    title: 'Online Banks',
    subtitle: 'Digital Banking',
    icon: Landmark,
    color: 'from-slate-600 to-slate-800',
    colorLight: 'from-slate-500 to-slate-700',
    bgColor: 'rgba(71, 85, 105, 0.95)',
    brands: ['REVOLUT', 'WISE', 'N26', 'MONZO', 'PAYONEER', 'NETELLER', 'PAYSERA', 'SKRILL', 'PAYPAL'],
    priceRange: '$15 - $350',
    priceDetails: 'Revolut $25-80 • Wise $40-120 • N26 $50-150 • PayPal $15-60 • Payoneer $80-200',
    trustData: [
      { label: 'Accounts Available', value: '2,400+' },
    ],
    certifications: ['Verified Sellers', 'Instant Delivery', 'Full Access'],
  },
  {
    id: 'crypto-tax',
    title: 'Crypto Exchanges',
    subtitle: 'CEX Accounts',
    icon: Bitcoin,
    color: 'from-amber-500 to-amber-700',
    colorLight: 'from-amber-400 to-amber-600',
    bgColor: 'rgba(217, 161, 88, 0.95)',
    brands: ['BINANCE', 'BYBIT', 'OKX', 'COINBASE', 'KRAKEN', 'KUCOIN', 'HUOBI', 'GATE.IO', 'BITGET'],
    priceRange: '$50 - $500',
    priceDetails: 'Binance $80-250 • Coinbase $100-350 • Kraken $120-300 • Bybit $50-180 • OKX $60-200',
    trustData: [
      { label: 'Verified Accounts', value: '1,800+' },
    ],
    certifications: ['KYC Verified', 'Trading Ready', 'Withdrawal Enabled'],
  },
  {
    id: 'currency-converter',
    title: 'Money Transfer',
    subtitle: 'FX Services',
    icon: ArrowLeftRight,
    color: 'from-teal-600 to-teal-800',
    colorLight: 'from-teal-500 to-teal-700',
    bgColor: 'rgba(13, 148, 136, 0.95)',
    brands: ['WESTERN UNION', 'MONEYGRAM', 'REMITLY', 'WORLDREMIT', 'XE', 'CURRENCYFAIR', 'OFX'],
    priceRange: '$30 - $250',
    priceDetails: 'Western Union $50-150 • MoneyGram $40-120 • Remitly $30-90 • WorldRemit $45-130',
    trustData: [
      { label: 'Transfer Accounts', value: '890+' },
    ],
    certifications: ['Active Accounts', 'Multi-Currency', 'High Limits'],
  },
];

export default function Home() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeService, setActiveService] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [viewport, setViewport] = useState({ width: 1200, height: 800 });
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [sectionMousePos, setSectionMousePos] = useState<{ [key: string]: { x: number; y: number } }>({});
  const [menuOpen, setMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    const updateViewport = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    updateViewport();
    window.addEventListener('resize', updateViewport);
    return () => window.removeEventListener('resize', updateViewport);
  }, []);

  // Get divine proportions based on current viewport
  const scale = getGoldenScale(viewport.height, viewport.width, isMobile);
  
  // Header height: fixed proportion of viewport (comfortable 48-60px range)
  const headerHeight = Math.max(48, Math.round(viewport.height / 16));

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({ x: clientX / innerWidth, y: clientY / innerHeight });
  }, []);

  const handleSectionMouseMove = useCallback((e: React.MouseEvent, serviceId: string) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setSectionMousePos(prev => ({
      ...prev,
      [serviceId]: { x: (e.clientX - rect.left) / rect.width, y: (e.clientY - rect.top) / rect.height }
    }));
  }, []);

  const handleServiceClick = (serviceId: string) => {
    setActiveService(activeService === serviceId ? null : serviceId);
  };

  const closePanel = () => setActiveService(null);

  if (!mounted) return null;

  const bgTransformX = (mousePosition.x - 0.5) * 15;
  const bgTransformY = (mousePosition.y - 0.5) * 15;

  return (
    <div className="min-h-screen overflow-x-hidden relative" onMouseMove={handleMouseMove}>
      {/* Subtle animated background glow */}
      <div 
        className="fixed inset-0 transition-transform duration-500 ease-out pointer-events-none"
        style={{ transform: `translate(${bgTransformX}px, ${bgTransformY}px) scale(1.05)` }}
      >
        <div 
          className="absolute rounded-full opacity-15 blur-3xl transition-all duration-700"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(200,180,140,0.6) 0%, transparent 70%)',
            left: `${mousePosition.x * 100 - 20}%`,
            top: `${mousePosition.y * 100 - 20}%`,
          }}
        />
      </div>

      {/* Base Background */}
      <div className="fixed inset-0 bg-slate-50 dark:bg-slate-950 -z-10" />

      {/* Header */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 flex items-center"
        style={{ 
          height: `${headerHeight}px`,
          padding: `0 ${scale.spaceBase}px`,
        }}
      >
        <div className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="flex items-center" style={{ gap: `${scale.spaceSm}px` }}>
            <Link 
              href="/" 
              className="font-bold tracking-tight" 
              style={{ fontSize: `${scale.textSm}px` }}
            >
              <span className="text-slate-700 dark:text-slate-200">Old</span>{' '}<span className="text-amber-600 dark:text-amber-400">Gold</span>
            </Link>
            <span 
              className="text-slate-500 dark:text-slate-400 italic hidden sm:inline" 
              style={{ fontSize: `${scale.textXs * 0.75}px` }}
            >
              Accounts with receding hairline.
            </span>
          </div>
          
          {/* Right side: Theme Toggle + Hamburger Menu */}
          <div className="flex items-center" style={{ gap: `${scale.spaceXs}px` }}>
            <button
              onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
              className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors p-1.5"
              aria-label="Toggle theme"
            >
              {mounted ? (resolvedTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />) : <Moon size={16} />}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors p-2"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Dropdown Menu - Sorted by customer value */}
      {menuOpen && (
        <div 
          className="fixed right-4 z-50 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 min-w-[200px] animate-fadeIn"
          style={{ top: `${headerHeight + 8}px` }}
        >
          {/* Primary Actions - Highest Value */}
          <Link 
            href="/register"
            className="flex items-center px-4 py-3 text-amber-600 dark:text-amber-400 font-semibold hover:bg-amber-50 dark:hover:bg-amber-900/30 transition-colors"
            style={{ fontSize: `${scale.textXs}px` }}
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
          <Link 
            href="/login"
            className="flex items-center px-4 py-3 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            style={{ fontSize: `${scale.textXs}px` }}
            onClick={() => setMenuOpen(false)}
          >
            Login
          </Link>
          <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
          {/* Seller Conversion */}
          <Link 
            href="/become-seller"
            className="flex items-center px-4 py-3 text-teal-600 dark:text-teal-400 font-medium hover:bg-teal-50 dark:hover:bg-teal-900/30 transition-colors"
            style={{ fontSize: `${scale.textXs}px` }}
            onClick={() => setMenuOpen(false)}
          >
            Become a Seller
          </Link>
          <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
          {/* Information Pages */}
          <Link 
            href="/about"
            className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            style={{ fontSize: `${scale.textXs}px` }}
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </Link>
          <Link 
            href="/contacts"
            className="flex items-center px-4 py-3 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            style={{ fontSize: `${scale.textXs}px` }}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="border-t border-slate-200 dark:border-slate-700 my-1"></div>
          {/* Legal - Lowest Priority */}
          <Link 
            href="/privacy"
            className="flex items-center px-4 py-3 text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
            style={{ fontSize: `${scale.textXs * 0.9}px` }}
            onClick={() => setMenuOpen(false)}
          >
            Privacy Policy
          </Link>
        </div>
      )}

      {/* Click outside to close menu */}
      {menuOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Main - 3 Categories */}
      <main 
        ref={containerRef} 
        className="flex flex-col md:flex-row"
        style={{ 
          marginTop: `${headerHeight}px`,
          height: `calc(100vh - ${headerHeight}px)`,
          overflow: 'hidden',
        }}
      >
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = activeService === service.id;
          const sectionMouse = sectionMousePos[service.id] || { x: 0.5, y: 0.5 };
          const tiltX = (sectionMouse.y - 0.5) * 6;
          const tiltY = (sectionMouse.x - 0.5) * -6;
          const glowX = sectionMouse.x * 100;
          const glowY = sectionMouse.y * 100;
          
          // Mobile: each section takes 1/3 of remaining height, Desktop: equal width
          const sectionMinHeight = isMobile 
            ? Math.round((viewport.height - headerHeight) / 3)
            : viewport.height - headerHeight;
          
          // Calculate height for golden ratio distribution
          // Mobile: Active 38.2%, Each Inactive: 30.9%
          const getHeight = () => {
            const availableHeight = viewport.height - headerHeight;
            if (!activeService) return availableHeight / 3; // Equal distribution
            if (isActive) return availableHeight * 0.382;   // 38.2%
            return availableHeight * 0.309;                  // 30.9% each
          };

          return (
            <div
              key={service.id}
              className={`relative flex flex-col items-center justify-center cursor-pointer transition-all duration-500 ease-out overflow-hidden
                ${isMobile 
                  ? `border-b border-slate-200 dark:border-slate-700 last:border-b-0`
                  : `${index < 2 ? 'md:border-r md:border-slate-200 md:dark:border-slate-700' : ''}`
                }
              `}
              style={{ 
                height: isMobile ? `${getHeight()}px` : undefined,
                minHeight: isMobile ? undefined : `${sectionMinHeight}px`,
                flex: isMobile ? 'none' : (isActive ? '3.236 1 0%' : activeService ? '1 1 0%' : '1 1 0%'),
                perspective: '1000px',
              }}
              onClick={() => handleServiceClick(service.id)}
              onMouseMove={(e) => handleSectionMouseMove(e, service.id)}
            >
              {/* Hover Glow */}
              <div 
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ background: `radial-gradient(circle at ${glowX}% ${glowY}%, ${service.bgColor.replace('0.85', '0.08')} 0%, transparent 50%)` }}
              />

              {/* Active Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

              {/* Default Content - Hidden when expanded */}
              {!isActive && (
              <div 
                className={`relative z-10 transition-all duration-500 ${isMobile ? 'flex items-center justify-between w-full' : 'flex flex-col items-center text-center'}`}
                style={{
                  padding: isMobile ? `${scale.spaceXs}px ${scale.spaceSm}px` : `${scale.spaceLg}px`,
                  transform: isMobile ? 'none' : `rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Mobile: Left side content */}
                <div className={isMobile ? 'flex items-center gap-3' : 'contents'}>
                  {/* Icon Container */}
                  <div 
                    className="rounded-2xl flex items-center justify-center bg-white dark:bg-slate-800 shadow-lg transition-all duration-300 hover:shadow-xl border border-slate-200 dark:border-slate-600 flex-shrink-0"
                    style={{ 
                      width: `${Math.round(scale.iconContainerSize * (isMobile ? 0.8 : PHI))}px`,
                      height: `${Math.round(scale.iconContainerSize * (isMobile ? 0.8 : PHI))}px`,
                      marginBottom: isMobile ? 0 : `${scale.spaceSm}px`,
                      transform: isMobile ? 'none' : 'translateZ(20px)',
                    }}
                  >
                    <Icon size={Math.round(scale.iconSize * (isMobile ? 0.8 : PHI))} className="text-slate-700 dark:text-slate-200" />
                  </div>
                  
                  {/* Mobile: Title and brands inline */}
                  {isMobile && (
                    <div className="text-left flex-1">
                      <h2 
                        className="font-bold text-slate-800 dark:text-slate-100"
                        style={{ fontSize: `${scale.textSm}px`, lineHeight: 1.2, marginBottom: `${scale.spaceXs / 2}px` }}
                      >
                        {service.title}
                      </h2>
                      <div className="flex flex-wrap" style={{ gap: `${scale.spaceXs / 3}px` }}>
                        {service.brands.slice(0, 5).map((brand, i) => (
                          <span 
                            key={i}
                            className="bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded"
                            style={{ 
                              fontSize: `${scale.textXs * 0.65}px`,
                              padding: `${scale.spaceXs / 4}px ${scale.spaceXs / 2}px`,
                            }}
                          >
                            {brand}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Desktop only: Trust Badges */}
                {!isMobile && (
                  <div 
                    className="flex items-center justify-center text-slate-500 dark:text-slate-400"
                    style={{ 
                      gap: `${scale.spaceXs}px`, 
                      marginBottom: `${scale.spaceSm}px`,
                      fontSize: `${scale.textXs * 0.75}px`,
                      transform: 'translateZ(30px)',
                      order: -1,
                    }}
                  >
                    <span className="flex items-center" style={{ gap: `${scale.spaceXs / 2}px` }}>
                      <Shield size={scale.textXs * 0.8} /> Verified
                    </span>
                    <span className="flex items-center" style={{ gap: `${scale.spaceXs / 2}px` }}>
                      <Award size={scale.textXs * 0.8} /> Trusted
                    </span>
                    <span className="flex items-center" style={{ gap: `${scale.spaceXs / 2}px` }}>
                      <TrendingUp size={scale.textXs * 0.8} /> Ready
                    </span>
                  </div>
                )}
                
                {/* Desktop only: Title */}
                {!isMobile && (
                  <h2 
                    className="font-bold text-slate-800 dark:text-slate-100"
                    style={{ 
                      fontSize: `${scale.textBase}px`,
                      lineHeight: 1.2,
                      marginBottom: `${scale.spaceXs}px`,
                      transform: 'translateZ(15px)',
                    }}
                  >
                    {service.title}
                  </h2>
                )}
                
                {/* Desktop only: Brand Preview */}
                {!isMobile && (
                  <p 
                    className="text-slate-600 dark:text-slate-400"
                    style={{ 
                      fontSize: `${scale.textXs * 0.9}px`,
                      marginBottom: `${scale.spaceSm}px`,
                      transform: 'translateZ(10px)',
                    }}
                  >
                    {service.brands.slice(0, 3).join(' • ')}
                  </p>
                )}
                
                {/* CTA Button */}
                <button 
                  className="bg-amber-600 dark:bg-amber-500 text-white rounded-lg font-semibold hover:bg-amber-700 dark:hover:bg-amber-600 transition-all duration-300 flex items-center shadow-md flex-shrink-0"
                  style={{
                    padding: `${scale.spaceXs}px ${scale.spaceSm}px`,
                    fontSize: `${scale.textXs * 0.9}px`,
                    gap: `${scale.spaceXs / 2}px`,
                    transform: isMobile ? 'rotate(15deg)' : 'translateZ(25px)',
                  }}
                >
                  {isMobile ? 'Tap' : 'Explore'}
                  {isMobile ? <ChevronDown size={scale.textXs * 0.9} /> : <ChevronRight size={scale.textXs * 0.9} />}
                </button>
              </div>
              )}

              {/* Expanded Panel - All proportions maintained */}
              {isActive && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white overflow-y-auto animate-fadeIn">
                  {/* Close Button */}
                  <button
                    onClick={(e) => { e.stopPropagation(); closePanel(); }}
                    className="absolute z-30 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
                    style={{ 
                      top: `${scale.spaceSm}px`, 
                      right: `${scale.spaceSm}px`, 
                      padding: `${scale.spaceXs}px` 
                    }}
                  >
                    <X size={isMobile ? scale.textXs : Math.round(scale.textSm * 1.236)} />
                  </button>

                  {/* Panel Content - Desktop: 23.6% larger fonts, Mobile: horizontal layout */}
                  <div 
                    className={isMobile ? "flex flex-row items-start" : "flex flex-col"}
                    style={{ 
                      width: isMobile ? '95%' : '70%',
                      maxHeight: '90%',
                      padding: `${isMobile ? scale.spaceSm : scale.spaceLg}px`,
                      gap: isMobile ? `${scale.spaceBase}px` : '0',
                    }}
                  >
                    {/* Left Column (Mobile) / Header Section */}
                    <div style={{ 
                      flex: isMobile ? '0 0 38%' : 'none',
                      marginBottom: isMobile ? '0' : `${scale.spaceSm}px` 
                    }}>
                      <div 
                        className="flex items-center" 
                        style={{ gap: `${scale.spaceXs}px`, marginBottom: `${scale.spaceXs / 2}px` }}
                      >
                        <Icon size={isMobile ? scale.textXs : Math.round(scale.textSm * 1.236)} />
                        <span 
                          className="text-white/60 uppercase tracking-wider" 
                          style={{ fontSize: `${isMobile ? scale.textXs * 0.7 : scale.textXs * 1.236}px` }}
                        >
                          {service.subtitle}
                        </span>
                      </div>
                      <h1 
                        className="font-bold" 
                        style={{ fontSize: `${isMobile ? scale.textSm : Math.round(scale.textBase * 1.236)}px`, lineHeight: 1.1, marginBottom: `${scale.spaceXs}px` }}
                      >
                        {service.title}
                      </h1>
                      
                      {/* Trust Data - in left column for mobile */}
                      <div style={{ marginTop: `${scale.spaceSm}px` }}>
                        {service.trustData.map((item, i) => (
                          <div key={i}>
                            <div 
                              className="font-bold text-white" 
                              style={{ fontSize: `${isMobile ? scale.textSm : Math.round(scale.textSm * 1.236)}px`, lineHeight: 1.2 }}
                            >
                              {item.value}
                            </div>
                            <div 
                              className="text-white/60" 
                              style={{ fontSize: `${isMobile ? scale.textXs * 0.7 : scale.textXs * 1.236}px` }}
                            >
                              {item.label}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button - in left column for mobile */}
                      {isMobile && (
                        <button 
                          className="bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg mt-3"
                          style={{
                            padding: `${scale.spaceXs}px ${scale.spaceSm}px`,
                            fontSize: `${scale.textXs * 0.85}px`,
                          }}
                        >
                          View Pricing
                        </button>
                      )}
                    </div>

                    {/* Right Column (Mobile) / Main Content */}
                    <div style={{ flex: isMobile ? '1' : 'none' }}>
                      {/* Brands Grid */}
                      <div style={{ marginBottom: `${scale.spaceSm}px` }}>
                        <p 
                          className="text-white/50 uppercase tracking-wider" 
                          style={{ fontSize: `${isMobile ? scale.textXs * 0.65 : scale.textXs * 1.236}px`, marginBottom: `${scale.spaceXs / 2}px` }}
                        >
                          Platforms
                        </p>
                        <div className="flex flex-wrap" style={{ gap: `${scale.spaceXs / 2}px` }}>
                          {service.brands.map((brand, i) => (
                            <span 
                              key={i} 
                              className="bg-white/15 rounded text-white/95 font-medium"
                              style={{ 
                                fontSize: `${isMobile ? scale.textXs * 0.7 : scale.textXs * 1.236}px`,
                                padding: `${scale.spaceXs / 3}px ${scale.spaceXs / 1.5}px`,
                              }}
                            >
                              {brand}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Certifications */}
                      <div style={{ marginBottom: `${scale.spaceSm}px` }}>
                        {service.certifications.map((cert, i) => (
                          <div 
                            key={i} 
                            className="flex items-center" 
                            style={{ gap: `${scale.spaceXs / 2}px`, marginBottom: `${scale.spaceXs / 3}px` }}
                          >
                            <Check size={isMobile ? scale.textXs * 0.7 : scale.textXs * 1.236} className="text-white/70" />
                            <span 
                              className="text-white/90" 
                              style={{ fontSize: `${isMobile ? scale.textXs * 0.8 : scale.textXs * 1.236}px` }}
                            >
                              {cert}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Pricing Section */}
                      <div style={{ marginBottom: isMobile ? '0' : `${scale.spaceSm}px` }}>
                        <p 
                          className="text-white/50 uppercase tracking-wider" 
                          style={{ fontSize: `${isMobile ? scale.textXs * 0.65 : scale.textXs * 1.236}px`, marginBottom: `${scale.spaceXs / 2}px` }}
                        >
                          Price Range
                        </p>
                        <div 
                          className="text-white font-bold"
                          style={{ fontSize: `${isMobile ? scale.textSm : Math.round(scale.textBase * 1.236)}px`, marginBottom: `${scale.spaceXs / 2}px` }}
                        >
                          {service.priceRange}
                        </div>
                        <p 
                          className="text-white/70"
                          style={{ fontSize: `${isMobile ? scale.textXs * 0.7 : scale.textXs}px`, lineHeight: 1.4 }}
                        >
                          {service.priceDetails}
                        </p>
                      </div>

                      {/* Desktop CTA */}
                      {!isMobile && (
                        <button 
                          className="bg-white text-slate-800 rounded-lg font-semibold hover:bg-slate-100 transition-colors shadow-lg"
                          style={{
                            padding: `${scale.spaceSm}px ${scale.spaceBase}px`,
                            fontSize: `${Math.round(scale.textXs * 1.236)}px`,
                          }}
                        >
                          View Pricing
                        </button>
                      )}
                    </div>
                    
                    {/* Trust Footer - Desktop only */}
                    {!isMobile && (
                      <div 
                        className="flex flex-wrap items-center text-white/50 mt-auto"
                        style={{ 
                          gap: `${scale.spaceXs}px`, 
                          marginTop: `${scale.spaceSm}px`, 
                          fontSize: `${scale.textXs * 0.9}px` 
                        }}
                      >
                        <span className="flex items-center" style={{ gap: `${scale.spaceXs / 3}px` }}>
                          <Shield size={scale.textXs * 0.9} /> Verified
                        </span>
                        <span className="flex items-center" style={{ gap: `${scale.spaceXs / 3}px` }}>
                          <Award size={scale.textXs * 0.9} /> Trusted
                        </span>
                        <span className="flex items-center" style={{ gap: `${scale.spaceXs / 3}px` }}>
                          <TrendingUp size={scale.textXs * 0.9} /> Ready
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </main>

      {/* Footer - proportional to header */}
      <footer 
        className={`fixed bottom-0 left-0 right-0 bg-gradient-to-t from-slate-50 dark:from-slate-950 to-transparent pointer-events-none ${activeService && isMobile ? 'hidden' : 'block'}`}
        style={{ 
          height: `${headerHeight}px`,
          padding: `0 ${scale.spaceBase}px`,
        }}
      >
        <div 
          className="flex items-center justify-between max-w-7xl mx-auto h-full text-slate-500 dark:text-slate-400 pointer-events-auto" 
          style={{ fontSize: `${scale.textXs * 0.85}px` }}
        >
          <span>© 2024 OldGold</span>
          <div style={{ display: 'flex', gap: `${scale.spaceSm}px` }}>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-700 dark:hover:text-slate-200 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

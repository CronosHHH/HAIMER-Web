import Link from 'next/link';
import React, { useState } from 'react';
import { LiquidButton } from '@/components/liquid-glass-button';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  variant: 'main' | 'landing';
  userName?: string;
  modelName?: string;
}

export default function Header({ variant, userName, modelName }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  if (variant === 'landing') {
    return (
      <header
        className="fixed left-1/2 top-4 sm:top-8 z-50 -translate-x-1/2 flex items-center justify-between px-4 sm:px-6 md:px-10 py-2 sm:py-3 rounded-md w-[min(95vw,900px)] font-thin bg-transparent border border-white/20"
      >
        <div className="absolute inset-0 z-0 h-full w-full rounded-md shadow-[0_0_6px_rgba(0,0,0,0.03),0_2px_6px_rgba(0,0,0,0.08),inset_3px_3px_0.5px_-3px_rgba(0,0,0,0.9),inset_-3px_-3px_0.5px_-3px_rgba(0,0,0,0.85),inset_1px_1px_1px_-0.5px_rgba(0,0,0,0.6),inset_-1px_-1px_1px_-0.5px_rgba(0,0,0,0.6),inset_0_0_6px_6px_rgba(0,0,0,0.12),inset_0_0_2px_2px_rgba(0,0,0,0.06),0_0_12px_rgba(255,255,255,0.15)] transition-all backdrop-blur-lg backdrop-brightness-110"
          style={{ backdropFilter: 'url("#container-glass") blur(16px) brightness(1.1)' }}></div>
        {/* SVG filter for glass effect */}
        <svg className="hidden">
          <defs>
            <filter
              id="container-glass"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence type="fractalNoise" baseFrequency="0.05 0.05" numOctaves="1" seed="1" result="turbulence" />
              <feGaussianBlur in="turbulence" stdDeviation="1.2" result="blurredNoise" />
              <feDisplacementMap in="SourceGraphic" in2="blurredNoise" scale="30" xChannelSelector="R" yChannelSelector="B" result="displaced" />
              <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
              <feComposite in="finalBlur" in2="finalBlur" operator="over" />
            </filter>
          </defs>
        </svg>
        <div className="relative z-10 flex items-center justify-between w-full">
        <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6">
          <Link href="/" className="flex items-center">
            <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-6 sm:h-8 w-auto" />
          </Link>
          <Link href="/company" className="hidden sm:block text-black hover:bg-white/10 rounded-medium px-2 sm:px-4 py-2 transition font-poppins text-base sm:text-lg font-thin drop-shadow-md">Company</Link>
          <Link href="/about-lawxia" className="hidden sm:block text-black hover:bg-white/10 rounded-medium px-2 sm:px-4 py-2 transition font-poppins text-base sm:text-lg font-thin drop-shadow-md">About Lawxia</Link>
        </div>
        {/* Botón de menú móvil */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="sm:hidden p-2 text-black hover:bg-white/10 rounded-medium transition font-poppins font-thin drop-shadow-md"
          aria-label="Abrir menú"
        >
          <Menu size={20} />
        </button>
        
        <Link href="/signin" className="hidden sm:block">
            <LiquidButton className="px-4 sm:px-6 md:px-8 py-2 text-base sm:text-lg font-poppins font-thin">Sign in</LiquidButton>
        </Link>
        </div>
        
        {/* Menú móvil */}
        {isMobileMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-white/10 backdrop-blur-lg rounded-lg border border-white/20 p-4">
            <div className="flex flex-col gap-3">
              <Link 
                href="/company" 
                className="text-black hover:bg-white/10 rounded-medium px-3 py-2 transition font-poppins text-base font-thin drop-shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Company
              </Link>
              <Link 
                href="/about-lawxia" 
                className="text-black hover:bg-white/10 rounded-medium px-3 py-2 transition font-poppins text-base font-thin drop-shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Lawxia
              </Link>
              <Link 
                href="/signin" 
                className="text-black hover:bg-white/10 rounded-medium px-3 py-2 transition font-poppins text-base font-thin drop-shadow-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign in
              </Link>
            </div>
          </div>
        )}
      </header>
    );
  }
  return (
    <header className="w-full flex items-center justify-between px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-contentBackground rounded-b-large shadow-none bg-black/30 backdrop-blur-sm relative font-thin">
      <div className="flex items-center gap-x-2 sm:gap-x-4 md:gap-x-6">
        <Link href="/" className="flex items-center">
          <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-6 sm:h-8 w-auto" />
        </Link>
        <Link href="/company" className="hidden sm:block text-black hover:bg-white/10 rounded-medium px-2 sm:px-4 py-2 transition font-poppins text-base sm:text-lg font-thin drop-shadow-md">Company</Link>
        <Link href="/about-lawxia" className="hidden sm:block text-black hover:bg-white/10 rounded-medium px-2 sm:px-4 py-2 transition font-poppins text-base sm:text-lg font-thin drop-shadow-md">About Lawxia</Link>
      </div>
      <div className="flex items-center gap-2 sm:gap-4">
        <span className="hidden sm:block bg-pro-badge bg-clip-text text-transparent font-poppins font-thin text-base sm:text-lg px-2 sm:px-3 py-1 rounded drop-shadow-md">{modelName || 'Gemini 2.5 Pro'}</span>
      </div>
      {/* Botón de menú móvil */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="sm:hidden p-2 text-black hover:bg-white/10 rounded-medium transition font-poppins font-thin drop-shadow-md"
        aria-label="Abrir menú"
      >
        <Menu size={20} />
      </button>
      
      <div className="flex items-center gap-2">
        <span className="hidden sm:block bg-greeting-text bg-clip-text text-transparent font-poppins font-thin text-base sm:text-lg drop-shadow-md">Hola, {userName || 'Renato'}</span>
        <button className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-componentSubtle flex items-center justify-center text-black font-poppins font-thin text-lg sm:text-xl drop-shadow-md">{userName ? userName[0] : 'R'}</button>
      </div>
      
      {/* Menú móvil */}
      {isMobileMenuOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 mt-2 bg-black/40 backdrop-blur-lg rounded-lg border border-white/20 p-4">
          <div className="flex flex-col gap-3">
            <Link 
              href="/company" 
              className="text-black hover:bg-white/10 rounded-medium px-3 py-2 transition font-poppins text-base font-thin drop-shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Company
            </Link>
            <Link 
              href="/about-lawxia" 
              className="text-black hover:bg-white/10 rounded-medium px-3 py-2 transition font-poppins text-base font-thin drop-shadow-md"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Lawxia
            </Link>
            <div className="text-black px-3 py-2 text-base font-poppins font-thin drop-shadow-md">
              <span className="bg-pro-badge bg-clip-text text-transparent">{modelName || 'Gemini 2.5 Pro'}</span>
            </div>
            <div className="text-black px-3 py-2 text-base font-poppins font-thin drop-shadow-md">
              <span className="bg-greeting-text bg-clip-text text-transparent">Hola, {userName || 'Renato'}</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
} 
import Link from 'next/link';
import React from 'react';
import { LiquidButton } from '@/components/liquid-glass-button';

interface HeaderProps {
  variant: 'main' | 'landing';
  userName?: string;
  modelName?: string;
}

export default function Header({ variant, userName, modelName }: HeaderProps) {
  if (variant === 'landing') {
    return (
      <header
        className="fixed left-1/2 top-8 z-50 -translate-x-1/2 flex items-center justify-between px-10 py-4 rounded-md w-[min(90vw,900px)] font-thin bg-transparent border border-white/20"
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
        <div className="flex items-center gap-x-6">
          <Link href="/" className="flex items-center">
            <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-8 w-auto" />
          </Link>
          <Link href="/company" className="text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition font-roboto">Company</Link>
          <Link href="/about-lawxia" className="text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition font-thin">About Lawxia</Link>
        </div>
        <Link href="/signin">
            <LiquidButton className="px-8 py-2 text-lg font-semibold">Sign in</LiquidButton>
        </Link>
        </div>
      </header>
    );
  }
  return (
    <header className="w-full flex items-center justify-between px-8 py-4 bg-contentBackground rounded-b-large shadow-none bg-black/60 backdrop-blur-sm relative font-thin">
      <div className="flex items-center gap-x-6">
        <Link href="/" className="flex items-center">
          <img src="/images/lawxia-white-logo.png" alt="Lawxia Logo" className="h-8 w-auto" />
        </Link>
        <Link href="/company" className="text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition font-roboto">Company</Link>
        <Link href="/about-lawxia" className="text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition font-thin">About Lawxia</Link>
      </div>
      <div className="flex items-center gap-4">
        <span className="bg-pro-badge bg-clip-text text-transparent font-thin text-lg px-3 py-1 rounded">{modelName || 'Gemini 2.5 Pro'}</span>
      </div>
      <div className="flex items-center gap-2">
        <span className="bg-greeting-text bg-clip-text text-transparent font-thin text-lg">Hola, {userName || 'Renato'}</span>
        <button className="w-10 h-10 rounded-full bg-componentSubtle flex items-center justify-center text-textPrimary font-thin text-xl">{userName ? userName[0] : 'R'}</button>
      </div>
    </header>
  );
} 
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  variant: 'main' | 'landing';
  userName?: string;
  modelName?: string;
}

export default function Header({ variant, userName, modelName }: HeaderProps) {
  if (variant === 'landing') {
    return (
      <div className="w-full relative">
        <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-0" />
        <div className="relative z-10">
          <header className="w-full flex items-center justify-between px-8 py-2 bg-contentBackground rounded-b-large shadow-none">
            <div className="flex items-center gap-8">
              <Link
                href="/company"
                className="font-normal text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition"
                style={{ fontFamily: 'var(--font-space-mono), monospace' }}
              >
                Company
              </Link>
              <Link href="/about-lawxia" className="text-textPrimary hover:bg-white/10 rounded-medium px-4 py-2 transition font-thin">About Lawxia</Link>
            </div>
            <Link href="/signin">
              <button className="bg-interactiveBlue text-textButtonPrimary rounded-pill px-6 py-2 font-thin hover:bg-interactiveBlueHover transition">Sign in</button>
            </Link>
          </header>
        </div>
      </div>
    );
  }
  return (
    <div className="w-full relative">
      <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-0" />
      <div className="relative z-10">
        <header className="w-full flex items-center justify-between px-8 py-2 bg-contentBackground rounded-b-large shadow-none">
          <div className="flex items-center gap-4">
            <span className="bg-pro-badge bg-clip-text text-transparent font-thin text-lg px-3 py-1 rounded">{modelName || 'Gemini 2.5 Pro'}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-greeting-text bg-clip-text text-transparent font-thin text-lg">Hola, {userName || 'Renato'}</span>
            <button className="w-10 h-10 rounded-full bg-componentSubtle flex items-center justify-center text-textPrimary font-thin text-xl">{userName ? userName[0] : 'R'}</button>
          </div>
        </header>
      </div>
    </div>
  );
} 
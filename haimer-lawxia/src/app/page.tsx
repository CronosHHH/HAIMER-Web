import Link from 'next/link';
import Header from '@/components/Header';
import { Space_Mono } from 'next/font/google';
import SignInButton from '@/components/SignInButton';

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400'],
  style: ['italic', 'normal'],
  variable: '--font-space-mono',
});

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-primaryBackground relative overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/bubble-bg.mp4"
      />
      <div className="relative z-20">
        <div className="absolute inset-0 w-full h-full bg-black/60 backdrop-blur-sm z-[-1]" />
        <div className="w-full">
          <Header variant="landing" />
        </div>
      </div>
      <main className="flex-1 flex items-center justify-center relative z-20">
        <section className="bg-contentBackground rounded-large shadow-none p-10 flex flex-col items-center max-w-md w-full mt-8">
          <h1 className="text-4xl font-bold mb-4 bg-gemini-logo bg-clip-text text-transparent">HAIMER</h1>
          <p className={`text-lg text-bodyText mb-8 text-center italic font-space-mono`}>
            "La ley es razón libre de pasión."— Aristóteles
          </p>
          <SignInButton title="Iniciar sesión" />
        </section>
      </main>
    </div>
  );
}

"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';

export default function SignInPage() {
  const router = useRouter();
  const handleSignIn = () => {
    // Mock sign-in logic
    router.push('/chat/main');
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="landing" />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-contentBackground rounded-large shadow-none p-10 flex flex-col items-center max-w-md w-full mt-8">
          <h2 className="text-2xl font-bold mb-6 text-textPrimary">Sign in to HAIMER</h2>
          <button onClick={handleSignIn} className="bg-interactiveBlue text-textButtonPrimary rounded-pill px-8 py-3 text-lg font-semibold hover:bg-interactiveBlueHover transition">Sign in as Renato</button>
        </section>
      </main>
    </div>
  );
} 
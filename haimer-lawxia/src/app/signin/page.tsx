"use client";
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import { useState } from 'react';

export default function SignInPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica real de autenticación
    router.push('/chat/main');
  };

  const isFormValid = username.trim() !== "" && password.trim() !== "";

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="landing" />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-black/70 rounded-large shadow-lg p-10 flex flex-col items-center max-w-md w-full mt-8">
          <h2 className="text-2xl font-bold mb-6 text-textPrimary">Iniciar sesión</h2>
          <form onSubmit={handleSignIn} className="w-full flex flex-col gap-4">
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="username" className="text-textPrimary text-sm">Usuario</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={e => setUsername(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-textPrimary placeholder:text-white/50 focus:outline-none"
                placeholder="Ingresa tu usuario"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="password" className="text-textPrimary text-sm">Contraseña</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-textPrimary placeholder:text-white/50 focus:outline-none"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-interactiveBlue text-textButtonPrimary rounded-pill px-8 py-3 text-lg font-semibold hover:bg-interactiveBlueHover transition mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isFormValid}
            >
              Enviar
            </button>
          </form>
          <p className="text-xs text-white/60 mt-4">
            <a href="/signup" className="underline hover:text-interactiveBlue cursor-pointer">No tengo cuenta.</a>
          </p>
        </section>
      </main>
    </div>
  );
} 
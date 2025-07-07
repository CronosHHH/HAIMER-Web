"use client";
import Header from '@/components/Header';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignUpPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const isFormValid =
    username.trim() !== "" &&
    password.trim() !== "" &&
    confirmPassword.trim() !== "" &&
    email.trim() !== "" &&
    phone.trim() !== "" &&
    password === confirmPassword;

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }
    // Aquí iría la lógica real de registro
    // Por ahora, redirige al login tras "registrar"
    router.push('/signin');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="landing" />
      <main className="flex-1 flex items-center justify-center">
        <section className="bg-black/70 rounded-large shadow-lg p-10 flex flex-col items-center max-w-md w-full mt-8">
          <h2 className="text-2xl font-bold mb-6 text-textPrimary">Registrarse</h2>
          <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4">
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
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="confirmPassword" className="text-textPrimary text-sm">Confirmar contraseña</label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-textPrimary placeholder:text-white/50 focus:outline-none"
                placeholder="Confirma tu contraseña"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="email" className="text-textPrimary text-sm">Correo</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-textPrimary placeholder:text-white/50 focus:outline-none"
                placeholder="Ingresa tu correo"
                required
              />
            </div>
            <div className="w-full flex flex-col gap-1">
              <label htmlFor="phone" className="text-textPrimary text-sm">Teléfono</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="w-full px-4 py-2 rounded bg-white/10 text-textPrimary placeholder:text-white/50 focus:outline-none"
                placeholder="Ingresa tu teléfono"
                required
              />
            </div>
            {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
            <button
              type="submit"
              className="bg-interactiveBlue text-textButtonPrimary rounded-pill px-8 py-3 text-lg font-semibold hover:bg-interactiveBlueHover transition mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!isFormValid}
            >
              Registrarse
            </button>
          </form>
          <p className="text-xs text-white/60 mt-4">
            <a href="/signin" className="underline hover:text-interactiveBlue cursor-pointer">Ya tengo cuenta.</a>
          </p>
        </section>
      </main>
    </div>
  );
} 
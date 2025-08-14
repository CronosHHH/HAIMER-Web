"use client";
import { useRouter } from "next/navigation";
import { LiquidButton } from '@/components/liquid-glass-button';

export default function SignInButton({ onClick, title }: { onClick?: (e: React.MouseEvent) => void, title?: string }) {
  const router = useRouter();

  const handleSignIn = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick(e);
    } else {
      router.push("/signin");
    }
  };

  return (
    <LiquidButton
      onClick={handleSignIn}
      title={title ?? "Sign in"}
      className="px-8 py-3 text-lg font-poppins font-thin"
    >
      {title ?? 'Sign in'}
    </LiquidButton>
  );
} 
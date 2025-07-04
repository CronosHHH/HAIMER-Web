"use client";
import { useRouter } from "next/navigation";

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
    <button
      onClick={handleSignIn}
      title={title ?? "Sign in"}
      className={"bg-black/70 text-white rounded-md px-8 py-3 text-lg font-thin font-sans transition-opacity duration-500 shadow-lg hover:bg-black/80 border border-white/10"}
    >
      Sign in
    </button>
  );
} 
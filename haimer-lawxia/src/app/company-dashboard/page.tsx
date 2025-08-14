"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { useChat } from '@/hooks/useChat';
import Plan from "@/components/ui/agent-plan";
import { BeamsBackground } from "@/components/ui/beams-background";
import React from "react";
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { RadialOrbitalTimelineDemo } from "@/components/ui/radial-orbital-timeline-demo";

export default function CompanyDashboardPage() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();
  
  const { conversations, activeId, createConversation, switchConversation, deleteConversation, renameConversation } = useChat();

  const handleSelectConversation = (id: string) => {
    switchConversation(id);
    router.push('/chat/main');
  };

  const handleNewConversation = () => {
    createConversation();
    router.push('/chat/main');
  };

  return (
    <div className="relative min-h-screen bg-primaryBackground text-textPrimary flex">
      {/* Background animado */}
      <div className="fixed inset-0 -z-10">
        <BeamsBackground intensity="strong" />
      </div>

      {/* Botón de menú móvil - solo visible cuando la sidebar está cerrada */}
      {!isSidebarOpen && (
        <button
          onClick={() => setIsSidebarOpen(true)}
          className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 text-white hover:bg-white/20 transition-all"
          aria-label="Abrir menú de navegación"
        >
          <Menu size={20} />
        </button>
      )}

      {/* Sidebar móvil */}
      {isSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-40">
          <div className="absolute inset-0 bg-black/50" onClick={() => setIsSidebarOpen(false)} />
          <div className="absolute left-0 top-0 h-full w-80 max-w-[85vw]">
            <Sidebar
              conversations={conversations}
              activeId={activeId || ''}
              onNewConversation={handleNewConversation}
              onSelectConversation={handleSelectConversation}
              deleteConversation={deleteConversation}
              renameConversation={renameConversation}
              onClose={() => setIsSidebarOpen(false)}
            />
          </div>
        </div>
      )}

      {/* Contenido principal del dashboard y sidebar */}
      <div className="hidden md:flex flex-col w-72 h-screen sticky top-0 left-0 z-10">
        <Sidebar
          conversations={conversations}
          activeId={activeId || ''}
          onNewConversation={handleNewConversation}
          onSelectConversation={handleSelectConversation}
          deleteConversation={deleteConversation}
          renameConversation={renameConversation}
        />
      </div>
      <div className="flex-1 flex w-full min-h-0 overflow-auto">
        <RadialOrbitalTimelineDemo />
      </div>
    </div>
  );
} 
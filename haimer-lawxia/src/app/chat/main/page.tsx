"use client";
import Sidebar from '@/components/Sidebar';
import { AnimatedAIChat } from "@/components/ui/animated-ai-chat";
import { useChat } from '@/hooks/useChat';
import { BeamsBackground } from "@/components/ui/beams-background";

export default function MainChatPage() {
  const {
    conversations,
    activeConversation,
    activeId,
    sendMessage,
    createConversation,
    deleteConversation,
    renameConversation,
    switchConversation,
    loading,
  } = useChat();

  return (
    <div className="relative min-h-screen bg-primaryBackground text-textPrimary flex overflow-hidden">
      {/* Background animado */}
      <div className="fixed inset-0 -z-10">
        <BeamsBackground intensity="strong" />
      </div>
      {/* Contenido principal del chat y sidebar */}
      <div className="hidden md:flex flex-col w-72 h-screen sticky top-0 left-0 z-10">
        <Sidebar
          conversations={conversations}
          activeId={activeId || ''}
          onNewConversation={createConversation}
          onSelectConversation={switchConversation}
          deleteConversation={deleteConversation}
          renameConversation={renameConversation}
        />
      </div>
      <div className="flex-1 flex flex-col min-h-screen h-screen">
        {/* Header del chat IA */}
        <div className="w-full h-6 flex items-center justify-center bg-white/[0.05] rounded-t-2xl border-b border-white/[0.08] text-white/90 text-xs font-sans font-normal z-10 sticky top-0" style={{letterSpacing: 0}}>
          Considera verificar la información importante.
        </div>
        <div className="flex-1 flex w-full min-h-0">
          <AnimatedAIChat
            conversation={activeConversation ?? undefined}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </div>
  );
} 
"use client";
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import ChatMessage from '@/components/ChatMessage';
import PromptInput from '@/components/PromptInput';
import { useChat } from '@/hooks/useChat';
import React, { useRef, useEffect } from 'react';

export default function MainChatPage() {
  const { conversations, activeConversation, activeId, sendMessage, startNewConversation, switchConversation } = useChat();
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [activeConversation?.messages.length]);

  return (
    <div className="min-h-screen bg-primaryBackground text-textPrimary flex">
      <div className="hidden md:flex flex-col w-72 h-screen sticky top-0 left-0 z-10">
        <Sidebar
          conversations={conversations}
          activeId={activeId}
          onNewConversation={startNewConversation}
          onSelectConversation={switchConversation}
        />
      </div>
      <div className="flex-1 flex flex-col min-h-screen">
        <Header variant="main" userName="Renato" modelName="Lawxia 1.0" />
        <main className="flex-1 flex flex-col justify-end max-w-3xl mx-auto w-full px-2 sm:px-6 py-4">
          <div className="flex-1 overflow-y-auto pb-4 max-h-[calc(100vh-200px)]">
            {activeConversation?.messages.map(msg => (
              <ChatMessage key={msg.id} role={msg.role} content={msg.content} />
            ))}
            <div ref={chatEndRef} />
          </div>
          <PromptInput onSend={sendMessage} />
        </main>
      </div>
    </div>
  );
} 
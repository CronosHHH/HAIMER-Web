"use client";
import { useState, useRef, useCallback, useTransition } from "react";
import { Paperclip, Command, SendIcon, LoaderIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import Sidebar from "@/components/Sidebar";
import { useChat } from '@/hooks/useChat';
import { Folder, File } from "lucide-react";
import Plan from "@/components/ui/agent-plan";
import { BeamsBackground } from "@/components/ui/beams-background";
import React from "react";
import { ImageUploadField } from "@/components/image-uploader";

export default function CompanyDashboardPage() {
  const { conversations, activeId, startNewConversation, switchConversation } = useChat();
  return (
    <div className="relative h-screen bg-primaryBackground text-textPrimary flex overflow-hidden">
      {/* Background animado igual que chat/main */}
      <div className="absolute inset-0 -z-10">
        <BeamsBackground intensity="strong" />
      </div>
      {/* Sidebar compartida */}
      <div className="hidden md:flex flex-col w-72 h-screen fixed top-0 left-0 z-10">
        <Sidebar
          conversations={conversations}
          activeId={activeId}
          onNewConversation={startNewConversation}
          onSelectConversation={switchConversation}
        />
      </div>
      <div className="flex-1 flex flex-col h-screen ml-72 overflow-hidden">
        {/* Menú de secciones arriba del chat */}
        <section className="w-full flex flex-col items-center justify-center py-4 px-6 rounded-b-3xl mt-6 mb-2">
          <div className="flex flex-col md:flex-row gap-12 items-center w-full max-w-5xl">
            {/* Icono hero cuadrado grande */}
            <div className="flex flex-col items-center justify-center gap-6 bg-white/[0.03] rounded-2xl border border-white/[0.05] shadow-2xl p-6 w-64">
              <div className="flex flex-row gap-4 w-full justify-center">
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white/[0.05] rounded-lg">
                  <span className="flex items-center justify-center w-14 h-14">
                    <Folder className="w-14 h-14 text-white/90" />
                  </span>
                  <span className="font-sans text-xs text-white/90 font-normal text-center mt-1 whitespace-nowrap">Archivos</span>
                </div>
                <div className="flex flex-col items-center justify-center w-24 h-24 bg-white/[0.05] rounded-lg">
                  <span className="flex items-center justify-center w-14 h-14">
                    <File className="w-14 h-14 text-white/90" />
                  </span>
                  <span className="font-sans text-xs text-white/90 font-normal text-center mt-1 whitespace-nowrap">Plantilla</span>
                </div>
              </div>
              <div className="mt-4 w-full flex justify-center">
                <DemoOne />
              </div>
            </div>
            {/* Plan a la derecha */}
            <div className="flex-1 w-full max-w-3xl">
              <div className="bg-white/[0.03] rounded-2xl border border-white/[0.05] shadow-2xl p-0 flex flex-col">
                <Plan />
              </div>
            </div>
          </div>
        </section>
        {/* Chat justo debajo */}
        <div className="flex w-full flex-1 overflow-hidden items-end mt-2">
          <ChatInputOnly />
        </div>
      </div>
    </div>
  );
}

// Componente solo para el input y los tres botones del chat
function ChatInputOnly() {
  const [value, setValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isPending, startTransition] = useTransition();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const adjustHeight = useCallback(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "60px";
      textarea.style.height = Math.max(60, Math.min(textarea.scrollHeight, 200)) + "px";
    }
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (value.trim()) handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (value.trim()) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setValue("");
        adjustHeight();
      }, 1000);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto relative flex flex-col justify-end mb-6 mt-6">
      <div className="relative backdrop-blur-2xl bg-white/[0.02] rounded-2xl border border-white/[0.05] shadow-2xl">
        <div className="p-4 sticky bottom-0 bg-transparent z-20">
          <div className="relative w-full">
            <textarea
              ref={textareaRef}
              value={value}
              onChange={e => { setValue(e.target.value); adjustHeight(); }}
              onKeyDown={handleKeyDown}
              placeholder="Escribe tu mensaje..."
              className={cn(
                "w-full px-4 py-3 resize-none bg-transparent border-none text-white/90 text-sm focus:outline-none placeholder:text-white/20 min-h-[60px]",
              )}
              style={{ overflow: "hidden" }}
              rows={1}
            />
          </div>
        </div>
        <div className="p-4 border-t border-white/[0.05] flex items-center justify-between gap-4 sticky bottom-0 bg-transparent z-20">
          <div className="flex items-center gap-3">
            <button type="button" className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group" title="Adjuntar archivo">
              <Paperclip className="w-4 h-4" />
              <span className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <button type="button" className="p-2 text-white/40 hover:text-white/90 rounded-lg transition-colors relative group" title="Comandos">
              <Command className="w-4 h-4" />
              <span className="absolute inset-0 bg-white/[0.05] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleSendMessage}
            disabled={isTyping || !value.trim()}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-2",
              value.trim() ? "bg-white text-[#0A0A0B] shadow-lg shadow-white/10" : "bg-white/[0.05] text-white/40"
            )}
          >
            {isTyping ? (
              <LoaderIcon className="w-4 h-4 animate-spin" />
            ) : (
              <SendIcon className="w-4 h-4" />
            )}
            <span>Enviar</span>
          </button>
        </div>
      </div>
    </div>
  );
}

// Card de subida de imagen (DemoOne)
function DemoOne() {
  const [image, setImage] = useState<File | string | null>();
  return (
    <ImageUploadField
      value={image}
      onChange={setImage}
      className="w-48"
    />
  );
} 
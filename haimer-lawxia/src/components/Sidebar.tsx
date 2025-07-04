import React from 'react';
import Button from './Button';
import ChatItem from './ChatItem';
import { Conversation } from '@/hooks/useChat';

interface SidebarProps {
  conversations: Conversation[];
  activeId: string;
  onNewConversation: () => void;
  onSelectConversation: (id: string) => void;
}

export default function Sidebar({ conversations, activeId, onNewConversation, onSelectConversation }: SidebarProps) {
  return (
    <aside className="flex flex-col h-full w-72 bg-contentBackground p-4 rounded-large shadow-none">
      <Button variant="signIn" className="mb-4 w-full" onClick={onNewConversation}>+ Nueva conversación</Button>
      <div className="flex-1 overflow-y-auto mb-4">
        <h3 className="text-textSecondary text-xs font-semibold mb-2">Recientes</h3>
        <ul className="space-y-1">
          {conversations.map(conv => (
            <li key={conv.id}>
              <ChatItem
                title={conv.title}
                active={conv.id === activeId}
                onClick={() => onSelectConversation(conv.id)}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-2">
        <button className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition mb-2">
          <span>Actividad</span>
        </button>
        <button className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition">
          <span>Configuración y ayuda</span>
        </button>
      </div>
      <div className="text-xs text-textTertiary mt-auto">Granada, España</div>
    </aside>
  );
} 
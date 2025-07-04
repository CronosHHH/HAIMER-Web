import React from 'react';

interface ChatMessageProps {
  role: 'user' | 'model';
  content: string;
}

export default function ChatMessage({ role, content }: ChatMessageProps) {
  return (
    <div className={`flex ${role === 'user' ? 'justify-end' : 'justify-start'} my-2`}>
      <div className="bg-contentBackground rounded-large px-4 py-3 max-w-xl text-textPrimary">
        <span className="block whitespace-pre-line">{content}</span>
      </div>
    </div>
  );
} 
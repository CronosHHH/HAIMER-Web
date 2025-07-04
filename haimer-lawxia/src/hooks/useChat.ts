import { useState } from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

const initialConversations: Conversation[] = [
  {
    id: 'conv-1',
    title: 'Consulta laboral',
    messages: [
      { id: 'msg-1', role: 'user', content: '¿Cuáles son mis derechos laborales?' },
      { id: 'msg-2', role: 'model', content: 'Tus derechos laborales incluyen el derecho a un salario justo, descanso semanal, y protección contra el despido injustificado.' },
    ],
  },
  {
    id: 'conv-2',
    title: 'Divorcio express',
    messages: [
      { id: 'msg-3', role: 'user', content: '¿Cómo funciona el divorcio express?' },
      { id: 'msg-4', role: 'model', content: 'El divorcio express es un procedimiento rápido y sencillo para disolver el matrimonio.' },
    ],
  },
  {
    id: 'conv-3',
    title: 'Derecho mercantil',
    messages: [
      { id: 'msg-5', role: 'user', content: '¿Qué es el derecho mercantil?' },
      { id: 'msg-6', role: 'model', content: 'El derecho mercantil regula las relaciones comerciales y los actos de comercio.' },
    ],
  },
];

export function useChat() {
  const [conversations, setConversations] = useState<Conversation[]>(initialConversations);
  const [activeId, setActiveId] = useState<string>(initialConversations[0].id);
  const [msgCounter, setMsgCounter] = useState(100);
  const [convCounter, setConvCounter] = useState(4);

  const activeConversation = conversations.find(c => c.id === activeId);

  const sendMessage = (content: string) => {
    if (!activeConversation) return;
    setMsgCounter(cnt => {
      const newMessage: Message = {
        id: `msg-${cnt}`,
        role: 'user',
        content,
      };
      setConversations(convs =>
        convs.map(c =>
          c.id === activeId
            ? {
                ...c,
                messages: [
                  ...c.messages,
                  newMessage,
                  { id: `msg-${cnt + 1}`, role: 'model', content: 'Respuesta automática de Lawxia.' },
                ],
              }
            : c
        )
      );
      return cnt + 2;
    });
  };

  const startNewConversation = () => {
    setConvCounter(cnt => {
      const newId = `conv-${cnt}`;
      const newConv: Conversation = {
        id: newId,
        title: 'Nueva conversación',
        messages: [],
      };
      setConversations([newConv, ...conversations]);
      setActiveId(newId);
      return cnt + 1;
    });
  };

  const switchConversation = (id: string) => {
    setActiveId(id);
  };

  return {
    conversations,
    activeConversation,
    activeId,
    sendMessage,
    startNewConversation,
    switchConversation,
  };
} 
import React, { useRef, useState } from 'react';
import Button from './Button';

export default function PromptInput({ onSend }: { onSend?: (value: string) => void }) {
  const [value, setValue] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  const handleSend = () => {
    if (value.trim() && onSend) {
      onSend(value);
      setValue('');
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
    }
  };

  return (
    <div className="flex items-end gap-2 p-4 bg-contentBackground rounded-large">
      <Button variant="inputAction" className="flex-shrink-0">
        <label htmlFor="file-upload" className="cursor-pointer">
          <input id="file-upload" type="file" className="hidden" title="Subir archivo" />
          <span>Subir archivo</span>
        </label>
      </Button>
      <textarea
        ref={textareaRef}
        className="flex-1 resize-none bg-contentBackground border border-borderSubtle rounded-pill px-4 py-2 text-textPrimary placeholder-textTertiary focus:border-focusRing outline-none transition min-h-[40px] max-h-[120px]"
        rows={1}
        placeholder="Escribe tu mensaje..."
        aria-label="Campo de mensaje"
        title="Campo de mensaje"
        value={value}
        onChange={handleInput}
        onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); } }}
      />
      <Button variant="mic" className="flex-shrink-0">
        <span role="img" aria-label="Mic">🎤</span>
      </Button>
      <Button variant="signIn" className="flex-shrink-0 px-4 py-2" onClick={handleSend}>
        Enviar
      </Button>
    </div>
  );
} 
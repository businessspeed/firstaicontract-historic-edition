"use client";

import { useState } from "react";

export default function AIChatBox() {
  const [messages, setMessages] = useState<string[]>([]);

  const sendMessage = () => {
    setMessages([...messages, "You: (message)", "AI: (response placeholder)"]);
  };

  return (
    <div className="glass p-6 rounded-xl">
      <h3 className="text-[var(--gold-light)] text-xl font-cinzel mb-4">
        AI Friend Chat (Demo)
      </h3>

      <div className="bg-black/40 p-4 rounded-lg h-48 overflow-y-auto mb-4 text-white/60 text-sm">
        {messages.length === 0 && <p>No messages yet.</p>}
        {messages.map((m, i) => <p key={i}>{m}</p>)}
      </div>

      <button 
        onClick={sendMessage}
        className="gold-btn"
      >
        Send Test Message
      </button>
    </div>
  );
}

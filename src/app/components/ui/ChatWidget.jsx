"use client";

import { useState, useRef, useEffect } from "react";

const INITIAL_MESSAGES = [
  {
    from: "bot",
    text: "Hej! Jeg er en AI-assistent fra WebHjerte. Jeg kan svare på spørgsmål om priser, leveringstider og processen. Hvis jeg ikke kan svare, sender jeg dig videre til Ivan.",
  },
];

const QUICK_REPLIES = [
  "Hvad koster en hjemmeside?",
  "Hvornår er den klar?",
  "Hvordan foregår det?",
];

const BOT_RESPONSES = {
  pris:
    "Mine pakker starter fra 2.500 kr for en landingside, 4.500 kr for Basis (3-5 sider) og 7.500 kr for Standard (op til 8 sider). Du ser alle priser på /services.",
  levering:
    "En landingside er klar på 5 dage, Basis på 10 dage og Standard på 18 dage. Du ser altid et første udkast inden for 48 timer.",
  proces:
    "Vi tager en snak, jeg laver en plan, du godkender designet, jeg bygger, og så går den live. Du taler direkte med mig hele vejen.",
  default:
    "Det er et godt spørgsmål! Jeg videreformidler det til Ivan, som svarer inden for 24 timer. Du kan også skrive til hej@webhjerte.dk.",
};

const getResponse = (text) => {
  const lower = text.toLowerCase();
  if (lower.includes("pris") || lower.includes("koster") || lower.includes("kr"))
    return BOT_RESPONSES.pris;
  if (lower.includes("tid") || lower.includes("hvor") || lower.includes("lever"))
    return BOT_RESPONSES.levering;
  if (lower.includes("proces") || lower.includes("foregår") || lower.includes("sådan"))
    return BOT_RESPONSES.proces;
  return BOT_RESPONSES.default;
};

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  const sendMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { from: "bot", text: getResponse(text) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Luk chat" : "Åbn chat"}
        className="fixed bottom-5 right-5 z-[999] w-14 h-14 rounded-full bg-[#00a8e8] hover:bg-[#0095d1] transition-colors flex items-center justify-center shadow-lg shadow-[#00a8e8]/20"
      >
        {isOpen ? (
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M6 6l10 10M16 6L6 16" stroke="white" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M21 12a8 8 0 01-8 8H5l-2 2V12a8 8 0 018-8h2a8 8 0 018 8z"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="9" cy="12" r="1" fill="white" />
            <circle cx="13" cy="12" r="1" fill="white" />
            <circle cx="17" cy="12" r="1" fill="white" />
          </svg>
        )}
      </button>

      {/* Chat window */}
      {isOpen && (
        <div className="fixed bottom-20 right-5 z-[999] w-[340px] max-w-[calc(100vw-40px)] rounded-2xl border border-[#2a2d2d] bg-[#171919] shadow-2xl overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-[#2a2d2d] bg-[#1c1e1e]">
            <span className="w-8 h-8 rounded-full bg-[#1a2a30] border border-[#0a4a60] flex items-center justify-center text-[11px] text-[#00a8e8] font-medium flex-shrink-0">
              AI
            </span>
            <div className="flex flex-col">
              <span className="text-[12.5px] text-[#e0e0e0] font-medium">WebHjerte AI</span>
              <span className="text-[10.5px] text-[#5a5a5a]">Svarer med det samme · ikke en person</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex flex-col gap-3 p-4 max-h-[320px] overflow-y-auto">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`rounded-2xl px-3.5 py-2.5 max-w-[85%] ${
                    msg.from === "user"
                      ? "bg-[#00a8e8] rounded-br-sm"
                      : "bg-[#232525] border border-[#2a2d2d] rounded-bl-sm"
                  }`}
                >
                  <p
                    className={`text-[12.5px] leading-[1.6] ${
                      msg.from === "user" ? "text-[#062230]" : "text-[#c0c0c0]"
                    }`}
                  >
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#232525] border border-[#2a2d2d] rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a5a5a] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a5a5a] animate-bounce [animation-delay:0.15s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5a5a5a] animate-bounce [animation-delay:0.3s]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick replies */}
          <div className="flex flex-wrap gap-1.5 px-4 pb-2">
            {QUICK_REPLIES.map((qr) => (
              <button
                key={qr}
                onClick={() => sendMessage(qr)}
                className="text-[11px] text-[#8a8a8a] border border-[#2a2d2d] rounded-full px-2.5 py-1 hover:border-[#00a8e8] hover:text-[#00a8e8] transition-colors"
              >
                {qr}
              </button>
            ))}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
            className="flex items-center gap-2 p-3 border-t border-[#2a2d2d]"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Skriv et spørgsmål..."
              className="flex-1 bg-[#1c1e1e] border border-[#2a2d2d] focus:border-[#00a8e8] rounded-xl px-3 py-2 text-[12.5px] text-[#e0e0e0] placeholder-[#444] outline-none transition-colors"
            />
            <button
              type="submit"
              className="w-8 h-8 rounded-lg bg-[#00a8e8] hover:bg-[#0095d1] transition-colors flex items-center justify-center flex-shrink-0"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 7h11M8 2l5 5-5 5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}

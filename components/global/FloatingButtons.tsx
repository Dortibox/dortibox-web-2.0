"use client";

import { useState, useEffect,useRef } from "react";
import { ArrowUp, MessageCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowScrollTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={cn(
          "fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-card flex items-center justify-center transition-all duration-300 hover:bg-forest hover:-translate-y-0.5",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <ArrowUp size={18} />
      </button>

      {/* Chatbot button */}
      <button
        onClick={() => setChatOpen(true)}
        aria-label="Open chat"
        className={cn(
          "fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-amber text-white shadow-amber flex items-center justify-center transition-all duration-300 hover:bg-amber-dark hover:-translate-y-0.5",
          chatOpen && "hidden",
        )}
      >
        <MessageCircle size={22} />
      </button>

      {/* Chat window */}
      {chatOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] bg-white rounded-3xl shadow-2xl border border-sage/60 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-forest-deeper px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center">
                <span className="font-heading font-black text-white text-sm">
                  DB
                </span>
              </div>
              <div>
                <p className="font-heading font-semibold text-white text-sm">
                  DortiBox Assistant
                </p>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span className="font-body text-sage text-xs">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={16} className="text-white" />
            </button>
          </div>

          {/* Chat content */}
          <ChatWidget />
        </div>
      )}
    </>
  );
}

function ChatWidget() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hi! I'm the DortiBox assistant. I can help you with questions about our waste collection service, pricing, how to subscribe, and more. What would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  async function handleSend() {
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage, history: messages }),
      });

      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply || "Sorry, I could not process that. Please try again.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex",
              msg.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            <div
              className={cn(
                "max-w-[80%] px-4 py-3 rounded-2xl font-body text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-forest text-white rounded-br-sm"
                  : "bg-offwhite text-charcoal rounded-bl-sm border border-sage/60",
              )}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-offwhite border border-sage/60 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1 items-center">
                <span
                  className="w-2 h-2 rounded-full bg-muted animate-bounce"
                  style={{ animationDelay: "0ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-muted animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-2 h-2 rounded-full bg-muted animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-sage/60 shrink-0">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything..."
            className="flex-1 px-4 py-2.5 rounded-full border border-sage/60 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-full bg-amber text-white flex items-center justify-center hover:bg-amber-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <ArrowUp size={16} />
          </button>
        </div>
        <p className="font-body text-muted/60 text-xs text-center mt-2">
          Powered by AI · DortiBox
        </p>
      </div>
    </>
  );
}


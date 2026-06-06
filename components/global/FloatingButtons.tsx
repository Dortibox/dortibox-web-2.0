// "use client";

// import { useState, useEffect,useRef } from "react";
// import { ArrowUp, MessageCircle, X } from "lucide-react";
// import { cn } from "@/lib/utils";

// export function FloatingButtons() {
//   const [showScrollTop, setShowScrollTop] = useState(false);
//   const [chatOpen, setChatOpen] = useState(false);

//   useEffect(() => {
//     function handleScroll() {
//       setShowScrollTop(window.scrollY > 400);
//     }
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   function scrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }

//   return (
//     <>
//       {/* Scroll to top */}
//       <button
//         onClick={scrollToTop}
//         aria-label="Scroll to top"
//         className={cn(
//           "fixed bottom-24 right-5 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-card flex items-center justify-center transition-all duration-300 hover:bg-forest hover:-translate-y-0.5",
//           showScrollTop
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-4 pointer-events-none",
//         )}
//       >
//         <ArrowUp size={18} />
//       </button>

//       {/* Chatbot button */}
//       <button
//         onClick={() => setChatOpen(true)}
//         aria-label="Open chat"
//         className={cn(
//           "fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-amber text-white shadow-amber flex items-center justify-center transition-all duration-300 hover:bg-amber-dark hover:-translate-y-0.5",
//           chatOpen && "hidden",
//         )}
//       >
//         <MessageCircle size={22} />
//       </button>

//       {/* Chat window */}
//       {chatOpen && (
//         <div className="fixed bottom-5 right-5 z-50 w-[360px] max-w-[calc(100vw-2rem)] h-[520px] bg-white rounded-3xl shadow-2xl border border-sage/60 flex flex-col overflow-hidden">
//           {/* Header */}
//           <div className="bg-forest-deeper px-5 py-4 flex items-center justify-between shrink-0">
//             <div className="flex items-center gap-3">
//               <div className="w-9 h-9 rounded-full bg-amber flex items-center justify-center">
//                 <span className="font-heading font-black text-white text-sm">
//                   DB
//                 </span>
//               </div>
//               <div>
//                 <p className="font-heading font-semibold text-white text-sm">
//                   DortiBox Assistant
//                 </p>
//                 <div className="flex items-center gap-1.5">
//                   <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
//                   <span className="font-body text-sage text-xs">Online</span>
//                 </div>
//               </div>
//             </div>
//             <button
//               onClick={() => setChatOpen(false)}
//               className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
//             >
//               <X size={16} className="text-white" />
//             </button>
//           </div>

//           {/* Chat content */}
//           <ChatWidget />
//         </div>
//       )}
//     </>
//   );
// }

// function ChatWidget() {
//   const [messages, setMessages] = useState<
//     { role: "user" | "assistant"; content: string }[]
//   >([
//     {
//       role: "assistant",
//       content:
//         "Hi! I'm the DortiBox assistant. I can help you with questions about our waste collection service, pricing, how to subscribe, and more. What would you like to know?",
//     },
//   ]);
//   const [input, setInput] = useState("");
//   const [loading, setLoading] = useState(false);
//   const bottomRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     bottomRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   async function handleSend() {
//     if (!input.trim() || loading) return;

//     const userMessage = input.trim();
//     setInput("");
//     setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
//     setLoading(true);

//     try {
//       const res = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage, history: messages }),
//       });

//       const data = await res.json();

//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content:
//             data.reply || "Sorry, I could not process that. Please try again.",
//         },
//       ]);
//     } catch {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "assistant",
//           content: "Sorry, something went wrong. Please try again.",
//         },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

//   return (
//     <>
//       {/* Messages */}
//       <div className="flex-1 overflow-y-auto p-4 space-y-3">
//         {messages.map((msg, i) => (
//           <div
//             key={i}
//             className={cn(
//               "flex",
//               msg.role === "user" ? "justify-end" : "justify-start",
//             )}
//           >
//             <div
//               className={cn(
//                 "max-w-[80%] px-4 py-3 rounded-2xl font-body text-sm leading-relaxed",
//                 msg.role === "user"
//                   ? "bg-forest text-white rounded-br-sm"
//                   : "bg-offwhite text-charcoal rounded-bl-sm border border-sage/60",
//               )}
//             >
//               {msg.content}
//             </div>
//           </div>
//         ))}

//         {loading && (
//           <div className="flex justify-start">
//             <div className="bg-offwhite border border-sage/60 rounded-2xl rounded-bl-sm px-4 py-3">
//               <div className="flex gap-1 items-center">
//                 <span
//                   className="w-2 h-2 rounded-full bg-muted animate-bounce"
//                   style={{ animationDelay: "0ms" }}
//                 />
//                 <span
//                   className="w-2 h-2 rounded-full bg-muted animate-bounce"
//                   style={{ animationDelay: "150ms" }}
//                 />
//                 <span
//                   className="w-2 h-2 rounded-full bg-muted animate-bounce"
//                   style={{ animationDelay: "300ms" }}
//                 />
//               </div>
//             </div>
//           </div>
//         )}

//         <div ref={bottomRef} />
//       </div>

//       {/* Input */}
//       <div className="p-4 border-t border-sage/60 shrink-0">
//         <div className="flex gap-2">
//           <input
//             type="text"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             placeholder="Ask me anything..."
//             className="flex-1 px-4 py-2.5 rounded-full border border-sage/60 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors"
//           />
//           <button
//             onClick={handleSend}
//             disabled={!input.trim() || loading}
//             className="w-10 h-10 rounded-full bg-amber text-white flex items-center justify-center hover:bg-amber-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
//           >
//             <ArrowUp size={16} />
//           </button>
//         </div>
//         <p className="font-body text-muted/60 text-xs text-center mt-2">
//           Powered by AI · DortiBox
//         </p>
//       </div>
//     </>
//   );
// }

"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowUp, MessageCircle, X, Send } from "lucide-react";
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
          "fixed bottom-28 right-5 z-40 w-11 h-11 rounded-full bg-navy text-white shadow-card flex items-center justify-center transition-all duration-300 hover:bg-forest hover:-translate-y-0.5",
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none",
        )}
      >
        <ArrowUp size={18} />
      </button>

      {/* Chat button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          aria-label="Open chat"
          className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-amber text-white shadow-amber flex items-center justify-center transition-all duration-300 hover:bg-amber-dark hover:-translate-y-0.5"
        >
          <MessageCircle size={22} />
        </button>
      )}

      {/* Chat window */}
      {chatOpen && (
        <div className="fixed bottom-5 right-5 z-50 w-[420px] max-w-[calc(100vw-1.5rem)] h-[600px] max-h-[calc(100vh-2rem)] bg-white rounded-3xl shadow-2xl border border-sage/60 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-forest-deeper px-5 py-4 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-amber flex items-center justify-center shrink-0">
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
                  <span className="font-body text-sage text-xs">
                    Powered by Claude AI
                  </span>
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

          <ChatWidget />
        </div>
      )}
    </>
  );
}

interface Message {
  role: "user" | "assistant";
  content: string;
}

function formatMessage(content: string) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let keyCounter = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const key = keyCounter++;

    if (!line.trim()) continue;

    // Bullet points
    if (line.trim().startsWith("- ") || line.trim().startsWith("• ")) {
      const items: string[] = [];
      let j = i;
      while (
        j < lines.length &&
        (lines[j].trim().startsWith("- ") || lines[j].trim().startsWith("• "))
      ) {
        items.push(lines[j].trim().replace(/^[-•]\s/, ""));
        j++;
      }
      i = j - 1;
      elements.push(
        <ul key={key} className="space-y-1 my-2">
          {items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0 mt-1.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>,
      );
      continue;
    }

    // Bold headers (lines ending with :)
    if (line.trim().endsWith(":") && line.trim().length < 60) {
      elements.push(
        <p
          key={key}
          className="font-heading font-semibold text-navy text-sm mt-3 mb-1"
        >
          {line.trim()}
        </p>,
      );
      continue;
    }

    // Bold text **text**
    if (line.includes("**")) {
      const parts = line.split(/\*\*(.*?)\*\*/g);
      elements.push(
        <p key={key} className="text-sm leading-relaxed mb-1">
          {parts.map((part, idx) =>
            idx % 2 === 1 ? (
              <strong key={idx} className="font-semibold text-navy">
                {part}
              </strong>
            ) : (
              part
            ),
          )}
        </p>,
      );
      continue;
    }

    // Regular paragraph
    elements.push(
      <p key={key} className="text-sm leading-relaxed mb-1">
        {line}
      </p>,
    );
  }

  return elements;
}

function ChatWidget() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm the DortiBox assistant. I can help you with questions about waste collection, subscriptions, payments, and more.\n\nWhat would you like to know?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const quickReplies = [
    "How do I subscribe?",
    "What areas do you cover?",
    "How do I pay?",
    "No smartphone?",
  ];

  async function handleSend(text?: string) {
    const messageText = text || input.trim();
    if (!messageText || loading) return;

    setInput("");
    const userMessage: Message = { role: "user", content: messageText };
    setMessages((prev) => [...prev, userMessage]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: messageText,
          history: messages,
        }),
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
          content:
            "Sorry, something went wrong. Please try again or contact us at info@fwtsl.net",
        },
      ]);
    } finally {
      setLoading(false);
      inputRef.current?.focus();
    }
  }

  return (
    <>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={cn(
              "flex gap-2",
              msg.role === "user" ? "justify-end" : "justify-start",
            )}
          >
            {/* Assistant avatar */}
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-full bg-forest-light flex items-center justify-center shrink-0 mt-1">
                <span className="font-heading font-black text-forest text-xs">
                  DB
                </span>
              </div>
            )}

            <div
              className={cn(
                "max-w-[82%] px-4 py-3 rounded-2xl",
                msg.role === "user"
                  ? "bg-forest text-white rounded-br-sm font-body text-sm leading-relaxed"
                  : "bg-offwhite text-charcoal rounded-bl-sm border border-sage/40",
              )}
            >
              {msg.role === "assistant" ? (
                <div className="text-charcoal">
                  {formatMessage(msg.content)}
                </div>
              ) : (
                msg.content
              )}
            </div>
          </div>
        ))}

        {/* Loading indicator */}
        {loading && (
          <div className="flex gap-2 justify-start">
            <div className="w-7 h-7 rounded-full bg-forest-light flex items-center justify-center shrink-0">
              <span className="font-heading font-black text-forest text-xs">
                DB
              </span>
            </div>
            <div className="bg-offwhite border border-sage/40 rounded-2xl rounded-bl-sm px-4 py-3">
              <div className="flex gap-1 items-center h-4">
                {[0, 150, 300].map((delay) => (
                  <span
                    key={delay}
                    className="w-2 h-2 rounded-full bg-muted animate-bounce"
                    style={{ animationDelay: `${delay}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Quick replies — show only on first message */}
      {messages.length === 1 && (
        <div className="px-4 pb-3 flex flex-wrap gap-2">
          {quickReplies.map((q) => (
            <button
              key={q}
              onClick={() => handleSend(q)}
              className="px-3 py-1.5 rounded-full border border-forest/30 text-forest font-body text-xs hover:bg-forest-light transition-colors duration-200"
            >
              {q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="px-4 py-3 border-t border-sage/60 shrink-0">
        <div className="flex gap-2 items-center">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Ask me anything about DortiBox..."
            className="flex-1 px-4 py-2.5 rounded-full border border-sage/60 font-body text-sm text-charcoal placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors bg-white"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim() || loading}
            className="w-10 h-10 rounded-full bg-amber text-white flex items-center justify-center hover:bg-amber-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors shrink-0"
          >
            <Send size={15} />
          </button>
        </div>
        <p className="font-body text-muted/50 text-xs text-center mt-2">
          Powered by Claude AI · DortiBox
        </p>
      </div>
    </>
  );
}
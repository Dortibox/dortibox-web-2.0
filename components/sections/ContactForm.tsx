"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

const enquiryTypes = [
  "General Enquiry",
  "Waste Collection Service",
  "Partnership — Government",
  "Partnership — NGO / International",
  "Partnership — Corporate",
  "Investment",
  "Press & Media",
  "Other",
];

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    type: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrorMessage(data.error || "Something went wrong.");
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", organisation: "", type: "", message: "" });
    } catch {
      setErrorMessage("Network error. Please check your connection and try again.");
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-28">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber" />
            <span className="text-sage text-sm font-body">Get in Touch</span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-5">
            We would love to
            <span className="text-amber"> hear from you.</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed">
            Whether you are a resident, a potential partner, or an investor —
            reach out and we will get back to you within 2 business days.
          </p>
        </div>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Left */}
            <div className="lg:col-span-1">
              <h2 className="font-heading font-bold text-navy text-xl mb-6">
                Contact Information
              </h2>

              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">Phone</p>
                    
                     <a href="tel:+23276242328"
                      className="font-body text-muted text-sm hover:text-forest transition-colors"
                    >
                      +232 76 242 328
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">Email</p>
                    
                     <a href="mailto:info@fwtsl.net"
                      className="font-body text-muted text-sm hover:text-forest transition-colors"
                    >
                      info@fwtsl.net
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">Address</p>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      BSI Offices, 55A Wilkinson Road<br />
                      Third Floor, Freetown<br />
                      Sierra Leone
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-heading font-semibold text-navy text-sm mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {[
                    { label: "Facebook", href: "#", abbr: "Fb" },
                    { label: "Instagram", href: "#", abbr: "Ig" },
                    { label: "X", href: "#", abbr: "X" },
                    { label: "LinkedIn", href: "#", abbr: "In" },
                  ].map((s) => (
                    
                  <a    key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-full border border-sage/60 flex items-center justify-center font-heading font-bold text-muted text-xs hover:border-forest hover:text-forest transition-colors duration-200"
                    >
                      {s.abbr}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center text-center py-20 px-8 bg-forest-light rounded-3xl border border-forest/20">
                  <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-6">
                    <CheckCircle size={28} className="text-white" />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-3">
                    Message sent successfully
                  </h3>
                  <p className="font-body text-muted text-base leading-relaxed max-w-md">
                    Thank you for reaching out. Someone from the DortiBox team
                    will get back to you within 2 business days.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-heading font-semibold text-sm hover:bg-forest-dark transition-colors duration-200"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block font-body font-semibold text-navy text-sm mb-2">
                        Full Name <span className="text-amber">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block font-body font-semibold text-navy text-sm mb-2">
                        Email Address <span className="text-amber">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="organisation" className="block font-body font-semibold text-navy text-sm mb-2">
                        Organisation
                        <span className="text-muted font-normal ml-1">(optional)</span>
                      </label>
                      <input
                        id="organisation"
                        name="organisation"
                        type="text"
                        value={form.organisation}
                        onChange={handleChange}
                        placeholder="Company or organisation"
                        className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <label htmlFor="type" className="block font-body font-semibold text-navy text-sm mb-2">
                        Enquiry Type
                        <span className="text-muted font-normal ml-1">(optional)</span>
                      </label>
                      <select
                        id="type"
                        name="type"
                        value={form.type}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200 bg-white"
                      >
                        <option value="">Select a type</option>
                        {enquiryTypes.map((t) => (
                          <option key={t} value={t}>{t}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block font-body font-semibold text-navy text-sm mb-2">
                      Message <span className="text-amber">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us what you have in mind..."
                      className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200 resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                      <AlertCircle size={16} className="text-red-500 shrink-0" />
                      <p className="font-body text-red-600 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-amber text-white font-heading font-bold text-sm hover:bg-amber-dark active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
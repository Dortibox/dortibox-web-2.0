"use client";

import { useState } from "react";
import {
  AlertTriangle,
  Send,
  CheckCircle,
  AlertCircle,
  Loader2,
  Trash2,
} from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function DeleteAccountPage() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    reason: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/delete-account", {
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
      setForm({ name: "", phone: "", reason: "" });
    } catch {
      setErrorMessage(
        "Network error. Please check your connection and try again."
      );
      setStatus("error");
    }
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-offwhite border-b border-sage/60 py-16 md:py-20">
        <div className="container-default max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 rounded-full px-4 py-2 mb-6">
            <Trash2 size={14} className="text-red-500" />
            <span className="text-red-600 text-sm font-body font-medium">
              Account Deletion
            </span>
          </div>
          <h1 className="font-heading font-black text-navy text-4xl md:text-5xl mb-4 leading-tight">
            Delete Your DortiBox Account
          </h1>
          <p className="font-body text-muted text-base leading-relaxed">
            We are sorry to see you go. Please read the information below before
            submitting your deletion request.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-white">
        <div className="container-default max-w-2xl">

          {/* Warning box */}
          <div className="bg-red-50 border border-red-200 rounded-2xl p-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center shrink-0">
                <AlertTriangle size={18} className="text-red-500" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-red-700 text-base mb-2">
                  Before you delete
                </h3>
                <ul className="space-y-1.5">
                  {[
                    "All your data, preferences, and purchase history will be permanently removed.",
                    "This action is irreversible. Once deleted, we cannot recover any information.",
                    "Any active subscriptions will be cancelled immediately.",
                    "If you are experiencing issues, consider contacting support first.",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                      <span className="font-body text-red-600 text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Form or success */}
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-forest-light rounded-3xl border border-forest/20">
              <div className="w-16 h-16 rounded-full bg-forest flex items-center justify-center mb-6">
                <CheckCircle size={28} className="text-white" />
              </div>
              <h3 className="font-heading font-bold text-navy text-2xl mb-3">
                Request submitted
              </h3>
              <p className="font-body text-muted text-base leading-relaxed max-w-md">
                Your account deletion request has been received. Our team will
                process it within 5 business days and send a confirmation to your
                registered contact.
              </p>
            </div>
          ) : (
            <>
              <h2 className="font-heading font-bold text-navy text-xl mb-6">
                Submit a Deletion Request
              </h2>
              <p className="font-body text-muted text-sm leading-relaxed mb-8">
                Please fill in the form below. Our team will process your request
                within{" "}
                <span className="font-semibold text-navy">5 business days</span>.
                You will receive a confirmation once your account has been deleted.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block font-body font-semibold text-navy text-sm mb-2"
                  >
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

                {/* Phone */}
                <div>
                  <label
                    htmlFor="phone"
                    className="block font-body font-semibold text-navy text-sm mb-2"
                  >
                    Registered Phone Number <span className="text-amber">*</span>
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+232 XX XXX XXXX"
                    className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200"
                  />
                  <p className="font-body text-muted text-xs mt-1.5">
                    The phone number associated with your DortiBox account
                  </p>
                </div>

                {/* Reason */}
                <div>
                  <label
                    htmlFor="reason"
                    className="block font-body font-semibold text-navy text-sm mb-2"
                  >
                    Reason for Deletion
                    <span className="text-muted font-normal ml-1">
                      (optional)
                    </span>
                  </label>
                  <textarea
                    id="reason"
                    name="reason"
                    rows={4}
                    value={form.reason}
                    onChange={handleChange}
                    placeholder="Help us understand why you are leaving..."
                    className="w-full px-4 py-3 rounded-xl border border-sage/60 font-body text-charcoal text-sm placeholder:text-muted/50 focus:outline-none focus:border-forest focus:ring-2 focus:ring-forest/10 transition-colors duration-200 resize-none"
                  />
                </div>

                {/* Error */}
                {status === "error" && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl">
                    <AlertCircle size={16} className="text-red-500 shrink-0" />
                    <p className="font-body text-red-600 text-sm">
                      {errorMessage}
                    </p>
                  </div>
                )}

                {/* Submit */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-red-500 text-white font-heading font-bold text-sm hover:bg-red-600 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed disabled:active:scale-100"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 size={17} className="animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send size={17} />
                        Submit Request
                      </>
                    )}
                  </button>
                  
                  <a  href="/contact"
                    className="font-body text-muted text-sm hover:text-forest transition-colors duration-200"
                  >
                    Contact support instead
                  </a>
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
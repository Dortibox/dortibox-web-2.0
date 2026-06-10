import type { Metadata } from "next";
import Link from "next/link";
import {
  Mail,
  Phone,
  MessageCircle,
  AlertCircle,
  Trash2,
  Clock,
  ChevronRight,
  Smartphone,
  HelpCircle,
  Bug,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with DortiBox — contact our support team, report bugs, manage your account, and find answers to common questions.",
  openGraph: {
    title: "Support | DortiBox",
    description:
      "Get help with DortiBox waste collection services. Contact support, report bugs, or manage your account.",
    url: "https://dortibox.com/support",
  },
};

const supportTopics = [
  {
    icon: MessageCircle,
    title: "General Support",
    description:
      "Questions about your subscription, pickups, payments, or anything else about DortiBox.",
    action: "Email Support",
    href: "mailto:info@fwtsl.net",
    color: "bg-forest-light",
    iconColor: "text-forest",
  },
  {
    icon: Bug,
    title: "Report a Bug",
    description:
      "Found something not working as expected in the app or website? Let our technical team know.",
    action: "Report a Bug",
    href: "mailto:itpoc@fwtsl.net",
    color: "bg-amber-light",
    iconColor: "text-amber-dark",
  },
  {
    icon: Trash2,
    title: "Delete My Account",
    description:
      "Request permanent deletion of your DortiBox account and all associated data.",
    action: "Submit Request",
    href: "/delete-account",
    color: "bg-red-50",
    iconColor: "text-red-500",
  },
  {
    icon: Smartphone,
    title: "App Help",
    description:
      "Having trouble downloading, installing, or using the DortiBox app? We can help.",
    action: "Get App Help",
    href: "mailto:info@fwtsl.net?subject=App Help",
    color: "bg-offwhite",
    iconColor: "text-navy",
  },
];

const commonIssues = [
  {
    question: "I can't log in to my account",
    answer:
      "Make sure you are using the phone number you registered with. If you forgot your PIN, use the 'Forgot PIN?' option on the login screen. If the issue persists, contact us at info@fwtsl.net with your registered phone number.",
  },
  {
    question: "My payment was deducted but my subscription is not active",
    answer:
      "This can happen if the payment confirmation was delayed. Wait 15 minutes and refresh the app. If the subscription is still not active, email itpoc@fwtsl.net with your registered phone number and the transaction date so we can investigate.",
  },
  {
    question: "My pickup was missed",
    answer:
      "We apologise for the inconvenience. Please report a missed pickup through the app under Service Management, or contact us at info@fwtsl.net. We will arrange a make-up pickup as soon as possible.",
  },
  {
    question: "How do I change my pickup schedule?",
    answer:
      "You can manage your pickup schedule directly in the DortiBox app. Go to Service Management, select your active subscription, and update your pickup days. Changes take effect from the next billing cycle.",
  },
  {
    question: "I don't have a smartphone — how do I use DortiBox?",
    answer:
      "Dial *715*380# from any Sierra Leonean mobile number to register and manage your waste collection without a smartphone or internet connection.",
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Open the DortiBox app, go to Service Management, select your active subscription, and tap Cancel. You can also email info@fwtsl.net with your registered phone number to request cancellation.",
  },
  {
    question: "The app crashes or won't open",
    answer:
      "Try closing and reopening the app. If the issue continues, uninstall and reinstall the latest version from Google Play or the App Store. If it still doesn't work, report the bug to itpoc@fwtsl.net with your device model and operating system version.",
  },
  {
    question: "How do I update my address?",
    answer:
      "In the DortiBox app, go to your Account settings and select Addresses. You can add, edit, or remove addresses from there. Make sure to save your changes before exiting.",
  },
];

export default function SupportPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-forest-deeper overflow-hidden py-24 md:py-28">
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full bg-forest opacity-20 pointer-events-none" />
        <div className="absolute -left-16 bottom-0 w-[300px] h-[300px] rounded-full bg-amber opacity-10 pointer-events-none" />

        <div className="container-default relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-forest/40 border border-forest-mid/40 rounded-full px-4 py-2 mb-6">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-sage text-sm font-body">
              Help & Support
            </span>
          </div>
          <h1 className="font-heading font-black text-white text-5xl md:text-6xl leading-tight mb-5">
            How can we
            <span className="text-amber"> help you?</span>
          </h1>
          <p className="font-body text-sage text-lg leading-relaxed mb-8">
            Find answers to common questions, report issues, or get in touch
            with the DortiBox support team directly.
          </p>

          {/* Response time badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-2xl px-5 py-3">
            <Clock size={16} className="text-amber shrink-0" />
            <span className="font-body text-sage text-sm">
              We respond to all support requests within{" "}
              <span className="text-amber font-semibold">2 business days</span>
            </span>
          </div>
        </div>
      </section>

      {/* Support Topics */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Get Help</span>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl">
              What do you need help with?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportTopics.map((topic, i) => {
              const Icon = topic.icon;
              return (
                <Link
                  key={i}
                  href={topic.href}
                  className="group bg-white rounded-3xl p-7 border border-sage/60 hover:border-forest/30 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl ${topic.color} flex items-center justify-center mb-5`}
                  >
                    <Icon size={22} className={topic.iconColor} />
                  </div>
                  <h3 className="font-heading font-bold text-navy text-base mb-2">
                    {topic.title}
                  </h3>
                  <p className="font-body text-muted text-sm leading-relaxed flex-1 mb-5">
                    {topic.description}
                  </p>
                  <div className="inline-flex items-center gap-1 text-forest font-body text-sm font-semibold group-hover:text-amber transition-colors duration-200">
                    {topic.action}
                    <ChevronRight
                      size={15}
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-offwhite">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Contact details */}
            <div>
              <span className="section-label block mb-3">Contact Us</span>
              <h2 className="font-heading font-bold text-navy text-3xl mb-6 leading-tight">
                Reach our support team directly
              </h2>

              <div className="space-y-4 mb-8">
                <div className="bg-white rounded-2xl p-5 border border-sage/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">
                      General Support
                    </p>
                    
                    <a  href="mailto:info@fwtsl.net"
                      className="font-body text-muted text-sm hover:text-forest transition-colors"
                    >
                      info@fwtsl.net
                    </a>
                    <p className="font-body text-muted/60 text-xs mt-1">
                      Subscriptions, pickups, payments, accounts
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-sage/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-light flex items-center justify-center shrink-0">
                    <Bug size={16} className="text-amber-dark" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">
                      Technical / Bug Reports
                    </p>
                    
                   <a   href="mailto:itpoc@fwtsl.net"
                      className="font-body text-muted text-sm hover:text-forest transition-colors block"
                    >
                      itpoc@fwtsl.net
                    </a>
                    
                   <a   href="mailto:dortiboxpo@fwtsl.net"
                      className="font-body text-muted text-sm hover:text-forest transition-colors block"
                    >
                      dortiboxpo@fwtsl.net
                    </a>
                    <p className="font-body text-muted/60 text-xs mt-1">
                      App crashes, payment errors, technical issues
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-sage/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">
                      Phone
                    </p>
                    
                    <a  href="tel:+23276242328"
                      className="font-body text-muted text-sm hover:text-forest transition-colors"
                    >
                      +232 76 242 328
                    </a>
                    <p className="font-body text-muted/60 text-xs mt-1">
                      Monday – Friday, business hours
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-2xl p-5 border border-sage/60 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-forest-light flex items-center justify-center shrink-0">
                    <Smartphone size={16} className="text-forest" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-navy text-sm mb-0.5">
                      USSD — No Smartphone Needed
                    </p>
                    <span className="font-heading font-black text-amber text-lg tracking-wide">
                      *715*380#
                    </span>
                    <p className="font-body text-muted/60 text-xs mt-1">
                      Register and manage pickups from any mobile number
                    </p>
                  </div>
                </div>
              </div>

              {/* Response time */}
              <div className="bg-forest-deeper rounded-2xl p-5 flex items-start gap-4">
                <Clock size={18} className="text-amber shrink-0 mt-0.5" />
                <div>
                  <p className="font-heading font-semibold text-white text-sm mb-1">
                    Response Time
                  </p>
                  <p className="font-body text-sage text-sm leading-relaxed">
                    We aim to respond to all support requests within{" "}
                    <span className="text-amber font-semibold">
                      2 business days
                    </span>
                    . For urgent issues affecting your active subscription,
                    please call us directly.
                  </p>
                </div>
              </div>
            </div>

            {/* Refund Policy + Account Deletion */}
            <div className="space-y-6">

              {/* Refund Policy */}
              <div className="bg-white rounded-3xl p-8 border border-sage/60">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-offwhite flex items-center justify-center shrink-0">
                    <RefreshCw size={20} className="text-navy" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">
                      Refund Policy
                    </h3>
                    <p className="font-body text-muted text-xs mt-1">
                      Last updated: June 2026
                    </p>
                  </div>
                </div>
                <div className="space-y-3 font-body text-muted text-sm leading-relaxed">
                  <p>
                    All DortiBox subscription purchases are{" "}
                    <span className="font-semibold text-navy">
                      final and non-refundable
                    </span>
                    . Once a subscription plan has been activated and payment
                    confirmed, we are unable to process refunds.
                  </p>
                  <p>
                    This policy applies to all subscription plans (1-month,
                    3-month, and 12-month) as well as one-off pickup requests.
                  </p>
                  <p>
                    If you believe you have been charged in error, or if a
                    service was not delivered as agreed, please contact our
                    support team at{" "}
                    
                    <a  href="mailto:info@fwtsl.net"
                      className="text-forest hover:text-amber transition-colors"
                    >
                      info@fwtsl.net
                    </a>{" "}
                    within 7 days of the transaction and we will investigate.
                  </p>
                </div>
              </div>

              {/* Account Deletion */}
              <div className="bg-white rounded-3xl p-8 border border-red-100">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0">
                    <Trash2 size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy text-lg">
                      Account Deletion
                    </h3>
                    <p className="font-body text-muted text-xs mt-1">
                      Permanent and irreversible
                    </p>
                  </div>
                </div>
                <div className="space-y-3 font-body text-muted text-sm leading-relaxed mb-6">
                  <p>
                    You can request permanent deletion of your DortiBox account
                    and all associated data at any time. This includes your
                    profile, address history, subscription records, and payment
                    history.
                  </p>
                  <p>
                    Account deletion requests are processed within{" "}
                    <span className="font-semibold text-navy">
                      5 business days
                    </span>
                    . You will receive a confirmation once your account has been
                    permanently deleted.
                  </p>
                  <div className="bg-red-50 border border-red-100 rounded-xl p-4">
                    <div className="flex items-start gap-2">
                      <AlertCircle
                        size={15}
                        className="text-red-500 shrink-0 mt-0.5"
                      />
                      <p className="text-red-600 text-xs">
                        This action is irreversible. All your data will be
                        permanently removed and cannot be recovered.
                      </p>
                    </div>
                  </div>
                </div>
                <Link
                  href="/delete-account"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-red-500 text-white font-heading font-semibold text-sm hover:bg-red-600 transition-colors duration-200"
                >
                  <Trash2 size={15} />
                  Request Account Deletion
                </Link>
              </div>

              {/* App Info */}
              <div className="bg-offwhite rounded-3xl p-6 border border-sage/60">
                <h3 className="font-heading font-semibold text-navy text-sm mb-4">
                  App Information
                </h3>
                <div className="space-y-2">
                  {[
                    { label: "App Name", value: "DortiBox" },
                    { label: "Developer", value: "Freetown Waste Transformers SL Limited" },
                    { label: "Platform", value: "iOS & Android" },
                    { label: "Minimum iOS", value: "iOS 13.0 or later" },
                    { label: "Minimum Android", value: "Android 6.0 or later" },
                    { label: "Country", value: "Sierra Leone" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center justify-between py-1.5 border-b border-sage/40 last:border-0"
                    >
                      <span className="font-body text-muted text-xs">
                        {item.label}
                      </span>
                      <span className="font-body text-navy text-xs font-semibold">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-default">
          <div className="text-center mb-12">
            <span className="section-label block mb-3">Common Issues</span>
            <h2 className="font-heading font-bold text-navy text-3xl md:text-4xl mb-4">
              Frequently reported issues
            </h2>
            <p className="font-body text-muted text-base max-w-xl mx-auto">
              These are the most common issues users report. Check here before
              contacting support — you may find an instant answer.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid grid-cols-1 gap-4">
            {commonIssues.map((issue, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-sage/60 overflow-hidden hover:border-forest/30 transition-colors duration-200"
              >
                <div className="px-6 py-5 flex items-start gap-4">
                  <div className="w-7 h-7 rounded-full bg-forest-light flex items-center justify-center shrink-0 mt-0.5">
                    <HelpCircle size={14} className="text-forest" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-navy text-sm mb-2">
                      {issue.question}
                    </h4>
                    <p className="font-body text-muted text-sm leading-relaxed">
                      {issue.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="font-body text-muted text-sm mb-4">
              Issue not listed here?
            </p>
            
            <a  href="mailto:info@fwtsl.net"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-forest text-white font-heading font-semibold text-sm hover:bg-forest-dark transition-colors duration-200"
            >
              <Mail size={15} />
              Contact Support
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
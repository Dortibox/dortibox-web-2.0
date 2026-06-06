import Image from "next/image";
import { PhoneMockup } from "@/components/ui/PhoneMockup";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { UserPlus, CalendarCheck, CreditCard, Truck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Download & Register",
    description:
      "Get the app on Google Play or App Store. Register with your phone number and address in under 2 minutes.",
    screen: "/images/app-register.png",
    screenAlt: "DortiBox registration screen",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Choose Your Plan",
    description:
      "Select your bin size, pickup frequency, and preferred days. Choose from 1-month, 3-month, or 12-month subscriptions.",
    screen: "/images/app-subscription.png",
    screenAlt: "DortiBox subscription screen",
  },
  {
    number: "03",
    icon: CreditCard,
    title: "Pay with Mobile Money",
    description:
      "Complete payment via Orange Money or Afrimoney using a simple USSD code. Fast, secure, and cashless.",
    screen: "/images/app-payment.png",
    screenAlt: "DortiBox payment screen",
  },
  {
    number: "04",
    icon: Truck,
    title: "We Handle the Rest",
    description:
      "A verified collector comes to your door. Track your pickups and manage everything from your dashboard.",
    screen: "/images/app-dashboard.png",
    screenAlt: "DortiBox dashboard screen",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-default">
        <SectionHeading
          label="How It Works"
          title="Waste collection in 4 simple steps"
          subtitle="Designed for Freetown. Simple enough for everyone."
          className="mb-20"
        />

        <div className="space-y-24">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isEven = i % 2 === 1;
            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  isEven ? "lg:flex lg:flex-row-reverse" : ""
                }`}
              >
                {/* Text side */}
                <div className={isEven ? "lg:pl-12" : "lg:pr-12"}>
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-forest-light flex items-center justify-center">
                      <Icon size={22} className="text-forest" />
                    </div>
                    <span className="font-heading font-black text-4xl text-sage">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-navy text-2xl mb-4">
                    {step.title}
                  </h3>
                  <p className="font-body text-muted text-base leading-relaxed max-w-md">
                    {step.description}
                  </p>
                </div>

                {/* Phone side */}
                <div className={`flex justify-center ${isEven ? "lg:justify-start" : "lg:justify-end"}`}>
                  <div className="relative">
                    {/* Glow behind phone */}
                    <div className="absolute inset-0 scale-90 rounded-full bg-forest-light blur-3xl opacity-60" />
                    <PhoneMockup
                      src={step.screen}
                      alt={step.screenAlt}
                      className="relative z-10"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
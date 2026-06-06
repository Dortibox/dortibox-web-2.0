import Image from "next/image";
import { cn } from "@/lib/utils";

interface PhoneMockupProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export function PhoneMockup({ src, alt, className, priority }: PhoneMockupProps) {
  return (
    <div className={cn("relative inline-block", className)}>
      <div className="relative w-[200px] rounded-[2.8rem] bg-[#1a1a1a] p-[3px] shadow-2xl shadow-black/50 ring-1 ring-white/10">
        <div className="relative w-full rounded-[2.5rem] bg-[#0d0d0d] overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-2xl z-10" />
          <div className="relative w-full aspect-[9/19.5] overflow-hidden rounded-[2.5rem]">
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover object-top"
              priority={priority}
              sizes="200px"
            />
          </div>
        </div>
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-16 h-1 bg-white/30 rounded-full" />
      </div>
    </div>
  );
}
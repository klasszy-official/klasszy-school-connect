import { Calendar, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919999999999?text=Hi%20Klasszy%2C%20I%27d%20like%20to%20know%20more%20about%20your%20school%20app";
const DEMO_URL = "https://wa.me/919999999999?text=Hi%20Klasszy%2C%20I%27d%20like%20to%20book%20a%20free%20demo";

export function CtaButtons({ size = "lg" }: { size?: "lg" | "md" }) {
  const padding = size === "lg" ? "px-7 py-4 text-base" : "px-5 py-3 text-sm";
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-primary)] font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] ${padding}`}
      >
        <Calendar className="h-5 w-5" />
        Book Free Demo
      </a>
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 rounded-full bg-[var(--whatsapp)] font-semibold text-[var(--whatsapp-foreground)] shadow-[var(--shadow-soft)] transition-transform hover:scale-[1.02] ${padding}`}
      >
        <MessageCircle className="h-5 w-5" />
        Chat on WhatsApp
      </a>
    </div>
  );
}

export { WHATSAPP_URL, DEMO_URL };
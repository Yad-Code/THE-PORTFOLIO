import { Copy, Mail, MapPin, Send, Clock } from "lucide-react";
import { cn } from "../../lib/utils";

export default function ContactCard() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("yad.4322@gmail.com");
    // Optional: show toast or tooltip
  };

  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-black/40 backdrop-blur-sm",
        "transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/20 hover:-translate-y-1",
        "border-white/5 hover:border-teal-500/50"
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-teal-500/0 to-emerald-500/0 group-hover:from-teal-500/5 group-hover:to-emerald-500/5 transition-all duration-300 pointer-events-none" />

      <div className="relative z-10 px-6 pb-6 pt-8 space-y-6">
        {/* Email input with copy button */}
        <div className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-white/5 group-hover:border-teal-500/30 transition-colors">
          <Mail className="w-5 h-5 text-teal-400" />
          <input
            type="email"
            value="yad.4322@gmail.com"
            readOnly
            className="flex-1 bg-transparent border-none outline-none text-gray-200 text-sm"
          />
          <button
            onClick={handleCopyEmail}
            className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Copy email"
          >
            <Copy className="w-4 h-4 text-gray-400 hover:text-teal-400 transition-colors" />
          </button>
        </div>

        {/* Location and response time */}
        <div className="flex flex-wrap justify-between gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-teal-400" />
            <span>Remote Worldwide</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-teal-400" />
            <span>Responds Within 24h</span>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-3 pt-2">
          <button className="group/btn inline-flex items-center gap-2 px-5 py-2.5 bg-linear-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm">
            <Send className="w-4 h-4 group-hover/btn:translate-x-0.5 transition-transform" />
            Send Message
          </button>
          <button
            onClick={handleCopyEmail}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-gray-200 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:scale-105 text-sm"
          >
            <Copy className="w-4 h-4" />
            Copy Email
          </button>
        </div>
      </div>
    </div>
  );
}
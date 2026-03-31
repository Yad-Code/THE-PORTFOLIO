import { cn } from "../../../lib/utils";

export default function NavButton({ id, name, active, onClick }) {
  return (
    <button
      onClick={() => onClick(id)}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
        "focus:outline-none",
        // Base styles
        "text-gray-400 hover:text-teal-300",
        // Active state: slightly darker background + subtle shadow
        active === id
          ? "bg-teal-600/20 text-teal-300 shadow-sm"
          : "bg-transparent hover:bg-white/5",
      )}
    >
      {name}
    </button>
  );
}

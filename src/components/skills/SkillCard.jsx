import { Star } from "lucide-react";
import { cn } from "../../lib/utils";

export default function SkillCard({ skillName, icon, color, level }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col items-center gap-3 p-5 rounded-2xl border bg-card",
        " hover:border-gray-800",
        "hover:bg-gray-900",
      )}
    >
      {/* Icon container */}
      <div
        className={cn(
          "size-12 rounded-xl flex items-center justify-center",
          "bg-muted group-hover:scale-110 text-neutral-800 dark:text-neutral-200",
          color,
        )}
      >
        {icon}
      </div>

      {/* Skill name */}
      <span className="text-sm font-semibold text-center">{skillName}</span>

      {/* Proficiency stars */}
      <div
        className="flex gap-0.5"
        aria-label={`${level} out of 5 proficiency`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={cn(
              "size-3 transition-colors",
              i < level
                ? "fill-amber-400 text-amber-400"
                : "text-muted-foreground/30",
            )}
          />
        ))}
      </div>
    </div>
  );
}

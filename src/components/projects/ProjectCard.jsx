import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";
import { cn } from "../../lib/utils";

export default function ProjectCard({ title, description, projectUrl, githubUrl, tags = [] }) {
  return (
    <div
      className={cn(
        "group relative flex flex-col rounded-2xl border bg-black/40 backdrop-blur-sm border-white/5",
        "transition-all duration-300 hover:shadow-lg hover:border-white/20 hover:bg-gray-800/60"
      )}
    >
      {/* Green line above title */}
      <div className="pt-6 px-6">
        <div className="w-16 h-0.5 bg-teal-500 mb-5" />
        <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors">
          {title}
        </h3>
        <p className="mt-3 text-gray-400 text-base leading-relaxed">{description}</p>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="px-6 pt-4 flex flex-wrap gap-2">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Buttons */}
      <div className="px-6 pb-6 pt-5 flex gap-5 border-t border-white/10 mt-3">
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Live Demo
        </a>
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-300 hover:text-teal-400 transition-colors"
        >
          <FiGithub className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </div>
  );
}
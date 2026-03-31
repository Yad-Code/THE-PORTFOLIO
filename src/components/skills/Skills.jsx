import { motion as Motion } from "framer-motion";
import { skills } from "../../data/skillsData";
import { cn } from "../../lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Skills
          </h2>
          <p className="mt-3 text-gray-400 max-w-2xl mx-auto">
            Each skill reflects my real-world experience and the tools I reach
            for to build exceptional web applications. From the core languages
            to the frameworks.
          </p>
        </Motion.div>

        {/* Skills Grid */}
        <Motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => (
            <Motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ y: -4, scale: 1.02 }}
              className={cn(
                "group relative flex flex-col items-center gap-3 p-5 rounded-2xl border",
                "bg-[#181917] backdrop-blur-sm border-white/5",
                "transition-all duration-300 hover:shadow-md hover:bg-gray-800/60 hover:border-white/20",
              )}
            >
              {/* Icon */}
              <div
                className={cn(
                  "size-12 rounded-xl flex items-center justify-center transition-transform duration-300",
                  "bg-white/5 group-hover:scale-110",
                  skill.color,
                )}
              >
                <skill.icon className="size-6" />
              </div>

              {/* Name */}
              <span className="text-sm font-semibold text-center text-gray-200">
                {skill.name}
              </span>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}

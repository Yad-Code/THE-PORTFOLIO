import { ArrowDown, Contact } from "lucide-react";
import { motion as Motion } from "framer-motion";

export default function Hero() {
  const personalInfo = {
    name: "Yad Hussein",
    title: "Frontend Developer | React Specialist",
    description:
      "I'm a passionate frontend developer with experience building modern, responsive web applications. I specialize in React, and I love crafting pixel-perfect user interfaces that deliver exceptional user experiences. Currently exploring AI integration and design systems.",
  };

  const scrollToNextSection = () => {
    const nextSection =
      document.getElementById("skills") || document.getElementById("projects");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-teal-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 -right-20 w-72 h-72 bg-emerald-500/15 rounded-full blur-3xl animate-pulse [animation-delay:2s]" />
        <div className="absolute bottom-20 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse [animation-delay:4s]" />
      </div>

      {/* Container with balanced padding */}
      <div className="container mx-auto px-12 sm:px-20 lg:px-44 pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-4 lg:gap-6">
          {/* Text content */}
          <Motion.div
            className="flex-1 text-center lg:text-left space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Availability badge */}
            <Motion.div
              className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium text-emerald-400 tracking-wide">
                Available for work
              </span>
            </Motion.div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold tracking-tight leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-linear-to-r from-teal-400 via-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                {personalInfo.name}
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-gray-300 font-medium tracking-wide">
              {personalInfo.title}
            </p>

            {/* Description limited to 4 lines */}
            <p className="text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-md line-clamp-4">
              {personalInfo.description}
            </p>

            {/* Buttons - now horizontally more compact */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2.5 pt-4">
              <button className="group px-3 py-2 bg-linear-to-r from-teal-500 to-cyan-500 rounded-lg font-semibold text-white shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-1.5 hover:scale-105 text-sm sm:text-base">
                View My Work
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </button>
              <button className="px-3 py-2 bg-white/10 backdrop-blur-sm rounded-lg font-semibold text-gray-200 hover:bg-white/20 transition-all duration-300 flex items-center gap-1.5 border border-white/20 hover:scale-105 text-sm sm:text-base">
                <Contact className="w-3.5 h-3.5" />
                Contact Me
              </button>
            </div>
          </Motion.div>

          {/* Image with floating badges */}
          <Motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-full bg-linear-to-tr from-teal-500 via-emerald-500 to-cyan-500 opacity-30 blur-xl animate-pulse" />
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-black/30 shadow-2xl">
                <img
                  src="https://avatars.githubusercontent.com/u/12345678?v=4" // Replace with your actual image URL
                  alt={`${personalInfo.name} - profile photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badges */}
              <Motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut",
                }}
                className="absolute -right-2 top-8 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 text-sm font-semibold text-gray-200 whitespace-nowrap"
              >
                React.js
              </Motion.div>
              <Motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3.5,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="absolute -left-2 bottom-12 px-3 py-1.5 bg-background/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 text-sm font-semibold text-gray-200 whitespace-nowrap"
              >
                Next.js
              </Motion.div>
            </div>
          </Motion.div>
        </div>
      </div>

      {/* Scroll down indicator */}
      <Motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 cursor-pointer z-10 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToNextSection}
        aria-label="Scroll down"
      >
        <span className="text-xs text-white/60 tracking-wider">
          SCROLL DOWN
        </span>
        <Motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-white/60" />
        </Motion.div>
      </Motion.div>
    </section>
  );
}
import { projects } from "../data/content";

const tagColors: Record<string, string> = {
  SaaS: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
  AI: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  "E-Commerce": "bg-violet-500/20 text-violet-300 border-violet-500/30",
  DevOps: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-800 to-slate-900"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-cyan-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Dexzen Labs Projects
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Products We&apos;ve Shipped
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of digital products conceived, designed and built by the
            Dexzen Labs team.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          role="list"
        >
          {projects.map((project) => (
            <li
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/70 border border-slate-700/50 hover:border-slate-500/70 transition-all duration-300"
            >
              {/* Top gradient bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                aria-hidden="true"
              />
              <div className="p-6 sm:p-8">
                {/* Tag */}
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${
                    tagColors[project.tag] ??
                    "bg-slate-700 text-slate-300 border-slate-600"
                  } mb-4`}
                >
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* CTA link placeholder */}
                <a
                  href="#contact"
                  aria-label={`Learn more about ${project.title}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
                >
                  Learn More
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </li>
          ))}
        </ul>

        {/* View all CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-600 hover:border-indigo-500 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}

import { projects } from "../data/content";

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
            Case Studies
          </p>
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Products We&apos;ve Shipped
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Real outcomes for real clients — a selection of digital products
            conceived, engineered and scaled by the TechRangers team.
          </p>
        </div>

        {/* Cards grid */}
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8" role="list">
          {projects.map((project) => (
            <li
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-slate-800/70 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-900/20 flex flex-col"
            >
              {/* Top gradient bar */}
              <div
                className="h-1 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-cyan-400"
                aria-hidden="true"
              />

              <div className="p-6 sm:p-8 flex flex-col flex-1">
                {/* Tag + category */}
                <div className="flex items-center gap-3 mb-5">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${project.tagColor}`}
                  >
                    {project.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{project.category}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors">
                  {project.title}
                </h3>

                {/* Context */}
                <div className="mb-5">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                    Context
                  </p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.context}
                  </p>
                </div>

                {/* Approach */}
                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-2">
                    Our Approach
                  </p>
                  <ul className="space-y-2" role="list">
                    {project.approach.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span
                          className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-indigo-400"
                          aria-hidden="true"
                        />
                        <span className="text-slate-400 text-sm leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcomes */}
                <div className="mt-auto">
                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">
                    Outcomes &amp; Gains
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {project.outcomes.map((outcome) => (
                      <div
                        key={outcome.label}
                        className="rounded-xl bg-slate-900/60 border border-slate-700/50 p-3 text-center"
                      >
                        <p className="text-lg font-extrabold text-white leading-none mb-1">
                          {outcome.metric}
                        </p>
                        <p className="text-slate-500 text-xs leading-snug">
                          {outcome.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA link */}
                <a
                  href="#contact"
                  aria-label={`Discuss a project like ${project.title}`}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded mt-6"
                >
                  Start a Similar Project
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
        <div className="text-center mt-14">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-slate-600 hover:border-indigo-500 hover:bg-indigo-500/10 text-slate-300 hover:text-white font-semibold text-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
          >
            Discuss Your Project with Us
          </a>
        </div>
      </div>
    </section>
  );
}

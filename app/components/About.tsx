import { differentiators } from "../data/content";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-slate-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — copy */}
          <div>
            <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Why TechRangers
            </p>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight"
            >
              Engineering Excellence,{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
                Delivered Fast
              </span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              TechRangers is a full-service digital consulting firm — purpose-built to help startups and growing
              businesses ship great digital products without the overhead of a
              full in-house team.
            </p>
            <p className="text-slate-400 leading-relaxed mb-10">
              We combine senior engineering talent, proven design systems and an
              obsessive focus on outcomes. Whether you need to launch an MVP in
              weeks or scale an existing platform, we bring the expertise and
              process to get it done right.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-700/50">
              {[
                { value: "50+", label: "Products Shipped" },
                { value: "3×", label: "Faster than Average" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl sm:text-3xl font-extrabold text-white">
                    {stat.value}
                  </p>
                  <p className="text-slate-500 text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — differentiators */}
          <div className="rounded-2xl bg-slate-800/60 border border-slate-700/50 p-8">
            <h3 className="text-lg font-bold text-white mb-6">
              What sets us apart
            </h3>
            <ul className="space-y-4" role="list">
              {differentiators.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3 h-3 text-indigo-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </span>
                  <span className="text-slate-300 text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

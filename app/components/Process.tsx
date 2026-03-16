import { processSteps } from "../data/content";

export default function Process() {
  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-900 to-slate-950"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            How We Work
          </p>
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Our Delivery Process
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A clear, repeatable process that takes you from idea to live product
            with minimal friction.
          </p>
        </div>

        {/* Timeline */}
        <ol className="relative max-w-3xl mx-auto" role="list">
          {/* Vertical line */}
          <div
            className="absolute left-7 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-violet-500/30 to-transparent"
            aria-hidden="true"
          />

          {processSteps.map((step, index) => (
            <li
              key={step.step}
              className={`relative flex gap-6 sm:gap-8 ${
                index < processSteps.length - 1 ? "pb-10" : ""
              }`}
            >
              {/* Step circle */}
              <div className="relative z-10 flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-slate-800 border border-slate-700/60 flex items-center justify-center shadow-lg">
                <span className="text-lg font-extrabold text-indigo-400">
                  {step.step}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1 pt-3 pb-2">
                <h3 className="text-lg font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

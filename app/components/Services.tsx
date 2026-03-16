import { services } from "../data/content";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-slate-900"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
            What We Do
          </p>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Services Built for Scale
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From rapid MVPs to enterprise-grade platforms — we deliver across
            the full product stack.
          </p>
        </div>

        {/* Cards grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
        >
          {services.map((service) => (
            <li
              key={service.title}
              className="group relative rounded-2xl p-6 bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-800 transition-all duration-300 focus-within:ring-2 focus-within:ring-indigo-500"
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-600/0 to-violet-600/0 group-hover:from-indigo-600/5 group-hover:to-violet-600/5 transition-all duration-300 pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative">
                <div
                  className="text-4xl mb-4 leading-none"
                  aria-hidden="true"
                >
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

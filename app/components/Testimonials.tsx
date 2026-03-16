import { testimonials } from "../data/content";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 lg:py-32 bg-slate-950"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-emerald-400 text-sm font-semibold uppercase tracking-widest mb-3">
            Client Stories
          </p>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4"
          >
            Trusted by Founders &amp; Teams
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Don&apos;t take our word for it — here&apos;s what our clients say.
          </p>
        </div>

        {/* Testimonial cards */}
        <ul
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          role="list"
        >
          {testimonials.map((testimonial) => (
            <li
              key={testimonial.name}
              className="relative rounded-2xl p-6 sm:p-8 bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 transition-colors duration-300"
            >
              {/* Quote mark */}
              <span
                className="block text-6xl text-indigo-500/30 font-serif leading-none mb-2 select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>

              <blockquote className="text-slate-300 text-sm leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>

              <footer className="flex items-center gap-3">
                {/* Avatar placeholder */}
                <div
                  className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                  aria-hidden="true"
                >
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-slate-500 text-xs">{testimonial.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

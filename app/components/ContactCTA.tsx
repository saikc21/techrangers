import { siteConfig } from "../data/content";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-32 bg-gradient-to-b from-slate-950 to-slate-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Decorative ring */}
        <div
          className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 mb-8"
          aria-hidden="true"
        >
          <svg
            className="w-8 h-8 text-indigo-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </div>

        <p className="text-indigo-400 text-sm font-semibold uppercase tracking-widest mb-3">
          Get In Touch
        </p>

        <h2
          id="contact-heading"
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight"
        >
          Ready to Build Something{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Extraordinary?
          </span>
        </h2>

        <p className="text-slate-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Tell us about your project and we&apos;ll get back to you within 24
          hours. No commitments, no pressure — just a great conversation.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <a
            href={`mailto:${siteConfig.email}`}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-base transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            Email Us Now
          </a>
          <a
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold text-base transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
          >
            View Our Work
          </a>
        </div>

        {/* Email display */}
        <p className="text-slate-500 text-sm">
          Or write to us directly at{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-indigo-400 hover:text-indigo-300 underline underline-offset-2 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </section>
  );
}

import { siteConfig, navLinks } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <a
              href="#"
              className="inline-block text-2xl font-extrabold tracking-tight text-white mb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
              aria-label="TechRangers — home"
            >
              Tech<span className="text-indigo-400">Rangers</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs mb-4">
              {siteConfig.description}
            </p>
            <p className="text-slate-500 text-xs">
              A{" "}
              <a
                href="https://dexzenlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-400 rounded"
              >
                Dexzen Labs
              </a>{" "}
              initiative
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5" role="list">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2.5" role="list">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href="https://dexzenlabs.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded"
                >
                  dexzenlabs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm text-center sm:text-left">
            &copy; {year} TechRangers. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs text-center sm:text-right">
            Built with ❤️ by{" "}
            <a
              href="https://dexzenlabs.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 hover:text-slate-400 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500 rounded underline underline-offset-2"
            >
              Dexzen Labs
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

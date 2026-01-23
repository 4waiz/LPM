import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-stone/60 dark:border-navy-700 bg-white dark:bg-navy-800 transition-colors duration-300">
    <div className="container-pad mx-auto py-16">
      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand Section */}
        <div className="space-y-5 sm:col-span-2 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 group">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald text-white font-semibold text-lg transition-transform group-hover:scale-105">
              L
            </span>
            <span className="text-base font-semibold text-navy-900 dark:text-white">
              Lando Property Management
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-charcoal/70 dark:text-stone/70 max-w-xs">
            Premium property care and leasing for discerning owners and renters in Abu Dhabi.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="text-sm font-semibold text-navy-900 dark:text-white mb-5">Quick Links</p>
          <ul className="space-y-3 text-sm">
            <li>
              <Link to="/about" className="text-charcoal/70 dark:text-stone/70 hover:text-emerald dark:hover:text-emerald transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/properties" className="text-charcoal/70 dark:text-stone/70 hover:text-emerald dark:hover:text-emerald transition-colors">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/owners" className="text-charcoal/70 dark:text-stone/70 hover:text-emerald dark:hover:text-emerald transition-colors">
                For Owners
              </Link>
            </li>
            <li>
              <Link to="/tenants" className="text-charcoal/70 dark:text-stone/70 hover:text-emerald dark:hover:text-emerald transition-colors">
                For Tenants
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <p className="text-sm font-semibold text-navy-900 dark:text-white mb-5">Services</p>
          <ul className="space-y-3 text-sm text-charcoal/70 dark:text-stone/70">
            <li>Leasing & Screening</li>
            <li>Maintenance Coordination</li>
            <li>Accounting & Reporting</li>
            <li>Routine Inspections</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-sm font-semibold text-navy-900 dark:text-white mb-5">Contact Us</p>
          <ul className="space-y-3 text-sm text-charcoal/70 dark:text-stone/70">
            <li className="flex items-start gap-2">
              <svg className="w-4 h-4 mt-0.5 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Abu Dhabi, UAE</span>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:+971504754950" className="hover:text-emerald transition-colors">050-475-4950</a>
            </li>
            <li className="flex items-center gap-2">
              <svg className="w-4 h-4 text-emerald flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:awaiz42ad@gmail.com" className="hover:text-emerald transition-colors">awaiz42ad@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    {/* Bottom Bar */}
    <div className="border-t border-stone/60 dark:border-navy-700">
      <div className="container-pad mx-auto py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-charcoal/60 dark:text-stone/60">
          © {new Date().getFullYear()} Lando Property Management. All rights reserved.
        </p>
        <p className="text-xs text-charcoal/60 dark:text-stone/60">
          Made by{" "}
          <a
            href="https://www.linkedin.com/in/awaiz-ahmed/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-emerald hover:text-emerald/80 transition-colors drop-shadow-[0_0_8px_rgba(15,118,110,0.8)] hover:drop-shadow-[0_0_12px_rgba(15,118,110,1)]"
          >
            Awaiz Ahmed
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

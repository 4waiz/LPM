import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ButtonLink } from "./Button";
import MobileMenu from "./MobileMenu";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Properties", to: "/properties" },
  { label: "Owners", to: "/owners" },
  { label: "Tenants", to: "/tenants" },
  { label: "Maintenance", to: "/maintenance" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" }
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-all duration-300 ${
        scrolled
          ? "border-stone/60 dark:border-navy-700 bg-sand/95 dark:bg-navy-900/95 shadow-sm backdrop-blur-lg"
          : "border-transparent bg-sand/80 dark:bg-navy-900/80 backdrop-blur-md"
      }`}
    >
      <div className="container-pad mx-auto flex h-16 items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group flex-shrink-0">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald text-white font-semibold transition-transform group-hover:scale-105">
            L
          </span>
          <span className="text-sm font-semibold text-navy-900 dark:text-white hidden sm:block">
            Lando Property Management
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-emerald bg-emerald/10"
                    : "text-charcoal/70 dark:text-stone/70 hover:text-navy-900 dark:hover:text-white hover:bg-stone/30 dark:hover:bg-navy-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden items-center gap-2 lg:flex flex-shrink-0">
          <ButtonLink to="/properties" variant="ghost" size="sm">
            View Properties
          </ButtonLink>
          <ButtonLink to="/owners" size="sm">
            Get Started
          </ButtonLink>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-stone/60 dark:border-navy-700 text-charcoal dark:text-stone transition-all hover:border-emerald hover:bg-emerald/10 lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      <MobileMenu open={open} navLinks={navLinks} />
    </header>
  );
};

export default Navbar;

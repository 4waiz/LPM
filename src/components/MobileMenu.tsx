import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ButtonLink } from "./Button";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type NavLinkItem = {
  label: string;
  to: string;
};

type MobileMenuProps = {
  open: boolean;
  navLinks: NavLinkItem[];
};

const MobileMenu = ({ open, navLinks }: MobileMenuProps) => {
  const reduced = usePrefersReducedMotion();
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: reduced ? 0.1 : 0.25 }}
          className="border-t border-stone/60 dark:border-navy-700 bg-sand/95 dark:bg-navy-900/95 lg:hidden"
        >
          <div className="container-pad mx-auto flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? "text-emerald" : "text-charcoal/80 dark:text-stone/80"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <div className="flex flex-col gap-3 pt-2">
              <ButtonLink to="/properties" variant="secondary">
                View Properties
              </ButtonLink>
              <ButtonLink to="/owners">Owner Consultation</ButtonLink>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;

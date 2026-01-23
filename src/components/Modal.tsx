import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { usePrefersReducedMotion } from "../hooks/usePrefersReducedMotion";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: "md" | "lg";
};

const Modal = ({ open, onClose, title, children, size = "lg" }: ModalProps) => {
  const reduced = usePrefersReducedMotion();

  useEffect(() => {
    if (!open) return;
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-navy-900/40 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={title ?? "Dialog"}
            initial={{ opacity: 0, y: reduced ? 0 : 20, scale: reduced ? 1 : 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: reduced ? 0 : 20, scale: reduced ? 1 : 0.98 }}
            transition={{ duration: reduced ? 0.1 : 0.25 }}
            className={clsx(
              "max-h-[85vh] w-full flex flex-col overflow-hidden rounded-3xl bg-white dark:bg-navy-800 shadow-lift transition-colors duration-300",
              size === "md" ? "max-w-2xl" : "max-w-4xl"
            )}
            onClick={(event) => event.stopPropagation()}
          >
            {title && (
              <div className="flex-shrink-0 border-b border-stone/60 dark:border-navy-700 px-6 py-4">
                <h3 className="text-lg font-semibold text-navy-900 dark:text-white">{title}</h3>
              </div>
            )}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;

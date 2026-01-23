import { useEffect } from "react";
import { ButtonLink } from "../components/Button";

const NotFound = () => {
  useEffect(() => {
    document.title = "Page Not Found | Lando Property Management";
  }, []);

  return (
    <section className="section-pad bg-white dark:bg-navy-900 transition-colors duration-300">
      <div className="container-pad mx-auto text-center space-y-6">
        <h1 className="text-4xl font-semibold text-navy-900 dark:text-white">Page not found</h1>
        <p className="text-charcoal/70 dark:text-stone/70">
          The page you are looking for does not exist. Return to the homepage.
        </p>
        <ButtonLink to="/">Go Home</ButtonLink>
      </div>
    </section>
  );
};

export default NotFound;

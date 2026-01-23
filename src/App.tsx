import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes";
import { ToastProvider } from "./components/Toast";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

const App = () => {
  return (
    <ThemeProvider>
      <ToastProvider>
        <div className="min-h-screen bg-sand dark:bg-navy-900 text-charcoal dark:text-stone flex flex-col transition-colors duration-300">
          <Navbar />
          <main id="content" className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
          <ThemeToggle />
        </div>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default App;

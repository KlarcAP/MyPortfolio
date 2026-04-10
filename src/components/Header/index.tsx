import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import logo from "../../assets/K.png";

interface NavItem {
  name: string;
  link: string;
}

const navItems: NavItem[] = [
  { name: "Inicio", link: "#home" },
  { name: "Sobre", link: "#about" },
  { name: "Portfólio", link: "#projects" },
  { name: "Habilidades", link: "#skills" },
  { name: "Formação", link: "#education" },
];

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      const offset = 100;
      const top = element.offsetTop - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });
    }
  };

  // Active section observer
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  // Scroll effect for header background
  useEffect(() => {
    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScrollEvent);

    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  return (
    <motion.header
      className="fixed top-6 left-0 w-full z-50 flex justify-center"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <nav
        className={`w-[95%] max-w-6xl flex items-center justify-between px-6 py-3 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-md shadow-lg border-gray-200"
            : "bg-black/40 backdrop-blur border-white/30"
        }`}
      >
        {/* Logo */}
        <img 
          src={logo} 
          alt="Logo" 
          className="w-10 h-10" // Improved sizing
        />

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => {
            const id = item.link.replace("#", "");

            return (
              <a
                key={item.name}
                onClick={() => handleScroll(id)}
                className={`cursor-pointer transition ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-black/90 backdrop-blur-lg border border-white/20 rounded-xl p-6 flex flex-col items-center gap-6 md:hidden">
          {navItems.map((item) => {
            const id = item.link.replace("#", "");

            return (
              <a
                key={item.name}
                onClick={() => {
                  handleScroll(id);
                  setMenuOpen(false);
                }}
                className={`text-lg transition ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>
      )}
    </motion.header>
  );
};

export default Header;
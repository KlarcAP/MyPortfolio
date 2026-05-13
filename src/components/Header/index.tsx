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
  { name: "Formação", link: "#education" },
  { name: "Contato", link: "#contact" },
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
      },
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
      className="fixed top-4 left-0 w-full z-50 flex justify-center px-4 pointer-events-none"
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <nav
        className={`pointer-events-auto w-full max-w-6xl flex items-center justify-between gap-4 rounded-[34px] border px-5 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 border-white/10 shadow-2xl shadow-black/40 backdrop-blur-2xl"
            : "bg-black/30 border-white/10 backdrop-blur-xl"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-12 h-12 rounded-full">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const id = item.link.replace("#", "");

            return (
              <a
                key={item.name}
                onClick={() => handleScroll(id)}
                className={`group relative cursor-pointer text-sm uppercase tracking-[0.24em] transition-all duration-300 ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full rounded-full transition-all duration-300 ${
                    activeSection === id
                      ? "bg-gradient-to-r from-cyan-400 to-violet-400"
                      : "bg-transparent group-hover:bg-white/40"
                  }`}
                />
              </a>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden text-white text-2xl  p-3 rounded-full"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="absolute top-20 w-[90%] bg-black/90 backdrop-blur-2xl border border-white/15 rounded-[28px] p-5 flex flex-col items-center gap-4 md:hidden shadow-2xl shadow-black/30"
        >
          {navItems.map((item) => {
            const id = item.link.replace("#", "");

            return (
              <button
                key={item.name}
                type="button"
                onClick={() => {
                  handleScroll(id);
                  setMenuOpen(false);
                }}
                className={`w-full text-center text-base uppercase tracking-[0.18em] transition-all duration-300 ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </button>
            );
          })}
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;

import { motion } from "framer-motion";
import { Home, ShoppingBag, Sparkles, MessageSquare, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { icon: Home, label: "خانه", href: "/", path: "/", isHome: true },
  { icon: ShoppingBag, label: "محصولات", href: "/shop", path: "/shop" },
  { icon: Sparkles, label: "مشاوره", href: "/#consultant", path: "/", isMain: true },
  { icon: MessageSquare, label: "تماس", href: "/contact", path: "/contact" },
  { icon: User, label: "درباره ما", href: "/about", path: "/about" },
];

const BottomNavbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (item: typeof navItems[0]) => {
    if (item.isMain) {
      // For consultant section, navigate to home and scroll to section
      if (location.pathname !== "/") {
        navigate("/#consultant");
      } else {
        const element = document.getElementById("consultant");
        element?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(item.href);
    }
  };

  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-4"
    >
      <div className="glass-strong rounded-full px-3 sm:px-4 py-2 flex items-center justify-center gap-1 sm:gap-2 shadow-2xl border border-white/20">
        {navItems.map((item) => (
          <motion.button
            key={item.href}
            onClick={() => handleClick(item)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex flex-col items-center justify-center transition-all duration-300 ${
              item.isMain
                ? "w-12 h-12 sm:w-14 sm:h-14 -mt-6 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg"
                : "w-10 h-10 sm:w-12 sm:h-12 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            <item.icon className={item.isMain ? "w-5 h-5 sm:w-6 sm:h-6" : "w-4 h-4 sm:w-5 sm:h-5"} />
            {!item.isMain && (
              <span className="text-[9px] sm:text-[10px] mt-0.5 hidden sm:block">{item.label}</span>
            )}
            {item.isMain && (
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                    "0 0 40px rgba(245, 158, 11, 0.5)",
                    "0 0 20px rgba(245, 158, 11, 0.3)",
                  ],
                }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
            )}
          </motion.button>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;

import { motion } from "framer-motion";
import { Home, ShoppingBag, Sparkles, MessageSquare, User } from "lucide-react";

const navItems = [
  { icon: Home, label: "خانه", href: "#hero" },
  { icon: ShoppingBag, label: "محصولات", href: "#products" },
  { icon: Sparkles, label: "مشاوره", href: "#consultant", isMain: true },
  { icon: MessageSquare, label: "نظرات", href: "#testimonials" },
  { icon: User, label: "درباره ما", href: "#why-us" },
];

const BottomNavbar = () => {
  return (
    <motion.nav
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40"
    >
      <div className="glass-strong rounded-full px-2 py-2 flex items-center gap-1 shadow-2xl border border-white/20">
        {navItems.map((item, index) => (
          <motion.a
            key={item.href}
            href={item.href}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`relative flex flex-col items-center justify-center transition-all duration-300 ${
              item.isMain
                ? "w-14 h-14 -mt-6 rounded-full bg-gradient-to-br from-secondary to-secondary/80 text-secondary-foreground shadow-lg"
                : "w-12 h-12 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/10"
            }`}
          >
            <item.icon className={item.isMain ? "w-6 h-6" : "w-5 h-5"} />
            {!item.isMain && (
              <span className="text-[10px] mt-0.5 hidden sm:block">{item.label}</span>
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
          </motion.a>
        ))}
      </div>
    </motion.nav>
  );
};

export default BottomNavbar;

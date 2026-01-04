import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-laptops.jpg";

// Lightweight animation variants - GPU optimized
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background - Optimized */}
      <div className="absolute inset-0 animated-gradient-bg gpu-accelerated" />
      
      {/* Blurred Blobs - Simplified for performance */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl blob opacity-40" />
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-30" style={{ animationDelay: "-6s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl opacity-20" />

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="لپ‌تاپ‌های سرفیس و مک‌بوک"
          className="w-full h-full object-cover opacity-40"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">مشاوره هوشمند با هوش مصنوعی</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-foreground">اتحاد، </span>
            <span className="gradient-text">انتخابی هوشمند</span>
            <br />
            <span className="text-foreground">برای لپ‌تاپ استوک</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.15 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            با مشاوره هوش مصنوعی، بهترین سرفیس و مک‌بوک استوک را 
            متناسب با نیازتان پیدا کنید.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="cta" size="xl" className="w-full sm:w-auto pulse-glow">
              <Sparkles className="w-5 h-5" />
              شروع مشاوره رایگان
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              مشاهده محصولات
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.4, delay: 0.3 }}
            className="grid grid-cols-3 gap-4 lg:gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { value: "+۵۰۰", label: "مشتری راضی" },
              { value: "۱۲ ماه", label: "گارانتی" },
              { value: "گرید A+", label: "کیفیت برتر" },
            ].map((stat, index) => (
              <div key={index} className="glass-card rounded-2xl p-4 lg:p-6 hover-lift">
                <div className="text-2xl lg:text-3xl font-bold text-secondary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - CSS animation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-[fadeIn_0.5s_ease-out_1s_forwards]">
        <div className="glass p-3 rounded-full scroll-indicator">
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;

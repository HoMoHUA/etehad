import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-laptops.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 animated-gradient-bg" />
      
      {/* Blurred Blobs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl blob opacity-50" />
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-accent/30 rounded-full blur-3xl blob opacity-40" style={{ animationDelay: "-4s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl opacity-30" />

      {/* Hero Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="لپ‌تاپ‌های سرفیس و مک‌بوک"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8"
          >
            <Sparkles className="w-4 h-4 text-secondary" />
            <span className="text-sm text-muted-foreground">مشاوره هوشمند با هوش مصنوعی</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 leading-tight"
          >
            <span className="text-foreground">اتحاد، </span>
            <span className="gradient-text">انتخابی هوشمند</span>
            <br />
            <span className="text-foreground">برای لپ‌تاپ استوک</span>
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            با مشاوره هوش مصنوعی، بهترین سرفیس و مک‌بوک استوک را 
            متناسب با نیازتان پیدا کنید.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
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
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
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

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="glass p-3 rounded-full"
        >
          <ArrowDown className="w-5 h-5 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

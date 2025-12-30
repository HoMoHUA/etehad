import { motion } from "framer-motion";
import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-primary/5 to-muted/5" />
      
      {/* Animated Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl blob opacity-40" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-3xl blob opacity-40" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10 px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto"
        >
          {/* Icon */}
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut"
            }}
            className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center glow-secondary"
          >
            <Sparkles className="w-10 h-10 text-secondary-foreground" />
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            آماده‌ای لپ‌تاپ ایده‌آلت رو پیدا کنی؟
          </h2>
          
          <p className="text-lg lg:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            همین الان با مشاوران ما در ارتباط باش و بهترین انتخاب رو داشته باش.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="cta" size="xl" className="w-full sm:w-auto pulse-glow">
              بزن بریم برای مشاوره!
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <Button variant="glass" size="xl" className="w-full sm:w-auto">
              تماس تلفنی
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;

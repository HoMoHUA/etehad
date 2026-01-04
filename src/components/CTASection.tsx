import { Sparkles, ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const CTASection = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-primary/5 to-muted/5" />
      
      {/* Static Blobs - Reduced complexity */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-secondary/15 rounded-full blur-3xl opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/10 rounded-full blur-3xl opacity-20" />

      <div className="container relative z-10 px-4 lg:px-8">
        <ScrollReveal className="glass-card rounded-3xl p-8 lg:p-16 text-center max-w-4xl mx-auto">
          {/* Icon - Simplified animation */}
          <div className="w-20 h-20 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center glow-secondary pulse-glow">
            <Sparkles className="w-10 h-10 text-secondary-foreground" />
          </div>

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
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;

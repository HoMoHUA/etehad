import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "علی محمدی",
    role: "طراح گرافیک",
    content: "از خریدم از اتحاد خیلی راضیم. مک‌بوکی که گرفتم کاملاً سالم بود و قیمتش هم خیلی بهتر از بازار بود. پشتیبانیشون هم عالیه!",
    rating: 5,
    avatar: "ع",
  },
  {
    id: 2,
    name: "سارا احمدی",
    role: "برنامه‌نویس",
    content: "سرفیس پرو ۹ که از اتحاد خریدم فوق‌العاده‌اس. مشاوره‌شون خیلی کمکم کرد تا بهترین انتخاب رو داشته باشم. واقعاً حرفه‌ای هستن.",
    rating: 5,
    avatar: "س",
  },
  {
    id: 3,
    name: "رضا کریمی",
    role: "دانشجو",
    content: "با بودجه محدود دنبال یه لپ‌تاپ خوب بودم. بچه‌های اتحاد یه سرفیس لپ‌تاپ ۵ بهم پیشنهاد دادن که دقیقاً همون چیزی بود که نیاز داشتم.",
    rating: 5,
    avatar: "ر",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <MessageSquare className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground">نظرات مشتریان</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            صدای مشتریان ما
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ببین مشتریان قبلی چی درباره ما میگن
          </p>
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl p-8 lg:p-12"
              >
                {/* Quote Icon */}
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote className="w-12 h-12" />
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
                    ))}
                  </div>

                  {/* Text */}
                  <p className="text-lg lg:text-xl text-foreground leading-relaxed mb-8">
                    "{testimonials[currentIndex].content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-foreground">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div>
                      <div className="font-bold text-foreground">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonials[currentIndex].role}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="glass p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
              
              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-secondary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="glass p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

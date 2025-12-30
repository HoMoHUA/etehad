import { motion } from "framer-motion";
import { Headphones, Shield, Award, Sparkles } from "lucide-react";

const features = [
  {
    icon: Headphones,
    title: "مشاوره تخصصی رایگان",
    description: "قبل از خرید، آگاهانه انتخاب کن. کارشناسان ما همیشه آماده پاسخگویی هستند.",
    gradient: "from-primary to-primary/50",
  },
  {
    icon: Shield,
    title: "گارانتی و پشتیبانی معتبر",
    description: "با خیال راحت خرید کن، ما کنارت هستیم. ۱۲ ماه گارانتی معتبر.",
    gradient: "from-accent to-accent/50",
  },
  {
    icon: Award,
    title: "تضمین کیفیت و اصالت",
    description: "فقط لپ‌تاپ‌های گرید A+ با بهترین کیفیت. اصالت کالا تضمین شده.",
    gradient: "from-secondary to-secondary/50",
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/5 via-transparent to-muted/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-40" />

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
            <Sparkles className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground">مزایای ما</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            چرا به اتحاد اعتماد کنید؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            ما با بیش از ۵ سال تجربه، بهترین خدمات را به مشتریان ارائه می‌دهیم
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-8 h-full text-center hover-lift">
                {/* Icon */}
                <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  <feature.icon className="w-10 h-10 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;

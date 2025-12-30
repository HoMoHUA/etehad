import { motion } from "framer-motion";
import {
  Shield,
  Award,
  Users,
  Clock,
  CheckCircle,
  Sparkles,
  Star,
  TrendingUp,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Shield,
    title: "گارانتی ۱۲ ماهه",
    description:
      "تمامی محصولات با گارانتی ۱۲ ماهه ارائه می‌شوند و پشتیبانی فنی رایگان دارند.",
  },
  {
    icon: Award,
    title: "کیفیت گرید A+",
    description:
      "فقط لپ‌تاپ‌های با بالاترین کیفیت و گرید A+ را عرضه می‌کنیم.",
  },
  {
    icon: Users,
    title: "مشاوره تخصصی",
    description:
      "تیم کارشناسان ما آماده ارائه مشاوره رایگان برای انتخاب بهترین محصول هستند.",
  },
  {
    icon: Clock,
    title: "پشتیبانی ۲۴/۷",
    description:
      "پشتیبانی شبانه‌روزی برای پاسخگویی به سوالات و رفع مشکلات شما.",
  },
];

const stats = [
  { value: "+۵۰۰", label: "مشتری راضی" },
  { value: "۵+", label: "سال تجربه" },
  { value: "۱۲ ماه", label: "گارانتی معتبر" },
  { value: "A+", label: "کیفیت برتر" },
];

const timeline = [
  {
    year: "۱۳۹۸",
    title: "شروع فعالیت",
    description: "آغاز فعالیت با هدف ارائه لپ‌تاپ‌های استوک با کیفیت",
  },
  {
    year: "۱۳۹۹",
    title: "گسترش خدمات",
    description: "اضافه شدن خدمات گارانتی و پشتیبانی تخصصی",
  },
  {
    year: "۱۴۰۰",
    title: "افتتاح فروشگاه",
    description: "افتتاح فروشگاه حضوری در مرکز خرید اتحاد",
  },
  {
    year: "۱۴۰۲",
    title: "هوش مصنوعی",
    description: "راه‌اندازی سیستم مشاوره هوشمند با AI",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">درباره اتحاد</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6">
              <span className="gradient-text">چرا اتحاد را انتخاب کنید؟</span>
            </h1>
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              اتحاد با بیش از ۵ سال تجربه در زمینه فروش لپ‌تاپ‌های استوک سرفیس و
              مک‌بوک، مفتخر است که بهترین خدمات را با کیفیت‌ترین محصولات به شما
              ارائه دهد.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 -mt-8 relative z-20">
        <div className="container mx-auto px-4">
          <div className="glass-card rounded-3xl p-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl lg:text-4xl font-black gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              مزایای خرید از اتحاد
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              ما با ارائه خدمات ویژه و محصولات با کیفیت، تجربه خرید متفاوتی را
              برای شما فراهم می‌کنیم
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="glass-card rounded-2xl p-6 h-full hover:border-primary/30 transition-all group">
                  <div className="w-14 h-14 mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/20 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              مسیر رشد اتحاد
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              نگاهی به تاریخچه و دستاوردهای ما در طول سال‌ها
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-secondary-foreground font-bold text-sm">
                    {item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-secondary/50 to-transparent mt-2" />
                  )}
                </div>
                <div className="glass-card rounded-2xl p-5 flex-1">
                  <div className="text-secondary font-bold mb-1">{item.year}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl lg:text-4xl font-black mb-4">
                آماده‌اید شروع کنید؟
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto mb-8">
                همین حالا مشاوره رایگان بگیرید و بهترین لپ‌تاپ را متناسب با نیازتان
                پیدا کنید
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="cta" size="xl">
                  <Sparkles className="w-5 h-5 ml-2" />
                  مشاوره رایگان
                </Button>
                <Button variant="outline" size="xl">
                  مشاهده محصولات
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <BottomNavbar />
      <ChatBot />
    </div>
  );
};

export default About;

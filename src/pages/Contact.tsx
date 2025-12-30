import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, MessageSquare } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "تلفن تماس",
    value: "۰۹۱۲۳۴۵۶۷۸۹",
    href: "tel:+989123456789",
  },
  {
    icon: Mail,
    title: "ایمیل",
    value: "info@ettehad.ir",
    href: "mailto:info@ettehad.ir",
  },
  {
    icon: MapPin,
    title: "آدرس",
    value: "تهران، خیابان ولیعصر، مرکز خرید اتحاد",
  },
  {
    icon: Clock,
    title: "ساعت کاری",
    value: "شنبه تا پنجشنبه | ۹ صبح تا ۹ شب",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("پیام شما با موفقیت ارسال شد! به زودی با شما تماس خواهیم گرفت.");
    setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
              <MessageSquare className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">تماس با ما</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="gradient-text">با ما در ارتباط باشید</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              سوالی دارید؟ تیم پشتیبانی ما ۷ روز هفته آماده پاسخگویی به شما است
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {item.href ? (
                  <a href={item.href} className="block">
                    <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all group">
                      <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <item.icon className="w-7 h-7 text-secondary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="glass-card rounded-2xl p-6 text-center">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-secondary/20 to-secondary/5 flex items-center justify-center">
                      <item.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-3xl p-8">
                <h2 className="text-2xl font-bold mb-6">ارسال پیام</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        نام و نام خانوادگی
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full glass rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="نام شما"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        شماره تماس
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full glass rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                        placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      ایمیل (اختیاری)
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full glass rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="email@example.com"
                      dir="ltr"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      موضوع
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="w-full glass rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="موضوع پیام"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      پیام شما
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full glass rounded-xl py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                      placeholder="متن پیام خود را بنویسید..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="cta"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "در حال ارسال..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 ml-2" />
                        ارسال پیام
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="glass-card rounded-3xl overflow-hidden h-full min-h-[400px]">
                <div className="w-full h-full bg-gradient-to-br from-muted/50 to-muted/20 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-16 h-16 text-secondary mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-2">موقعیت فروشگاه</h3>
                    <p className="text-muted-foreground">
                      تهران، خیابان ولیعصر
                      <br />
                      مرکز خرید اتحاد، طبقه سوم
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomNavbar />
      <ChatBot />
    </div>
  );
};

export default Contact;

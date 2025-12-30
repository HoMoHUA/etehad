import { motion } from "framer-motion";
import { Laptop, Instagram, Send, MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = {
    quick: [
      { label: "صفحه اصلی", href: "#hero" },
      { label: "محصولات", href: "#products" },
      { label: "چرا اتحاد؟", href: "#why-us" },
      { label: "نظرات مشتریان", href: "#testimonials" },
    ],
    support: [
      { label: "سوالات متداول", href: "#" },
      { label: "شرایط گارانتی", href: "#" },
      { label: "روش‌های پرداخت", href: "#" },
      { label: "ارسال سریع", href: "#" },
    ],
  };

  return (
    <footer id="footer" className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-muted/10 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-border">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                <Laptop className="w-6 h-6 text-secondary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">اتحاد</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              مرجع تخصصی فروش لپ‌تاپ استوک سرفیس و مک‌بوک با گارانتی معتبر و پشتیبانی حرفه‌ای
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Instagram className="w-5 h-5 text-foreground" />
              </a>
              <a
                href="#"
                className="glass w-10 h-10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <Send className="w-5 h-5 text-foreground" />
              </a>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">دسترسی سریع</h4>
            <ul className="space-y-3">
              {links.quick.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">پشتیبانی</h4>
            <ul className="space-y-3">
              {links.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg font-bold text-foreground mb-4">تماس با ما</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground">
                  تهران، خیابان ولیعصر، مرکز خرید اتحاد
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="tel:+989123456789"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  dir="ltr"
                >
                  ۰۹۱۲۳۴۵۶۷۸۹
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <a
                  href="mailto:info@ettehad.ir"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  info@ettehad.ir
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} فروشگاه اتحاد. تمامی حقوق محفوظ است.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingCart, Heart, Share2, Check, Cpu, HardDrive, MemoryStick, Monitor, Battery, Weight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ChatBot from "@/components/ChatBot";
import { toast } from "@/hooks/use-toast";
import surfaceImg from "@/assets/surface-pro.png";
import macbookImg from "@/assets/macbook-pro.png";

const allProducts = [
  {
    id: "1",
    name: "Surface Pro 9",
    brand: "Microsoft",
    specs: "Core i7 | 16GB RAM | 512GB SSD",
    price: "۴۵,۰۰۰,۰۰۰",
    priceNum: 45000000,
    image: surfaceImg,
    badge: "پرفروش",
    description: "سرفیس پرو ۹ با پردازنده نسل دوازدهم اینتل، نمایشگر ۱۳ اینچی با رزولوشن بالا و قابلیت تبدیل به تبلت، انتخابی عالی برای حرفه‌ای‌ها و دانشجویان است.",
    gallery: [surfaceImg, surfaceImg, surfaceImg, surfaceImg],
    specifications: {
      processor: "Intel Core i7-1255U (12th Gen)",
      ram: "16GB LPDDR5",
      storage: "512GB NVMe SSD",
      display: "13 اینچ PixelSense (2880x1920)",
      battery: "تا ۱۵.۵ ساعت",
      weight: "۸۷۹ گرم",
      os: "Windows 11 Pro",
      ports: "2x USB-C Thunderbolt 4, Surface Connect",
      camera: "دوربین ۱۰ مگاپیکسل پشت، ۵ مگاپیکسل جلو",
      warranty: "۱۲ ماه گارانتی معتبر",
    },
    features: ["قلم سرفیس", "کیبورد Type Cover", "Face Recognition", "Dolby Atmos"],
    grade: "A+",
    stock: 5,
  },
  {
    id: "2",
    name: "MacBook Pro 14",
    brand: "Apple",
    specs: "M3 Pro | 18GB RAM | 512GB SSD",
    price: "۸۵,۰۰۰,۰۰۰",
    priceNum: 85000000,
    image: macbookImg,
    badge: "جدید",
    description: "مک‌بوک پرو ۱۴ اینچ با تراشه M3 Pro اپل، نمایشگر Liquid Retina XDR و عمر باتری فوق‌العاده، قدرتمندترین لپ‌تاپ برای طراحان و توسعه‌دهندگان.",
    gallery: [macbookImg, macbookImg, macbookImg, macbookImg],
    specifications: {
      processor: "Apple M3 Pro (12-core CPU, 18-core GPU)",
      ram: "18GB Unified Memory",
      storage: "512GB SSD",
      display: "14.2 اینچ Liquid Retina XDR (3024x1964)",
      battery: "تا ۱۷ ساعت",
      weight: "۱.۵۵ کیلوگرم",
      os: "macOS Sonoma",
      ports: "3x Thunderbolt 4, HDMI, SD Card, MagSafe 3",
      camera: "دوربین FaceTime HD 1080p",
      warranty: "۱۲ ماه گارانتی معتبر",
    },
    features: ["Touch ID", "ProMotion 120Hz", "Spatial Audio", "MagSafe Charging"],
    grade: "A+",
    stock: 3,
  },
  {
    id: "3",
    name: "Surface Laptop 5",
    brand: "Microsoft",
    specs: "Core i5 | 8GB RAM | 256GB SSD",
    price: "۳۲,۰۰۰,۰۰۰",
    priceNum: 32000000,
    image: surfaceImg,
    badge: null,
    description: "سرفیس لپ‌تاپ ۵ با طراحی زیبا، صفحه‌نمایش لمسی و عملکرد روان، گزینه‌ای مناسب برای کاربران روزمره و دانشجویان.",
    gallery: [surfaceImg, surfaceImg, surfaceImg, surfaceImg],
    specifications: {
      processor: "Intel Core i5-1235U (12th Gen)",
      ram: "8GB LPDDR5",
      storage: "256GB NVMe SSD",
      display: "13.5 اینچ PixelSense (2256x1504)",
      battery: "تا ۱۸ ساعت",
      weight: "۱.۲۷ کیلوگرم",
      os: "Windows 11 Home",
      ports: "USB-C, USB-A, Surface Connect, 3.5mm Jack",
      camera: "دوربین HD 720p",
      warranty: "۱۲ ماه گارانتی معتبر",
    },
    features: ["Alcantara Keyboard", "Omnisonic Speakers", "Windows Hello"],
    grade: "A+",
    stock: 8,
  },
  {
    id: "4",
    name: "MacBook Air M2",
    brand: "Apple",
    specs: "M2 | 8GB RAM | 256GB SSD",
    price: "۵۵,۰۰۰,۰۰۰",
    priceNum: 55000000,
    image: macbookImg,
    badge: "پیشنهاد ویژه",
    description: "مک‌بوک ایر M2 سبک‌ترین و نازک‌ترین لپ‌تاپ اپل با طراحی جدید، عملکرد قدرتمند و بدون نیاز به فن خنک‌کننده.",
    gallery: [macbookImg, macbookImg, macbookImg, macbookImg],
    specifications: {
      processor: "Apple M2 (8-core CPU, 10-core GPU)",
      ram: "8GB Unified Memory",
      storage: "256GB SSD",
      display: "13.6 اینچ Liquid Retina (2560x1664)",
      battery: "تا ۱۸ ساعت",
      weight: "۱.۲۴ کیلوگرم",
      os: "macOS Sonoma",
      ports: "2x Thunderbolt/USB 4, MagSafe 3, 3.5mm Jack",
      camera: "دوربین FaceTime HD 1080p",
      warranty: "۱۲ ماه گارانتی معتبر",
    },
    features: ["Touch ID", "Fanless Design", "Spatial Audio", "MagSafe Charging"],
    grade: "A+",
    stock: 6,
  },
];

const specIcons: Record<string, any> = {
  processor: Cpu,
  ram: MemoryStick,
  storage: HardDrive,
  display: Monitor,
  battery: Battery,
  weight: Weight,
};

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = allProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <main className="min-h-screen bg-background font-vazir">
        <Header />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-3xl font-bold mb-4">محصول یافت نشد</h1>
          <Link to="/">
            <Button variant="cta">بازگشت به صفحه اصلی</Button>
          </Link>
        </div>
        <Footer />
      </main>
    );
  }

  const handleAddToCart = () => {
    toast({
      title: "به سبد خرید اضافه شد",
      description: `${product.name} با موفقیت به سبد خرید اضافه شد.`,
    });
  };

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "لینک کپی شد",
        description: "لینک محصول در کلیپ‌بورد کپی شد.",
      });
    }
  };

  return (
    <main className="min-h-screen bg-background font-vazir overflow-x-hidden">
      <Header />

      {/* Breadcrumb */}
      <div className="container mx-auto px-4 lg:px-8 pt-24 lg:pt-28">
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link to="/" className="hover:text-foreground transition-colors">صفحه اصلی</Link>
          <span>/</span>
          <Link to="/#products" className="hover:text-foreground transition-colors">محصولات</Link>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </nav>
      </div>

      {/* Product Content */}
      <section className="container mx-auto px-4 lg:px-8 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="glass-card rounded-3xl p-6 mb-4 relative overflow-hidden">
              {product.badge && (
                <span className="absolute top-4 right-4 z-10 bg-gradient-to-l from-secondary to-secondary/80 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {product.badge}
                </span>
              )}
              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  src={product.gallery[selectedImage]}
                  alt={product.name}
                  className="w-full aspect-square object-contain"
                />
              </AnimatePresence>
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                    selectedImage === index
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-transparent glass hover:border-white/30"
                  }`}
                >
                  <img src={img} alt={`${product.name} - ${index + 1}`} className="w-full h-full object-contain p-2" />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-primary font-medium">{product.brand}</span>
              <span className="glass px-2 py-1 rounded-lg text-xs text-muted-foreground">گرید {product.grade}</span>
            </div>

            <h1 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{product.name}</h1>

            <p className="text-muted-foreground leading-relaxed mb-6">{product.description}</p>

            {/* Features */}
            <div className="flex flex-wrap gap-2 mb-6">
              {product.features.map((feature, index) => (
                <span key={index} className="glass px-3 py-1.5 rounded-full text-sm text-foreground flex items-center gap-1">
                  <Check className="w-3 h-3 text-secondary" />
                  {feature}
                </span>
              ))}
            </div>

            {/* Price */}
            <div className="glass-card rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-sm text-muted-foreground block mb-1">قیمت</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-secondary">{product.price}</span>
                    <span className="text-muted-foreground">تومان</span>
                  </div>
                </div>
                <div className="text-left">
                  <span className="text-sm text-muted-foreground block mb-1">موجودی</span>
                  <span className={`text-lg font-bold ${product.stock > 0 ? "text-green-400" : "text-red-400"}`}>
                    {product.stock > 0 ? `${product.stock} عدد` : "ناموجود"}
                  </span>
                </div>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4 mb-4">
                <span className="text-muted-foreground">تعداد:</span>
                <div className="flex items-center glass rounded-xl">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-white/10 rounded-r-xl transition-colors"
                  >
                    -
                  </button>
                  <span className="w-12 text-center text-foreground font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="w-10 h-10 flex items-center justify-center text-foreground hover:bg-white/10 rounded-l-xl transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <Button variant="cta" size="xl" className="flex-1" onClick={handleAddToCart} disabled={product.stock === 0}>
                  <ShoppingCart className="w-5 h-5" />
                  افزودن به سبد خرید
                </Button>
                <Button
                  variant="glass"
                  size="icon"
                  className="w-14 h-14"
                  onClick={() => setIsWishlisted(!isWishlisted)}
                >
                  <Heart className={`w-5 h-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                </Button>
                <Button variant="glass" size="icon" className="w-14 h-14" onClick={handleShare}>
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Warranty */}
            <div className="glass rounded-xl p-4 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 flex items-center justify-center">
                <Check className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">گارانتی ۱۲ ماهه</h4>
                <p className="text-sm text-muted-foreground">تضمین کیفیت و اصالت کالا</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Specifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-8">مشخصات فنی</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Object.entries(product.specifications).map(([key, value], index) => {
              const Icon = specIcons[key] || Cpu;
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="glass-card rounded-2xl p-5 hover-lift"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground block mb-1">
                        {key === "processor" && "پردازنده"}
                        {key === "ram" && "حافظه رم"}
                        {key === "storage" && "حافظه داخلی"}
                        {key === "display" && "نمایشگر"}
                        {key === "battery" && "باتری"}
                        {key === "weight" && "وزن"}
                        {key === "os" && "سیستم عامل"}
                        {key === "ports" && "پورت‌ها"}
                        {key === "camera" && "دوربین"}
                        {key === "warranty" && "گارانتی"}
                      </span>
                      <span className="text-foreground font-medium text-sm">{value}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link to="/#products">
            <Button variant="glowOutline" size="lg">
              <ArrowRight className="w-5 h-5" />
              بازگشت به محصولات
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
      <BottomNavbar />
      <ChatBot />
    </main>
  );
};

export default ProductDetails;

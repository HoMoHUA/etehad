import { motion } from "framer-motion";
import { Eye, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import surfaceImg from "@/assets/surface-pro.png";
import macbookImg from "@/assets/macbook-pro.png";

const products = [
  {
    id: 1,
    name: "Surface Pro 9",
    brand: "Microsoft",
    specs: "Core i7 | 16GB RAM | 512GB SSD",
    price: "۴۵,۰۰۰,۰۰۰",
    image: surfaceImg,
    badge: "پرفروش",
  },
  {
    id: 2,
    name: "MacBook Pro 14",
    brand: "Apple",
    specs: "M3 Pro | 18GB RAM | 512GB SSD",
    price: "۸۵,۰۰۰,۰۰۰",
    image: macbookImg,
    badge: "جدید",
  },
  {
    id: 3,
    name: "Surface Laptop 5",
    brand: "Microsoft",
    specs: "Core i5 | 8GB RAM | 256GB SSD",
    price: "۳۲,۰۰۰,۰۰۰",
    image: surfaceImg,
    badge: null,
  },
  {
    id: 4,
    name: "MacBook Air M2",
    brand: "Apple",
    specs: "M2 | 8GB RAM | 256GB SSD",
    price: "۵۵,۰۰۰,۰۰۰",
    image: macbookImg,
    badge: "پیشنهاد ویژه",
  },
];

const ProductsSection = () => {
  return (
    <section id="products" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50" />

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
            <ShoppingBag className="w-5 h-5 text-secondary" />
            <span className="text-sm text-muted-foreground">محصولات ویژه</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            پرفروش‌ترین‌های اتحاد
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            بهترین لپ‌تاپ‌های استوک با کیفیت گرید A+ و گارانتی معتبر
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-3xl p-5 h-full flex flex-col hover-lift">
                {/* Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-gradient-to-l from-secondary to-secondary/80 text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative h-48 mb-4 rounded-2xl overflow-hidden bg-gradient-to-br from-muted/30 to-muted/10 flex items-center justify-center">
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                    <Button variant="cta" size="default">
                      <Eye className="w-4 h-4" />
                      مشاهده جزئیات
                    </Button>
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 flex flex-col">
                  <div className="text-xs text-primary font-medium mb-1">
                    {product.brand}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {product.specs}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div>
                      <span className="text-xl font-bold text-secondary">
                        {product.price}
                      </span>
                      <span className="text-sm text-muted-foreground mr-1">تومان</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button variant="glowOutline" size="xl">
            مشاهده همه محصولات
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;

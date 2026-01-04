import { Eye, ShoppingBag } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import surfaceImg from "@/assets/surface-pro.png";
import macbookImg from "@/assets/macbook-pro.png";
import { ScrollReveal } from "@/hooks/use-scroll-animation";

const products = [
  {
    id: "1",
    name: "Surface Pro 9",
    brand: "Microsoft",
    specs: "Core i7 | 16GB RAM | 512GB SSD",
    price: "۴۵,۰۰۰,۰۰۰",
    image: surfaceImg,
    badge: "پرفروش",
  },
  {
    id: "2",
    name: "MacBook Pro 14",
    brand: "Apple",
    specs: "M3 Pro | 18GB RAM | 512GB SSD",
    price: "۸۵,۰۰۰,۰۰۰",
    image: macbookImg,
    badge: "جدید",
  },
  {
    id: "3",
    name: "Surface Laptop 5",
    brand: "Microsoft",
    specs: "Core i5 | 8GB RAM | 256GB SSD",
    price: "۳۲,۰۰۰,۰۰۰",
    image: surfaceImg,
    badge: null,
  },
  {
    id: "4",
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
      {/* Background - Simplified */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-muted/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-40" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-12 lg:mb-16">
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
        </ScrollReveal>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ScrollReveal
              key={product.id}
              delay={index * 80}
              className="group"
            >
              <div className="glass-card rounded-3xl p-5 h-full flex flex-col hover-lift relative">
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
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                    <Link to={`/product/${product.id}`}>
                      <Button variant="cta" size="default">
                        <Eye className="w-4 h-4" />
                        مشاهده جزئیات
                      </Button>
                    </Link>
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
            </ScrollReveal>
          ))}
        </div>

        {/* View All Button */}
        <ScrollReveal delay={350} className="text-center mt-12">
          <Button variant="glowOutline" size="xl">
            مشاهده همه محصولات
          </Button>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProductsSection;

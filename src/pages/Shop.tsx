import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Filter, ShoppingBag, Star, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ChatBot from "@/components/ChatBot";
import { Button } from "@/components/ui/button";

const products = [
  {
    id: "surface-pro-9",
    name: "Surface Pro 9",
    brand: "Microsoft",
    specs: "Core i7 | 16GB RAM | 512GB SSD",
    price: "۴۵,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    badge: "پرفروش",
    rating: 4.8,
  },
  {
    id: "macbook-pro-14",
    name: "MacBook Pro 14",
    brand: "Apple",
    specs: "M3 Pro | 18GB RAM | 512GB SSD",
    price: "۸۵,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    badge: "جدید",
    rating: 4.9,
  },
  {
    id: "surface-laptop-5",
    name: "Surface Laptop 5",
    brand: "Microsoft",
    specs: "Core i5 | 8GB RAM | 256GB SSD",
    price: "۳۲,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    rating: 4.7,
  },
  {
    id: "macbook-air-m2",
    name: "MacBook Air M2",
    brand: "Apple",
    specs: "M2 | 8GB RAM | 256GB SSD",
    price: "۵۵,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    badge: "پیشنهاد ویژه",
    rating: 4.8,
  },
  {
    id: "surface-pro-8",
    name: "Surface Pro 8",
    brand: "Microsoft",
    specs: "Core i5 | 8GB RAM | 256GB SSD",
    price: "۳۸,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    rating: 4.6,
  },
  {
    id: "macbook-pro-13",
    name: "MacBook Pro 13",
    brand: "Apple",
    specs: "M2 | 8GB RAM | 512GB SSD",
    price: "۶۵,۰۰۰,۰۰۰",
    image: "/placeholder.svg",
    rating: 4.7,
  },
];

const categories = ["همه", "Surface", "MacBook"];
const sortOptions = ["جدیدترین", "ارزان‌ترین", "گران‌ترین", "پرفروش‌ترین"];

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("همه");
  const [selectedSort, setSelectedSort] = useState("جدیدترین");

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "همه" ||
      product.brand.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 overflow-hidden">
        <div className="absolute inset-0 animated-gradient-bg opacity-50" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 mb-6">
              <ShoppingBag className="w-5 h-5 text-secondary" />
              <span className="text-sm text-muted-foreground">فروشگاه اتحاد</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">
              <span className="gradient-text">فروشگاه لپ‌تاپ استوک</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              بهترین لپ‌تاپ‌های سرفیس و مک‌بوک با گارانتی ۱۲ ماهه
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-6 sticky top-16 z-30 glass-strong">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="جستجوی محصول..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full glass rounded-xl py-3 pr-12 pl-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            {/* Categories */}
            <div className="flex gap-2 flex-wrap justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "glass hover:bg-white/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Sort */}
            <div className="relative">
              <button className="glass rounded-xl px-4 py-3 flex items-center gap-2 text-sm">
                <Filter className="w-4 h-4" />
                <span>{selectedSort}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`}>
                  <div className="glass-card rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300">
                    {product.badge && (
                      <div className="absolute top-4 right-4 z-10">
                        <span className="bg-secondary text-secondary-foreground text-xs font-bold px-3 py-1 rounded-full">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    <div className="relative aspect-[4/3] bg-gradient-to-br from-muted/50 to-muted/20 p-6">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                        <Button variant="cta" size="sm">
                          مشاهده جزئیات
                        </Button>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs text-secondary font-medium">
                          {product.brand}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-secondary text-secondary" />
                          <span className="text-xs text-muted-foreground">
                            {product.rating}
                          </span>
                        </div>
                      </div>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.specs}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-black text-secondary">
                          {product.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          تومان
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground">محصولی یافت نشد</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BottomNavbar />
      <ChatBot />
    </div>
  );
};

export default Shop;

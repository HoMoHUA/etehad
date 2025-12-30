import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ConsultantSection from "@/components/ConsultantSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import BottomNavbar from "@/components/BottomNavbar";
import ChatBot from "@/components/ChatBot";

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-vazir overflow-x-hidden">
      <Header />
      <HeroSection />
      <ConsultantSection />
      <ProductsSection />
      <WhyUsSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
      <BottomNavbar />
      <ChatBot />
    </main>
  );
};

export default Index;

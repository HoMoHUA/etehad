import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, ChevronLeft, ChevronRight, User, Phone, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const steps = [
  {
    id: 1,
    title: "بودجه شما چقدره؟",
    options: [
      { value: "budget-low", label: "تا ۲۰ میلیون" },
      { value: "budget-mid", label: "۲۰ تا ۴۰ میلیون" },
      { value: "budget-high", label: "بالای ۴۰ میلیون" },
    ],
  },
  {
    id: 2,
    title: "لپ‌تاپ رو برای چه کاری می‌خوای؟",
    options: [
      { value: "use-student", label: "دانشجویی و روزمره" },
      { value: "use-design", label: "طراحی و گرافیک" },
      { value: "use-dev", label: "برنامه‌نویسی" },
      { value: "use-business", label: "کارهای اداری و تجاری" },
    ],
  },
  {
    id: 3,
    title: "کدوم برند رو ترجیح میدی؟",
    options: [
      { value: "brand-surface", label: "Microsoft Surface" },
      { value: "brand-mac", label: "Apple MacBook" },
      { value: "brand-both", label: "فرقی نمیکنه" },
    ],
  },
];

const ConsultantSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [contactInfo, setContactInfo] = useState({ name: "", phone: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const isContactStep = currentStep === steps.length;
  const progress = ((currentStep + 1) / (steps.length + 1)) * 100;

  const handleOptionSelect = (value: string) => {
    setAnswers({ ...answers, [currentStep]: value });
  };

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    if (contactInfo.name && contactInfo.phone) {
      setIsSubmitted(true);
    }
  };

  return (
    <section id="consultant" className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl opacity-30" />

      <div className="container relative z-10 px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
            <Bot className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">مشاور هوشمند</span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            نمی‌دونی چه لپ‌تاپی برات مناسبه؟
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            فرم زیر را پر کن تا هوش مصنوعی ما بهترین گزینه‌ها را به تو پیشنهاد دهد.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-6 lg:p-10">
            {/* Progress Bar */}
            <div className="mb-8">
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-l from-secondary to-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
              <div className="flex justify-between mt-2 text-sm text-muted-foreground">
                <span>مرحله {currentStep + 1} از {steps.length + 1}</span>
                <span>{Math.round(progress)}٪</span>
              </div>
            </div>

            {isSubmitted ? (
              /* Success State */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center">
                  <Sparkles className="w-10 h-10 text-secondary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">درخواست شما ثبت شد!</h3>
                <p className="text-muted-foreground">
                  کارشناسان ما به زودی با شما تماس خواهند گرفت.
                </p>
              </motion.div>
            ) : isContactStep ? (
              /* Contact Step */
              <motion.div
                key="contact"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center">
                  برای ارسال نتایج، اطلاعات تماست رو وارد کن
                </h3>
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="نام و نام خانوادگی"
                      value={contactInfo.name}
                      onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                      className="w-full glass rounded-xl py-4 pr-12 pl-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                    />
                  </div>
                  <div className="relative">
                    <Phone className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="tel"
                      placeholder="شماره موبایل"
                      value={contactInfo.phone}
                      onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                      className="w-full glass rounded-xl py-4 pr-12 pl-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                      dir="ltr"
                    />
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Question Steps */
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
              >
                <h3 className="text-xl lg:text-2xl font-bold mb-6 text-center">
                  {steps[currentStep].title}
                </h3>
                <div className="grid gap-3">
                  {steps[currentStep].options.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className={`w-full text-right p-4 rounded-xl transition-all duration-300 ${
                        answers[currentStep] === option.value
                          ? "bg-gradient-to-l from-primary/30 to-primary/10 border-2 border-primary"
                          : "glass hover:bg-white/10 border-2 border-transparent"
                      }`}
                    >
                      <span className="text-foreground font-medium">{option.label}</span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Navigation */}
            {!isSubmitted && (
              <div className="flex justify-between mt-8 gap-4">
                <Button
                  variant="glass"
                  size="lg"
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className="flex-1"
                >
                  <ChevronRight className="w-5 h-5" />
                  قبلی
                </Button>
                {isContactStep ? (
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={handleSubmit}
                    disabled={!contactInfo.name || !contactInfo.phone}
                    className="flex-1"
                  >
                    ثبت درخواست
                    <Sparkles className="w-5 h-5" />
                  </Button>
                ) : (
                  <Button
                    variant="cta"
                    size="lg"
                    onClick={handleNext}
                    disabled={!answers[currentStep]}
                    className="flex-1"
                  >
                    بعدی
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConsultantSection;

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { aiModels } from "@/data/aiModels";
import { products } from "@/data/products";
import AIModelCard from "@/components/AIModelCard";
import ProductCard from "@/components/ProductCard";
import SplashScreen from "@/components/SplashScreen";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import YinYang from "@/components/YinYang";
import { Bot, Leaf, ArrowDown, Sparkles } from "lucide-react";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isNavOpen, setIsNavOpen] = useState(false);

  useEffect(() => {
    // Check if splash was already shown this session
    const splashShown = sessionStorage.getItem("splashShown");
    if (splashShown) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashComplete = () => {
    sessionStorage.setItem("splashShown", "true");
    setShowSplash(false);
  };

  return (
    <>
      {/* Splash Screen */}
      <AnimatePresence>
        {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      </AnimatePresence>

      {/* Navigation Drawer */}
      <NavigationDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />

      {/* Main App */}
      <AnimatePresence>
        {!showSplash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen bg-background"
          >
            <Header onMenuClick={() => setIsNavOpen(true)} />

            <main className="pb-20 safe-bottom">
              {/* Hero Section */}
              <section className="relative overflow-hidden">
                <div className="absolute inset-0 zen-gradient opacity-60" />
                <div className="relative px-4 py-12 md:py-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-center"
                  >
                    <div className="flex justify-center mb-6">
                      <YinYang size={80} />
                    </div>
                    <h1 className="font-display text-3xl md:text-4xl font-semibold text-charcoal">
                      Your Health Journey
                      <br />
                      <span className="text-primary">Starts Here</span>
                    </h1>
                    <p className="mt-4 text-muted-foreground max-w-md mx-auto">
                      AI-powered wellness guidance and premium health products, 
                      designed for holistic well-being.
                    </p>
                  </motion.div>
                </div>
              </section>

              {/* AI Doctors Section */}
              <section className="px-4 py-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Talk to AI Doctors
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 max-w-lg">
                    Explore our AI-powered health assistants. Each is designed for education 
                    and guidance—not emergency care. Choose a specialist to begin your journey.
                  </p>
                </motion.div>

                <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ WebkitOverflowScrolling: 'touch' }}>
                  {aiModels.map((model, index) => (
                    <div key={model.id} className="flex-shrink-0 w-[280px] snap-start">
                      <AIModelCard model={model} index={index} />
                    </div>
                  ))}
                </div>

                {/* Scroll indicator */}
                <motion.div
                  className="flex flex-col items-center mt-12 mb-8"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-sm text-muted-foreground mb-2">Explore our products</p>
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowDown className="w-5 h-5 text-primary" />
                  </motion.div>
                </motion.div>
              </section>

              {/* Products Section */}
              <section className="px-4 py-8 bg-gradient-to-b from-transparent to-muted/30">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="mb-6"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-earth flex items-center justify-center">
                      <Leaf className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h2 className="font-display text-2xl font-semibold text-foreground">
                      Wellness Products
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm mt-2 max-w-lg">
                    Curated health and wellness products rooted in traditional wisdom 
                    and modern science.
                  </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>
              </section>

              {/* Bottom CTA */}
              <section className="px-4 py-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass-card rounded-3xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-2xl gradient-gold flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-6 h-6 text-charcoal" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Your Wellness Companion
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto">
                    ROOT_2HEALTH combines AI intelligence with holistic products 
                    to support your complete health journey.
                  </p>
                </motion.div>
              </section>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;

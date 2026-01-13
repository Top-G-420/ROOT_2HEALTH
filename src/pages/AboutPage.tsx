import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Heart, Leaf, Globe, Shield } from "lucide-react";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import YinYang from "@/components/YinYang";

const AboutPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const values = [
    {
      icon: Heart,
      title: "Holistic Wellness",
      description: "We believe true health encompasses mind, body, and spirit. Our approach integrates ancient wisdom with modern innovation."
    },
    {
      icon: Leaf,
      title: "Natural Philosophy",
      description: "Nature provides the best solutions for human health. We source and develop products that honor this truth."
    },
    {
      icon: Globe,
      title: "Accessible Care",
      description: "Everyone deserves access to quality health guidance. Our AI assistants break down barriers to wellness education."
    },
    {
      icon: Shield,
      title: "Trusted Guidance",
      description: "We prioritize transparency and safety. Our AI models are designed to inform, never to replace professional medical care."
    }
  ];

  return (
    <>
      <NavigationDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div className="min-h-screen bg-background">
        <Header onMenuClick={() => setIsNavOpen(true)} />

        <main className="pb-12 safe-bottom">
          {/* Back button */}
          <div className="px-4 py-4">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to home
            </Link>
          </div>

          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 pb-8 text-center"
          >
            <YinYang size={100} className="mx-auto mb-6" />
            <h1 className="font-display text-3xl font-semibold text-foreground">
              About ROOT<span className="text-primary">_</span>2HEALTH
            </h1>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto leading-relaxed">
              We're bridging ancient wellness wisdom with cutting-edge AI technology 
              to create a new paradigm in holistic health.
            </p>
          </motion.section>

          {/* Mission */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-8"
          >
            <div className="glass-card rounded-3xl p-6">
              <h2 className="font-display text-xl font-semibold text-foreground mb-3">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                ROOT_2HEALTH exists to democratize wellness education and provide 
                access to premium health products that align with nature's intelligence. 
                We believe that everyone deserves the knowledge and tools to take 
                control of their health journey.
              </p>
            </div>
          </motion.section>

          {/* Values */}
          <section className="px-4 pb-8">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="font-display text-xl font-semibold text-foreground mb-4"
            >
              Our Values
            </motion.h2>
            <div className="space-y-4">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="glass-card rounded-2xl p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{value.title}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="px-4"
          >
            <div className="bg-muted/50 rounded-2xl p-5 text-center">
              <p className="text-xs text-muted-foreground">
                ROOT_2HEALTH AI assistants are for educational purposes only and 
                do not provide medical diagnoses, treatment recommendations, or 
                emergency care. Always consult qualified healthcare professionals 
                for medical advice.
              </p>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default AboutPage;

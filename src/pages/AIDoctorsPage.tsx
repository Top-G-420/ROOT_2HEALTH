import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { aiModels } from "@/data/aiModels";
import AIModelCard from "@/components/AIModelCard";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";

const AIDoctorsPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

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

          {/* Header */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 pb-6"
          >
            <h1 className="font-display text-3xl font-semibold text-foreground">
              AI Doctors
            </h1>
            <p className="mt-2 text-muted-foreground max-w-md">
              Explore our collection of AI-powered health assistants. 
              Each model specializes in different aspects of health education.
            </p>
          </motion.section>

          {/* Disclaimer */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-6"
          >
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-4">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Educational Use Only:</strong> These AI assistants 
                provide general health information and are not substitutes for professional 
                medical advice, diagnosis, or treatment.
              </p>
            </div>
          </motion.section>

          {/* Models Grid */}
          <section className="px-4 space-y-4">
            {aiModels.map((model, index) => (
              <AIModelCard key={model.id} model={model} index={index} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
};

export default AIDoctorsPage;

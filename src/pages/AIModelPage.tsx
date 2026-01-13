import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Bot, AlertTriangle, MessageCircle, Info, Sparkles } from "lucide-react";
import { getModelById } from "@/data/aiModels";
import ChatInterface from "@/components/ChatInterface";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import { useState } from "react";

const AIModelPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const model = getModelById(id || "");

  if (!model) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Model not found</h1>
          <Link to="/" className="text-primary mt-4 inline-block">
            Return home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <NavigationDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div className="min-h-screen bg-background">
        <Header onMenuClick={() => setIsNavOpen(true)} />

        <main className="pb-8 safe-bottom">
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

          {/* Model Header */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="px-4 pb-6"
          >
            <div className="flex items-start gap-4">
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${model.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
                <Bot className="w-8 h-8 text-white" />
              </div>
              <div>
                <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary">
                  {model.role}
                </span>
                <h1 className="mt-2 font-display text-2xl font-semibold text-foreground">
                  {model.name}
                </h1>
                <p className="mt-1 text-xs text-muted-foreground font-mono">
                  {model.fullName}
                </p>
              </div>
            </div>
          </motion.section>

          {/* Overview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-6"
          >
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Info className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">About this Model</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {model.description}
              </p>
              
              <div className="mt-4">
                <h3 className="text-sm font-medium text-foreground mb-2">Capabilities:</h3>
                <ul className="space-y-1.5">
                  {model.capabilities.map((cap, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <Sparkles className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.section>

          {/* Limitations */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 pb-6"
          >
            <div className="bg-destructive/5 border border-destructive/20 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="w-5 h-5 text-destructive" />
                <h2 className="font-semibold text-foreground">Important Limitations</h2>
              </div>
              <ul className="space-y-2">
                {model.limitations.map((lim, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive/50 mt-2 flex-shrink-0" />
                    {lim}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Conversation Starters */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 pb-6"
          >
            <div className="flex items-center gap-2 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              <h2 className="font-semibold text-foreground">Try asking...</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {model.conversationStarters.map((starter, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="px-4 py-2.5 text-sm text-left rounded-xl bg-muted hover:bg-muted/80 text-foreground transition-colors"
                >
                  "{starter}"
                </motion.button>
              ))}
            </div>
          </motion.section>

          {/* Chat Interface */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4"
          >
            <ChatInterface model={model} />
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default AIModelPage;

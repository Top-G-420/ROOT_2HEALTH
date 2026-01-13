import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Mail, Phone, Clock } from "lucide-react";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import { Button } from "@/components/ui/button";

const SupportPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleWhatsAppSupport = () => {
    const message = encodeURIComponent(
      "Hello ROOT_2HEALTH! I have a question about your services."
    );
    window.open(`https://wa.me/254725600710?text=${message}`, "_blank");
  };

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
            className="px-4 pb-8"
          >
            <h1 className="font-display text-3xl font-semibold text-foreground">
              Support
            </h1>
            <p className="mt-2 text-muted-foreground">
              We're here to help with any questions or concerns.
            </p>
          </motion.section>

          {/* WhatsApp CTA */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-8"
          >
            <div className="glass-card rounded-3xl p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-green-500 flex items-center justify-center">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h2 className="font-display text-xl font-semibold text-foreground">
                Chat with Us
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                The fastest way to reach our team
              </p>
              <Button
                onClick={handleWhatsAppSupport}
                className="mt-4 w-full py-5 rounded-xl bg-green-600 hover:bg-green-700 text-white"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Open WhatsApp
              </Button>
            </div>
          </motion.section>

          {/* Contact Info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 pb-8"
          >
            <h2 className="font-semibold text-foreground mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone / WhatsApp</p>
                  <p className="font-medium text-foreground">0725 600 710</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">support@root2health.com</p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Support Hours</p>
                  <p className="font-medium text-foreground">Mon - Sat: 8AM - 6PM EAT</p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* FAQ Preview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4"
          >
            <h2 className="font-semibold text-foreground mb-4">Common Questions</h2>
            <div className="space-y-3">
              <div className="glass-card rounded-2xl p-4">
                <h3 className="font-medium text-foreground text-sm">
                  How do I place an order?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Add products to your cart and click "Order via WhatsApp" to complete your purchase.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <h3 className="font-medium text-foreground text-sm">
                  Are the AI doctors real medical professionals?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  No, they are AI models trained for educational purposes only. Always consult real doctors for medical advice.
                </p>
              </div>
              <div className="glass-card rounded-2xl p-4">
                <h3 className="font-medium text-foreground text-sm">
                  What payment methods do you accept?
                </h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  We accept M-Pesa, bank transfers, and cash on delivery. Details provided via WhatsApp.
                </p>
              </div>
            </div>
          </motion.section>
        </main>
      </div>
    </>
  );
};

export default SupportPage;

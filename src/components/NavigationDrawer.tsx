import { motion, AnimatePresence } from "framer-motion";
import { X, Home, Bot, ShoppingBag, ShoppingCart, Info, MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import YinYang from "./YinYang";

interface NavigationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", path: "/", icon: Home },
  { label: "Talk to AI Doctors", path: "/ai-doctors", icon: Bot },
  { label: "Products", path: "/products", icon: ShoppingBag },
  { label: "Cart", path: "/cart", icon: ShoppingCart },
  { label: "About ROOT_2HEALTH", path: "/about", icon: Info },
  { label: "Support", path: "/support", icon: MessageCircle },
];

const NavigationDrawer = ({ isOpen, onClose }: NavigationDrawerProps) => {
  const location = useLocation();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 bg-charcoal/30 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer */}
          <motion.nav
            className="fixed left-0 top-0 bottom-0 z-50 w-80 max-w-[85vw] glass-panel flex flex-col"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border/50">
              <div className="flex items-center gap-3">
                <YinYang size={36} />
                <span className="font-display text-lg font-semibold">
                  ROOT<span className="text-primary">_</span>2HEALTH
                </span>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-muted transition-colors"
              >
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 py-4 overflow-y-auto">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;

                return (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      to={item.path}
                      onClick={onClose}
                      className={`flex items-center gap-4 px-6 py-4 transition-all ${
                        isActive
                          ? "bg-primary/10 text-primary border-l-4 border-primary"
                          : "text-foreground hover:bg-muted border-l-4 border-transparent"
                      }`}
                    >
                      <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-muted-foreground"}`} />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border/50">
              <p className="text-xs text-muted-foreground text-center">
                Holistic Health & Wellness
              </p>
            </div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavigationDrawer;

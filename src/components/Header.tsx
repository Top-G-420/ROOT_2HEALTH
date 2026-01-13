import { Menu, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "@/contexts/CartContext";
import { motion } from "framer-motion";

interface HeaderProps {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: HeaderProps) => {
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <motion.header
      className="sticky top-0 z-30 glass-card border-b border-border/50 safe-top"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", damping: 20 }}
    >
      <div className="flex items-center justify-between px-4 py-3">
        <button
          onClick={onMenuClick}
          className="p-2 -ml-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-6 h-6 text-charcoal" />
        </button>

        <Link to="/" className="font-display text-xl font-semibold">
          ROOT<span className="text-primary">_</span>2HEALTH
        </Link>

        <Link
          to="/cart"
          className="relative p-2 -mr-2 rounded-xl hover:bg-muted transition-colors"
          aria-label="View cart"
        >
          <ShoppingCart className="w-6 h-6 text-charcoal" />
          {totalItems > 0 && (
            <motion.span
              className="absolute -top-0.5 -right-0.5 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-primary text-primary-foreground"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 500 }}
            >
              {totalItems}
            </motion.span>
          )}
        </Link>
      </div>
    </motion.header>
  );
};

export default Header;

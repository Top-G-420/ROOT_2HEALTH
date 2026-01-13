import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";

const CartPage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { items, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const generateWhatsAppMessage = () => {
    let message = "🌿 *ROOT_2HEALTH Order*\n\n";
    message += "Hi! I'd like to place an order:\n\n";
    
    items.forEach((item) => {
      message += `• ${item.name}\n`;
      message += `  Qty: ${item.quantity} × ${formatPrice(item.price)}\n`;
      message += `  Subtotal: ${formatPrice(item.price * item.quantity)}\n\n`;
    });
    
    message += `━━━━━━━━━━━━━━━━━━━━━\n`;
    message += `*Total: ${formatPrice(getTotalPrice())}*\n\n`;
    message += "Please confirm availability and payment details. Thank you! 🙏";
    
    return encodeURIComponent(message);
  };

  const handleWhatsAppOrder = () => {
    const phoneNumber = "254725600710"; // Remove leading 0, add country code
    const message = generateWhatsAppMessage();
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <>
      <NavigationDrawer isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
      <div className="min-h-screen bg-background">
        <Header onMenuClick={() => setIsNavOpen(true)} />

        <main className="pb-32 safe-bottom">
          {/* Back button */}
          <div className="px-4 py-4">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Continue shopping
            </Link>
          </div>

          {/* Header */}
          <section className="px-4 pb-6">
            <h1 className="font-display text-2xl font-semibold text-foreground">
              Your Cart
            </h1>
            <p className="mt-1 text-muted-foreground text-sm">
              {items.length === 0
                ? "Your cart is empty"
                : `${items.length} item${items.length > 1 ? "s" : ""} in your cart`}
            </p>
          </section>

          {items.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="px-4 py-12 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <ShoppingBag className="w-10 h-10 text-muted-foreground" />
              </div>
              <h2 className="text-lg font-semibold text-foreground">No items yet</h2>
              <p className="mt-2 text-muted-foreground">
                Start exploring our wellness products
              </p>
              <Link to="/">
                <Button className="mt-6 rounded-xl gradient-primary text-primary-foreground">
                  Browse Products
                </Button>
              </Link>
            </motion.div>
          ) : (
            <>
              {/* Cart Items */}
              <section className="px-4 space-y-4">
                <AnimatePresence mode="popLayout">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      className="glass-card rounded-2xl p-4"
                    >
                      <div className="flex gap-4">
                        {/* Image placeholder */}
                        <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-sage/20 to-earth-light flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🌿</span>
                        </div>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-foreground line-clamp-2 text-sm">
                            {item.name}
                          </h3>
                          <p className="mt-1 text-primary font-semibold">
                            {formatPrice(item.price)}
                          </p>

                          {/* Quantity controls */}
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="font-medium w-6 text-center">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-muted/80 transition-colors"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-2 text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </section>

              {/* Order Summary */}
              <section className="px-4 mt-8">
                <div className="glass-card rounded-2xl p-5">
                  <h2 className="font-semibold text-foreground mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 text-sm">
                    {items.map((item) => (
                      <div key={item.id} className="flex justify-between text-muted-foreground">
                        <span>{item.name} × {item.quantity}</span>
                        <span>{formatPrice(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-xl font-bold text-primary">
                        {formatPrice(getTotalPrice())}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </>
          )}
        </main>

        {/* Fixed Bottom CTA */}
        {items.length > 0 && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border safe-bottom"
          >
            <Button
              onClick={handleWhatsAppOrder}
              className="w-full py-6 text-lg rounded-2xl bg-green-600 hover:bg-green-700 text-white"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Order via WhatsApp
            </Button>
            <p className="mt-2 text-xs text-center text-muted-foreground">
              You'll be redirected to WhatsApp to complete your order
            </p>
          </motion.div>
        )}
      </div>
    </>
  );
};

export default CartPage;

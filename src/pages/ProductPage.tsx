import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingCart, Leaf, Heart, BookOpen, Package, Check } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";
import { toast } from "sonner";

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { addToCart } = useCart();
  const product = getProductById(id || "");

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.name} added to cart`);
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-semibold">Product not found</h1>
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

        <main className="pb-24 safe-bottom">
          {/* Back button */}
          <div className="px-4 py-4">
            <Link
              to="/"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to products
            </Link>
          </div>

          {/* Product Image */}
          <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="px-4 pb-6"
          >
            <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-sage/20 to-earth-light rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-6xl">🌿</span>
                </div>
              </div>
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 text-sm font-medium rounded-full bg-gold text-charcoal">
                  Premium
                </span>
              </div>
            </div>
          </motion.section>

          {/* Product Info */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="px-4 pb-6"
          >
            <h1 className="font-display text-2xl font-semibold text-foreground">
              {product.name}
            </h1>
            <p className="mt-2 text-2xl font-bold text-primary">
              {formatPrice(product.price)}
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </motion.section>

          {/* Philosophy */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="px-4 pb-6"
          >
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Philosophy</h2>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {product.philosophy}
              </p>
            </div>
          </motion.section>

          {/* Ingredients / Materials */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="px-4 pb-6"
          >
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Leaf className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">
                  {product.id.includes("cup") ? "Materials & Technology" : "Ingredients"}
                </h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-sm rounded-full bg-muted text-muted-foreground"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {/* Benefits */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="px-4 pb-6"
          >
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Heart className="w-5 h-5 text-primary" />
                <h2 className="font-semibold text-foreground">Wellness Benefits</h2>
              </div>
              <ul className="space-y-2">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          {/* Specifications */}
          {product.specifications && (
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="px-4 pb-6"
            >
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Package className="w-5 h-5 text-primary" />
                  <h2 className="font-semibold text-foreground">Specifications</h2>
                </div>
                <ul className="space-y-2">
                  {product.specifications.map((spec, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      • {spec}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.section>
          )}
        </main>

        {/* Fixed Bottom CTA */}
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          className="fixed bottom-0 left-0 right-0 p-4 bg-background/80 backdrop-blur-lg border-t border-border safe-bottom"
        >
          <Button
            onClick={handleAddToCart}
            className="w-full py-6 text-lg rounded-2xl gradient-primary text-primary-foreground"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            Add to Cart — {formatPrice(product.price)}
          </Button>
        </motion.div>
      </div>
    </>
  );
};

export default ProductPage;

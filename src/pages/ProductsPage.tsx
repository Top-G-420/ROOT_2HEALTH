import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import Header from "@/components/Header";
import NavigationDrawer from "@/components/NavigationDrawer";

const ProductsPage = () => {
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
              Wellness Products
            </h1>
            <p className="mt-2 text-muted-foreground max-w-md">
              Curated health and wellness products rooted in traditional wisdom 
              and modern science.
            </p>
          </motion.section>

          {/* Products Grid */}
          <section className="px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {products.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ProductsPage;

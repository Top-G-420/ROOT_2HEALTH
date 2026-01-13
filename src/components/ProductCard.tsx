import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { DetailedProduct } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

interface ProductCardProps {
  product: DetailedProduct;
  index: number;
}

const ProductCard = ({ product, index }: ProductCardProps) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
    toast.success(`${product.name} added to cart`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-KE", {
      style: "currency",
      currency: "KES",
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
    >
      <Link
        to={`/product/${product.id}`}
        className="block glass-card rounded-2xl overflow-hidden transition-shadow hover:shadow-soft-lg"
      >
        {/* Image placeholder */}
        <div className="aspect-square bg-gradient-to-br from-sage/20 to-earth-light relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-3xl">🌿</span>
            </div>
          </div>
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gold/90 text-charcoal">
              Premium
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-foreground line-clamp-2">{product.name}</h3>
          <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-lg font-bold text-primary">{formatPrice(product.price)}</span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="rounded-xl gradient-primary text-primary-foreground"
            >
              <ShoppingCart className="w-4 h-4 mr-1.5" />
              Add
            </Button>
          </div>

          <div className="mt-3 flex items-center text-sm font-medium text-muted-foreground">
            <span>View details</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;

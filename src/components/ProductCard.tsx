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
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden rounded-2xl bg-gradient-to-br from-sage/20 to-earth-light">
          <img
            src={product.image} // <-- actual product image from public folder
            alt={product.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback if image fails
              e.currentTarget.src = "/products/placeholder.jpg";
            }}
          />

          {/* Premium badge */}
          <div className="absolute top-3 right-3">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-gold/90 text-charcoal">
              Premium
            </span>
          </div>
        </div>

        {/* Product Content */}
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

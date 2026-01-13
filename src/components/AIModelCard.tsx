import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Bot } from "lucide-react";
import { AIModel } from "@/data/aiModels";

interface AIModelCardProps {
  model: AIModel;
  index: number;
}

const AIModelCard = ({ model, index }: AIModelCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
    >
      <Link
        to={`/ai-doctor/${model.id}`}
        className="block glass-card rounded-2xl p-5 transition-shadow hover:shadow-soft-lg"
      >
        <div className="flex items-start gap-4">
          {/* Icon */}
          <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${model.color} flex items-center justify-center shadow-soft flex-shrink-0`}>
            <Bot className="w-7 h-7 text-white" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-2">
              <h3 className="font-semibold text-foreground truncate">{model.name}</h3>
              <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary flex-shrink-0">
                {model.role}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">
              {model.description}
            </p>
            <div className="mt-3 flex items-center text-sm font-medium text-primary">
              <span>Start conversation</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default AIModelCard;

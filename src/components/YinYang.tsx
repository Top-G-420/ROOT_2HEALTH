import { motion } from "framer-motion";

interface YinYangProps {
  size?: number;
  className?: string;
}

const YinYang = ({ size = 120, className = "" }: YinYangProps) => {
  return (
    <motion.div
      className={`relative ${className}`}
      style={{ width: size, height: size }}
      animate={{ rotate: 360 }}
      transition={{
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
        {/* Main circle background */}
        <circle cx="50" cy="50" r="48" fill="hsl(var(--charcoal))" />
        
        {/* White half */}
        <path
          d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2"
          fill="hsl(var(--cream))"
        />
        
        {/* Small circles */}
        <circle cx="50" cy="26" r="7" fill="hsl(var(--charcoal))" />
        <circle cx="50" cy="74" r="7" fill="hsl(var(--cream))" />
        
        {/* Outer ring glow effect */}
        <circle
          cx="50"
          cy="50"
          r="48"
          fill="none"
          stroke="hsl(var(--gold) / 0.3)"
          strokeWidth="1"
        />
      </svg>
      
      {/* Breathing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(var(--gold) / 0.2) 0%, transparent 70%)",
        }}
        animate={{
          opacity: [0.4, 0.8, 0.4],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );
};

export default YinYang;

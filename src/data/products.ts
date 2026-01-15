import { Product } from "@/contexts/CartContext";

export interface DetailedProduct extends Product {
  philosophy: string;
  ingredients: string[];
  benefits: string[];
  useCases: string[];
  specifications?: string[];
}

export const products: DetailedProduct[] = [
  {
    id: "fohow-garlic-oil",
    name: "FOHOW Garlic Oil Soft Capsules",
    price: 4500,
    image: "https://github.com/Top-G-420/ROOT_2HEALTH/blob/main/public/products/garlic-oil.JPG?raw=true",
    description: "Premium garlic oil capsules designed to support cardiovascular wellness and immune function through the power of nature.",
    philosophy: "Drawing from centuries of traditional wisdom, FOHOW Garlic Oil Soft Capsules embody the belief that nature provides the most potent solutions for human health. Garlic has been revered across cultures for its remarkable properties, and we've captured its essence in a convenient, odorless form.",
    ingredients: [
      "Pure Garlic Oil Extract",
      "Soybean Oil (carrier)",
      "Gelatin (capsule)",
      "Glycerin",
      "Purified Water"
    ],
    benefits: [
      "Supports healthy cardiovascular function",
      "Promotes immune system resilience",
      "Aids in maintaining healthy cholesterol levels",
      "Provides antioxidant support",
      "Supports overall vitality and wellness"
    ],
    useCases: [
      "Daily wellness routine supplementation",
      "Seasonal immune support",
      "Cardiovascular health maintenance",
      "General antioxidant support",
      "Holistic health regimen enhancement"
    ],
    specifications: [
      "60 soft capsules per bottle",
      "500mg per capsule",
      "Suggested: 2 capsules daily with meals"
    ]
  },
  {
    id: "fohow-h2-cup",
    name: "FOHOW Yang Sheng H₂ Cup",
    price: 12500,
    image: "/products/h2-cup.jpg",
    description: "Advanced hydrogen-rich water generator that transforms ordinary water into antioxidant-rich hydrogen water for optimal hydration.",
    philosophy: "The FOHOW Yang Sheng H₂ Cup represents the perfect harmony between ancient wellness principles and modern technology. 'Yang Sheng' means 'nurturing life' in traditional Chinese philosophy, and this device embodies that principle by infusing your water with molecular hydrogen—one of the most powerful antioxidants known to science.",
    ingredients: [
      "SPE/PEM Electrolysis Technology",
      "Food-grade Platinum-Titanium Electrodes",
      "BPA-free Tritan Body",
      "Rechargeable Lithium Battery",
      "USB-C Charging System"
    ],
    benefits: [
      "Creates hydrogen-rich antioxidant water",
      "Supports cellular hydration",
      "Promotes energy and vitality",
      "Aids in reducing oxidative stress",
      "Portable wellness companion"
    ],
    useCases: [
      "Daily hydration enhancement",
      "Pre and post-workout hydration",
      "Travel-friendly wellness tool",
      "Office desk companion",
      "Morning wellness ritual"
    ],
    specifications: [
      "350ml capacity",
      "3-minute hydrogen generation cycle",
      "USB-C rechargeable",
      "10-15 uses per charge",
      "1000+ ppb hydrogen concentration"
    ]
  }
];

export const getProductById = (id: string): DetailedProduct | undefined => {
  return products.find((product) => product.id === id);
};

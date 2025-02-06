import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sun, Moon } from 'lucide-react';

interface SelfLoveMessage {
  icon: JSX.Element;
  title: string;
  message: string;
  quote: string;
}

const messages: SelfLoveMessage[] = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Self Worth",
    message: "You are worthy of love, respect, and happiness exactly as you are.",
    quote: "Your worth is not measured by productivity, but by your existence."
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "Inner Beauty",
    message: "Your uniqueness is your superpower. Embrace your authentic self.",
    quote: "You are not a drop in the ocean, you are the entire ocean in a drop."
  },
  {
    icon: <Sun className="w-8 h-8" />,
    title: "Self Love",
    message: "Practice self-compassion and celebrate your journey of growth.",
    quote: "The relationship with yourself sets the tone for every other relationship."
  },
  {
    icon: <Moon className="w-8 h-8" />,
    title: "Inner Peace",
    message: "Find peace in being yourself. You are enough, just as you are.",
    quote: "Peace comes from within. Do not seek it without."
  }
];

export function SelfLoveCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {messages.map((item, index) => (
        <motion.div
          key={index}
          className="relative group cursor-pointer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
          <motion.div
            className="relative bg-slate-900/90 rounded-xl p-8 h-full border border-white/10 overflow-hidden"
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              initial={{ y: 0 }}
              whileHover={{ y: -120 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="text-pink-500 mb-4">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <div className="w-12 h-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full mb-4"></div>
              <p className="text-white/90 text-lg leading-relaxed mb-4">{item.message}</p>
              <div className="w-full p-4 bg-white/5 rounded-lg">
                <p className="text-white/80 text-sm italic">"{item.quote}"</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
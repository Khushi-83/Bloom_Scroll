import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Clock, Focus, Smartphone } from 'lucide-react';

interface Tip {
  icon: JSX.Element;
  title: string;
  description: string;
}

const tips: Tip[] = [
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Set Time Limits",
    description: "Use app timers to limit your scrolling sessions to specific durations."
  },
  {
    icon: <Brain className="w-6 h-6" />,
    title: "Practice Mindfulness",
    description: "Before opening social media, take three deep breaths and set an intention."
  },
  {
    icon: <Focus className="w-6 h-6" />,
    title: "Focus Periods",
    description: "Designate specific times for checking social media, avoiding random scrolling."
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Digital Detox",
    description: "Take regular breaks from your devices to reset your mind and focus."
  }
];

export function MindfulnessCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {tips.map((tip, index) => (
        <motion.div
          key={index}
          className="group relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, rotateY: 10 }}
          style={{ perspective: "1000px" }}
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
          <div className="relative bg-slate-900 rounded-lg p-6 ring-1 ring-white/10 leading-none flex items-start gap-4">
            <div className="p-2 bg-slate-800 rounded-lg text-pink-500">
              {tip.icon}
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">{tip.title}</h3>
              <p className="text-slate-300 text-sm">{tip.description}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
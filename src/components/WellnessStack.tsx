import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Cog as Yoga, Dumbbell, Brain, Smile } from 'lucide-react';

interface WellnessTip {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
}

const wellnessTips: WellnessTip[] = [
  {
    icon: <Yoga className="w-8 h-8" />,
    title: "Morning Yoga",
    description: "Start your day with 10 minutes of gentle stretching and breathing exercises.",
    color: "from-blue-800 to-cyan-600" // Sapphire theme
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Quick Workouts",
    description: "Take short exercise breaks between work sessions to stay energized.",
    color: "from-emerald-800 to-green-600" // Emerald theme
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "Mindful Breaks",
    description: "Practice 5-minute meditation sessions to clear your mind.",
    color: "from-violet-800 to-purple-600" // Amethyst theme
  },
  {
    icon: <Smile className="w-8 h-8" />,
    title: "Positive Affirmations",
    description: "Repeat empowering statements to boost your mental well-being.",
    color: "from-rose-800 to-pink-600" // Ruby theme
  }
];

export function WellnessStack() {
  const [selectedCard, setSelectedCard] = React.useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-4">
      {wellnessTips.map((tip, index) => (
        <motion.div
          key={index}
          layoutId={`card-${index}`}
          onClick={() => setSelectedCard(index)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="cursor-pointer group"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`bg-gradient-to-r ${tip.color} p-6 rounded-xl shadow-xl`}>
            <div className="bg-white/20 rounded-full p-3 w-fit mb-4">
              {tip.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{tip.title}</h3>
            <p className="text-white/80">{tip.description}</p>
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedCard !== null && (
          <motion.div
            layoutId={`card-${selectedCard}`}
            className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black/50"
            onClick={() => setSelectedCard(null)}
          >
            <motion.div
              className={`bg-gradient-to-r ${wellnessTips[selectedCard].color} p-8 rounded-xl shadow-2xl max-w-lg w-full`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white/20 rounded-full p-4 w-fit mb-6">
                {wellnessTips[selectedCard].icon}
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">
                {wellnessTips[selectedCard].title}
              </h2>
              <p className="text-lg text-white/90">
                {wellnessTips[selectedCard].description}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
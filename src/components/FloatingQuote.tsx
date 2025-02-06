import React from "react";
import { motion, useAnimation } from "framer-motion";

interface FloatingQuoteProps {
  quote: string;
  author: string;
  delay: number;
}

export function FloatingQuote({ quote, author, delay }: FloatingQuoteProps) {
  const controls = useAnimation();
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Define the floating region (center 70% of the screen)
  const region = {
    x: {
      min: dimensions.width * 0.15,
      max: dimensions.width * 0.85,
    },
    y: {
      min: dimensions.height * 0.15,
      max: dimensions.height * 0.85,
    },
  };

  // Random initial position within the region
  const initialX = Math.random() * (region.x.max - region.x.min) + region.x.min;
  const initialY = Math.random() * (region.y.max - region.y.min) + region.y.min;

  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  React.useEffect(() => {
    const animate = async () => {
      while (true) {
        const newX =
          Math.random() * (region.x.max - region.x.min) + region.x.min;
        const newY =
          Math.random() * (region.y.max - region.y.min) + region.y.min;

        await controls.start({
          x: newX,
          y: newY,
          transition: {
            duration: 8,
            ease: "easeInOut",
          },
        });
      }
    };

    animate();
  }, [controls, region]);

  return (
    <motion.div
      initial={{
        opacity: 0.9,
        x: initialX,
        y: initialY,
        scale: 1,
      }}
      animate={controls}
      style={{
        position: "fixed",
        zIndex: 20, // Ensure it's above the video background
        opacity: 1,
      }}
      className="pointer-events-none"
    >
      <div className="bg-white/20 backdrop-blur-lg rounded-xl p-6 shadow-lg border border-white/30 max-w-sm text-white">
        <p className="text-lg italic mb-3 font-serif">"{quote}"</p>
        <p className="text-sm text-right">- {author}</p>
      </div>
    </motion.div>
  );
}

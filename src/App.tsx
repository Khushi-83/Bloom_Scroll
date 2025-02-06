import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Target, Shield, Star, ChevronRight, LineChart } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './components/ui/hover-card';
import { FloatingQuote } from './components/FloatingQuote';
import { ProgressGraph } from './components/ProgressGraph';
import { MindfulnessCard } from './components/MindfulnessCard';
import { WellnessStack } from './components/WellnessStack';
import { SelfLoveCard } from './components/SelfLoveCard';
import { Footer } from './components/Footer';

const motivationalQuotes = [
  { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D1F] text-white relative overflow-hidden">
      {/* Hero Section with Video Background */}
      <div className="relative h-screen">
        

        {/* Floating Quotes */}
        {/*{motivationalQuotes.map((quote, index) => (
  <FloatingQuote
    key={index}
    quote={quote.quote}
    author={quote.author}
    delay={index * 3}
    className="absolute z-20 text-white bg-black/50 px-4 py-2 rounded-xl shadow-lg backdrop-blur-md"
  />
))} */}


        <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl"
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-lg px-6 py-3 rounded-full mb-8"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5 text-pink-400" />
              <span className="text-lg font-medium">Welcome to Bloom Scroll</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 text-transparent bg-clip-text"
            >
              Transform Your Digital Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
            >
              Discover mindful scrolling, track your progress, and cultivate digital well-being
              with our innovative tools and guidance.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full shadow-lg shadow-pink-500/25"
                >
                  Start Your Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 text-white px-8 py-6 text-lg h-auto rounded-full"
                >
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Progress Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mb-20"
        >
          <ProgressGraph />
        </motion.div>
      </section>

      {/* Mindful Scrolling Tips */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Mindful Scrolling Tips
          </h2>
          <p className="text-xl text-white/70">Transform your relationship with social media</p>
        </motion.div>
        <MindfulnessCard />
      </section>

      {/* Wellness Stack */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-teal-400 text-transparent bg-clip-text">
            Wellness Journey
          </h2>
          <p className="text-xl text-white/70">Discover practices for mind and body wellness</p>
        </motion.div>
        <WellnessStack />
      </section>

      {/* Self Love Cards */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
            Embrace Your Journey
          </h2>
          <p className="text-xl text-white/70">Cultivate self-love and inner peace</p>
        </motion.div>
        <SelfLoveCard />
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-r from-pink-500/20 to-purple-500/20 p-12 rounded-2xl relative overflow-hidden backdrop-blur-xl"
        >
          <div className="relative z-10">
            <Star className="w-12 h-12 text-pink-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-400 text-transparent bg-clip-text">
              Ready to Transform Your Digital Life?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join Bloom Scroll today and discover a more mindful way to engage with technology.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:opacity-90 text-white px-8 py-6 text-lg h-auto rounded-full shadow-lg shadow-pink-500/25"
              >
                Begin Your Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
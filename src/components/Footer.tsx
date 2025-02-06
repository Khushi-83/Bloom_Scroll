import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Twitter, Instagram, Facebook, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900/50 backdrop-blur-xl border-t border-white/10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-pink-500/10"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white mb-4">Bloom Scroll</h3>
            <p className="text-white/70">
              Transform your digital life with mindful scrolling and personal growth.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Features', 'Testimonials', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Resources</h4>
            <ul className="space-y-2">
              {['Blog', 'Guides', 'Support', 'FAQ'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-pink-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect</h4>
            <div className="flex space-x-4">
              {[Twitter, Instagram, Facebook, Mail].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            © 2025 Bloom Scroll. All rights reserved.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="text-white/70 hover:text-pink-400 text-sm">Privacy Policy</a>
            <a href="#" className="text-white/70 hover:text-pink-400 text-sm">Terms of Service</a>
            <motion.div
              className="flex items-center text-pink-400 text-sm"
              whileHover={{ scale: 1.1 }}
            >
              Made with <Heart className="w-4 h-4 mx-1 text-pink-500" /> by Khushi Sinha
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
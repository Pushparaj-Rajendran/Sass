import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-500 to-cyan-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Gradient Mesh Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 mb-8"
            animate={{ y: [-2, 2] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
          >
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-sm text-gray-200">AI-Powered WhatsApp Automation</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent mb-6 leading-tight">
            Automate WhatsApp
            <br />
            <span className="bg-gradient-to-r from-purple-500 to-cyan-400 bg-clip-text text-transparent">
              Like Never Before
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform chaotic customer messages into organized revenue streams with AI-powered automation
          </p>

          <motion.button
            className="group relative px-12 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white font-semibold text-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-pink-500/20 blur-xl group-hover:blur-2xl transition-all duration-300" />
            <span className="relative z-10 flex items-center">
              Start Your Premium Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-pink-500 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-1000" />
          </motion.button>
        </motion.div>

        {/* 3D Dashboard Mockup */}
        <motion.div
          className="relative mt-20"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            className="relative max-w-5xl mx-auto"
            animate={{ 
              rotateY: [-2, 2],
              rotateX: [-1, 1] 
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-8 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-3xl" />
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />
              
              {/* Mock Dashboard Content */}
              <div className="relative z-10 space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-white">WhatsApp CRM Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gradient-to-br from-purple-500/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-purple-500/30">
                    <div className="text-3xl font-bold text-white">₹2.4M</div>
                    <div className="text-purple-300">Revenue Generated</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-blue-500/30">
                    <div className="text-3xl font-bold text-white">15,420</div>
                    <div className="text-blue-300">Messages Automated</div>
                  </div>
                  <div className="bg-gradient-to-br from-cyan-500/20 to-transparent backdrop-blur-sm rounded-xl p-6 border border-cyan-500/30">
                    <div className="text-3xl font-bold text-white">98.2%</div>
                    <div className="text-cyan-300">Response Rate</div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 rounded-xl p-6 backdrop-blur-sm border border-gray-700/50">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                    <div>
                      <div className="text-white font-medium">Rajesh Kumar</div>
                      <div className="text-gray-400 text-sm">Customer inquiry handled automatically</div>
                    </div>
                  </div>
                  <div className="text-gray-300">AI Response: "Thank you for your interest! Our premium package includes..."</div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
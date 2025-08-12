import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Phone, MapPin, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 pt-20 pb-10 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              className="flex items-center mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                WhatsApp CRM Pro
              </h3>
            </motion.div>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-md">
              Transform your customer communication with AI-powered WhatsApp automation. 
              Trusted by 10,000+ businesses across India.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {[
                { icon: Twitter, href: '#', color: 'from-blue-400 to-blue-600' },
                { icon: Linkedin, href: '#', color: 'from-blue-600 to-blue-800' },
                { icon: Instagram, href: '#', color: 'from-pink-500 to-purple-600' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['Features', 'Pricing', 'Testimonials', 'Documentation', 'API Reference', 'Support'].map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href="#"
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 flex items-center group"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full mr-3 group-hover:bg-cyan-400 transition-colors duration-300"></span>
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold text-white mb-6">Contact</h4>
            <div className="space-y-4">
              {[
                { icon: Mail, text: 'hello@whatsappcrm.pro', color: 'text-cyan-400' },
                { icon: Phone, text: '+91 98765 43210', color: 'text-purple-400' },
                { icon: MapPin, text: 'Mumbai, Maharashtra, India', color: 'text-pink-400' }
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  className="flex items-center text-gray-400"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <contact.icon className={`w-5 h-5 ${contact.color} mr-3 flex-shrink-0`} />
                  <span className="hover:text-white transition-colors duration-300">
                    {contact.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2024 WhatsApp CRM Pro. All rights reserved.
          </div>
          
          <div className="flex space-x-6 text-sm">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-full border border-purple-500/30">
            <span className="text-cyan-400 font-semibold mr-2">Ready to transform your business?</span>
            <motion.button
              className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full text-white font-medium hover:from-purple-500 hover:to-cyan-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

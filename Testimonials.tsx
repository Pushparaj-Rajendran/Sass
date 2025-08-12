import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Arjun Sharma',
    company: 'TechnovaTech Solutions',
    role: 'CEO',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'This WhatsApp CRM transformed our customer service. We went from 60% to 98% response rate in just 2 months. The AI responses are so natural, customers can\'t tell the difference.',
    rating: 5
  },
  {
    name: 'Priya Patel',
    company: 'Mumbai Fashion House',
    role: 'Marketing Director',
    image: 'https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Revenue increased by 400% after implementing this system. The automation handles our peak shopping seasons flawlessly. Best investment we\'ve made for our business.',
    rating: 5
  },
  {
    name: 'Rajesh Kumar',
    company: 'Delhi Real Estate Pro',
    role: 'Founder',
    image: 'https://images.pexels.com/photos/2102415/pexels-photo-2102415.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Managing 500+ property inquiries daily was impossible before this. Now our AI handles initial screening and qualification automatically. Sales team productivity increased 3x.',
    rating: 5
  },
  {
    name: 'Sneha Gupta',
    company: 'Bangalore EdTech Hub',
    role: 'Operations Head',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    content: 'Student inquiries are handled 24/7 now. Our enrollment rate doubled because we never miss a potential student inquiry. The analytics help us optimize our courses too.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-800" />
      
      {/* Floating Background Elements */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Success Stories
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how businesses across India are transforming their customer communication
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Glassmorphism Card */}
              <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border border-white/20 p-8 h-full transition-all duration-300 group-hover:border-white/40">
                
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000" />
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <Quote className="w-8 h-8 text-purple-400 mb-6" />
                  
                  {/* Content */}
                  <p className="text-gray-200 text-lg leading-relaxed mb-8">
                    "{testimonial.content}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 10 }}
                    />
                    <div className="ml-4">
                      <div className="text-white font-semibold">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Particle */}
                <motion.div
                  className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.7,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 backdrop-blur-xl rounded-3xl border border-purple-500/20 p-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                10,000+
              </motion.div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                500M+
              </motion.div>
              <div className="text-gray-300">Messages Processed</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
              >
                4.9/5
              </motion.div>
              <div className="text-gray-300">Average Rating</div>
            </div>
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
              >
                99.9%
              </motion.div>
              <div className="text-gray-300">Uptime</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
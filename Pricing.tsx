import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap } from 'lucide-react';

const pricingPlans = [
  {
    name: 'Professional',
    price: '5,999',
    period: 'month',
    popular: false,
    description: 'Perfect for growing businesses',
    features: [
      'Up to 10,000 messages/month',
      'AI-powered responses',
      'Basic analytics',
      'WhatsApp Business API',
      'Email support',
      '99.5% uptime SLA'
    ]
  },
  {
    name: 'Enterprise',
    price: '15,999',
    period: 'month',
    popular: true,
    description: 'For large-scale operations',
    features: [
      'Unlimited messages',
      'Advanced AI with custom training',
      'Real-time analytics & reporting',
      'Multi-channel integration',
      '24/7 priority support',
      '99.9% uptime SLA',
      'Custom integrations',
      'Dedicated account manager'
    ]
  }
];

const Pricing = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 to-slate-900" />
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(147, 51, 234, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
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
            Premium Pricing
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Enterprise-grade solutions with transparent, value-driven pricing
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`group relative ${plan.popular ? 'lg:scale-105' : ''}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <motion.div
                    className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full text-white font-semibold text-sm flex items-center"
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(236, 72, 153, 0.3)',
                        '0 0 40px rgba(236, 72, 153, 0.6)',
                        '0 0 20px rgba(236, 72, 153, 0.3)',
                      ]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                  >
                    <Star className="w-4 h-4 mr-1" />
                    Most Popular
                  </motion.div>
                </div>
              )}

              {/* Pricing Card */}
              <div className={`relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl border ${plan.popular ? 'border-purple-500/50' : 'border-white/20'} p-8 h-full transition-all duration-300 group-hover:border-white/40`}>
                
                {/* Glow Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${plan.popular ? 'from-purple-500/30 to-pink-500/30' : 'from-blue-500/20 to-cyan-500/20'} rounded-3xl blur opacity-0 group-hover:opacity-100 transition duration-1000`} />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-400">{plan.description}</p>
                    </div>
                    {plan.popular && <Zap className="w-8 h-8 text-yellow-400" />}
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        ₹{plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-center text-gray-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="flex-shrink-0 w-5 h-5 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mr-3">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    className={`w-full py-4 rounded-2xl font-semibold text-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-500 hover:to-pink-500'
                        : 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Start {plan.name} Plan
                  </motion.button>
                </div>

                {/* Corner Accent */}
                <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${plan.popular ? 'from-purple-500/20 to-pink-500/20' : 'from-blue-500/20 to-cyan-500/20'} rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-6">
            Need a custom solution? Our enterprise team is ready to help.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-gray-700 to-gray-600 rounded-full text-white font-medium hover:from-gray-600 hover:to-gray-500 transition-all duration-300">
            Contact Sales Team
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ShieldCheck, Zap, Globe, ShoppingCart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-4 py-2 rounded-full mb-6"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-ping"></span>
              <span className="text-blue-400 text-sm font-medium">Trusted by 100+ customers</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Hyoukall <br />
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Digital Store
              </span>
            </h1>
            
            <p className="text-slate-400 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
              Premium Digital Services & Accounts Provider. Get high-quality VPS, RDP, Hosting Panels, and Premium Apps at the best prices.
            </p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.a
                href="#products"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center shadow-2xl shadow-blue-600/30 transition-all"
              >
                View Products
                <ChevronRight className="ml-2" size={20} />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 border border-slate-800 hover:border-blue-500/50 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center transition-all"
              >
                Contact Us
              </motion.a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">99.9%</span>
                <span className="text-slate-500 text-sm">Uptime</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">24/7</span>
                <span className="text-slate-500 text-sm">Support</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-2xl">Instant</span>
                <span className="text-slate-500 text-sm">Delivery</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl shadow-2xl">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: ShieldCheck, title: 'Secure', desc: 'Safe transactions' },
                  { icon: Zap, title: 'Fast', desc: 'Instant activation' },
                  { icon: Globe, title: 'Global', desc: 'Available worldwide' },
                  { icon: ShoppingCart, title: 'Easy', desc: 'Simple ordering' },
                ].map((item, i) => (
                  <div key={i} className="bg-slate-900/50 p-6 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all group">
                    <item.icon className="text-blue-500 mb-4 group-hover:scale-110 transition-transform" size={32} />
                    <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-500 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Decorative circles */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-indigo-500/20 rounded-full blur-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { categories, Category, Brand } from '../data/products';
import ProductCard from './ProductCard';
import { ArrowLeft, Smartphone, Cloud, Server, CreditCard, ChevronRight } from 'lucide-react';

const ProductGrid = () => {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);
  
  const iconMap = {
    Smartphone,
    Cloud,
    Server,
    CreditCard
  };

  const handleBack = () => {
    if (activeBrand) {
      setActiveBrand(null);
    } else if (activeCategory) {
      setActiveCategory(null);
    }
  };

  return (
    <section id="products" className="py-24 bg-slate-950 relative min-h-[800px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div 
            layout
            className="flex items-center justify-center mb-4"
          >
            <AnimatePresence mode="wait">
              {(activeCategory || activeBrand) && (
                <motion.button 
                  key="back-button"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={handleBack}
                  className="mr-4 p-3 bg-slate-900 rounded-2xl hover:bg-slate-800 transition-colors text-blue-500 border border-white/5"
                >
                  <ArrowLeft size={20} />
                </motion.button>
              )}
            </AnimatePresence>
            
            <motion.h2 
              layout
              className="text-4xl md:text-5xl font-bold text-white"
            >
              {activeBrand ? activeBrand.name : (activeCategory ? activeCategory.name : <>Explore Our <span className="text-blue-500">Marketplace</span></>)}
            </motion.h2>
          </motion.div>

          <motion.p 
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-slate-400 max-w-2xl mx-auto"
          >
            {activeBrand 
              ? `Choose the best plan for ${activeBrand.name} that fits your requirements.`
              : (activeCategory 
                ? `Browse top brands in ${activeCategory.name}.`
                : "Select a category to discover our premium digital brands and services.")
            }
          </motion.p>

          {/* Breadcrumbs */}
          <AnimatePresence>
            {(activeCategory || activeBrand) && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-6 flex items-center justify-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500"
              >
                <button onClick={() => { setActiveCategory(null); setActiveBrand(null); }} className="hover:text-blue-500 transition-colors">Marketplace</button>
                <ChevronRight size={12} />
                <button onClick={() => setActiveBrand(null)} className={`${!activeBrand ? 'text-blue-400' : 'hover:text-blue-500 transition-colors'}`}>{activeCategory?.name}</button>
                {activeBrand && (
                  <>
                    <ChevronRight size={12} />
                    <span className="text-blue-400">{activeBrand.name}</span>
                  </>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait">
          {/* Level 1: Categories */}
          {!activeCategory && (
            <motion.div 
              key="level-1-categories"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {categories.map((cat, i) => {
                const Icon = iconMap[cat.iconName];
                return (
                  <motion.button
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setActiveCategory(cat)}
                    className="relative group text-left h-full"
                  >
                    <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 rounded-[40px] blur-2xl transition-opacity"></div>
                    <div className="relative bg-slate-900/50 border border-white/5 p-10 rounded-[40px] backdrop-blur-3xl hover:border-blue-500/30 transition-all h-full flex flex-col items-center text-center">
                      <div className="w-20 h-20 bg-blue-600/10 rounded-3xl flex items-center justify-center text-blue-500 mb-6 shadow-lg shadow-blue-600/5">
                        <Icon size={40} />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{cat.name}</h3>
                      <p className="text-slate-500 text-sm leading-relaxed">{cat.description}</p>
                      <div className="mt-8 flex items-center text-blue-500 font-bold text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        Browse Brands <ChevronRight className="ml-2" size={16} />
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </motion.div>
          )}

          {/* Level 2: Brands */}
          {activeCategory && !activeBrand && (
            <motion.div 
              key="level-2-brands"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {activeCategory.brands.map((brand, i) => (
                <motion.button
                  key={brand.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setActiveBrand(brand)}
                  className="bg-slate-900/50 border border-white/5 p-8 rounded-[32px] hover:border-blue-500/30 transition-all flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center p-4 mb-6 group-hover:bg-white/10 transition-colors">
                    <img src={brand.logoUrl} alt={brand.name} className="w-full h-full object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{brand.name}</h3>
                  <p className="text-slate-500 text-xs font-medium">{brand.plans.length} Plans Available</p>
                </motion.button>
              ))}
            </motion.div>
          )}

          {/* Level 3: Plans */}
          {activeBrand && (
            <motion.div 
              key="level-3-plans"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            >
              {activeBrand.plans.map((plan) => (
                <ProductCard key={plan.id} plan={plan} brand={activeBrand} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProductGrid;

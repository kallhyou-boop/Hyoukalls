import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ExternalLink } from 'lucide-react';
import { Plan, Brand } from '../data/products';

interface ProductCardProps {
  plan: Plan;
  brand: Brand;
}

const ProductCard: React.FC<ProductCardProps> = ({ plan, brand }) => {
  const whatsappLink = `https://wa.me/628895217447?text=Hello, I want to order ${plan.name}`;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      whileHover={{ y: -10 }}
      className="bg-slate-900/50 border border-white/5 rounded-[32px] overflow-hidden backdrop-blur-sm hover:border-blue-500/30 transition-all group"
    >
      <div className="p-8">
        <div className="flex justify-between items-start mb-6">
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors">
            <img 
              src={brand.logoUrl} 
              alt={brand.name} 
              className="w-full h-full object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
          {plan.badge && (
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
              plan.badge === 'Best Seller' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' :
              plan.badge === 'Popular' ? 'bg-blue-500/10 text-blue-500 border border-blue-500/20' :
              'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20'
            }`}>
              {plan.badge}
            </span>
          )}
        </div>

        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
          {plan.name}
        </h3>
        <p className="text-slate-500 text-sm mb-6 line-clamp-2">
          {plan.description}
        </p>

        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-slate-500 text-xs uppercase tracking-widest font-semibold">Price</span>
            <span className="text-2xl font-bold text-white">{plan.price}</span>
          </div>
          
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-2xl shadow-lg shadow-blue-600/20 transition-all"
          >
            <MessageCircle size={20} />
          </motion.a>
        </div>
      </div>
      
      <div className="px-8 py-4 bg-white/5 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">{brand.name}</span>
        <button className="text-blue-400 text-xs font-bold flex items-center hover:text-blue-300">
          Details <ExternalLink size={12} className="ml-1" />
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;

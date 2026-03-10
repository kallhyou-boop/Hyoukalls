import React from 'react';
import { motion } from 'motion/react';
import { Facebook, Twitter, Instagram, Github, Send, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6 block">
              Hyoukall
            </a>
            <p className="text-slate-500 mb-8 leading-relaxed">
              Your trusted partner for premium digital services and accounts. We provide high-quality VPS, RDP, and more with instant delivery.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Github].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Products', 'Contact', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-slate-500 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Categories</h4>
            <ul className="space-y-4">
              {['VPS Hosting', 'Remote Desktop', 'Premium Apps', 'Hosting Panels', 'VCC Services'].map((item) => (
                <li key={item}>
                  <a href="#products" className="text-slate-500 hover:text-blue-400 transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MessageCircle className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-slate-500">WhatsApp: 08895217447</span>
              </li>
              <li className="flex items-start">
                <Send className="text-blue-500 mr-3 mt-1" size={18} />
                <span className="text-slate-500">Telegram: @hyoukall</span>
              </li>
              <li className="flex items-center">
                <div className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full">
                  <span className="text-blue-400 text-[10px] font-bold uppercase tracking-tighter">Trusted by 100+ customers</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>© {currentYear} Hyoukall Digital Store. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-400 transition-colors">Sitemap</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

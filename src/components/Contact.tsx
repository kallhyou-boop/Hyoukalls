import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Send, Mail, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="text-blue-500">Touch</span>
            </h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Have questions or need a custom order? Our team is ready to help you 24/7. Reach out to us through any of these channels.
            </p>

            <div className="space-y-6">
              <a 
                href="https://wa.me/628895217447" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-500 group-hover:scale-110 transition-transform">
                  <MessageCircle size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-bold text-lg">WhatsApp</h3>
                  <p className="text-slate-500">08895217447</p>
                </div>
              </a>

              <a 
                href="https://t.me/hyoukall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center p-6 bg-slate-900/50 border border-white/5 rounded-3xl hover:border-blue-500/30 transition-all group"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform">
                  <Send size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-bold text-lg">Telegram</h3>
                  <p className="text-slate-500">@hyoukall</p>
                </div>
              </a>

              <div className="flex items-center p-6 bg-slate-900/50 border border-white/5 rounded-3xl group">
                <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center text-indigo-500">
                  <Mail size={28} />
                </div>
                <div className="ml-6">
                  <h3 className="text-white font-bold text-lg">Email</h3>
                  <p className="text-slate-500">muhammadhaikalfyan@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600/10 to-indigo-600/10 border border-white/10 rounded-[40px] p-10 backdrop-blur-3xl"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Join Our Community</h3>
            <p className="text-slate-400 mb-8">
              Stay updated with our latest products, flash sales, and exclusive offers by joining our WhatsApp community group.
            </p>
            
            <div className="bg-slate-950/50 p-8 rounded-3xl border border-white/5 mb-8">
              <div className="flex items-center mb-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img 
                      key={i}
                      src={`https://picsum.photos/seed/user${i}/100/100`} 
                      className="w-10 h-10 rounded-full border-2 border-slate-900" 
                      alt="User"
                    />
                  ))}
                </div>
                <span className="ml-4 text-slate-400 text-sm font-medium">500+ members joined</span>
              </div>
              <p className="text-white font-medium mb-2 italic">"The best service I've ever used! Fast delivery and support."</p>
              <p className="text-slate-500 text-xs">- Satisfied Customer</p>
            </div>

            <motion.a
              href="https://chat.whatsapp.com/Gmfpg3TPpfm9v5lsUvKW8R?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-5 rounded-2xl font-bold text-lg flex items-center justify-center shadow-xl shadow-emerald-600/20 transition-all"
            >
              <MessageCircle className="mr-2" />
              Join WhatsApp Group
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
